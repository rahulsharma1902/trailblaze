import React, { useRef, useEffect } from 'react';
import { useFrame,useThree } from '@react-three/fiber';
import { Html, useGLTF, useScroll,ScrollControls ,Scroll} from '@react-three/drei';
import ContactForm from '../components/ContactForm';
import * as THREE from 'three';

// export function Office(props) {
  export function Office({ meshRef, ...props }) {

  const group = React.useRef();
  const { nodes, materials } = useGLTF('./models/15janlive.glb')
  const playButtonRef = useRef();
  const ref = useRef();
  const scroll = useScroll();
  const { gl } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x = scroll.offset * -17000; // Scroll effect applied here
    }
  });
  // Create a primitive mesh (e.g., a sphere) with geometry and material
  const sphere = useRef();
  useEffect(() => {
    if (sphere.current) {
      const geometry = new THREE.SphereGeometry(1, 32, 32); // radius, widthSegments, heightSegments
      const material = new THREE.MeshBasicMaterial({ color: 'red' });
      sphere.current.geometry = geometry;
      sphere.current.material = material;
    }
  }, []);



  useEffect(() => {
    if (!playButtonRef.current) return;

    const video = document.createElement('video');
    video.src = '/video.mp4';
    video.loop = true;
    video.muted = true;
    video.play();

    const videoTexture = new THREE.VideoTexture(video);
    playButtonRef.current.material = new THREE.MeshBasicMaterial({ map: videoTexture });
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
    <mesh ref={meshRef}>
{/* Primitive Sphere */}
<primitive ref={sphere} object={new THREE.Mesh()} position={[0, 2, 0]} />
      <group position={[5730.657, 286.533, 2.865]}>
        <mesh geometry={nodes.work_prev_01_0.geometry} material={materials['material-13']} />
        <mesh geometry={nodes.work_prev_02_1.geometry} material={materials['material-12']} position={[859.599, 0, 0]} />
        <mesh geometry={nodes.work_prev_03_2.geometry} material={materials['material-11']} position={[1719.197, 0, 0]} />
        <mesh geometry={nodes.work_prev_04_3.geometry} material={materials['material-10']} position={[2578.795, 0, 0]} />
        <mesh geometry={nodes.work_prev_05_4.geometry} material={materials['material-09']} position={[3438.394, 0, 0]} />
        <mesh geometry={nodes.work_prev_06_5.geometry} material={materials['material-08']} position={[4297.993, 0, 0]} />
      </group>
      <group position={[15847, 0, -458.41]} rotation={[-Math.PI / 2, 0, 0.274]} scale={215.691}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 1.329, 0]}>
            <mesh geometry={nodes.Mesh_FlagPole1_Mat_Flag_0.geometry} material={materials.Mat_Flag} />
            <mesh geometry={nodes.Mesh_FlagPole1_Mat_FlagPole_0.geometry} material={materials.Mat_FlagPole} />
          </group>
        </group>
      </group>
      <group position={[11465.542, 0, -388.42]} rotation={[-Math.PI / 2, 0, 0]} scale={5.195}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-3.883, 37.687, -1.65]} rotation={[-0.815, 0, 0]} scale={0.095}>
            <mesh geometry={nodes['ghost4_pac_&_ghost_0'].geometry} material={materials.pac__ghost} position={[-0.002, 0, 0]} />
          </group>
          <group position={[7.345, 37.744, -1.735]} rotation={[-0.815, 0, 0]} scale={0.095}>
            <group position={[0.002, 0, 0]}>
              <group position={[0.002, -0.317, 0]}>
                <mesh geometry={nodes['mouth_bott_pac_&_ghost_0'].geometry} material={materials.pac__ghost} position={[0.002, 0, 0]} />
              </group>
            </group>
            <group position={[0.002, 0, 0]}>
              <group position={[0.002, -0.317, 0]}>
                <mesh geometry={nodes['mouth_top_pac_&_ghost_0'].geometry} material={materials.pac__ghost} position={[0.002, 0, 0]} />
              </group>
            </group>
            <group position={[0.002, -0.317, 0]}>
              <mesh geometry={nodes['pacman_pac_&_ghost_0'].geometry} material={materials.pac__ghost} position={[0.002, 0, 0]} />
            </group>
          </group>
          <mesh geometry={nodes['ghost1_pac_&_ghost_0'].geometry} material={materials.pac__ghost} position={[-0.929, 37.654, -1.616]} rotation={[-0.815, 0, 0]} scale={0.095} />
          <mesh geometry={nodes['ghost2_pac_&_ghost_0'].geometry} material={materials.pac__ghost} position={[6.745, 41.929, -6.15]} rotation={[-0.815, 0, 0]} scale={0.095} />
          <mesh geometry={nodes['ghost3_pac_&_ghost_0'].geometry} material={materials.pac__ghost} position={[0.917, 37.645, -1.606]} rotation={[-0.815, 0, 0]} scale={0.095} />
          <mesh geometry={nodes.pac_man_machine_automat_0.geometry} material={materials.automat} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.scheibe_scheibe_0.geometry} material={materials.scheibe} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
      <group position={[5290.794, 58.591, -1886.18]} rotation={[-1.521, 0.007, -3.073]} scale={6.413}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-4.199, 5.247, 3.481]} rotation={[-2.832, 1.071, 2.868]} scale={[0.473, 0.282, 2.467]}>
            <mesh geometry={nodes.Object_280.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_281.geometry} material={materials.metal} />
          </group>
          <group position={[18.782, 14.141, -16.756]} scale={4.139}>
            <mesh geometry={nodes.Object_275.geometry} material={materials.White_flower_pot} />
            <mesh geometry={nodes.Object_276.geometry} material={materials.Bronze_Old} />
            <mesh geometry={nodes.Object_277.geometry} material={materials.plastic_green_mat_thin} />
            <mesh geometry={nodes.Object_278.geometry} material={materials.EA_dune_brown_G} />
          </group>
          <group position={[-7.58, -2.892, -2.392]} rotation={[-Math.PI, 1.091, -Math.PI]} scale={[59.697, 107.699, 59.697]}>
            <mesh geometry={nodes.Object_262.geometry} material={materials.metal} />
            <mesh geometry={nodes.Object_263.geometry} material={materials['Material.001']} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_258.geometry} material={materials.ME_Bronze_old_tarn_G} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_256.geometry} material={materials.material_0} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_254.geometry} material={materials.material_0} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_252.geometry} material={materials.ME_basic_fleck_paint} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_250.geometry} material={materials.material_0} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_248.geometry} material={materials.ME_basic_copper_oxidized} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_246.geometry} material={materials.material_0} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[-16.903, -8.24, 16.189]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_244.geometry} material={materials.Default_OBJ} position={[-0.004, -0.001, 0]} />
          </group>
          <group position={[-16.903, -8.24, 16.189]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_242.geometry} material={materials.Default_OBJ} position={[-0.004, -0.001, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_240.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.903, -8.24, 16.189]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_238.geometry} material={materials.Default_OBJ} position={[-0.004, -0.001, 0]} />
          </group>
          <group position={[-16.903, -8.24, 16.189]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_236.geometry} material={materials.Default_OBJ} position={[-0.004, -0.001, 0]} />
          </group>
          <group position={[-16.1, -8.24, -25.059]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_234.geometry} material={materials.Car_Paint_Improved} position={[-0.002, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, -25.059]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_232.geometry} material={materials['EA_dune_brown_G.001']} position={[-0.002, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, -25.059]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_230.geometry} material={materials['EA_dune_brown_G.001']} position={[-0.002, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_228.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_226.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_224.geometry} material={materials.GL_depth_absorbsion_02_G} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_222.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_220.geometry} material={materials.Generic_Glossy_Shader} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_218.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_216.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_214.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_212.geometry} material={materials.LI_dist_single_neg_cracks_G} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_210.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_208.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_206.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_204.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_202.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, -25.059]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_200.geometry} material={materials.Default_OBJ} position={[-0.002, 0, 0]} />
          </group>
          <group position={[-16.1, -7.864, -25.059]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_198.geometry} material={materials.material_0} position={[0, -0.001, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_196.geometry} material={materials.GL_basic_black_hole_center} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_194.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_192.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_190.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_188.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_186.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_184.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_182.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_180.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_178.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_176.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_174.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_172.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_170.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_168.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_166.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_164.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_162.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_160.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_158.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_156.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_154.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_152.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_150.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_148.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_146.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_144.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_142.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_140.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_138.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_136.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_134.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_132.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_130.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_128.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_126.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_124.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_122.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_120.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_118.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_116.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_114.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_112.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_110.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_108.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_106.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_104.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_102.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_100.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_98.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_96.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_94.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_92.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_90.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_88.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_86.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_84.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_82.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_80.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_78.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_76.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_74.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_72.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_70.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_68.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_66.geometry} material={materials.Basic_Matte_Metal} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_64.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_62.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_60.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_58.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_56.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_54.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_52.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_50.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_48.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_46.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_44.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_42.geometry} material={materials.GL_basic_black_hole_center} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_40.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_38.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[-16.1, -8.24, 17.794]} rotation={[Math.PI / 2, 0, -3.133]} scale={0.029}>
            <mesh geometry={nodes.Object_36.geometry} material={materials.Default_OBJ} position={[-0.001, 0, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_34.geometry} material={materials.MI_fur} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_32.geometry} material={materials.material_0} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_30.geometry} material={materials.material_0} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_28.geometry} material={materials.MI_voronoi_greeble} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_26.geometry} material={materials.material_0} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_24.geometry} material={materials.ME_worn_red_meigo_G} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_22.geometry} material={materials.Default_OBJ} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_20.geometry} material={materials.Default_OBJ} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_18.geometry} material={materials.Default_OBJ} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_16.geometry} material={materials.Default_OBJ} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_14.geometry} material={materials.material_0} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_12.geometry} material={materials['Material.008']} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_10001.geometry} material={materials.material_0} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[32.307, -5.147, -34.557]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
            <mesh geometry={nodes.Object_8.geometry} material={materials.Default_OBJ} position={[0.001, 0.002, 0]} />
          </group>
          <group position={[11.199, 13.481, -35.505]} scale={5.528}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.Orange_flower_pot} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.Bronze_Old} />
            <mesh geometry={nodes.Object_6.geometry} material={materials.Woll_green} />
          </group>
          <mesh geometry={nodes.Object_273.geometry} material={materials['EA_dune_brown_G.002']} position={[14.104, 12.764, -0.236]} scale={[9.834, 0.702, 39.334]} />
          <mesh geometry={nodes.Object_271.geometry} material={materials.material_0} position={[14.104, 2.288, -0.236]} scale={[8.429, 9.834, 37.93]} />
          <mesh geometry={nodes.Object_269.geometry} material={materials.Lead} position={[22.786, -6.842, -0.236]} scale={[0.702, 0.281, 42.144]} />
          <mesh geometry={nodes.Object_267.geometry} material={materials['Material.005']} position={[14.104, 12.764, -0.236]} scale={[9.834, 0.702, 39.334]} />
          <mesh geometry={nodes.Object_265.geometry} material={materials['Material.002']} position={[-12.927, 21.536, 0.29]} rotation={[-Math.PI, 1.091, -Math.PI]} scale={[-6.815, -2.584, -0.943]} />
          <mesh geometry={nodes.Object_260.geometry} material={materials.metal} position={[-10.575, 16.13, 5.858]} rotation={[-1.468, -0.338, -0.562]} scale={0.462} />
        </group>
      </group>
      <mesh geometry={nodes.contact_form_fitback.geometry} material={nodes.contact_form_fitback.material} position={[17355.436, 268.059, 0.029]} />
      <mesh geometry={nodes.about_text_block.geometry} material={nodes.about_text_block.material} position={[1715.285, 279.178, 0.029]} />
      <mesh geometry={nodes.crown_sugn_our_service.geometry} material={nodes.crown_sugn_our_service.material} position={[12035.32, 385.325, 0.029]} />
      <mesh geometry={nodes.hello_sign_contact.geometry} material={nodes.hello_sign_contact.material} position={[17046.137, 401.206, 0.029]} />
      <mesh geometry={nodes.omg_sign.geometry} material={nodes.omg_sign.material} position={[4320.142, 389.936, 0.029]} />
      <mesh geometry={nodes.Play_button.geometry} material={nodes.Play_button.material} position={[2864.844, 275.825, -115.224]} />
      <mesh geometry={nodes.portfolio_text_01.geometry} material={nodes.portfolio_text_01.material} position={[6151.875, 287.038, 0.029]} />
      <mesh geometry={nodes.portfolio_text_02.geometry} material={nodes.portfolio_text_02.material} position={[7004.646, 287.038, 0.029]} />
      <mesh geometry={nodes.portfolio_text_03.geometry} material={nodes.portfolio_text_03.material} position={[7858.798, 287.038, 0.029]} />
      <mesh geometry={nodes.portfolio_text_04.geometry} material={nodes.portfolio_text_04.material} position={[8730.079, 287.038, 0.029]} />
      <mesh geometry={nodes.portfolio_text_05.geometry} material={nodes.portfolio_text_05.material} position={[9580.784, 287.038, 0.029]} />
      <mesh geometry={nodes.portfolio_text_06.geometry} material={nodes.portfolio_text_06.material} position={[10447.699, 287.038, 0.029]} />
      <mesh geometry={nodes.screen_showreel.geometry} material={materials['material-04']} position={[2865.328, 286.533, -343.839]} />
      <mesh geometry={nodes.services_text_block.geometry} material={nodes.services_text_block.material} position={[14004.598, 252.46, 0.029]} />
      <group position={[3133.68, 0, 0]}>
        <mesh geometry={nodes.Mesh075.geometry} material={materials.Tex_01} />
        <mesh geometry={nodes.Mesh075_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Mesh075_2.geometry} material={materials['Material.003']} />
      </group>
      <mesh geometry={nodes.FloorMirror.geometry} material={materials.Tex_02} position={[3133.68, 0.821, 0]} />
      <mesh geometry={nodes.Tex_02_011.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} />
      <mesh geometry={nodes.Tex_02_001.geometry} material={materials.Tex_02} position={[16245.512, 64.865, -444.386]} />
      <mesh geometry={nodes.Tex_02_003.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} />
      <mesh geometry={nodes.Tex_02_004.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} />
      <mesh geometry={nodes.Tex_02_007.geometry} material={materials.Tex_02} position={[2347.418, 0, -4526.008]} />
      <mesh geometry={nodes.Tex_02_010.geometry} material={materials.Tex_02} position={[16045.978, 0, -85.961]} />
      <mesh geometry={nodes.Tex_02_012.geometry} material={materials.Tex_02} position={[11605.813, 126, -479.078]} />
      <mesh geometry={nodes.Tex_02_013.geometry} material={materials.Tex_02} position={[1081.763, 0.233, -483.224]} />
      <mesh geometry={nodes.Tex_02_014.geometry} material={materials.Tex_02} position={[16045.978, 0, -85.961]} />
      <mesh geometry={nodes.Tex_02_015.geometry} material={materials.Tex_02} position={[11636.431, 0.8, -348.8]} />
      <mesh geometry={nodes.Tex_02_016.geometry} material={materials.Tex_02} position={[11636.431, 0.8, -348.8]} />
      <mesh geometry={nodes.Tex_02_017.geometry} material={materials.Tex_02} position={[11664.611, 62.413, -470.158]} />
      <mesh geometry={nodes.Tex_02_018.geometry} material={materials.Tex_02} position={[4642.812, 57.755, -441.286]} />
      <mesh geometry={nodes.Tex_02_019.geometry} material={materials.Tex_02} position={[1082.439, 21.396, -479.564]} />
      <mesh geometry={nodes.Planet_Rotation.geometry} material={materials.Tex_02} position={[16045.839, 286.533, -85.96]} />
      <mesh geometry={nodes.Tex_02_002001.geometry} material={materials.Tex_02} position={[2402.937, 33.262, -189.113]} />
      <mesh geometry={nodes.Tex_02_017001.geometry} material={materials.Tex_02} position={[11664.611, 62.413, -470.158]} />
      <mesh geometry={nodes.Tex_03.geometry} material={materials.Tex_03} scale={821.018} />
      <mesh geometry={nodes.Text_Var_01.geometry} material={materials.Tex_03} scale={821.018} />
      <mesh geometry={nodes.Mesh_0.geometry} material={materials.Material_0} position={[11263.217, 117.592, -381.476]} scale={124.729} />
      </mesh>

    </group>
  )
}

useGLTF.preload('./models/15janlive.glb')
