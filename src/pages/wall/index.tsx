import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Environment } from '@react-three/drei';
import React, { useRef, useEffect, useState, Suspense, useCallback } from 'react';
import gsap from 'gsap';
import LoadingScreen from '@/pages/components/Loading'; 
import { Office } from './Aaron-transformed';
import * as THREE from 'three'; // Importing THREE to reference types

export default function GapsPage() {
  const modelRef = useRef<THREE.Group>(null); // Typing modelRef as THREE.Group
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null); // Typing cameraRef
  const isDraggingRef = useRef(false);
  const startPosRef = useRef(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [boundaries, setBoundaries] = useState({ minX: -17200, maxX: 0 });

  const updateViewMode = useCallback(() => {
    const isMobile = window.innerWidth <= 768;
    setIsMobileView(isMobile);
    setBoundaries(isMobile ? { minX: -17790, maxX: 200 } : { minX: -17200, maxX: 0 });
  }, []);

  useEffect(() => {
    updateViewMode();
    window.addEventListener('resize', updateViewMode);
    return () => window.removeEventListener('resize', updateViewMode);
  }, [updateViewMode]);

  const moveModel = useCallback(
    (delta: number) => {
      if (modelRef.current) {
        const targetPositionX = modelRef.current.position.x + delta;
        const clampedX = Math.max(boundaries.minX, Math.min(boundaries.maxX, targetPositionX));

        gsap.to(modelRef.current.position, {
          x: clampedX,
          duration: 0.9,
          ease: 'power1.out',
        });
      }
    },
    [boundaries]
  );

  const handleTouchStart = useCallback(
    (e: TouchEvent) => { // Explicitly typing event as TouchEvent
      if (isMobileView && e.touches.length === 1) {
        isDraggingRef.current = true;
        startPosRef.current = e.touches[0].clientY;
      }
    },
    [isMobileView]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => { // Explicitly typing event as TouchEvent
      if (isMobileView && isDraggingRef.current) {
        const deltaY = e.touches[0].clientY - startPosRef.current;
        moveModel(deltaY * (500 / 100));
        startPosRef.current = e.touches[0].clientY;
      }
    },
    [isMobileView, moveModel]
  );

  const handleTouchEnd = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  const handleMouseDown = useCallback(
    (e: MouseEvent) => { // Explicitly typing event as MouseEvent
      if (!isMobileView) {
        isDraggingRef.current = true;
        startPosRef.current = e.clientX;
      }
    },
    [isMobileView]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => { // Explicitly typing event as MouseEvent
      if (!isMobileView && isDraggingRef.current) {
        const deltaX = e.clientX - startPosRef.current;
        moveModel(deltaX * (500 / 100));
        startPosRef.current = e.clientX;
      }
    },
    [isMobileView, moveModel]
  );

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  const handleWheel = useCallback(
    (e: WheelEvent) => { // Explicitly typing event as WheelEvent
      if (!isMobileView) {
        moveModel(e.deltaY * (500 / 100));
      }
    },
    [isMobileView, moveModel]
  );

  useEffect(() => {
    if (isMobileView) {
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    } else {
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (isMobileView) {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      } else {
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('wheel', handleWheel);
      }
    };
  }, [
    isMobileView,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleWheel,
  ]);

  return (
    <div style={{ width: '100vw', height: '170vh', overflow: 'hidden', position: 'relative' }}>
      <Suspense fallback={<LoadingScreen />}>
        <Canvas style={{ background: 'black' }}>
	  <ambientLight intensity={0.5}/>
          <Environment preset="sunset" background={false} />
          <PerspectiveCamera
            ref={cameraRef} // Camera reference now correctly typed
            makeDefault
            position={[0, 300, 1800]}
            fov={40}
            near={0.9}
            far={10000}
          />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <group ref={modelRef}>
            <Office />
          </group>
        </Canvas>
      </Suspense>
    </div>
  );
}
