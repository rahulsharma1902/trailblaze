import { Suspense, useEffect, useRef, useState} from 'react';
import { Canvas,useThree,useFrame } from '@react-three/fiber';
import { Environment,OrbitControls, Preload, ScrollControls, useAnimations, useGLTF,PerspectiveCamera, Stage } from '@react-three/drei';
import { DirectionalLight } from 'three';
import { useScroll } from '@react-three/drei';
import { Model } from './wall/Live';

import LoadingScreen from './components/Loading';



const Newmodel = ({...props}) => {
  const computer = useGLTF('./models/16finalLiveFile2.glb');
  const { camera } = useThree();
  const ref = useRef();
 // const ref = useRef()
  const scroll = useScroll()
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/16finalLiveFile2.glb')
  const { actions } = useAnimations(animations, group)

  //resizing function
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
  }, [windowHeight, windowWidth]);

  
  useFrame(() => {
    /* camera.lookAt(0, 280, 100);
    ref.current.position.x = scroll.offset * -17000; */

    if (windowWidth < 600) {
      camera.lookAt(-500, 280, 100);
      ref.current.position.x = scroll.offset * -18000;
      camera.position.set(-500, 280, 1770);
    }
    else{
      camera.lookAt(0, 280, 100);
      ref.current.position.x = scroll.offset * -17000;
      camera.position.set(0, 280, 1670);
    }
    
  });

  
  return (
    <mesh ref={ref}>
       <Model/>
    </mesh> 
  
  )
}

useGLTF.preload('./models/16finalLiveFile2.glb')

const ModelCanvas = () => {
 
    const ref = useRef();
  return (
    <>
    <style>
      {`
        div {
          -ms-overflow-style: none; /* Hides scrollbar for IE and Edge */
          scrollbar-width: none; /* Hides scrollbar for Firefox */
           -webkit-overflow-scrolling: touch;
        touch-action: touch !important;
        }
         canvas {
  touch-action: pan-x !important; /* Disables default touch actions like zoom or scroll */
}

      `}
    </style>
 
  <Canvas style={{ width: "100%", height: "100vh" }}
  camera={{ near: 0.1, far: 80000.0,  /* position: [0, 280, 1670], */ fov: 25  }} >
    <ambientLight intensity={1} />
    <directionalLight intensity={1} position={[10, 10, 10]} />
    <Environment preset="night" background={false} />

    <ScrollControls  hideScrollbar={true} pages={5} distance={1} damping={0.5}>
        <Newmodel/>
     </ScrollControls>
  </Canvas>
  </>
  )
}

export default ModelCanvas