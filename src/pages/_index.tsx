import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Environment } from '@react-three/drei';
import React, { useRef, useEffect, useState, Suspense, useCallback } from 'react';
import gsap from 'gsap';
import LoadingScreen from './components/Loading'; 
import { Office } from './wall/Live';
import * as THREE from 'three'; // Importing THREE to reference types
import { throttle } from 'lodash'; // Import throttle for scroll optimization

export default function GapsPage() {
  const modelRef = useRef<THREE.Group>(null); // Typing modelRef as THREE.Group
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null); // Typing cameraRef
  const isDraggingRef = useRef(false);
  const startPosRef = useRef(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [boundaries, setBoundaries] = useState({ minX: -17200, maxX: 0 });

  // Update the view mode (mobile or desktop) on resize
  const updateViewMode = useCallback(() => {
    const isMobile = window.innerWidth <= 768;
    setIsMobileView(isMobile);
    // setBoundaries(
    //   isMobile ? { minX: -30000, maxX: 2000 } : { minX: -17200, maxX: 0 } // Increased range for mobile
      
    // );
    setBoundaries(isMobile ? { minX: -17790, maxX: 200 } : { minX: -17200, maxX: 0 });

  }, []);
  

  useEffect(() => {
    updateViewMode();
    window.addEventListener('resize', updateViewMode);
    return () => window.removeEventListener('resize', updateViewMode);
  }, [updateViewMode]);

  // Optimized moveModel function with GSAP animation
  // const moveModel = useCallback(
  //   (delta: number) => {
  //     if (modelRef.current) {
  //       const targetX = modelRef.current.position.x + delta;
  //       const clampedX = Math.max(boundaries.minX, Math.min(boundaries.maxX, targetX));
  //       if (modelRef.current.position.x !== clampedX) {
  //         gsap.to(modelRef.current.position, {
  //           x: clampedX,
  //           duration: 0.5, // Reduce duration
  //           ease: 'power1.out',
  //         });
  //       }
  //     }
  //   },
  //   [boundaries]
  // );
  
  const moveModel = useCallback(
    (delta: number) => {
      if (modelRef.current) {
        const targetX = modelRef.current.position.x + delta;
        const clampedX = Math.max(boundaries.minX, Math.min(boundaries.maxX, targetX));
        if (modelRef.current.position.x !== clampedX) {
          gsap.to(modelRef.current.position, {
            x: clampedX,
            duration: 3.0, // Longer duration for smoother transition
            ease: "power3.out", // Smoother easing curve
          });
        }
      }
    },
    [boundaries]
  );
  
  // Throttled wheel scroll handler for better performance
  const handleWheel = useCallback(
    throttle((e: WheelEvent) => {
      if (!isMobileView) {
        moveModel(e.deltaY * (500 / 100));
      }
    }, 100),
    [isMobileView, moveModel]
  );

  // Throttled touchmove handler for mobile performance
  const handleTouchMove = useCallback(
    throttle((e: TouchEvent) => {
      if (isDraggingRef.current && isMobileView) {
        const deltaY = e.touches[0].clientY - startPosRef.current;
        if (Math.abs(deltaY) > 1) { // Lower threshold for more responsiveness
          moveModel(deltaY * 19); // Increased multiplier for more movement
          startPosRef.current = e.touches[0].clientY;
        }
      }
    }, 50), // Lower throttle delay for smoother updates
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

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isMobileView && isDraggingRef.current) {
        const deltaX = e.clientX - startPosRef.current;
        moveModel(deltaX * (100 / 100));
        startPosRef.current = e.clientX;
      }
    },
    [isMobileView, moveModel]
  );

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

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
        <Canvas >
        {/* <Canvas shadows={false} gl={{ antialias: false }}> */}
        {/* <Canvas
          gl={{
            antialias: true,
            powerPreference: 'high-performance',
            toneMapping: THREE.LinearToneMapping,
          }}
          camera={{ fov: 50, position: [0, 400, 1500] }}
          dpr={[1, 1.5]} // Restrict DPR for performance
        > */}

      {/* 
        <Canvas
          gl={{
            antialias: true,
            toneMapping: THREE.LinearToneMapping,
          }}
          dpr={[1, 2]} // Adjust device pixel ratio for better performance
        > */}

        {/* <Canvas gl={{ toneMapping: THREE.LinearToneMapping }}> */}
          {/* <ambientLight 
            intensity={0.3} 
            color={new THREE.Color('#ffffff')} 
          />
           <directionalLight 
            intensity={2.5} 
            position={[10, 10, 10]} 
          /> */}
          <ambientLight intensity={0.5} />
          <directionalLight intensity={1} position={[10, 10, 10]} />

          <Environment preset="city" background={false} />
          <PerspectiveCamera
            ref={cameraRef} // Camera reference now correctly typed
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
      {/* <Suspense fallback={<LoadingScreen />}>
        <Canvas shadows={false} gl={{ antialias: false }}>
          <ambientLight intensity={0.5} />
            <directionalLight intensity={1} position={[10, 10, 10]} />

                      <Environment preset="city" background={false} />
                      <PerspectiveCamera
                        ref={cameraRef} // Camera reference now correctly typed
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
      </Suspense> */}
    </div>
  );
}
