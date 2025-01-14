import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Environment } from '@react-three/drei';
import React, { useRef, useEffect, useState, Suspense, useCallback } from 'react';
import gsap from 'gsap';
import LoadingScreen from './components/Loading'; 
import { Office } from './wall/Live';
import { throttle } from 'lodash';

export default function GapsPage() {
  const modelRef = useRef<THREE.Group>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const isDraggingRef = useRef(false);
  const startPosRef = useRef(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [boundaries, setBoundaries] = useState({ minX: -17200, maxX: 0 });

  // Update view mode and boundaries based on screen size
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

  // Move the model with clamped boundaries and smooth animation
  const moveModel = useCallback(
    (delta: number) => {
      if (modelRef.current) {
        const targetX = modelRef.current.position.x + delta;
        const clampedX = Math.max(boundaries.minX, Math.min(boundaries.maxX, targetX));
        gsap.to(modelRef.current.position, {
          x: clampedX,
          duration: 0.5, // Reduced duration for faster response
          ease: 'power3.out', // Slightly stronger ease for smoother stopping
          overwrite: false, // Ensure animations do not stack
        });
      }
    },
    [boundaries]
  );
  
  const handleWheel = useCallback(
    throttle((e: WheelEvent) => {
      if (!isMobileView) {
        const delta = Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), 500); // Limit max delta for smoother control
        moveModel(delta);
      }
    }, 50), // Reduced throttle for better responsiveness
    [isMobileView, moveModel]
  );
  
  const handleTouchMove = useCallback(
    throttle((e: TouchEvent) => {
      if (isDraggingRef.current && isMobileView) {
        const deltaY = e.touches[0].clientY - startPosRef.current;
        moveModel(deltaY * 4); // Adjusted multiplier for smoother scrolling
        startPosRef.current = e.touches[0].clientY;
      }
    }, 30),
    [isMobileView, moveModel]
  );
  
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isMobileView && isDraggingRef.current) {
        const deltaX = e.clientX - startPosRef.current;
        moveModel(deltaX * 5); // Adjusted multiplier for smoother interaction
        startPosRef.current = e.clientX;
      }
    },
    [isMobileView, moveModel]
  );
  
  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (isMobileView && e.touches.length === 1) {
        isDraggingRef.current = true;
        startPosRef.current = e.touches[0].clientY;
      }
    },
    [isMobileView]
  );

  const handleTouchEnd = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      if (!isMobileView) {
        isDraggingRef.current = true;
        startPosRef.current = e.clientX;
      }
    },
    [isMobileView]
  );

  // const handleMouseMove = useCallback(
  //   (e: MouseEvent) => {
  //     if (!isMobileView && isDraggingRef.current) {
  //       const deltaX = e.clientX - startPosRef.current;
  //       moveModel(deltaX * 6);  // Reduced multiplier for smoother mouse movement
  //       startPosRef.current = e.clientX;
  //     }
  //   },
  //   [isMobileView, moveModel]
  // );

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  // Event listeners for input interactions
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
    <div
      className="v-scrollbar-parent rkc-page-scroll-scrollbar-parent"
      style={{ width: '100vw', height: '170vh', overflow: 'hidden', position: 'relative' }}
    >
      <Suspense fallback={<LoadingScreen />}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight intensity={1} position={[10, 10, 10]} />
          <Environment preset="city" background={false} />
          <PerspectiveCamera
            ref={cameraRef}
            makeDefault
            position={[0, 400, 1500]}
            fov={50}
            near={0.9}
            far={10000}
          />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <group ref={modelRef} frustumCulled={true}>
            <Office />
          </group>
        </Canvas>
      </Suspense>
    </div>
  );
}
