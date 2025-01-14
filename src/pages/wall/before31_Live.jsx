// import React, { useRef, useState, useEffect } from 'react';
import React, { useRef, useEffect } from 'react';
import { Html, useGLTF } from '@react-three/drei';
// import VideoModal from '../components/VideoPopUp';
import ContactForm from '../components/ContactForm';
// import { Modal, Box } from '@mui/material';
import * as THREE from 'three';

export function Office(props) {
  const group = React.useRef()
  const { nodes, materials } = useGLTF('./models/wfhblend1.glb')

  const playButtonRef = useRef();

  // const [isModalOpen, setModalOpen] = useState(false);
  // const [videoSrc, setVideoSrc] = useState('');

  const handlePlayButtonClick = () => {
    setModalOpen(true); // Open the modal
  };

  // Function to handle modal close
  // const handleModalClose = () => {
  //   setModalOpen(false); // Close the modal
  // };

  useEffect(() => {
    if (!playButtonRef.current) return;

    const video = document.createElement('video');
    video.src = './video.mp4';
    video.loop = true;
    video.muted = true;
    video.play();

    const videoTexture = new THREE.VideoTexture(video);
    playButtonRef.current.material = new THREE.MeshBasicMaterial({ map: videoTexture });
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Radial_Empty001" />
        <group name="works_prev" position={[5730.657, 286.533, 2.865]}>
          <mesh name="work_prev_01_0" geometry={nodes.work_prev_01_0.geometry} material={materials['material-13']} />
          <mesh name="work_prev_02_1" geometry={nodes.work_prev_02_1.geometry} material={materials['material-12']} position={[859.599, 0, 0]} />
          <mesh name="work_prev_03_2" geometry={nodes.work_prev_03_2.geometry} material={materials['material-11']} position={[1719.197, 0, 0]} />
          <mesh name="work_prev_04_3" geometry={nodes.work_prev_04_3.geometry} material={materials['material-10']} position={[2578.795, 0, 0]} />
          <mesh name="work_prev_05_4" geometry={nodes.work_prev_05_4.geometry} material={materials['material-09']} position={[3438.394, 0, 0]} />
          <mesh name="work_prev_06_5" geometry={nodes.work_prev_06_5.geometry} material={materials['material-08']} position={[4297.993, 0, 0]} />
        </group>
        <group name="Collada_visual_scene_group">
          <group name="Circle">
            <mesh name="Material_002-material" geometry={nodes['Material_002-material'].geometry} material={materials['Material.009']} />
            <mesh name="Material_003-material002" geometry={nodes['Material_003-material002'].geometry} material={materials['Material.010']} />
            <mesh name="Material_003-material003" geometry={nodes['Material_003-material003'].geometry} material={materials['Material.010']} />
          </group>
        </group>
        <group name="Sketchfab_model001" position={[11326.109, -1.963, -301.211]} rotation={[-Math.PI / 2, 0, 0]} scale={[9.862, 8.02, 6.154]}>
          <group name="ad72bb6817744cbea1b39b136ec1313cfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="pac_man_machine" rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh name="pac_man_machine_automat_0" geometry={nodes.pac_man_machine_automat_0.geometry} material={materials.automat} position={[12.181, 14.542, -0.534]} scale={[0.627, 1, 0.828]} />
                </group>
                <group name="scheibe" rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh name="scheibe_scheibe_0" geometry={nodes.scheibe_scheibe_0.geometry} material={materials.scheibe} position={[12.181, 14.542, -0.534]} />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="mouth_bott" />
        <group name="mouth_top" />
        <group name="28180fb1ec9a44a1b6262a52a443f630fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="RootNode001">
            <group name="Mesh_FlagPole1" position={[0, 1.329, 0]} />
          </group>
        </group>
        <group name="Sketchfab_model002" position={[15844.34, 89.114, -459.624]} rotation={[-Math.PI / 2, 0, 0]} scale={[113.37, 109.41, 172.61]}>
          <group name="28180fb1ec9a44a1b6262a52a443f630fbx001" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode002" position={[0.001, 0, 0]}>
              <group name="Mesh_FlagPole1001" position={[0.001, 1.329, 0]}>
                <mesh name="Mesh_FlagPole1_Mat_Flag_0001" geometry={nodes.Mesh_FlagPole1_Mat_Flag_0001.geometry} material={materials['Mat_Flag.001']} position={[0.001, 0, 0]} scale={[1.259, 1, 1]} />
                <mesh name="Mesh_FlagPole1_Mat_FlagPole_0001" geometry={nodes.Mesh_FlagPole1_Mat_FlagPole_0001.geometry} material={materials['Mat_FlagPole.001']} position={[0.001, 0, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model" position={[11124.92, 30.498, 201.991]} rotation={[-1.543, -0.02, 0]} scale={[31.203, 30.25, 15.609]}>
          <group name="pinballMachineobjcleanermaterialmergergles">
            <mesh name="Object_2001" geometry={nodes.Object_2001.geometry} material={materials.palette} position={[2.966, 17.642, -3.362]} rotation={[0.017, 0, 0]} scale={[0.934, 1, 1]} />
          </group>
        </group>
        <mesh name="Main_Room" geometry={nodes.Main_Room.geometry} material={materials['Material.028']} />
        <mesh name="2nd_room" geometry={nodes['2nd_room'].geometry} material={materials['Material.002']} />
        <mesh name="Concrete" geometry={nodes.Concrete.geometry} material={materials['Material.047']} />
        <mesh name="Room_Frame" geometry={nodes.Room_Frame.geometry} material={materials['Material.032']} />
        <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials['Material.047']} />
        <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials['Material.047']} />
        <group name="Plane">
          <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={materials['Material.029']} />
          <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={materials['Material.033']} />
        </group>
        <mesh name="Table" geometry={nodes.Table.geometry} material={materials['Material.027']} />
        <group name="Mac">
          <mesh name="Plane024_1" geometry={nodes.Plane024_1.geometry} material={materials['Material.021']} />
          <mesh name="Plane024_2" geometry={nodes.Plane024_2.geometry} material={materials['Material.022']} />
          <mesh name="Plane024_3" geometry={nodes.Plane024_3.geometry} material={materials['Material.023']} />
          <group name="Plane002_SurfaceDrawing" />
        </group>
        <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials['Material.020']} />
        <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={nodes.Plane002.material} />
        <group name="Mac001">
          <mesh name="Plane030_1" geometry={nodes.Plane030_1.geometry} material={materials['Material.021']} />
          <mesh name="Plane030_2" geometry={nodes.Plane030_2.geometry} material={materials['Material.022']} />
          <mesh name="Plane030_3" geometry={nodes.Plane030_3.geometry} material={materials['Material.023']} />
        </group>
        <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={materials['Material.020']} />
        <mesh name="Plane004" geometry={nodes.Plane004.geometry} material={nodes.Plane004.material} />
        <group name="Mac002">
          <mesh name="Plane033_1" geometry={nodes.Plane033_1.geometry} material={materials['Material.021']} />
          <mesh name="Plane033_2" geometry={nodes.Plane033_2.geometry} material={materials['Material.022']} />
          <mesh name="Plane033_3" geometry={nodes.Plane033_3.geometry} material={materials['Material.023']} />
        </group>
        <mesh name="Plane005" geometry={nodes.Plane005.geometry} material={materials['Material.020']} />
        <mesh name="Plane006" geometry={nodes.Plane006.geometry} material={nodes.Plane006.material} />
        <group name="Mac003">
          <mesh name="Plane002_1" geometry={nodes.Plane002_1.geometry} material={materials['Material.021']} />
          <mesh name="Plane002_2" geometry={nodes.Plane002_2.geometry} material={materials['Material.022']} />
          <mesh name="Plane002_3" geometry={nodes.Plane002_3.geometry} material={materials['Material.023']} />
        </group>
        <mesh name="Plane007" geometry={nodes.Plane007.geometry} material={materials['Material.020']} />
        <mesh name="Plane008" geometry={nodes.Plane008.geometry} material={nodes.Plane008.material} />
        <mesh name="Plane009" geometry={nodes.Plane009.geometry} material={nodes.Plane009.material} />
        <mesh name="Table001" geometry={nodes.Table001.geometry} material={nodes.Table001.material} />
        <mesh name="Mac004" geometry={nodes.Mac004.geometry} material={nodes.Mac004.material} />
        <mesh name="Plane010" geometry={nodes.Plane010.geometry} material={nodes.Plane010.material} />
        <mesh name="Plane011" geometry={nodes.Plane011.geometry} material={nodes.Plane011.material} />
        <mesh name="Mac005" geometry={nodes.Mac005.geometry} material={nodes.Mac005.material} />
        <mesh name="Plane012" geometry={nodes.Plane012.geometry} material={nodes.Plane012.material} />
        <mesh name="Plane013" geometry={nodes.Plane013.geometry} material={nodes.Plane013.material} />
        <mesh name="Mac006" geometry={nodes.Mac006.geometry} material={nodes.Mac006.material} />
        <mesh name="Plane014" geometry={nodes.Plane014.geometry} material={nodes.Plane014.material} />
        <mesh name="Plane015" geometry={nodes.Plane015.geometry} material={nodes.Plane015.material} />
        <mesh name="Mac007" geometry={nodes.Mac007.geometry} material={nodes.Mac007.material} />
        <mesh name="Plane016" geometry={nodes.Plane016.geometry} material={nodes.Plane016.material} />
        <mesh name="Plane017" geometry={nodes.Plane017.geometry} material={nodes.Plane017.material} />
        <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials['Material.016']} />
        <mesh name="Mac008" geometry={nodes.Mac008.geometry} material={materials['Material.026']} />
        <mesh name="Mac009" geometry={nodes.Mac009.geometry} material={materials['Material.026']} />
        <mesh name="Plane033" geometry={nodes.Plane033.geometry} material={materials['Material.038']} />
        <group name="Plane034">
          <mesh name="Plane048_1" geometry={nodes.Plane048_1.geometry} material={materials['Material.041']} />
          <mesh name="Plane048_2" geometry={nodes.Plane048_2.geometry} material={materials['Material.042']} />
        </group>
        <mesh name="Plane018_Curve001" geometry={nodes.Plane018_Curve001.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve002" geometry={nodes.Plane018_Curve002.geometry} material={materials['Material.039']} />
        <mesh name="Plane035" geometry={nodes.Plane035.geometry} material={materials['Material.040']} />
        <mesh name="Plane038" geometry={nodes.Plane038.geometry} material={materials['Material.038']} />
        <group name="Plane039">
          <mesh name="Plane051_1" geometry={nodes.Plane051_1.geometry} material={materials['Material.041']} />
          <mesh name="Plane051_2" geometry={nodes.Plane051_2.geometry} material={materials['Material.042']} />
        </group>
        <mesh name="Plane018_Curve003" geometry={nodes.Plane018_Curve003.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve004" geometry={nodes.Plane018_Curve004.geometry} material={materials['Material.039']} />
        <mesh name="Plane040" geometry={nodes.Plane040.geometry} material={materials['Material.040']} />
        <mesh name="Plane043" geometry={nodes.Plane043.geometry} material={materials['Material.038']} />
        <group name="Plane044">
          <mesh name="Plane054_1" geometry={nodes.Plane054_1.geometry} material={materials['Material.041']} />
          <mesh name="Plane054_2" geometry={nodes.Plane054_2.geometry} material={materials['Material.042']} />
        </group>
        <mesh name="Plane018_Curve005" geometry={nodes.Plane018_Curve005.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve006" geometry={nodes.Plane018_Curve006.geometry} material={materials['Material.039']} />
        <mesh name="Plane045" geometry={nodes.Plane045.geometry} material={materials['Material.040']} />
        <mesh name="Plane048" geometry={nodes.Plane048.geometry} material={materials['Material.038']} />
        <group name="Plane049">
          <mesh name="Plane057_1" geometry={nodes.Plane057_1.geometry} material={materials['Material.041']} />
          <mesh name="Plane057_2" geometry={nodes.Plane057_2.geometry} material={materials['Material.042']} />
        </group>
        <mesh name="Plane018_Curve007" geometry={nodes.Plane018_Curve007.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve008" geometry={nodes.Plane018_Curve008.geometry} material={materials['Material.039']} />
        <mesh name="Plane050" geometry={nodes.Plane050.geometry} material={materials['Material.040']} />
        <mesh name="Plane053" geometry={nodes.Plane053.geometry} material={materials['Material.038']} />
        <group name="Plane054">
          <mesh name="Plane060_1" geometry={nodes.Plane060_1.geometry} material={materials['Material.041']} />
          <mesh name="Plane060_2" geometry={nodes.Plane060_2.geometry} material={materials['Material.042']} />
        </group>
        <mesh name="Plane018_Curve009" geometry={nodes.Plane018_Curve009.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve010" geometry={nodes.Plane018_Curve010.geometry} material={materials['Material.039']} />
        <mesh name="Plane055" geometry={nodes.Plane055.geometry} material={materials['Material.040']} />
        <mesh name="Cube022" geometry={nodes.Cube022.geometry} material={materials['Material.017']} />
        <mesh name="Cube023" geometry={nodes.Cube023.geometry} material={materials['Material.017']} />
        <mesh name="Cube024" geometry={nodes.Cube024.geometry} material={materials['Material.017']} />
        <mesh name="Cube025" geometry={nodes.Cube025.geometry} material={materials['Material.017']} />
        <mesh name="Cube026" geometry={nodes.Cube026.geometry} material={materials['Material.018']} />
        <group name="Cylinder005">
          <mesh name="Cylinder005_1" geometry={nodes.Cylinder005_1.geometry} material={materials['Material.019']} />
          <mesh name="Cylinder005_2" geometry={nodes.Cylinder005_2.geometry} material={materials['Material.024']} />
        </group>
        <group name="Cube027">
          <mesh name="Cube032_1" geometry={nodes.Cube032_1.geometry} material={materials['Material.025']} />
          <mesh name="Cube032_2" geometry={nodes.Cube032_2.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="Circle004" geometry={nodes.Circle004.geometry} material={materials['Material.034']} />
        <mesh name="Circle005" geometry={nodes.Circle005.geometry} material={materials['Material.034']} />
        <mesh name="Circle006" geometry={nodes.Circle006.geometry} material={nodes.Circle006.material} />
        <mesh name="Circle007" geometry={nodes.Circle007.geometry} material={materials['Material.034']} />
        <mesh name="Plane058" geometry={nodes.Plane058.geometry} material={materials['Material.038']} />
        <group name="Plane059">
          <mesh name="Plane063_1" geometry={nodes.Plane063_1.geometry} material={materials['Material.041']} />
          <mesh name="Plane063_2" geometry={nodes.Plane063_2.geometry} material={materials['Material.042']} />
        </group>
        <mesh name="Plane018_Curve011" geometry={nodes.Plane018_Curve011.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve012" geometry={nodes.Plane018_Curve012.geometry} material={materials['Material.039']} />
        <mesh name="Plane060" geometry={nodes.Plane060.geometry} material={materials['Material.040']} />
        <mesh name="Plane063" geometry={nodes.Plane063.geometry} material={materials['Material.038']} />
        <group name="Plane064">
          <mesh name="Plane066_1" geometry={nodes.Plane066_1.geometry} material={materials['Material.041']} />
          <mesh name="Plane066_2" geometry={nodes.Plane066_2.geometry} material={materials['Material.042']} />
        </group>
        <mesh name="Plane018_Curve013" geometry={nodes.Plane018_Curve013.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve014" geometry={nodes.Plane018_Curve014.geometry} material={materials['Material.039']} />
        <mesh name="Plane065" geometry={nodes.Plane065.geometry} material={materials['Material.040']} />
        <mesh name="Plane068" geometry={nodes.Plane068.geometry} material={materials['Material.038']} />
        <group name="Plane069">
          <mesh name="Plane069_1" geometry={nodes.Plane069_1.geometry} material={materials['Material.041']} />
          <mesh name="Plane069_2" geometry={nodes.Plane069_2.geometry} material={materials['Material.042']} />
        </group>
        <mesh name="Plane018_Curve015" geometry={nodes.Plane018_Curve015.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve016" geometry={nodes.Plane018_Curve016.geometry} material={materials['Material.039']} />
        <mesh name="Plane070" geometry={nodes.Plane070.geometry} material={materials['Material.040']} />
        <mesh name="Plane073" geometry={nodes.Plane073.geometry} material={materials['Material.038']} />
        <group name="Plane074">
          <mesh name="Plane072_1" geometry={nodes.Plane072_1.geometry} material={materials['Material.041']} />
          <mesh name="Plane072_2" geometry={nodes.Plane072_2.geometry} material={materials['Material.042']} />
        </group>
        <mesh name="Plane018_Curve017" geometry={nodes.Plane018_Curve017.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve018" geometry={nodes.Plane018_Curve018.geometry} material={materials['Material.039']} />
        <mesh name="Plane075" geometry={nodes.Plane075.geometry} material={materials['Material.040']} />
        <mesh name="Plane078" geometry={nodes.Plane078.geometry} material={materials['Material.038']} />
        <group name="Plane079">
          <mesh name="Plane075_1" geometry={nodes.Plane075_1.geometry} material={materials['Material.041']} />
          <mesh name="Plane075_2" geometry={nodes.Plane075_2.geometry} material={materials['Material.042']} />
        </group>
        <mesh name="Plane018_Curve019" geometry={nodes.Plane018_Curve019.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve020" geometry={nodes.Plane018_Curve020.geometry} material={materials['Material.039']} />
        <mesh name="Plane080" geometry={nodes.Plane080.geometry} material={materials['Material.040']} />
        <mesh name="Plane083" geometry={nodes.Plane083.geometry} material={materials['Material.038']} />
        <group name="Plane084">
          <mesh name="Plane078_1" geometry={nodes.Plane078_1.geometry} material={materials['Material.041']} />
          <mesh name="Plane078_2" geometry={nodes.Plane078_2.geometry} material={materials['Material.042']} />
        </group>
        <mesh name="Plane018_Curve021" geometry={nodes.Plane018_Curve021.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve022" geometry={nodes.Plane018_Curve022.geometry} material={materials['Material.039']} />
        <mesh name="Plane085" geometry={nodes.Plane085.geometry} material={materials['Material.040']} />
        <mesh name="Plane088" geometry={nodes.Plane088.geometry} material={materials['Material.038']} />
        <group name="Plane089">
          <mesh name="Plane081_1" geometry={nodes.Plane081_1.geometry} material={materials['Material.041']} />
          <mesh name="Plane081_2" geometry={nodes.Plane081_2.geometry} material={materials['Material.042']} />
        </group>
        <mesh name="Plane018_Curve023" geometry={nodes.Plane018_Curve023.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve024" geometry={nodes.Plane018_Curve024.geometry} material={materials['Material.039']} />
        <mesh name="Plane090" geometry={nodes.Plane090.geometry} material={materials['Material.040']} />
        <mesh name="Plane093" geometry={nodes.Plane093.geometry} material={materials['Material.038']} />
        <group name="Plane094">
          <mesh name="Plane084_1" geometry={nodes.Plane084_1.geometry} material={materials['Material.041']} />
          <mesh name="Plane084_2" geometry={nodes.Plane084_2.geometry} material={materials['Material.042']} />
        </group>
        <mesh name="Plane018_Curve025" geometry={nodes.Plane018_Curve025.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve026" geometry={nodes.Plane018_Curve026.geometry} material={materials['Material.039']} />
        <mesh name="Plane095" geometry={nodes.Plane095.geometry} material={materials['Material.040']} />
        <mesh name="Plane098" geometry={nodes.Plane098.geometry} material={materials['Material.038']} />
        <group name="Plane099">
          <mesh name="Plane087_1" geometry={nodes.Plane087_1.geometry} material={materials['Material.041']} />
          <mesh name="Plane087_2" geometry={nodes.Plane087_2.geometry} material={materials['Material.042']} />
        </group>
        <mesh name="Plane018_Curve027" geometry={nodes.Plane018_Curve027.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve028" geometry={nodes.Plane018_Curve028.geometry} material={materials['Material.039']} />
        <mesh name="Plane100" geometry={nodes.Plane100.geometry} material={materials['Material.040']} />
        <mesh name="Plane103" geometry={nodes.Plane103.geometry} material={materials['Material.038']} />
        <group name="Plane104">
          <mesh name="Plane090_1" geometry={nodes.Plane090_1.geometry} material={materials['Material.041']} />
          <mesh name="Plane090_2" geometry={nodes.Plane090_2.geometry} material={materials['Material.042']} />
        </group>
        <mesh name="Plane018_Curve029" geometry={nodes.Plane018_Curve029.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve030" geometry={nodes.Plane018_Curve030.geometry} material={materials['Material.039']} />
        <mesh name="Plane105" geometry={nodes.Plane105.geometry} material={materials['Material.040']} />
        <mesh name="Plane108" geometry={nodes.Plane108.geometry} material={materials['Material.038']} />
        <group name="Plane109">
          <mesh name="Plane093_1" geometry={nodes.Plane093_1.geometry} material={materials['Material.041']} />
          <mesh name="Plane093_2" geometry={nodes.Plane093_2.geometry} material={materials['Material.042']} />
        </group>
        <mesh name="Plane018_Curve031" geometry={nodes.Plane018_Curve031.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve032" geometry={nodes.Plane018_Curve032.geometry} material={materials['Material.039']} />
        <mesh name="Plane110" geometry={nodes.Plane110.geometry} material={materials['Material.040']} />
        <mesh name="Plane113" geometry={nodes.Plane113.geometry} material={materials['Material.038']} />
        <group name="Plane114">
          <mesh name="Plane004_1" geometry={nodes.Plane004_1.geometry} material={materials['Material.041']} />
          <mesh name="Plane004_2" geometry={nodes.Plane004_2.geometry} material={materials['Material.042']} />
        </group>
        <mesh name="Plane018_Curve033" geometry={nodes.Plane018_Curve033.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve034" geometry={nodes.Plane018_Curve034.geometry} material={materials['Material.039']} />
        <mesh name="Plane115" geometry={nodes.Plane115.geometry} material={materials['Material.040']} />
        <mesh name="Plane018_Curve035" geometry={nodes.Plane018_Curve035.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve036" geometry={nodes.Plane018_Curve036.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve037" geometry={nodes.Plane018_Curve037.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve038" geometry={nodes.Plane018_Curve038.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve039" geometry={nodes.Plane018_Curve039.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve040" geometry={nodes.Plane018_Curve040.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve041" geometry={nodes.Plane018_Curve041.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve042" geometry={nodes.Plane018_Curve042.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve043" geometry={nodes.Plane018_Curve043.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve044" geometry={nodes.Plane018_Curve044.geometry} material={materials['Material.039']} />
        <mesh name="Cube040" geometry={nodes.Cube040.geometry} material={materials['Material.031']} />
        <mesh name="Cube041" geometry={nodes.Cube041.geometry} material={materials['Material.035']} />
        <mesh name="Cube042" geometry={nodes.Cube042.geometry} material={materials['Material.017']} />
        <mesh name="Cube043" geometry={nodes.Cube043.geometry} material={materials['Material.017']} />
        <mesh name="Cube044" geometry={nodes.Cube044.geometry} material={materials['Material.017']} />
        <mesh name="Cube045" geometry={nodes.Cube045.geometry} material={materials['Material.017']} />
        <mesh name="Cube046" geometry={nodes.Cube046.geometry} material={materials['Material.018']} />
        <group name="Cylinder006">
          <mesh name="Cylinder006_1" geometry={nodes.Cylinder006_1.geometry} material={materials['Material.019']} />
          <mesh name="Cylinder006_2" geometry={nodes.Cylinder006_2.geometry} material={materials['Material.024']} />
        </group>
        <group name="Cube047">
          <mesh name="Cube024_1" geometry={nodes.Cube024_1.geometry} material={materials['Material.025']} />
          <mesh name="Cube024_2" geometry={nodes.Cube024_2.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="Cube010_Curve004" geometry={nodes.Cube010_Curve004.geometry} material={materials['Material.036']} />
        <mesh name="Cube048" geometry={nodes.Cube048.geometry} material={materials['Material.031']} />
        <mesh name="Cube049" geometry={nodes.Cube049.geometry} material={materials['Material.035']} />
        <mesh name="Cube050" geometry={nodes.Cube050.geometry} material={materials['Material.017']} />
        <mesh name="Cube051" geometry={nodes.Cube051.geometry} material={materials['Material.017']} />
        <mesh name="Cube052" geometry={nodes.Cube052.geometry} material={materials['Material.017']} />
        <mesh name="Cube053" geometry={nodes.Cube053.geometry} material={materials['Material.017']} />
        <mesh name="Cube054" geometry={nodes.Cube054.geometry} material={materials['Material.018']} />
        <group name="Cylinder007">
          <mesh name="Cylinder007_1" geometry={nodes.Cylinder007_1.geometry} material={materials['Material.019']} />
          <mesh name="Cylinder007_2" geometry={nodes.Cylinder007_2.geometry} material={materials['Material.024']} />
        </group>
        <group name="Cube055">
          <mesh name="Cube022_1" geometry={nodes.Cube022_1.geometry} material={materials['Material.025']} />
          <mesh name="Cube022_2" geometry={nodes.Cube022_2.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="Cube010_Curve005" geometry={nodes.Cube010_Curve005.geometry} material={materials['Material.036']} />
        <mesh name="Cube010_Curve006" geometry={nodes.Cube010_Curve006.geometry} material={materials['Material.036']} />
        <mesh name="Cube056" geometry={nodes.Cube056.geometry} material={materials['Material.031']} />
        <mesh name="Cube057" geometry={nodes.Cube057.geometry} material={materials['Material.035']} />
        <mesh name="Cube058" geometry={nodes.Cube058.geometry} material={materials['Material.017']} />
        <mesh name="Cube059" geometry={nodes.Cube059.geometry} material={materials['Material.017']} />
        <mesh name="Cube060" geometry={nodes.Cube060.geometry} material={materials['Material.017']} />
        <mesh name="Cube061" geometry={nodes.Cube061.geometry} material={materials['Material.017']} />
        <mesh name="Cube062" geometry={nodes.Cube062.geometry} material={materials['Material.018']} />
        <group name="Cylinder008">
          <mesh name="Cylinder008_1" geometry={nodes.Cylinder008_1.geometry} material={materials['Material.019']} />
          <mesh name="Cylinder008_2" geometry={nodes.Cylinder008_2.geometry} material={materials['Material.024']} />
        </group>
        <group name="Cube063">
          <mesh name="Cube054_1" geometry={nodes.Cube054_1.geometry} material={materials['Material.025']} />
          <mesh name="Cube054_2" geometry={nodes.Cube054_2.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="Cube010_Curve007" geometry={nodes.Cube010_Curve007.geometry} material={materials['Material.036']} />
        <mesh name="Cube010_Curve008" geometry={nodes.Cube010_Curve008.geometry} material={materials['Material.036']} />
        <mesh name="Cube064" geometry={nodes.Cube064.geometry} material={materials['Material.031']} />
        <mesh name="Cube065" geometry={nodes.Cube065.geometry} material={materials['Material.035']} />
        <mesh name="Cube066" geometry={nodes.Cube066.geometry} material={materials['Material.017']} />
        <mesh name="Cube067" geometry={nodes.Cube067.geometry} material={materials['Material.017']} />
        <mesh name="Cube068" geometry={nodes.Cube068.geometry} material={materials['Material.017']} />
        <mesh name="Cube069" geometry={nodes.Cube069.geometry} material={materials['Material.017']} />
        <mesh name="Cube070" geometry={nodes.Cube070.geometry} material={materials['Material.018']} />
        <group name="Cylinder009">
          <mesh name="Cylinder009_1" geometry={nodes.Cylinder009_1.geometry} material={materials['Material.019']} />
          <mesh name="Cylinder009_2" geometry={nodes.Cylinder009_2.geometry} material={materials['Material.024']} />
        </group>
        <group name="Cube071">
          <mesh name="Cube062_1" geometry={nodes.Cube062_1.geometry} material={materials['Material.025']} />
          <mesh name="Cube062_2" geometry={nodes.Cube062_2.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="Circle008" geometry={nodes.Circle008.geometry} material={materials['Material.034']} />
        <mesh name="Circle009" geometry={nodes.Circle009.geometry} material={materials['Material.034']} />
        <mesh name="Circle010" geometry={nodes.Circle010.geometry} material={nodes.Circle010.material} />
        <mesh name="Circle011" geometry={nodes.Circle011.geometry} material={materials['Material.034']} />
        <mesh name="Circle012" geometry={nodes.Circle012.geometry} material={materials['Material.034']} />
        <mesh name="Circle013" geometry={nodes.Circle013.geometry} material={materials['Material.034']} />
        <mesh name="Circle014" geometry={nodes.Circle014.geometry} material={nodes.Circle014.material} />
        <mesh name="Circle015" geometry={nodes.Circle015.geometry} material={materials['Material.034']} />
        <mesh name="Circle016" geometry={nodes.Circle016.geometry} material={materials['Material.034']} />
        <mesh name="Circle017" geometry={nodes.Circle017.geometry} material={materials['Material.034']} />
        <mesh name="Circle018" geometry={nodes.Circle018.geometry} material={nodes.Circle018.material} />
        <mesh name="Circle019" geometry={nodes.Circle019.geometry} material={materials['Material.034']} />
        <mesh name="Circle020" geometry={nodes.Circle020.geometry} material={materials['Material.034']} />
        <mesh name="Circle021" geometry={nodes.Circle021.geometry} material={materials['Material.034']} />
        <mesh name="Circle022" geometry={nodes.Circle022.geometry} material={nodes.Circle022.material} />
        <mesh name="Circle023" geometry={nodes.Circle023.geometry} material={materials['Material.034']} />
        <mesh name="Cube072" geometry={nodes.Cube072.geometry} material={materials['Material.031']} />
        <mesh name="Cube073" geometry={nodes.Cube073.geometry} material={materials['Material.035']} />
        <mesh name="Cube074" geometry={nodes.Cube074.geometry} material={materials['Material.017']} />
        <mesh name="Cube075" geometry={nodes.Cube075.geometry} material={materials['Material.017']} />
        <mesh name="Cube076" geometry={nodes.Cube076.geometry} material={materials['Material.017']} />
        <mesh name="Cube077" geometry={nodes.Cube077.geometry} material={materials['Material.017']} />
        <mesh name="Cube078" geometry={nodes.Cube078.geometry} material={materials['Material.018']} />
        <group name="Cylinder010">
          <mesh name="Cylinder010_1" geometry={nodes.Cylinder010_1.geometry} material={materials['Material.019']} />
          <mesh name="Cylinder010_2" geometry={nodes.Cylinder010_2.geometry} material={materials['Material.024']} />
        </group>
        <group name="Cube079">
          <mesh name="Cube070_1" geometry={nodes.Cube070_1.geometry} material={materials['Material.025']} />
          <mesh name="Cube070_2" geometry={nodes.Cube070_2.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="Cube010_Curve011" geometry={nodes.Cube010_Curve011.geometry} material={materials['Material.036']} />
        <mesh name="Cube010_Curve012" geometry={nodes.Cube010_Curve012.geometry} material={materials['Material.036']} />
        <mesh name="Cube080" geometry={nodes.Cube080.geometry} material={materials['Material.031']} />
        <mesh name="Cube081" geometry={nodes.Cube081.geometry} material={materials['Material.035']} />
        <mesh name="Cube082" geometry={nodes.Cube082.geometry} material={materials['Material.017']} />
        <mesh name="Cube083" geometry={nodes.Cube083.geometry} material={materials['Material.017']} />
        <mesh name="Cube084" geometry={nodes.Cube084.geometry} material={materials['Material.017']} />
        <mesh name="Cube085" geometry={nodes.Cube085.geometry} material={materials['Material.017']} />
        <mesh name="Cube086" geometry={nodes.Cube086.geometry} material={materials['Material.018']} />
        <group name="Cylinder011">
          <mesh name="Cylinder011_1" geometry={nodes.Cylinder011_1.geometry} material={materials['Material.019']} />
          <mesh name="Cylinder011_2" geometry={nodes.Cylinder011_2.geometry} material={materials['Material.024']} />
        </group>
        <group name="Cube087">
          <mesh name="Cube078_1" geometry={nodes.Cube078_1.geometry} material={materials['Material.025']} />
          <mesh name="Cube078_2" geometry={nodes.Cube078_2.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="Cube010_Curve013" geometry={nodes.Cube010_Curve013.geometry} material={materials['Material.036']} />
        <mesh name="Cube010_Curve014" geometry={nodes.Cube010_Curve014.geometry} material={materials['Material.036']} />
        <mesh name="Cube088" geometry={nodes.Cube088.geometry} material={materials['Material.031']} />
        <mesh name="Cube089" geometry={nodes.Cube089.geometry} material={materials['Material.035']} />
        <mesh name="Cube090" geometry={nodes.Cube090.geometry} material={materials['Material.017']} />
        <mesh name="Cube091" geometry={nodes.Cube091.geometry} material={materials['Material.017']} />
        <mesh name="Cube092" geometry={nodes.Cube092.geometry} material={materials['Material.017']} />
        <mesh name="Cube093" geometry={nodes.Cube093.geometry} material={materials['Material.017']} />
        <mesh name="Cube094" geometry={nodes.Cube094.geometry} material={materials['Material.018']} />
        <group name="Cylinder012">
          <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials['Material.019']} />
          <mesh name="Cylinder_1" geometry={nodes.Cylinder_1.geometry} material={materials['Material.024']} />
        </group>
        <group name="Cube095">
          <mesh name="Cube018_1" geometry={nodes.Cube018_1.geometry} material={materials['Material.025']} />
          <mesh name="Cube018_2" geometry={nodes.Cube018_2.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="Cube010_Curve015" geometry={nodes.Cube010_Curve015.geometry} material={materials['Material.036']} />
        <mesh name="Cube010_Curve016" geometry={nodes.Cube010_Curve016.geometry} material={materials['Material.036']} />
        <mesh name="Circle024" geometry={nodes.Circle024.geometry} material={materials['Material.034']} />
        <mesh name="Circle025" geometry={nodes.Circle025.geometry} material={materials['Material.034']} />
        <mesh name="Circle026" geometry={nodes.Circle026.geometry} material={nodes.Circle026.material} />
        <mesh name="Circle027" geometry={nodes.Circle027.geometry} material={materials['Material.034']} />
        <mesh name="Circle028" geometry={nodes.Circle028.geometry} material={materials['Material.034']} />
        <mesh name="Circle029" geometry={nodes.Circle029.geometry} material={materials['Material.034']} />
        <mesh name="Circle030" geometry={nodes.Circle030.geometry} material={nodes.Circle030.material} />
        <mesh name="Circle031" geometry={nodes.Circle031.geometry} material={materials['Material.034']} />
        <mesh name="Circle032" geometry={nodes.Circle032.geometry} material={materials['Material.034']} />
        <mesh name="Circle033" geometry={nodes.Circle033.geometry} material={materials['Material.034']} />
        <mesh name="Circle034" geometry={nodes.Circle034.geometry} material={nodes.Circle034.material} />
        <mesh name="Circle035" geometry={nodes.Circle035.geometry} material={materials['Material.034']} />
        <mesh name="PM3D_Sphere3D1001" geometry={nodes.PM3D_Sphere3D1001.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1_2002" geometry={nodes.PM3D_Sphere3D1_2002.geometry} material={materials['Material.001']} />
        <mesh name="PM3D_Sphere3D1_Curve001" geometry={nodes.PM3D_Sphere3D1_Curve001.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_Curve002" geometry={nodes.PM3D_Sphere3D1_Curve002.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_2003" geometry={nodes.PM3D_Sphere3D1_2003.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1_2001_Curve001" geometry={nodes.PM3D_Sphere3D1_2001_Curve001.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve001.material} />
        <group name="Cylinder013">
          <mesh name="Cylinder012_1" geometry={nodes.Cylinder012_1.geometry} material={materials['Material.044']} />
          <mesh name="Cylinder012_2" geometry={nodes.Cylinder012_2.geometry} material={materials['Material.045']} />
        </group>
        <group name="Cube096">
          <mesh name="Cube079_1" geometry={nodes.Cube079_1.geometry} material={materials['Material.025']} />
          <mesh name="Cube079_2" geometry={nodes.Cube079_2.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="High001" geometry={nodes.High001.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1002" geometry={nodes.PM3D_Sphere3D1002.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1_2004" geometry={nodes.PM3D_Sphere3D1_2004.geometry} material={materials['Material.001']} />
        <mesh name="PM3D_Sphere3D1_Curve003" geometry={nodes.PM3D_Sphere3D1_Curve003.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_Curve004" geometry={nodes.PM3D_Sphere3D1_Curve004.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_2005" geometry={nodes.PM3D_Sphere3D1_2005.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1_2001_Curve003" geometry={nodes.PM3D_Sphere3D1_2001_Curve003.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve003.material} />
        <group name="Cylinder014">
          <mesh name="Cylinder013_1" geometry={nodes.Cylinder013_1.geometry} material={materials['Material.044']} />
          <mesh name="Cylinder013_2" geometry={nodes.Cylinder013_2.geometry} material={materials['Material.045']} />
        </group>
        <group name="Cube097">
          <mesh name="Cube080_1" geometry={nodes.Cube080_1.geometry} material={materials['Material.025']} />
          <mesh name="Cube080_2" geometry={nodes.Cube080_2.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="High002" geometry={nodes.High002.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1003" geometry={nodes.PM3D_Sphere3D1003.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1_2006" geometry={nodes.PM3D_Sphere3D1_2006.geometry} material={materials['Material.001']} />
        <mesh name="PM3D_Sphere3D1_Curve005" geometry={nodes.PM3D_Sphere3D1_Curve005.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_Curve006" geometry={nodes.PM3D_Sphere3D1_Curve006.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_2007" geometry={nodes.PM3D_Sphere3D1_2007.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1_2001_Curve005" geometry={nodes.PM3D_Sphere3D1_2001_Curve005.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve005.material} />
        <group name="Cylinder015">
          <mesh name="Cylinder014_1" geometry={nodes.Cylinder014_1.geometry} material={materials['Material.044']} />
          <mesh name="Cylinder014_2" geometry={nodes.Cylinder014_2.geometry} material={materials['Material.045']} />
        </group>
        <group name="Cube098">
          <mesh name="Cube081_1" geometry={nodes.Cube081_1.geometry} material={materials['Material.025']} />
          <mesh name="Cube081_2" geometry={nodes.Cube081_2.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="High003" geometry={nodes.High003.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1004" geometry={nodes.PM3D_Sphere3D1004.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1_2008" geometry={nodes.PM3D_Sphere3D1_2008.geometry} material={materials['Material.001']} />
        <mesh name="PM3D_Sphere3D1_Curve007" geometry={nodes.PM3D_Sphere3D1_Curve007.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_Curve008" geometry={nodes.PM3D_Sphere3D1_Curve008.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_2009" geometry={nodes.PM3D_Sphere3D1_2009.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1_2001_Curve007" geometry={nodes.PM3D_Sphere3D1_2001_Curve007.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve007.material} />
        <group name="Cylinder016">
          <mesh name="Cylinder015_1" geometry={nodes.Cylinder015_1.geometry} material={materials['Material.044']} />
          <mesh name="Cylinder015_2" geometry={nodes.Cylinder015_2.geometry} material={materials['Material.045']} />
        </group>
        <group name="Cube099">
          <mesh name="Cube082_1" geometry={nodes.Cube082_1.geometry} material={materials['Material.025']} />
          <mesh name="Cube082_2" geometry={nodes.Cube082_2.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="High004" geometry={nodes.High004.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1005" geometry={nodes.PM3D_Sphere3D1005.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1_2010" geometry={nodes.PM3D_Sphere3D1_2010.geometry} material={materials['Material.001']} />
        <mesh name="PM3D_Sphere3D1_Curve009" geometry={nodes.PM3D_Sphere3D1_Curve009.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_Curve010" geometry={nodes.PM3D_Sphere3D1_Curve010.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_2011" geometry={nodes.PM3D_Sphere3D1_2011.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1_2001_Curve009" geometry={nodes.PM3D_Sphere3D1_2001_Curve009.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve009.material} />
        <group name="Cylinder017">
          <mesh name="Cylinder016_1" geometry={nodes.Cylinder016_1.geometry} material={materials['Material.044']} />
          <mesh name="Cylinder016_2" geometry={nodes.Cylinder016_2.geometry} material={materials['Material.045']} />
        </group>
        <group name="Cube100">
          <mesh name="Cube083_1" geometry={nodes.Cube083_1.geometry} material={materials['Material.025']} />
          <mesh name="Cube083_2" geometry={nodes.Cube083_2.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="High005" geometry={nodes.High005.geometry} material={materials['Material.037']} />
        <mesh name="Low006" geometry={nodes.Low006.geometry} material={materials['Material.046']} />
        <mesh name="PM3D_Sphere3D1006" geometry={nodes.PM3D_Sphere3D1006.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1_2012" geometry={nodes.PM3D_Sphere3D1_2012.geometry} material={materials['Material.001']} />
        <mesh name="PM3D_Sphere3D1_Curve011" geometry={nodes.PM3D_Sphere3D1_Curve011.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_Curve012" geometry={nodes.PM3D_Sphere3D1_Curve012.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_2013" geometry={nodes.PM3D_Sphere3D1_2013.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1_2001_Curve011" geometry={nodes.PM3D_Sphere3D1_2001_Curve011.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve011.material} />
        <group name="Cylinder018">
          <mesh name="Cylinder017_1" geometry={nodes.Cylinder017_1.geometry} material={materials['Material.044']} />
          <mesh name="Cylinder017_2" geometry={nodes.Cylinder017_2.geometry} material={materials['Material.045']} />
        </group>
        <group name="Cube101">
          <mesh name="Cube084_1" geometry={nodes.Cube084_1.geometry} material={materials['Material.025']} />
          <mesh name="Cube084_2" geometry={nodes.Cube084_2.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="Low007" geometry={nodes.Low007.geometry} material={materials['Material.046']} />
        <mesh name="PM3D_Sphere3D1007" geometry={nodes.PM3D_Sphere3D1007.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1_2014" geometry={nodes.PM3D_Sphere3D1_2014.geometry} material={materials['Material.001']} />
        <mesh name="PM3D_Sphere3D1_Curve013" geometry={nodes.PM3D_Sphere3D1_Curve013.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_Curve014" geometry={nodes.PM3D_Sphere3D1_Curve014.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_2015" geometry={nodes.PM3D_Sphere3D1_2015.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1_2001_Curve013" geometry={nodes.PM3D_Sphere3D1_2001_Curve013.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve013.material} />
        <group name="Cylinder019">
          <mesh name="Cylinder018_1" geometry={nodes.Cylinder018_1.geometry} material={materials['Material.044']} />
          <mesh name="Cylinder018_2" geometry={nodes.Cylinder018_2.geometry} material={materials['Material.045']} />
        </group>
        <group name="Cube102">
          <mesh name="Cube085_1" geometry={nodes.Cube085_1.geometry} material={materials['Material.025']} />
          <mesh name="Cube085_2" geometry={nodes.Cube085_2.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="Low008" geometry={nodes.Low008.geometry} material={materials['Material.046']} />
        <mesh name="PM3D_Sphere3D1008" geometry={nodes.PM3D_Sphere3D1008.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1_2016" geometry={nodes.PM3D_Sphere3D1_2016.geometry} material={materials['Material.001']} />
        <mesh name="PM3D_Sphere3D1_Curve015" geometry={nodes.PM3D_Sphere3D1_Curve015.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_Curve016" geometry={nodes.PM3D_Sphere3D1_Curve016.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_2017" geometry={nodes.PM3D_Sphere3D1_2017.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1_2001_Curve015" geometry={nodes.PM3D_Sphere3D1_2001_Curve015.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve015.material} />
        <group name="Cylinder020">
          <mesh name="Cylinder019_1" geometry={nodes.Cylinder019_1.geometry} material={materials['Material.044']} />
          <mesh name="Cylinder019_2" geometry={nodes.Cylinder019_2.geometry} material={materials['Material.045']} />
        </group>
        <group name="Cube103">
          <mesh name="Cube086_1" geometry={nodes.Cube086_1.geometry} material={materials['Material.025']} />
          <mesh name="Cube086_2" geometry={nodes.Cube086_2.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="Plane018_Curve045" geometry={nodes.Plane018_Curve045.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve046" geometry={nodes.Plane018_Curve046.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve047" geometry={nodes.Plane018_Curve047.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve048" geometry={nodes.Plane018_Curve048.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve049" geometry={nodes.Plane018_Curve049.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve050" geometry={nodes.Plane018_Curve050.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve051" geometry={nodes.Plane018_Curve051.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve052" geometry={nodes.Plane018_Curve052.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve053" geometry={nodes.Plane018_Curve053.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve054" geometry={nodes.Plane018_Curve054.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve055" geometry={nodes.Plane018_Curve055.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve056" geometry={nodes.Plane018_Curve056.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve057" geometry={nodes.Plane018_Curve057.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve058" geometry={nodes.Plane018_Curve058.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve059" geometry={nodes.Plane018_Curve059.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve060" geometry={nodes.Plane018_Curve060.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve061" geometry={nodes.Plane018_Curve061.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve062" geometry={nodes.Plane018_Curve062.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve063" geometry={nodes.Plane018_Curve063.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve064" geometry={nodes.Plane018_Curve064.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve065" geometry={nodes.Plane018_Curve065.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve066" geometry={nodes.Plane018_Curve066.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve067" geometry={nodes.Plane018_Curve067.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve068" geometry={nodes.Plane018_Curve068.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve069" geometry={nodes.Plane018_Curve069.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve070" geometry={nodes.Plane018_Curve070.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve071" geometry={nodes.Plane018_Curve071.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve072" geometry={nodes.Plane018_Curve072.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve073" geometry={nodes.Plane018_Curve073.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve074" geometry={nodes.Plane018_Curve074.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve075" geometry={nodes.Plane018_Curve075.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve076" geometry={nodes.Plane018_Curve076.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve077" geometry={nodes.Plane018_Curve077.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve078" geometry={nodes.Plane018_Curve078.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve079" geometry={nodes.Plane018_Curve079.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve080" geometry={nodes.Plane018_Curve080.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve081" geometry={nodes.Plane018_Curve081.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve082" geometry={nodes.Plane018_Curve082.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve083" geometry={nodes.Plane018_Curve083.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve084" geometry={nodes.Plane018_Curve084.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve085" geometry={nodes.Plane018_Curve085.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve086" geometry={nodes.Plane018_Curve086.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve087" geometry={nodes.Plane018_Curve087.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve088" geometry={nodes.Plane018_Curve088.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve089" geometry={nodes.Plane018_Curve089.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve090" geometry={nodes.Plane018_Curve090.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve091" geometry={nodes.Plane018_Curve091.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve092" geometry={nodes.Plane018_Curve092.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve093" geometry={nodes.Plane018_Curve093.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve094" geometry={nodes.Plane018_Curve094.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve095" geometry={nodes.Plane018_Curve095.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve096" geometry={nodes.Plane018_Curve096.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve097" geometry={nodes.Plane018_Curve097.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve098" geometry={nodes.Plane018_Curve098.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve099" geometry={nodes.Plane018_Curve099.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve100" geometry={nodes.Plane018_Curve100.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve101" geometry={nodes.Plane018_Curve101.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve102" geometry={nodes.Plane018_Curve102.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve103" geometry={nodes.Plane018_Curve103.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve104" geometry={nodes.Plane018_Curve104.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve105" geometry={nodes.Plane018_Curve105.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve106" geometry={nodes.Plane018_Curve106.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve107" geometry={nodes.Plane018_Curve107.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve108" geometry={nodes.Plane018_Curve108.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve109" geometry={nodes.Plane018_Curve109.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve110" geometry={nodes.Plane018_Curve110.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve111" geometry={nodes.Plane018_Curve111.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve112" geometry={nodes.Plane018_Curve112.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve113" geometry={nodes.Plane018_Curve113.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve114" geometry={nodes.Plane018_Curve114.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve115" geometry={nodes.Plane018_Curve115.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve116" geometry={nodes.Plane018_Curve116.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve117" geometry={nodes.Plane018_Curve117.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve118" geometry={nodes.Plane018_Curve118.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve119" geometry={nodes.Plane018_Curve119.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve120" geometry={nodes.Plane018_Curve120.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve121" geometry={nodes.Plane018_Curve121.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve122" geometry={nodes.Plane018_Curve122.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve123" geometry={nodes.Plane018_Curve123.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve124" geometry={nodes.Plane018_Curve124.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve125" geometry={nodes.Plane018_Curve125.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve126" geometry={nodes.Plane018_Curve126.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve127" geometry={nodes.Plane018_Curve127.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve128" geometry={nodes.Plane018_Curve128.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve129" geometry={nodes.Plane018_Curve129.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve130" geometry={nodes.Plane018_Curve130.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve131" geometry={nodes.Plane018_Curve131.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve132" geometry={nodes.Plane018_Curve132.geometry} material={materials['Material.039']} />
        <mesh name="Cube010_Curve021" geometry={nodes.Cube010_Curve021.geometry} material={materials['Material.036']} />
        <mesh name="Cube010_Curve023" geometry={nodes.Cube010_Curve023.geometry} material={materials['Material.036']} />
        <mesh name="Cube010_Curve024" geometry={nodes.Cube010_Curve024.geometry} material={materials['Material.036']} />
        <mesh name="Cube010_Curve025" geometry={nodes.Cube010_Curve025.geometry} material={materials['Material.036']} />
        <mesh name="Cube010_Curve026" geometry={nodes.Cube010_Curve026.geometry} material={materials['Material.036']} />
        <mesh name="Cube010_Curve029" geometry={nodes.Cube010_Curve029.geometry} material={materials['Material.036']} />
        <mesh name="Cube010_Curve030" geometry={nodes.Cube010_Curve030.geometry} material={materials['Material.036']} />
        <mesh name="Cube010_Curve031" geometry={nodes.Cube010_Curve031.geometry} material={materials['Material.036']} />
        <mesh name="Cube010_Curve032" geometry={nodes.Cube010_Curve032.geometry} material={materials['Material.036']} />
        <mesh name="Cube010_Curve033" geometry={nodes.Cube010_Curve033.geometry} material={materials['Material.036']} />
        <mesh name="Cube010_Curve034" geometry={nodes.Cube010_Curve034.geometry} material={materials['Material.036']} />
        <mesh name="PM3D_Sphere3D1_Curve018" geometry={nodes.PM3D_Sphere3D1_Curve018.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_Curve019" geometry={nodes.PM3D_Sphere3D1_Curve019.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_2001_Curve018" geometry={nodes.PM3D_Sphere3D1_2001_Curve018.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve018.material} />
        <mesh name="PM3D_Sphere3D1_Curve020" geometry={nodes.PM3D_Sphere3D1_Curve020.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_Curve021" geometry={nodes.PM3D_Sphere3D1_Curve021.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_2001_Curve020" geometry={nodes.PM3D_Sphere3D1_2001_Curve020.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve020.material} />
        <mesh name="PM3D_Sphere3D1_Curve022" geometry={nodes.PM3D_Sphere3D1_Curve022.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_Curve023" geometry={nodes.PM3D_Sphere3D1_Curve023.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_2001_Curve022" geometry={nodes.PM3D_Sphere3D1_2001_Curve022.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve022.material} />
        <mesh name="PM3D_Sphere3D1_Curve024" geometry={nodes.PM3D_Sphere3D1_Curve024.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_Curve025" geometry={nodes.PM3D_Sphere3D1_Curve025.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_2001_Curve024" geometry={nodes.PM3D_Sphere3D1_2001_Curve024.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve024.material} />
        <mesh name="PM3D_Sphere3D1_Curve026" geometry={nodes.PM3D_Sphere3D1_Curve026.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_Curve027" geometry={nodes.PM3D_Sphere3D1_Curve027.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_2001_Curve026" geometry={nodes.PM3D_Sphere3D1_2001_Curve026.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve026.material} />
        <mesh name="PM3D_Sphere3D1_Curve028" geometry={nodes.PM3D_Sphere3D1_Curve028.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_Curve029" geometry={nodes.PM3D_Sphere3D1_Curve029.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_2001_Curve028" geometry={nodes.PM3D_Sphere3D1_2001_Curve028.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve028.material} />
        <mesh name="PM3D_Sphere3D1_Curve030" geometry={nodes.PM3D_Sphere3D1_Curve030.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_Curve031" geometry={nodes.PM3D_Sphere3D1_Curve031.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_2001_Curve030" geometry={nodes.PM3D_Sphere3D1_2001_Curve030.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve030.material} />
        <mesh name="PM3D_Sphere3D1_Curve032" geometry={nodes.PM3D_Sphere3D1_Curve032.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_2001_Curve032" geometry={nodes.PM3D_Sphere3D1_2001_Curve032.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve032.material} />
        <mesh name="Plane018_Curve133" geometry={nodes.Plane018_Curve133.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve134" geometry={nodes.Plane018_Curve134.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve135" geometry={nodes.Plane018_Curve135.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve136" geometry={nodes.Plane018_Curve136.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve137" geometry={nodes.Plane018_Curve137.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve138" geometry={nodes.Plane018_Curve138.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve139" geometry={nodes.Plane018_Curve139.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve140" geometry={nodes.Plane018_Curve140.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve141" geometry={nodes.Plane018_Curve141.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve142" geometry={nodes.Plane018_Curve142.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve143" geometry={nodes.Plane018_Curve143.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve144" geometry={nodes.Plane018_Curve144.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve145" geometry={nodes.Plane018_Curve145.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve146" geometry={nodes.Plane018_Curve146.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve147" geometry={nodes.Plane018_Curve147.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve148" geometry={nodes.Plane018_Curve148.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve149" geometry={nodes.Plane018_Curve149.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve150" geometry={nodes.Plane018_Curve150.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve151" geometry={nodes.Plane018_Curve151.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve152" geometry={nodes.Plane018_Curve152.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve153" geometry={nodes.Plane018_Curve153.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve154" geometry={nodes.Plane018_Curve154.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve155" geometry={nodes.Plane018_Curve155.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve156" geometry={nodes.Plane018_Curve156.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve157" geometry={nodes.Plane018_Curve157.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve158" geometry={nodes.Plane018_Curve158.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve159" geometry={nodes.Plane018_Curve159.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve160" geometry={nodes.Plane018_Curve160.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve161" geometry={nodes.Plane018_Curve161.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve162" geometry={nodes.Plane018_Curve162.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve163" geometry={nodes.Plane018_Curve163.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve164" geometry={nodes.Plane018_Curve164.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve165" geometry={nodes.Plane018_Curve165.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve166" geometry={nodes.Plane018_Curve166.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve167" geometry={nodes.Plane018_Curve167.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve168" geometry={nodes.Plane018_Curve168.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve169" geometry={nodes.Plane018_Curve169.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve170" geometry={nodes.Plane018_Curve170.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve171" geometry={nodes.Plane018_Curve171.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve172" geometry={nodes.Plane018_Curve172.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve173" geometry={nodes.Plane018_Curve173.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve174" geometry={nodes.Plane018_Curve174.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve175" geometry={nodes.Plane018_Curve175.geometry} material={materials['Material.039']} />
        <mesh name="Plane018_Curve176" geometry={nodes.Plane018_Curve176.geometry} material={materials['Material.039']} />
        <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={materials['Material.031']} />
        <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials['Material.035']} />
        <mesh name="Plane021" geometry={nodes.Plane021.geometry} material={nodes.Plane021.material} />
        <mesh name="Plane022" geometry={nodes.Plane022.geometry} material={materials['Material.048']}>
          <group name="Plane022_SurfaceDrawing" />
        </mesh>
        <mesh name="Plane023" geometry={nodes.Plane023.geometry} material={materials['Material.049']} />
        <mesh name="Plane024" geometry={nodes.Plane024.geometry} material={materials['Material.049']}>
          <group name="Plane024_SurfaceDrawing" />
        </mesh>
        <mesh name="Plane025" geometry={nodes.Plane025.geometry} material={materials['Material.049']} />
        <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials['Material.049']} />
        <mesh name="Plane027" geometry={nodes.Plane027.geometry} material={materials['Material.049']} />
        <mesh name="Plane028" geometry={nodes.Plane028.geometry} material={materials['Material.049']} />
        <mesh name="Plane029" geometry={nodes.Plane029.geometry} material={nodes.Plane029.material} />
        <group name="Cube">
          <mesh name="Cube023_1" geometry={nodes.Cube023_1.geometry} material={materials['Material.050']} />
          <mesh name="Cube023_2" geometry={nodes.Cube023_2.geometry} material={materials['Material.051']} />
          <group name="Cube_SurfaceDrawing" />
        </group>
        <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={nodes.Cylinder002.material}>
          <mesh name="Plant4" geometry={nodes.Plant4.geometry} material={materials['Material.052']} />
        </mesh>
        <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials['Material.053']} />
        <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={nodes.Cylinder004.material}>
          <group name="Plant1">
            <mesh name="Plantt" geometry={nodes.Plantt.geometry} material={materials['plant t.']} />
            <mesh name="Plantt_1" geometry={nodes.Plantt_1.geometry} material={materials['PLant t3']} />
          </group>
          <group name="Plant2">
            <mesh name="Plantt2" geometry={nodes.Plantt2.geometry} material={materials['plant t.']} />
            <mesh name="Plantt2_1" geometry={nodes.Plantt2_1.geometry} material={materials['PLant t3']} />
          </group>
        </mesh>
        <group name="Book007">
          <mesh name="Cube020_1" geometry={nodes.Cube020_1.geometry} material={materials['Material.054']} />
          <mesh name="Cube020_2" geometry={nodes.Cube020_2.geometry} material={nodes.Cube020_2.material} />
          <mesh name="Cube020_3" geometry={nodes.Cube020_3.geometry} material={materials['Material.055']} />
          <mesh name="Cube020_4" geometry={nodes.Cube020_4.geometry} material={materials['Material.056']} />
          <mesh name="Cube020_5" geometry={nodes.Cube020_5.geometry} material={materials['Material.057']} />
        </group>
        <group name="Book008">
          <mesh name="Cube087_1" geometry={nodes.Cube087_1.geometry} material={materials['Material.054']} />
          <mesh name="Cube087_2" geometry={nodes.Cube087_2.geometry} material={nodes.Cube087_2.material} />
          <mesh name="Cube087_3" geometry={nodes.Cube087_3.geometry} material={materials['Material.055']} />
          <mesh name="Cube087_4" geometry={nodes.Cube087_4.geometry} material={materials['Material.056']} />
          <mesh name="Cube087_5" geometry={nodes.Cube087_5.geometry} material={materials['Material.057']} />
        </group>
        <group name="Book009">
          <mesh name="Cube088_1" geometry={nodes.Cube088_1.geometry} material={materials['Material.054']} />
          <mesh name="Cube088_2" geometry={nodes.Cube088_2.geometry} material={nodes.Cube088_2.material} />
          <mesh name="Cube088_3" geometry={nodes.Cube088_3.geometry} material={materials['Material.055']} />
          <mesh name="Cube088_4" geometry={nodes.Cube088_4.geometry} material={materials['Material.056']} />
          <mesh name="Cube088_5" geometry={nodes.Cube088_5.geometry} material={materials['Material.057']} />
        </group>
        <group name="Book010">
          <mesh name="Cube089_1" geometry={nodes.Cube089_1.geometry} material={materials['Material.054']} />
          <mesh name="Cube089_2" geometry={nodes.Cube089_2.geometry} material={nodes.Cube089_2.material} />
          <mesh name="Cube089_3" geometry={nodes.Cube089_3.geometry} material={materials['Material.055']} />
          <mesh name="Cube089_4" geometry={nodes.Cube089_4.geometry} material={materials['Material.056']} />
          <mesh name="Cube089_5" geometry={nodes.Cube089_5.geometry} material={materials['Material.057']} />
        </group>
        <group name="Book011">
          <mesh name="Cube090_1" geometry={nodes.Cube090_1.geometry} material={materials['Material.054']} />
          <mesh name="Cube090_2" geometry={nodes.Cube090_2.geometry} material={nodes.Cube090_2.material} />
          <mesh name="Cube090_3" geometry={nodes.Cube090_3.geometry} material={materials['Material.055']} />
          <mesh name="Cube090_4" geometry={nodes.Cube090_4.geometry} material={materials['Material.056']} />
          <mesh name="Cube090_5" geometry={nodes.Cube090_5.geometry} material={materials['Material.057']} />
        </group>
        <group name="Book012">
          <mesh name="Cube019_1" geometry={nodes.Cube019_1.geometry} material={materials['Material.054']} />
          <mesh name="Cube019_2" geometry={nodes.Cube019_2.geometry} material={nodes.Cube019_2.material} />
          <mesh name="Cube019_3" geometry={nodes.Cube019_3.geometry} material={materials['Material.055']} />
          <mesh name="Cube019_4" geometry={nodes.Cube019_4.geometry} material={materials['Material.056']} />
          <mesh name="Cube019_5" geometry={nodes.Cube019_5.geometry} material={materials['Material.057']} />
        </group>
        <mesh name="Plane031" geometry={nodes.Plane031.geometry} material={nodes.Plane031.material} />
        <mesh name="Plane032" geometry={nodes.Plane032.geometry} material={materials['Material.058']} />
        <mesh name="Plane018" geometry={nodes.Plane018.geometry} material={materials['Material.059']} />
        <mesh name="Plane019" geometry={nodes.Plane019.geometry} material={materials['Material.059']} />
        <mesh name="Low" geometry={nodes.Low.geometry} material={materials['Material.046']} />
        <mesh name="PM3D_Sphere3D1" geometry={nodes.PM3D_Sphere3D1.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1_2" geometry={nodes.PM3D_Sphere3D1_2.geometry} material={materials['Material.001']} />
        <mesh name="PM3D_Sphere3D1_Curve" geometry={nodes.PM3D_Sphere3D1_Curve.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_Curve017" geometry={nodes.PM3D_Sphere3D1_Curve017.geometry} material={materials['Material.043']} />
        <mesh name="PM3D_Sphere3D1_2001" geometry={nodes.PM3D_Sphere3D1_2001.geometry} material={materials['Material.037']} />
        <mesh name="PM3D_Sphere3D1_2001_Curve" geometry={nodes.PM3D_Sphere3D1_2001_Curve.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve.material} />
        <mesh name="PM3D_Sphere3D1_2001_Curve017" geometry={nodes.PM3D_Sphere3D1_2001_Curve017.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve017.material} />
        <group name="Cylinder001">
          <mesh name="Cylinder001_1" geometry={nodes.Cylinder001_1.geometry} material={materials['Material.044']} />
          <mesh name="Cylinder001_2" geometry={nodes.Cylinder001_2.geometry} material={materials['Material.045']} />
        </group>
        <group name="Cube001">
          <mesh name="Cube016_1" geometry={nodes.Cube016_1.geometry} material={materials['Material.025']} />
          <mesh name="Cube016_2" geometry={nodes.Cube016_2.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="about_text_block" geometry={nodes.about_text_block.geometry} material={nodes.about_text_block.material} position={[1715.285, 279.178, -9]} >
        <Html>
              <div className='about-wall about-wall-text'
                style={{
                  width: '40rem',
                  position: 'fixed',
                  top: '0%',
                  left: '0%',
                  transform: 'translate(-50%, -50%)',
                  willChange: 'transform, opacity', 
                }}
              >
                 <div className='hello-img'>
                  <img
                    src="./img/hello-icon.svg"
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <h2 style={{ fontSize: '36px', marginTop: '1rem', Top: '0', }}>About Trailblazer</h2>
                <p>Trailblazer Innovations is actually a new style of consultancy that develops the bold business idea into a businessable solution. We are both software and hardware developers with very good and extremely deep technical capabilities, while loving the future very much. Helios, our proprietary framework, allows us to embrace agility and efficiency for creative product disruption and life-empowering change in the industries.
                  <br/>Our mission is to deliver innovative, fully functional products quickly and cost-effectively, helping businesses turn their ideas into reality without the constraints of time and budget.</p>
                <a href="#" class="read-more-btn">Read More</a>
               
              </div>
            
            </Html>
        </mesh>
        <mesh name="crown_sugn_our_service" geometry={nodes.crown_sugn_our_service.geometry} material={materials['Material.003']} position={[12035.32, 385.325, -9]} scale={[1.52, 1.202, 39.55]} >
        <Html>
              <div className='about-wall about-wall-text'
                style={{
                  width: '40rem',
                  position: 'fixed',
                  top: '0%',
                  left: '0%',
                  transform: 'translate(-50%, -50%)',
                  willChange: 'transform, opacity', 
                }}
              >
                
                <div className='hello-img'>
                  <img
                    src="./img/crown-img.svg"
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>
            
            </Html>
        </mesh>
        <mesh name="hello_sign_contact" geometry={nodes.hello_sign_contact.geometry} material={materials['Material.014']} position={[17046.404, 398.64, -9]} >
        <Html>
              <div className='about-wall about-wall-text'
                style={{
                  width: '40rem',
                  position: 'fixed',
                  top: '0%',
                  left: '0%',
                  transform: 'translate(-50%, -50%)',
                  willChange: 'transform, opacity', 
                }}
              >
                
                <div className='hello-img'>
                  <img
                    src="./img/hello-icon.svg"
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>
            
            </Html>
        </mesh>
        <mesh 
            name="contact_form_mesh" 
            geometry={nodes.hello_sign_contact.geometry} 
            material={nodes.hello_sign_contact.material} 
            position={[17596.137, 301.206, -3.029]}

            >
                <Html>
                <ContactForm />
                </Html>
            
            </mesh>
        {/* <mesh name="Play_button" geometry={nodes.Play_button.geometry} material={materials['Material.004']} position={[2864.844, 275.825, -115.224]} /> */}
        <mesh
        name="Play_button"
        geometry={nodes.Play_button.geometry}
        material={materials['Material.004']}
        position={[2864.844, 275.825, -115.224]}
        ref={playButtonRef}
        onClick={handlePlayButtonClick} 
      />
    
      {/* <Html>
        <Modal open={isModalOpen} onClose={handleModalClose}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'black',
              padding: 2,
              width: '80%',
              height: '80%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              outline: 'none',
              position: 'relative',
              zIndex: 1300,
            }}
          >
         
            <button
              onClick={handleModalClose}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                color: 'white',
                border: 'none',
                fontSize: '30px', 
                cursor: 'pointer',
                zIndex: 1400, 
              }}
            >
              ✖
            </button>

         
            <video controls autoPlay loop style={{ width: '100%', height: '100%' }}>
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Modal>
      </Html> */}
        <mesh name="portfolio_text_01" geometry={nodes.portfolio_text_01.geometry} material={nodes.portfolio_text_01.material} position={[6151.875, 287.038, -9]} >
        <Html>
              <div className='about-wall work-wall-text work-txt-wal'
                style={{
                  width: '40rem',
                  position: 'fixed',
                  top: '0%',
                  left: '-50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Secure Bag</h2>
                <p>An incredible safe consumer bag conceived to keep belongings safe in public places. With a unique locking mechanism and tamper-proof materials, the Secure Bag offers a peace of mind for travelers and urban resident.</p>
                <a href="#" class="read-more-btn">View Case</a>
              </div>
            </Html>
        </mesh>
        <mesh name="portfolio_text_02" geometry={nodes.portfolio_text_02.geometry} material={nodes.portfolio_text_02.material} position={[7004.646, 287.038, -9]} >
        <Html>
            <div className='about-wall work-wall-text work-txt-wal'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Pressure Transducer Monitor </h2>
              <p>This is to address liquid level being monitored in consumer tanks. Innovative device to keep track of the status of its tanks by an individual remotely, thus improving safety and efficiency in both industrial and consumer practices.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
        </mesh>
        <mesh name="portfolio_text_03" geometry={nodes.portfolio_text_03.geometry} material={nodes.portfolio_text_03.material} position={[7858.798, 287.038, -9]} >
        <Html>
            <div className='about-wall work-wall-text work-txt-wal'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Cellular-Enabled Medication Adherence Device</h2>
              <p>It is a revolutionizing device meant to help patients track medication adherence while on the move. It gives real-time alerts and reminders for patients to keep in touch with their treatment plan, improving health outcomes.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
        </mesh>
        <mesh name="portfolio_text_04" geometry={nodes.portfolio_text_04.geometry} material={nodes.portfolio_text_04.material} position={[8730.079, 287.038, -9]} >
        <Html>
            <div className='about-wall work-wall-text work-txt-wal'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Secure Bag</h2>
              <p>An incredible safe consumer bag conceived to keep belongings safe in public places. With a unique locking mechanism and tamper-proof materials, the Secure Bag offers a peace of mind for travelers and urban resident.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
        </mesh>
        <mesh name="portfolio_text_05" geometry={nodes.portfolio_text_05.geometry} material={nodes.portfolio_text_05.material} position={[9580.784, 287.038, -9]} >
        <Html>
            <div className='about-wall work-wall-text work-txt-wal'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Pressure Transducer Monitor </h2>
              <p>This is to address liquid level being monitored in consumer tanks. Innovative device to keep track of the status of its tanks by an individual remotely, thus improving safety and efficiency in both industrial and consumer practices.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
        </mesh>
        <mesh name="portfolio_text_06" geometry={nodes.portfolio_text_06.geometry} material={nodes.portfolio_text_06.material} position={[10447.699, 287.038, -9]} >
        <Html>
            <div className='about-wall work-wall-text work-txt-wal'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Cellular-Enabled Medication Adherence Device</h2>
              <p>It is a revolutionizing device meant to help patients track medication adherence while on the move. It gives real-time alerts and reminders for patients to keep in touch with their treatment plan, improving health outcomes.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
        </mesh>
        {/* <mesh name="screen_showreel" geometry={nodes.screen_showreel.geometry} material={materials['material-04']} position={[2865.328, 286.533, -343.839]} >

        </mesh> */}
        <mesh 
          name="screen_showreel"
          ref={playButtonRef}
          geometry={nodes.screen_showreel.geometry} 
          material={materials['material-04']} 
          position={[2865.328, 286.533, -343.739]} 
          rotation={[0, Math.PI, Math.PI]} // Keep this rotation for proper initial alignment
          scale={[-1, 1, 1]} // This will flip the mesh horizontally
        />
        <mesh name="services_text_block" geometry={nodes.services_text_block.geometry} material={nodes.services_text_block.material} position={[13504.598, 252.46, -9]} >
       
        <Html  style={{
                width: '1000rem',

              }} >
            <div className='about-wall work-wall-text service-text-row'
              style={{
                width: '1000rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-40rem, -50%)',
              }}
            >
              <div className='service-text-col'  style={{
                width: '',
              }}>
              <h5>01</h5>
              <h2 style={{ fontSize: '27px', marginTop: '1rem', Top: '0', }}>Hardware Design and Development</h2>
              <p>We specialize in creating and building hardware solutions tailored to your requirements. Our work ranges from custom electronics to embedded systems. We design top-notch hardware that is innovative, compatible, dependable, and operates efficiently, striving to meet and surpass industry performance benchmarks.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>02</h5>
              <h2 style={{ fontSize: '27px', marginTop: '1rem', Top: '0', }}>Software and Platform Development</h2>
              <p>We develop software applications that are very effective and perfectly qualify our hardware innovations to ensure a total package. Custom applications, cloud-based platforms, IoT solutions; all compatible and very effective on any device or environment necessary from and after becoming a complete solution partner for any customer.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>03</h5>
              <h2 style={{ fontSize: '27px', marginTop: '1rem', Top: '0', }}>Mechanical and Electrical Engineering</h2>
              <p>Our engineers bring precision and expertise to every project, whether it’s designing intricate mechanical systems or developing electrical circuits. We work closely with you to deliver integrated engineering solutions that solve real-world challenges and drive performance.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>04</h5>
              <h2 style={{ fontSize: '27px', marginTop: '1rem', Top: '0', }}>Industrial & Packaging Design</h2>
              <p>Our products encompass functionality, robustness as well as super beautiful appearance. Although beginning with sketches and 3D modeling, our designs actually fit in real-world applications. Thereafter, our design styles also guarantee that your products will be addressed in ways that will be both protective and eye-catching. Therefore, by function and branding, we give possible solutions for better user experience and highlight your great products.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>05</h5>
              <h2 style={{ fontSize: '27px', marginTop: '1rem', Top: '0', }}>Manufacturing Automation and Production</h2>
              <p>We help streamline production processes, reducing costs and time while increasing quality and efficiency. From concept to production, we leverage cutting-edge manufacturing automation techniques to deliver high-quality products at scale, on time, and within budget.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>06</h5>
              <h2 style={{ fontSize: '27px', marginTop: '1rem', Top: '0', }}>Mobile App Development</h2>
              <p>Bring life, function and better experiences to iPhones or Android devices through our mobile application development expert team. Whether you really need a companion app with hardware devices or a stand-alone app solution, we can develop user-centric mobile applications to keep your customers glued to the screens.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
            </div>
          </Html>
          </mesh>
        <group name="Tex_01" position={[3133.68, 0, 0]}>
          <mesh name="Mesh075" geometry={nodes.Mesh075.geometry} material={materials.Tex_01} />
          <mesh name="Mesh075_1" geometry={nodes.Mesh075_1.geometry} material={materials['Material.005']} />
        </group>
        <mesh name="FloorMirror" geometry={nodes.FloorMirror.geometry} material={materials.Tex_02} position={[3133.68, 0.821, 0]} />
        <mesh name="Tex_02_011" geometry={nodes.Tex_02_011.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} />
        <mesh name="Tex_02_001" geometry={nodes.Tex_02_001.geometry} material={materials.Tex_02} position={[16245.512, 64.865, -444.386]} />
        <mesh name="Tex_02_003" geometry={nodes.Tex_02_003.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} />
        <mesh name="Tex_02_004" geometry={nodes.Tex_02_004.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} />
        <mesh name="Tex_02_010" geometry={nodes.Tex_02_010.geometry} material={materials.Tex_02} position={[16045.978, 0, -85.961]} />
        <mesh name="Tex_02_012" geometry={nodes.Tex_02_012.geometry} material={materials.Tex_02} position={[11605.813, 126, -479.078]} />
        <mesh name="Tex_02_013" geometry={nodes.Tex_02_013.geometry} material={materials.Tex_02} position={[1081.763, 0.233, -483.224]} />
        <mesh name="Tex_02_014" geometry={nodes.Tex_02_014.geometry} material={materials.Tex_02} position={[16045.978, 0, -85.961]} />
        <mesh name="Tex_02_015" geometry={nodes.Tex_02_015.geometry} material={materials.Tex_02} position={[11636.431, 0.8, -348.8]} />
        <mesh name="Tex_02_016" geometry={nodes.Tex_02_016.geometry} material={materials.Tex_02} position={[11636.431, 0.8, -348.8]} />
        <mesh name="Tex_02_017" geometry={nodes.Tex_02_017.geometry} material={materials.Tex_02} position={[11664.611, 62.413, -470.158]} />
        <mesh name="Tex_02_018" geometry={nodes.Tex_02_018.geometry} material={materials.Tex_02} position={[4642.812, 57.755, -441.286]} />
        <mesh name="Tex_02_019" geometry={nodes.Tex_02_019.geometry} material={materials.Tex_02} position={[1082.439, 21.396, -479.564]} />
        <mesh name="Planet_Rotation" geometry={nodes.Planet_Rotation.geometry} material={materials.Tex_02} position={[16045.839, 286.533, -85.96]} />
        <mesh name="Tex_02_002001" geometry={nodes.Tex_02_002001.geometry} material={materials.Tex_02} position={[2402.937, 33.262, -189.113]} />
        <mesh name="Tex_02_017001" geometry={nodes.Tex_02_017001.geometry} material={materials.Tex_02} position={[11664.611, 62.413, -470.158]} />
        <mesh name="Tex_03" geometry={nodes.Tex_03.geometry} material={materials.Tex_03} scale={821.018} />
        <mesh name="Text_Var_02" geometry={nodes.Text_Var_02.geometry} material={materials.Tex_03} position={[0.628, -0.57, -4.082]} scale={325.173} />
        <mesh name="ImageToStlcom_logo" geometry={nodes.ImageToStlcom_logo.geometry} material={materials['Material.006']} position={[862.551, 255.775, -58.937]} rotation={[1.585, 0, 0]} />
        <mesh name="Tex_02_002002" geometry={nodes.Tex_02_002002.geometry} material={materials.Tex_02} position={[3332.325, 33.445, -191.833]} rotation={[-Math.PI, 0.018, -Math.PI]} />
        <mesh name="portfolio_text_01001" geometry={nodes.portfolio_text_01001.geometry} material={materials['Material.007']} position={[3432.225, 316.713, -261.516]} rotation={[0, -1.528, 0]} scale={[0.379, 0.544, 0.699]} />
        <mesh name="portfolio_text_01002" geometry={nodes.portfolio_text_01002.geometry} material={materials['Material.008']} position={[2296.807, 315.353, -260.52]} rotation={[-Math.PI, 1.567, -Math.PI]} scale={[0.379, 0.544, 0.699]} />
        <mesh name="Material_001-material" geometry={nodes['Material_001-material'].geometry} material={materials['Material.011']} />
        <mesh name="Material_001-material001" geometry={nodes['Material_001-material001'].geometry} material={materials['Material.011']} />
        <mesh name="Material_001-material002" geometry={nodes['Material_001-material002'].geometry} material={materials['Material.011']} />
        <mesh name="Material_001-material003" geometry={nodes['Material_001-material003'].geometry} material={materials['Material.011']} />
        <mesh name="Material_001-material004" geometry={nodes['Material_001-material004'].geometry} material={materials['Material.011']} />
        <mesh name="Material_001-material005" geometry={nodes['Material_001-material005'].geometry} material={materials['Material.011']} />
        <mesh name="portfolio_text_06001" geometry={nodes.portfolio_text_06001.geometry} material={materials['Material.013']} position={[10895.171, 290.826, -263.851]} rotation={[-0.021, 1.57, 0.021]} scale={[0.422, 0.598, 1.188]} />
        <mesh name="portfolio_text_06002" geometry={nodes.portfolio_text_06002.geometry} material={materials['Material.012']} position={[11743.628, 299.703, -273.591]} rotation={[-0.021, 1.57, 0.021]} scale={[0.422, 0.598, 1.188]} />
        {/* <mesh name="about_text_block001" geometry={nodes.about_text_block001.geometry} material={materials['Material.015']} position={[1715.285, 279.178, 0.029]} /> */}
        <mesh name="mouth_top_pac_&_ghost_0" geometry={nodes['mouth_top_pac_&_ghost_0'].geometry} material={materials.pac__ghost} />
        <mesh name="Text_Var_02001" geometry={nodes.Text_Var_02001.geometry} material={materials.Tex_03} position={[93.265, 46.919, -4.431]} scale={[218.828, 284.532, 329.405]} />
        <mesh name="GirlSit_03" geometry={nodes.GirlSit_03.geometry} material={materials.NewMat01} position={[2393.571, -18.046, -135.121]} rotation={[-1.412, 1.314, 1.351]} scale={[1.062, 0.958, 1.272]} />
        <mesh name="GirlSit_00" geometry={nodes.GirlSit_00.geometry} material={materials.wire_028089177} position={[2393.571, -18.046, -135.121]} rotation={[-1.412, 1.314, 1.351]} scale={[1.062, 0.958, 1.272]} />
        <mesh name="GirlSit_01" geometry={nodes.GirlSit_01.geometry} material={materials.Default} position={[2393.571, -18.046, -135.121]} rotation={[-1.412, 1.314, 1.351]} scale={[1.062, 0.958, 1.272]} />
        <mesh name="GirlSit_02" geometry={nodes.GirlSit_02.geometry} material={materials.wire_143225087} position={[2393.571, -18.046, -135.121]} rotation={[-1.412, 1.314, 1.351]} scale={[1.062, 0.958, 1.272]} />
        <mesh name="GirlSit_03001" geometry={nodes.GirlSit_03001.geometry} material={materials['NewMat01.001']} position={[3317.184, -18.567, -169.167]} rotation={[-1.944, -1.018, -1.82]} scale={[1.774, 1.076, 1.353]} />
        <mesh name="GirlSit_00001" geometry={nodes.GirlSit_00001.geometry} material={materials['wire_028089177.001']} position={[3317.184, -18.567, -169.167]} rotation={[-1.944, -1.018, -1.82]} scale={[1.774, 1.076, 1.353]} />
        <mesh name="GirlSit_01001" geometry={nodes.GirlSit_01001.geometry} material={materials['Default.001']} position={[3317.184, -18.567, -169.167]} rotation={[-1.944, -1.018, -1.82]} scale={[1.774, 1.076, 1.353]} />
        <mesh name="GirlSit_02001" geometry={nodes.GirlSit_02001.geometry} material={materials['wire_143225087.001']} position={[3317.184, -18.567, -169.167]} rotation={[-1.944, -1.018, -1.82]} scale={[1.774, 1.076, 1.353]} />
        <mesh name="Table002" geometry={nodes.Table002.geometry} material={materials['Material.106']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Table003" geometry={nodes.Table003.geometry} material={materials['Material.060']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Room_Frame001" geometry={nodes.Room_Frame001.geometry} material={materials['Material.061']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve033" geometry={nodes.PM3D_Sphere3D1_Curve033.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve034" geometry={nodes.PM3D_Sphere3D1_Curve034.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve035" geometry={nodes.PM3D_Sphere3D1_Curve035.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve036" geometry={nodes.PM3D_Sphere3D1_Curve036.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve037" geometry={nodes.PM3D_Sphere3D1_Curve037.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve038" geometry={nodes.PM3D_Sphere3D1_Curve038.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve039" geometry={nodes.PM3D_Sphere3D1_Curve039.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve040" geometry={nodes.PM3D_Sphere3D1_Curve040.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve041" geometry={nodes.PM3D_Sphere3D1_Curve041.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve042" geometry={nodes.PM3D_Sphere3D1_Curve042.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve043" geometry={nodes.PM3D_Sphere3D1_Curve043.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve044" geometry={nodes.PM3D_Sphere3D1_Curve044.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve045" geometry={nodes.PM3D_Sphere3D1_Curve045.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve046" geometry={nodes.PM3D_Sphere3D1_Curve046.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve047" geometry={nodes.PM3D_Sphere3D1_Curve047.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve048" geometry={nodes.PM3D_Sphere3D1_Curve048.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve049" geometry={nodes.PM3D_Sphere3D1_Curve049.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve050" geometry={nodes.PM3D_Sphere3D1_Curve050.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve051" geometry={nodes.PM3D_Sphere3D1_Curve051.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve052" geometry={nodes.PM3D_Sphere3D1_Curve052.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve053" geometry={nodes.PM3D_Sphere3D1_Curve053.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve054" geometry={nodes.PM3D_Sphere3D1_Curve054.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve055" geometry={nodes.PM3D_Sphere3D1_Curve055.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve056" geometry={nodes.PM3D_Sphere3D1_Curve056.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve057" geometry={nodes.PM3D_Sphere3D1_Curve057.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve058" geometry={nodes.PM3D_Sphere3D1_Curve058.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve059" geometry={nodes.PM3D_Sphere3D1_Curve059.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve060" geometry={nodes.PM3D_Sphere3D1_Curve060.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve061" geometry={nodes.PM3D_Sphere3D1_Curve061.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve062" geometry={nodes.PM3D_Sphere3D1_Curve062.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve063" geometry={nodes.PM3D_Sphere3D1_Curve063.geometry} material={materials['Material.062']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2018" geometry={nodes.PM3D_Sphere3D1_2018.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2019" geometry={nodes.PM3D_Sphere3D1_2019.geometry} material={materials['Material.064']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2020" geometry={nodes.PM3D_Sphere3D1_2020.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2021" geometry={nodes.PM3D_Sphere3D1_2021.geometry} material={materials['Material.064']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2022" geometry={nodes.PM3D_Sphere3D1_2022.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2023" geometry={nodes.PM3D_Sphere3D1_2023.geometry} material={materials['Material.064']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2024" geometry={nodes.PM3D_Sphere3D1_2024.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2025" geometry={nodes.PM3D_Sphere3D1_2025.geometry} material={materials['Material.064']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2026" geometry={nodes.PM3D_Sphere3D1_2026.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2027" geometry={nodes.PM3D_Sphere3D1_2027.geometry} material={materials['Material.064']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2028" geometry={nodes.PM3D_Sphere3D1_2028.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2029" geometry={nodes.PM3D_Sphere3D1_2029.geometry} material={materials['Material.064']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2030" geometry={nodes.PM3D_Sphere3D1_2030.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2031" geometry={nodes.PM3D_Sphere3D1_2031.geometry} material={materials['Material.064']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2032" geometry={nodes.PM3D_Sphere3D1_2032.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2033" geometry={nodes.PM3D_Sphere3D1_2033.geometry} material={materials['Material.064']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2001_Curve002" geometry={nodes.PM3D_Sphere3D1_2001_Curve002.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve002.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2001_Curve004" geometry={nodes.PM3D_Sphere3D1_2001_Curve004.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve004.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2001_Curve006" geometry={nodes.PM3D_Sphere3D1_2001_Curve006.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve006.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2001_Curve008" geometry={nodes.PM3D_Sphere3D1_2001_Curve008.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve008.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2001_Curve010" geometry={nodes.PM3D_Sphere3D1_2001_Curve010.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve010.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2001_Curve012" geometry={nodes.PM3D_Sphere3D1_2001_Curve012.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve012.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2001_Curve014" geometry={nodes.PM3D_Sphere3D1_2001_Curve014.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve014.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2001_Curve016" geometry={nodes.PM3D_Sphere3D1_2001_Curve016.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve016.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2001_Curve019" geometry={nodes.PM3D_Sphere3D1_2001_Curve019.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve019.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2001_Curve021" geometry={nodes.PM3D_Sphere3D1_2001_Curve021.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve021.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2001_Curve023" geometry={nodes.PM3D_Sphere3D1_2001_Curve023.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve023.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2001_Curve025" geometry={nodes.PM3D_Sphere3D1_2001_Curve025.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve025.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2001_Curve027" geometry={nodes.PM3D_Sphere3D1_2001_Curve027.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve027.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2001_Curve029" geometry={nodes.PM3D_Sphere3D1_2001_Curve029.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve029.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2001_Curve031" geometry={nodes.PM3D_Sphere3D1_2001_Curve031.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve031.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2001_Curve033" geometry={nodes.PM3D_Sphere3D1_2001_Curve033.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve033.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1009" geometry={nodes.PM3D_Sphere3D1009.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1010" geometry={nodes.PM3D_Sphere3D1010.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1011" geometry={nodes.PM3D_Sphere3D1011.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1012" geometry={nodes.PM3D_Sphere3D1012.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1013" geometry={nodes.PM3D_Sphere3D1013.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1014" geometry={nodes.PM3D_Sphere3D1014.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1015" geometry={nodes.PM3D_Sphere3D1015.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1016" geometry={nodes.PM3D_Sphere3D1016.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane020" geometry={nodes.Plane020.geometry} material={materials['Material.066']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane030" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane097_1" geometry={nodes.Plane097_1.geometry} material={materials['Material.067']} />
          <mesh name="Plane097_2" geometry={nodes.Plane097_2.geometry} material={materials['Material.068']} />
        </group>
        <mesh name="Plane036" geometry={nodes.Plane036.geometry} material={materials['Material.069']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane037" geometry={nodes.Plane037.geometry} material={materials['Material.066']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane041" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane100_1" geometry={nodes.Plane100_1.geometry} material={materials['Material.067']} />
          <mesh name="Plane100_2" geometry={nodes.Plane100_2.geometry} material={materials['Material.068']} />
        </group>
        <mesh name="Plane042" geometry={nodes.Plane042.geometry} material={materials['Material.069']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane046" geometry={nodes.Plane046.geometry} material={materials['Material.066']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane047" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane103_1" geometry={nodes.Plane103_1.geometry} material={materials['Material.067']} />
          <mesh name="Plane103_2" geometry={nodes.Plane103_2.geometry} material={materials['Material.068']} />
        </group>
        <mesh name="Plane051" geometry={nodes.Plane051.geometry} material={materials['Material.069']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane052" geometry={nodes.Plane052.geometry} material={materials['Material.066']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane056" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane106_1" geometry={nodes.Plane106_1.geometry} material={materials['Material.067']} />
          <mesh name="Plane106_2" geometry={nodes.Plane106_2.geometry} material={materials['Material.068']} />
        </group>
        <mesh name="Plane057" geometry={nodes.Plane057.geometry} material={materials['Material.069']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane061" geometry={nodes.Plane061.geometry} material={materials['Material.066']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane062" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane109_1" geometry={nodes.Plane109_1.geometry} material={materials['Material.067']} />
          <mesh name="Plane109_2" geometry={nodes.Plane109_2.geometry} material={materials['Material.068']} />
        </group>
        <mesh name="Plane066" geometry={nodes.Plane066.geometry} material={materials['Material.069']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane067" geometry={nodes.Plane067.geometry} material={materials['Material.066']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane071" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane112_1" geometry={nodes.Plane112_1.geometry} material={materials['Material.067']} />
          <mesh name="Plane112_2" geometry={nodes.Plane112_2.geometry} material={materials['Material.068']} />
        </group>
        <mesh name="Plane072" geometry={nodes.Plane072.geometry} material={materials['Material.069']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane076" geometry={nodes.Plane076.geometry} material={materials['Material.066']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane077" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane115_1" geometry={nodes.Plane115_1.geometry} material={materials['Material.067']} />
          <mesh name="Plane115_2" geometry={nodes.Plane115_2.geometry} material={materials['Material.068']} />
        </group>
        <mesh name="Plane081" geometry={nodes.Plane081.geometry} material={materials['Material.069']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane082" geometry={nodes.Plane082.geometry} material={materials['Material.066']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane086" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane118_1" geometry={nodes.Plane118_1.geometry} material={materials['Material.067']} />
          <mesh name="Plane118_2" geometry={nodes.Plane118_2.geometry} material={materials['Material.068']} />
        </group>
        <mesh name="Plane087" geometry={nodes.Plane087.geometry} material={materials['Material.069']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane091" geometry={nodes.Plane091.geometry} material={materials['Material.066']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane092" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane121_1" geometry={nodes.Plane121_1.geometry} material={materials['Material.067']} />
          <mesh name="Plane121_2" geometry={nodes.Plane121_2.geometry} material={materials['Material.068']} />
        </group>
        <mesh name="Plane096" geometry={nodes.Plane096.geometry} material={materials['Material.069']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane097" geometry={nodes.Plane097.geometry} material={materials['Material.066']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane101" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane124_1" geometry={nodes.Plane124_1.geometry} material={materials['Material.067']} />
          <mesh name="Plane124_2" geometry={nodes.Plane124_2.geometry} material={materials['Material.068']} />
        </group>
        <mesh name="Plane102" geometry={nodes.Plane102.geometry} material={materials['Material.069']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane106" geometry={nodes.Plane106.geometry} material={materials['Material.066']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane107" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane127_1" geometry={nodes.Plane127_1.geometry} material={materials['Material.067']} />
          <mesh name="Plane127_2" geometry={nodes.Plane127_2.geometry} material={materials['Material.068']} />
        </group>
        <mesh name="Plane111" geometry={nodes.Plane111.geometry} material={materials['Material.069']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane112" geometry={nodes.Plane112.geometry} material={materials['Material.066']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane116" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane130_1" geometry={nodes.Plane130_1.geometry} material={materials['Material.067']} />
          <mesh name="Plane130_2" geometry={nodes.Plane130_2.geometry} material={materials['Material.068']} />
        </group>
        <mesh name="Plane117" geometry={nodes.Plane117.geometry} material={materials['Material.069']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane118" geometry={nodes.Plane118.geometry} material={materials['Material.066']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane119" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane133_1" geometry={nodes.Plane133_1.geometry} material={materials['Material.067']} />
          <mesh name="Plane133_2" geometry={nodes.Plane133_2.geometry} material={materials['Material.068']} />
        </group>
        <mesh name="Plane120" geometry={nodes.Plane120.geometry} material={materials['Material.069']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane121" geometry={nodes.Plane121.geometry} material={materials['Material.066']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane122" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane136_1" geometry={nodes.Plane136_1.geometry} material={materials['Material.067']} />
          <mesh name="Plane136_2" geometry={nodes.Plane136_2.geometry} material={materials['Material.068']} />
        </group>
        <mesh name="Plane123" geometry={nodes.Plane123.geometry} material={materials['Material.069']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane124" geometry={nodes.Plane124.geometry} material={materials['Material.066']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane125" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane139_1" geometry={nodes.Plane139_1.geometry} material={materials['Material.067']} />
          <mesh name="Plane139_2" geometry={nodes.Plane139_2.geometry} material={materials['Material.068']} />
        </group>
        <mesh name="Plane126" geometry={nodes.Plane126.geometry} material={materials['Material.069']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane127" geometry={nodes.Plane127.geometry} material={materials['Material.066']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane128" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane142_1" geometry={nodes.Plane142_1.geometry} material={materials['Material.067']} />
          <mesh name="Plane142_2" geometry={nodes.Plane142_2.geometry} material={materials['Material.068']} />
        </group>
        <mesh name="Plane129" geometry={nodes.Plane129.geometry} material={materials['Material.069']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane130" geometry={nodes.Plane130.geometry} material={materials['Material.066']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane131" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane145_1" geometry={nodes.Plane145_1.geometry} material={materials['Material.067']} />
          <mesh name="Plane145_2" geometry={nodes.Plane145_2.geometry} material={materials['Material.068']} />
        </group>
        <mesh name="Plane132" geometry={nodes.Plane132.geometry} material={materials['Material.069']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane133" geometry={nodes.Plane133.geometry} material={materials['Material.070']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane134" geometry={nodes.Plane134.geometry} material={nodes.Plane134.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane135" geometry={nodes.Plane135.geometry} material={nodes.Plane135.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane136" geometry={nodes.Plane136.geometry} material={materials['Material.071']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane137" geometry={nodes.Plane137.geometry} material={materials['Material.071']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane138" geometry={nodes.Plane138.geometry} material={materials['Material.071']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane139" geometry={nodes.Plane139.geometry} material={materials['Material.071']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane140" geometry={nodes.Plane140.geometry} material={materials['Material.071']} position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <group name="Plane024_SurfaceDrawing001" position={[3.276, 3.386, -1.98]} scale={1.865} />
        </mesh>
        <mesh name="Plane141" geometry={nodes.Plane141.geometry} material={materials['Material.071']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane142" geometry={nodes.Plane142.geometry} material={materials['Material.072']} position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <group name="Plane022_SurfaceDrawing001" position={[0.406, 0.379, 0.309]} rotation={[0, 0, -Math.PI / 2]} scale={0.326} />
        </mesh>
        <mesh name="Plane143" geometry={nodes.Plane143.geometry} material={nodes.Plane143.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane144" geometry={nodes.Plane144.geometry} material={materials['Material.073']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve177" geometry={nodes.Plane018_Curve177.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve178" geometry={nodes.Plane018_Curve178.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve179" geometry={nodes.Plane018_Curve179.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve180" geometry={nodes.Plane018_Curve180.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve181" geometry={nodes.Plane018_Curve181.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve182" geometry={nodes.Plane018_Curve182.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve183" geometry={nodes.Plane018_Curve183.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve184" geometry={nodes.Plane018_Curve184.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve185" geometry={nodes.Plane018_Curve185.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve186" geometry={nodes.Plane018_Curve186.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve187" geometry={nodes.Plane018_Curve187.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve188" geometry={nodes.Plane018_Curve188.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve189" geometry={nodes.Plane018_Curve189.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve190" geometry={nodes.Plane018_Curve190.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve191" geometry={nodes.Plane018_Curve191.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve192" geometry={nodes.Plane018_Curve192.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve193" geometry={nodes.Plane018_Curve193.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve194" geometry={nodes.Plane018_Curve194.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve195" geometry={nodes.Plane018_Curve195.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve196" geometry={nodes.Plane018_Curve196.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve197" geometry={nodes.Plane018_Curve197.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve198" geometry={nodes.Plane018_Curve198.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve199" geometry={nodes.Plane018_Curve199.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve200" geometry={nodes.Plane018_Curve200.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve201" geometry={nodes.Plane018_Curve201.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve202" geometry={nodes.Plane018_Curve202.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve203" geometry={nodes.Plane018_Curve203.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve204" geometry={nodes.Plane018_Curve204.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve205" geometry={nodes.Plane018_Curve205.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve206" geometry={nodes.Plane018_Curve206.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve207" geometry={nodes.Plane018_Curve207.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve208" geometry={nodes.Plane018_Curve208.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve209" geometry={nodes.Plane018_Curve209.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve210" geometry={nodes.Plane018_Curve210.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve211" geometry={nodes.Plane018_Curve211.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve212" geometry={nodes.Plane018_Curve212.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve213" geometry={nodes.Plane018_Curve213.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve214" geometry={nodes.Plane018_Curve214.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve215" geometry={nodes.Plane018_Curve215.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve216" geometry={nodes.Plane018_Curve216.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve217" geometry={nodes.Plane018_Curve217.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve218" geometry={nodes.Plane018_Curve218.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve219" geometry={nodes.Plane018_Curve219.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve220" geometry={nodes.Plane018_Curve220.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve221" geometry={nodes.Plane018_Curve221.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve222" geometry={nodes.Plane018_Curve222.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve223" geometry={nodes.Plane018_Curve223.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve224" geometry={nodes.Plane018_Curve224.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve225" geometry={nodes.Plane018_Curve225.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve226" geometry={nodes.Plane018_Curve226.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve227" geometry={nodes.Plane018_Curve227.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve228" geometry={nodes.Plane018_Curve228.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve229" geometry={nodes.Plane018_Curve229.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve230" geometry={nodes.Plane018_Curve230.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve231" geometry={nodes.Plane018_Curve231.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve232" geometry={nodes.Plane018_Curve232.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve233" geometry={nodes.Plane018_Curve233.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve234" geometry={nodes.Plane018_Curve234.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve235" geometry={nodes.Plane018_Curve235.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve236" geometry={nodes.Plane018_Curve236.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve237" geometry={nodes.Plane018_Curve237.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve238" geometry={nodes.Plane018_Curve238.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve239" geometry={nodes.Plane018_Curve239.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve240" geometry={nodes.Plane018_Curve240.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve241" geometry={nodes.Plane018_Curve241.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve242" geometry={nodes.Plane018_Curve242.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve243" geometry={nodes.Plane018_Curve243.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve244" geometry={nodes.Plane018_Curve244.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve245" geometry={nodes.Plane018_Curve245.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve246" geometry={nodes.Plane018_Curve246.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve247" geometry={nodes.Plane018_Curve247.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve248" geometry={nodes.Plane018_Curve248.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve249" geometry={nodes.Plane018_Curve249.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve250" geometry={nodes.Plane018_Curve250.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve251" geometry={nodes.Plane018_Curve251.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve252" geometry={nodes.Plane018_Curve252.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve253" geometry={nodes.Plane018_Curve253.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve254" geometry={nodes.Plane018_Curve254.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve255" geometry={nodes.Plane018_Curve255.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve256" geometry={nodes.Plane018_Curve256.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve257" geometry={nodes.Plane018_Curve257.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve258" geometry={nodes.Plane018_Curve258.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve259" geometry={nodes.Plane018_Curve259.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve260" geometry={nodes.Plane018_Curve260.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve261" geometry={nodes.Plane018_Curve261.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve262" geometry={nodes.Plane018_Curve262.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve263" geometry={nodes.Plane018_Curve263.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve264" geometry={nodes.Plane018_Curve264.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve265" geometry={nodes.Plane018_Curve265.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve266" geometry={nodes.Plane018_Curve266.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve267" geometry={nodes.Plane018_Curve267.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve268" geometry={nodes.Plane018_Curve268.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve269" geometry={nodes.Plane018_Curve269.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve270" geometry={nodes.Plane018_Curve270.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve271" geometry={nodes.Plane018_Curve271.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve272" geometry={nodes.Plane018_Curve272.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve273" geometry={nodes.Plane018_Curve273.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve274" geometry={nodes.Plane018_Curve274.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve275" geometry={nodes.Plane018_Curve275.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve276" geometry={nodes.Plane018_Curve276.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve277" geometry={nodes.Plane018_Curve277.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve278" geometry={nodes.Plane018_Curve278.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve279" geometry={nodes.Plane018_Curve279.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve280" geometry={nodes.Plane018_Curve280.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve281" geometry={nodes.Plane018_Curve281.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve282" geometry={nodes.Plane018_Curve282.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve283" geometry={nodes.Plane018_Curve283.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve284" geometry={nodes.Plane018_Curve284.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve285" geometry={nodes.Plane018_Curve285.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve286" geometry={nodes.Plane018_Curve286.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve287" geometry={nodes.Plane018_Curve287.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve288" geometry={nodes.Plane018_Curve288.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve289" geometry={nodes.Plane018_Curve289.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve290" geometry={nodes.Plane018_Curve290.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve291" geometry={nodes.Plane018_Curve291.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve292" geometry={nodes.Plane018_Curve292.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve293" geometry={nodes.Plane018_Curve293.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve294" geometry={nodes.Plane018_Curve294.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve295" geometry={nodes.Plane018_Curve295.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve296" geometry={nodes.Plane018_Curve296.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve297" geometry={nodes.Plane018_Curve297.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve298" geometry={nodes.Plane018_Curve298.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve299" geometry={nodes.Plane018_Curve299.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve300" geometry={nodes.Plane018_Curve300.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve301" geometry={nodes.Plane018_Curve301.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve302" geometry={nodes.Plane018_Curve302.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve303" geometry={nodes.Plane018_Curve303.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve304" geometry={nodes.Plane018_Curve304.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve305" geometry={nodes.Plane018_Curve305.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve306" geometry={nodes.Plane018_Curve306.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve307" geometry={nodes.Plane018_Curve307.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve308" geometry={nodes.Plane018_Curve308.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve309" geometry={nodes.Plane018_Curve309.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve310" geometry={nodes.Plane018_Curve310.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve311" geometry={nodes.Plane018_Curve311.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve312" geometry={nodes.Plane018_Curve312.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve313" geometry={nodes.Plane018_Curve313.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve314" geometry={nodes.Plane018_Curve314.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve315" geometry={nodes.Plane018_Curve315.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve316" geometry={nodes.Plane018_Curve316.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve317" geometry={nodes.Plane018_Curve317.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve318" geometry={nodes.Plane018_Curve318.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve319" geometry={nodes.Plane018_Curve319.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve320" geometry={nodes.Plane018_Curve320.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve321" geometry={nodes.Plane018_Curve321.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve322" geometry={nodes.Plane018_Curve322.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve323" geometry={nodes.Plane018_Curve323.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve324" geometry={nodes.Plane018_Curve324.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve325" geometry={nodes.Plane018_Curve325.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve326" geometry={nodes.Plane018_Curve326.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve327" geometry={nodes.Plane018_Curve327.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve328" geometry={nodes.Plane018_Curve328.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve329" geometry={nodes.Plane018_Curve329.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve330" geometry={nodes.Plane018_Curve330.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve331" geometry={nodes.Plane018_Curve331.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve332" geometry={nodes.Plane018_Curve332.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve333" geometry={nodes.Plane018_Curve333.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve334" geometry={nodes.Plane018_Curve334.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve335" geometry={nodes.Plane018_Curve335.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve336" geometry={nodes.Plane018_Curve336.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve337" geometry={nodes.Plane018_Curve337.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve338" geometry={nodes.Plane018_Curve338.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve339" geometry={nodes.Plane018_Curve339.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve340" geometry={nodes.Plane018_Curve340.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve341" geometry={nodes.Plane018_Curve341.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve342" geometry={nodes.Plane018_Curve342.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve343" geometry={nodes.Plane018_Curve343.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve344" geometry={nodes.Plane018_Curve344.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve345" geometry={nodes.Plane018_Curve345.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve346" geometry={nodes.Plane018_Curve346.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve347" geometry={nodes.Plane018_Curve347.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve348" geometry={nodes.Plane018_Curve348.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve349" geometry={nodes.Plane018_Curve349.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve350" geometry={nodes.Plane018_Curve350.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve351" geometry={nodes.Plane018_Curve351.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve352" geometry={nodes.Plane018_Curve352.geometry} material={materials['Material.074']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane145" geometry={nodes.Plane145.geometry} material={materials['Material.073']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane146" geometry={nodes.Plane146.geometry} material={nodes.Plane146.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane147" geometry={nodes.Plane147.geometry} material={nodes.Plane147.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane148" geometry={nodes.Plane148.geometry} material={nodes.Plane148.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane149" geometry={nodes.Plane149.geometry} material={nodes.Plane149.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane150" geometry={nodes.Plane150.geometry} material={nodes.Plane150.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane151" geometry={nodes.Plane151.geometry} material={nodes.Plane151.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane152" geometry={nodes.Plane152.geometry} material={nodes.Plane152.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane153" geometry={nodes.Plane153.geometry} material={nodes.Plane153.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane154" geometry={nodes.Plane154.geometry} material={nodes.Plane154.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane155" geometry={nodes.Plane155.geometry} material={nodes.Plane155.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane156" geometry={nodes.Plane156.geometry} material={materials['Material.075']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane157" geometry={nodes.Plane157.geometry} material={nodes.Plane157.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane158" geometry={nodes.Plane158.geometry} material={materials['Material.075']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane159" geometry={nodes.Plane159.geometry} material={nodes.Plane159.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane160" geometry={nodes.Plane160.geometry} material={materials['Material.075']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane161" geometry={nodes.Plane161.geometry} material={nodes.Plane161.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane162" geometry={nodes.Plane162.geometry} material={materials['Material.075']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane163" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane177" geometry={nodes.Plane177.geometry} material={materials['Material.076']} />
          <mesh name="Plane177_1" geometry={nodes.Plane177_1.geometry} material={materials['Material.077']} />
        </group>
        <mesh name="Main_Room001" geometry={nodes.Main_Room001.geometry} material={materials['Material.078']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Mac010" geometry={nodes.Mac010.geometry} material={materials['Material.079']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Mac011" geometry={nodes.Mac011.geometry} material={materials['Material.079']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Mac012" geometry={nodes.Mac012.geometry} material={nodes.Mac012.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Mac013" geometry={nodes.Mac013.geometry} material={materials['Material.106']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Mac014" geometry={nodes.Mac014.geometry} material={nodes.Mac014.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Mac015" geometry={nodes.Mac015.geometry} material={nodes.Mac015.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Mac016" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane184" geometry={nodes.Plane184.geometry} material={materials['Material.082']} />
          <mesh name="Plane184_1" geometry={nodes.Plane184_1.geometry} material={materials['Material.080']} />
          <mesh name="Plane184_2" geometry={nodes.Plane184_2.geometry} material={materials['Material.081']} />
        </group>
        <group name="Mac017" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane185" geometry={nodes.Plane185.geometry} material={materials['Material.082']} />
          <mesh name="Plane185_1" geometry={nodes.Plane185_1.geometry} material={materials['Material.080']} />
          <mesh name="Plane185_2" geometry={nodes.Plane185_2.geometry} material={materials['Material.081']} />
        </group>
        <group name="Mac018" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane186" geometry={nodes.Plane186.geometry} material={materials['Material.082']} />
          <mesh name="Plane186_1" geometry={nodes.Plane186_1.geometry} material={materials['Material.080']} />
          <mesh name="Plane186_2" geometry={nodes.Plane186_2.geometry} material={materials['Material.081']} />
        </group>
        <group name="Mac019" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane187" geometry={nodes.Plane187.geometry} material={materials['Material.082']} />
          <mesh name="Plane187_1" geometry={nodes.Plane187_1.geometry} material={materials['Material.080']} />
          <mesh name="Plane187_2" geometry={nodes.Plane187_2.geometry} material={materials['Material.081']} />
          <group name="Plane002_SurfaceDrawing001" position={[1.571, -6.082, 6.201]} rotation={[Math.PI, 0, Math.PI]} scale={[0.395, 0.395, 0.418]} />
        </group>
        <mesh name="Low001" geometry={nodes.Low001.geometry} material={materials['Material.083']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Low002" geometry={nodes.Low002.geometry} material={materials['Material.083']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Low003" geometry={nodes.Low003.geometry} material={materials['Material.083']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="High006" geometry={nodes.High006.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="High007" geometry={nodes.High007.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="High008" geometry={nodes.High008.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="High009" geometry={nodes.High009.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="High010" geometry={nodes.High010.geometry} material={materials['Material.063']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Cylinder003" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder003_1" geometry={nodes.Cylinder003_1.geometry} material={materials['Material.084']} />
          <mesh name="Cylinder003_2" geometry={nodes.Cylinder003_2.geometry} material={materials['Material.085']} />
        </group>
        <group name="Cylinder021" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder020_1" geometry={nodes.Cylinder020_1.geometry} material={materials['Material.084']} />
          <mesh name="Cylinder020_2" geometry={nodes.Cylinder020_2.geometry} material={materials['Material.085']} />
        </group>
        <group name="Cylinder022" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder021_1" geometry={nodes.Cylinder021_1.geometry} material={materials['Material.084']} />
          <mesh name="Cylinder021_2" geometry={nodes.Cylinder021_2.geometry} material={materials['Material.085']} />
        </group>
        <group name="Cylinder023" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder022_1" geometry={nodes.Cylinder022_1.geometry} material={materials['Material.084']} />
          <mesh name="Cylinder022_2" geometry={nodes.Cylinder022_2.geometry} material={materials['Material.085']} />
        </group>
        <group name="Cylinder024" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder023_1" geometry={nodes.Cylinder023_1.geometry} material={materials['Material.084']} />
          <mesh name="Cylinder023_2" geometry={nodes.Cylinder023_2.geometry} material={materials['Material.085']} />
        </group>
        <group name="Cylinder025" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder024_1" geometry={nodes.Cylinder024_1.geometry} material={materials['Material.084']} />
          <mesh name="Cylinder024_2" geometry={nodes.Cylinder024_2.geometry} material={materials['Material.085']} />
        </group>
        <group name="Cylinder026" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder025_1" geometry={nodes.Cylinder025_1.geometry} material={materials['Material.084']} />
          <mesh name="Cylinder025_2" geometry={nodes.Cylinder025_2.geometry} material={materials['Material.085']} />
        </group>
        <group name="Cylinder027" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder026_1" geometry={nodes.Cylinder026_1.geometry} material={materials['Material.084']} />
          <mesh name="Cylinder026_2" geometry={nodes.Cylinder026_2.geometry} material={materials['Material.085']} />
        </group>
        <group name="Cylinder028" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder027_1" geometry={nodes.Cylinder027_1.geometry} material={materials['Material.086']} />
          <mesh name="Cylinder027_2" geometry={nodes.Cylinder027_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="Cylinder029" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder028_1" geometry={nodes.Cylinder028_1.geometry} material={materials['Material.086']} />
          <mesh name="Cylinder028_2" geometry={nodes.Cylinder028_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="Cylinder030" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder029_1" geometry={nodes.Cylinder029_1.geometry} material={materials['Material.086']} />
          <mesh name="Cylinder029_2" geometry={nodes.Cylinder029_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="Cylinder031" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder030_1" geometry={nodes.Cylinder030_1.geometry} material={materials['Material.086']} />
          <mesh name="Cylinder030_2" geometry={nodes.Cylinder030_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="Cylinder032" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder031_1" geometry={nodes.Cylinder031_1.geometry} material={materials['Material.086']} />
          <mesh name="Cylinder031_2" geometry={nodes.Cylinder031_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="Cylinder033" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder032_1" geometry={nodes.Cylinder032_1.geometry} material={materials['Material.086']} />
          <mesh name="Cylinder032_2" geometry={nodes.Cylinder032_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="Cylinder034" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder033_1" geometry={nodes.Cylinder033_1.geometry} material={materials['Material.086']} />
          <mesh name="Cylinder033_2" geometry={nodes.Cylinder033_2.geometry} material={materials['Material.087']} />
        </group>
        <group name="Cylinder035" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder034_1" geometry={nodes.Cylinder034_1.geometry} material={materials['Material.086']} />
          <mesh name="Cylinder034_2" geometry={nodes.Cylinder034_2.geometry} material={materials['Material.087']} />
        </group>
        <mesh name="Cylinder036" geometry={nodes.Cylinder036.geometry} material={nodes.Cylinder036.material} position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <group name="Plant1001">
            <mesh name="Plantt001" geometry={nodes.Plantt001.geometry} material={materials['plant t..001']} />
            <mesh name="Plantt001_1" geometry={nodes.Plantt001_1.geometry} material={materials['PLant t3.001']} />
          </group>
          <group name="Plant2001">
            <mesh name="Plantt2001" geometry={nodes.Plantt2001.geometry} material={materials['plant t..001']} />
            <mesh name="Plantt2001_1" geometry={nodes.Plantt2001_1.geometry} material={materials['PLant t3.001']} />
          </group>
        </mesh>
        <mesh name="Cylinder037" geometry={nodes.Cylinder037.geometry} material={nodes.Cylinder037.material} position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plant4001" geometry={nodes.Plant4001.geometry} material={materials['Material.065']} />
        </mesh>
        <group name="Cube008" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube025_1" geometry={nodes.Cube025_1.geometry} material={materials['Material.088']} />
          <mesh name="Cube025_2" geometry={nodes.Cube025_2.geometry} material={materials['Material.089']} />
        </group>
        <group name="Cube009" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube026_1" geometry={nodes.Cube026_1.geometry} material={materials['Material.088']} />
          <mesh name="Cube026_2" geometry={nodes.Cube026_2.geometry} material={materials['Material.089']} />
        </group>
        <group name="Cube010" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube093_1" geometry={nodes.Cube093_1.geometry} material={materials['Material.088']} />
          <mesh name="Cube093_2" geometry={nodes.Cube093_2.geometry} material={materials['Material.089']} />
        </group>
        <group name="Cube011" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube094_1" geometry={nodes.Cube094_1.geometry} material={materials['Material.088']} />
          <mesh name="Cube094_2" geometry={nodes.Cube094_2.geometry} material={materials['Material.089']} />
        </group>
        <group name="Cube012" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube095_1" geometry={nodes.Cube095_1.geometry} material={materials['Material.088']} />
          <mesh name="Cube095_2" geometry={nodes.Cube095_2.geometry} material={materials['Material.089']} />
        </group>
        <group name="Cube013" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube096_1" geometry={nodes.Cube096_1.geometry} material={materials['Material.088']} />
          <mesh name="Cube096_2" geometry={nodes.Cube096_2.geometry} material={materials['Material.089']} />
        </group>
        <group name="Cube014" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube097_1" geometry={nodes.Cube097_1.geometry} material={materials['Material.088']} />
          <mesh name="Cube097_2" geometry={nodes.Cube097_2.geometry} material={materials['Material.089']} />
        </group>
        <group name="Cube015" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube098_1" geometry={nodes.Cube098_1.geometry} material={materials['Material.088']} />
          <mesh name="Cube098_2" geometry={nodes.Cube098_2.geometry} material={materials['Material.089']} />
        </group>
        <group name="Cube016" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube099_1" geometry={nodes.Cube099_1.geometry} material={materials['Material.088']} />
          <mesh name="Cube099_2" geometry={nodes.Cube099_2.geometry} material={materials['Material.089']} />
        </group>
        <mesh name="Cube017" geometry={nodes.Cube017.geometry} material={materials['Material.090']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube018" geometry={nodes.Cube018.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube019" geometry={nodes.Cube019.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube020" geometry={nodes.Cube020.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube021" geometry={nodes.Cube021.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube028" geometry={nodes.Cube028.geometry} material={materials['Material.092']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube029" geometry={nodes.Cube029.geometry} material={materials['Material.093']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Cube030" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube107_1" geometry={nodes.Cube107_1.geometry} material={materials['Material.088']} />
          <mesh name="Cube107_2" geometry={nodes.Cube107_2.geometry} material={materials['Material.089']} />
        </group>
        <mesh name="Cube031" geometry={nodes.Cube031.geometry} material={materials['Material.090']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube032" geometry={nodes.Cube032.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube033" geometry={nodes.Cube033.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube034" geometry={nodes.Cube034.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube035" geometry={nodes.Cube035.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube036" geometry={nodes.Cube036.geometry} material={materials['Material.092']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube037" geometry={nodes.Cube037.geometry} material={materials['Material.093']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Cube038" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube115_1" geometry={nodes.Cube115_1.geometry} material={materials['Material.088']} />
          <mesh name="Cube115_2" geometry={nodes.Cube115_2.geometry} material={materials['Material.089']} />
        </group>
        <mesh name="Cube039" geometry={nodes.Cube039.geometry} material={materials['Material.090']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube104" geometry={nodes.Cube104.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube105" geometry={nodes.Cube105.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube106" geometry={nodes.Cube106.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube107" geometry={nodes.Cube107.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube108" geometry={nodes.Cube108.geometry} material={materials['Material.092']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube109" geometry={nodes.Cube109.geometry} material={materials['Material.093']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Cube110" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube123_1" geometry={nodes.Cube123_1.geometry} material={materials['Material.088']} />
          <mesh name="Cube123_2" geometry={nodes.Cube123_2.geometry} material={materials['Material.089']} />
        </group>
        <mesh name="Cube111" geometry={nodes.Cube111.geometry} material={materials['Material.090']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube112" geometry={nodes.Cube112.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube113" geometry={nodes.Cube113.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube114" geometry={nodes.Cube114.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube115" geometry={nodes.Cube115.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube116" geometry={nodes.Cube116.geometry} material={materials['Material.092']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube117" geometry={nodes.Cube117.geometry} material={materials['Material.093']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Cube118" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube131_1" geometry={nodes.Cube131_1.geometry} material={materials['Material.088']} />
          <mesh name="Cube131_2" geometry={nodes.Cube131_2.geometry} material={materials['Material.089']} />
        </group>
        <mesh name="Cube119" geometry={nodes.Cube119.geometry} material={materials['Material.090']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube120" geometry={nodes.Cube120.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube121" geometry={nodes.Cube121.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube122" geometry={nodes.Cube122.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube123" geometry={nodes.Cube123.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube124" geometry={nodes.Cube124.geometry} material={materials['Material.092']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube125" geometry={nodes.Cube125.geometry} material={materials['Material.093']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Cube126" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube139_1" geometry={nodes.Cube139_1.geometry} material={materials['Material.088']} />
          <mesh name="Cube139_2" geometry={nodes.Cube139_2.geometry} material={materials['Material.089']} />
        </group>
        <mesh name="Cube127" geometry={nodes.Cube127.geometry} material={materials['Material.090']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube128" geometry={nodes.Cube128.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube129" geometry={nodes.Cube129.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube130" geometry={nodes.Cube130.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube131" geometry={nodes.Cube131.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube132" geometry={nodes.Cube132.geometry} material={materials['Material.092']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube133" geometry={nodes.Cube133.geometry} material={materials['Material.093']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Cube134" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube147_1" geometry={nodes.Cube147_1.geometry} material={materials['Material.088']} />
          <mesh name="Cube147_2" geometry={nodes.Cube147_2.geometry} material={materials['Material.089']} />
        </group>
        <mesh name="Cube135" geometry={nodes.Cube135.geometry} material={materials['Material.090']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube136" geometry={nodes.Cube136.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube137" geometry={nodes.Cube137.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube138" geometry={nodes.Cube138.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube139" geometry={nodes.Cube139.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube140" geometry={nodes.Cube140.geometry} material={materials['Material.092']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube141" geometry={nodes.Cube141.geometry} material={materials['Material.093']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Cube142" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube155" geometry={nodes.Cube155.geometry} material={materials['Material.088']} />
          <mesh name="Cube155_1" geometry={nodes.Cube155_1.geometry} material={materials['Material.089']} />
        </group>
        <mesh name="Cube143" geometry={nodes.Cube143.geometry} material={materials['Material.090']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube144" geometry={nodes.Cube144.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube145" geometry={nodes.Cube145.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube146" geometry={nodes.Cube146.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube147" geometry={nodes.Cube147.geometry} material={materials['Material.091']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve001" geometry={nodes.Cube010_Curve001.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve002" geometry={nodes.Cube010_Curve002.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve003" geometry={nodes.Cube010_Curve003.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve009" geometry={nodes.Cube010_Curve009.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve010" geometry={nodes.Cube010_Curve010.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve017" geometry={nodes.Cube010_Curve017.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve018" geometry={nodes.Cube010_Curve018.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve019" geometry={nodes.Cube010_Curve019.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve020" geometry={nodes.Cube010_Curve020.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve022" geometry={nodes.Cube010_Curve022.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve027" geometry={nodes.Cube010_Curve027.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve028" geometry={nodes.Cube010_Curve028.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve035" geometry={nodes.Cube010_Curve035.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve036" geometry={nodes.Cube010_Curve036.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve037" geometry={nodes.Cube010_Curve037.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve038" geometry={nodes.Cube010_Curve038.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve039" geometry={nodes.Cube010_Curve039.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve040" geometry={nodes.Cube010_Curve040.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve041" geometry={nodes.Cube010_Curve041.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve042" geometry={nodes.Cube010_Curve042.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve043" geometry={nodes.Cube010_Curve043.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve044" geometry={nodes.Cube010_Curve044.geometry} material={materials['Material.094']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube148" geometry={nodes.Cube148.geometry} material={materials['Material.092']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube149" geometry={nodes.Cube149.geometry} material={materials['Material.093']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube150" geometry={nodes.Cube150.geometry} material={materials['Material.095']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube151" geometry={nodes.Cube151.geometry} material={materials['Material.095']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube152" geometry={nodes.Cube152.geometry} material={materials['Material.096']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube153" geometry={nodes.Cube153.geometry} material={materials['Material.097']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Cube154" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube167" geometry={nodes.Cube167.geometry} material={materials['Material.098']} />
          <mesh name="Cube167_1" geometry={nodes.Cube167_1.geometry} material={materials['Material.099']} />
          <group name="Cube_SurfaceDrawing001" position={[-0.65, 3.777, 6.643]} scale={0.326} />
        </group>
        <mesh name="Concrete001" geometry={nodes.Concrete001.geometry} material={materials['Material.095']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle001" geometry={nodes.Circle001.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle002" geometry={nodes.Circle002.geometry} material={nodes.Circle002.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle003" geometry={nodes.Circle003.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle036" geometry={nodes.Circle036.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle037" geometry={nodes.Circle037.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle038" geometry={nodes.Circle038.geometry} material={nodes.Circle038.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle039" geometry={nodes.Circle039.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle040" geometry={nodes.Circle040.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle041" geometry={nodes.Circle041.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle042" geometry={nodes.Circle042.geometry} material={nodes.Circle042.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle043" geometry={nodes.Circle043.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle044" geometry={nodes.Circle044.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle045" geometry={nodes.Circle045.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle046" geometry={nodes.Circle046.geometry} material={nodes.Circle046.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle047" geometry={nodes.Circle047.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle048" geometry={nodes.Circle048.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle049" geometry={nodes.Circle049.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle050" geometry={nodes.Circle050.geometry} material={nodes.Circle050.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle051" geometry={nodes.Circle051.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle052" geometry={nodes.Circle052.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle053" geometry={nodes.Circle053.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle054" geometry={nodes.Circle054.geometry} material={nodes.Circle054.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle055" geometry={nodes.Circle055.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle056" geometry={nodes.Circle056.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle057" geometry={nodes.Circle057.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle058" geometry={nodes.Circle058.geometry} material={nodes.Circle058.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle059" geometry={nodes.Circle059.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle060" geometry={nodes.Circle060.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle061" geometry={nodes.Circle061.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle062" geometry={nodes.Circle062.geometry} material={nodes.Circle062.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle063" geometry={nodes.Circle063.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle064" geometry={nodes.Circle064.geometry} material={materials['Material.100']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Book001" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube169" geometry={nodes.Cube169.geometry} material={materials['Material.101']} />
          <mesh name="Cube169_1" geometry={nodes.Cube169_1.geometry} material={nodes.Cube169_1.material} />
          <mesh name="Cube169_2" geometry={nodes.Cube169_2.geometry} material={materials['Material.102']} />
          <mesh name="Cube169_3" geometry={nodes.Cube169_3.geometry} material={materials['Material.103']} />
          <mesh name="Cube169_4" geometry={nodes.Cube169_4.geometry} material={materials['Material.104']} />
        </group>
        <group name="Book002" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube170" geometry={nodes.Cube170.geometry} material={materials['Material.101']} />
          <mesh name="Cube170_1" geometry={nodes.Cube170_1.geometry} material={nodes.Cube170_1.material} />
          <mesh name="Cube170_2" geometry={nodes.Cube170_2.geometry} material={materials['Material.102']} />
          <mesh name="Cube170_3" geometry={nodes.Cube170_3.geometry} material={materials['Material.103']} />
          <mesh name="Cube170_4" geometry={nodes.Cube170_4.geometry} material={materials['Material.104']} />
        </group>
        <group name="Book003" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube171" geometry={nodes.Cube171.geometry} material={materials['Material.101']} />
          <mesh name="Cube171_1" geometry={nodes.Cube171_1.geometry} material={nodes.Cube171_1.material} />
          <mesh name="Cube171_2" geometry={nodes.Cube171_2.geometry} material={materials['Material.102']} />
          <mesh name="Cube171_3" geometry={nodes.Cube171_3.geometry} material={materials['Material.103']} />
          <mesh name="Cube171_4" geometry={nodes.Cube171_4.geometry} material={materials['Material.104']} />
        </group>
        <group name="Book004" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube172" geometry={nodes.Cube172.geometry} material={materials['Material.101']} />
          <mesh name="Cube172_1" geometry={nodes.Cube172_1.geometry} material={nodes.Cube172_1.material} />
          <mesh name="Cube172_2" geometry={nodes.Cube172_2.geometry} material={materials['Material.102']} />
          <mesh name="Cube172_3" geometry={nodes.Cube172_3.geometry} material={materials['Material.103']} />
          <mesh name="Cube172_4" geometry={nodes.Cube172_4.geometry} material={materials['Material.104']} />
        </group>
        <group name="Book005" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube173" geometry={nodes.Cube173.geometry} material={materials['Material.101']} />
          <mesh name="Cube173_1" geometry={nodes.Cube173_1.geometry} material={nodes.Cube173_1.material} />
          <mesh name="Cube173_2" geometry={nodes.Cube173_2.geometry} material={materials['Material.102']} />
          <mesh name="Cube173_3" geometry={nodes.Cube173_3.geometry} material={materials['Material.103']} />
          <mesh name="Cube173_4" geometry={nodes.Cube173_4.geometry} material={materials['Material.104']} />
        </group>
        <group name="Book006" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube174" geometry={nodes.Cube174.geometry} material={materials['Material.101']} />
          <mesh name="Cube174_1" geometry={nodes.Cube174_1.geometry} material={nodes.Cube174_1.material} />
          <mesh name="Cube174_2" geometry={nodes.Cube174_2.geometry} material={materials['Material.102']} />
          <mesh name="Cube174_3" geometry={nodes.Cube174_3.geometry} material={materials['Material.103']} />
          <mesh name="Cube174_4" geometry={nodes.Cube174_4.geometry} material={materials['Material.104']} />
        </group>
        <mesh name="2nd_room001" geometry={nodes['2nd_room001'].geometry} material={materials['Material.105']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/wfhblend1.glb')
