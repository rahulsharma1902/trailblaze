/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/6janmorning.glb 
*/

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Office(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('./models/6janmorning.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="works_prev" position={[5730.657, 286.533, 2.865]}>
          <mesh name="work_prev_01_0" geometry={nodes.work_prev_01_0.geometry} material={materials['material-13']} />
          <mesh name="work_prev_05_4" geometry={nodes.work_prev_05_4.geometry} material={materials['material-13']} position={[3438.394, 0, 0]} />
          <mesh name="work_prev_02_1" geometry={nodes.work_prev_02_1.geometry} material={materials['material-12']} position={[859.599, 0, 0]} />
          <mesh name="work_prev_03_2" geometry={nodes.work_prev_03_2.geometry} material={materials['material-11']} position={[1719.197, 0, 0]} />
          <mesh name="work_prev_06_5" geometry={nodes.work_prev_06_5.geometry} material={materials['material-11']} position={[4297.993, 0, 0]} />
          <mesh name="work_prev_04_3" geometry={nodes.work_prev_04_3.geometry} material={materials['material-10']} position={[2578.795, 0, 0]} />
        </group>
        <group name="mouth_bott" />
        <group name="mouth_top" />
        <mesh name="2nd_room001" geometry={nodes['2nd_room001'].geometry} material={materials['Material.002']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Room_Frame001" geometry={nodes.Room_Frame001.geometry} material={materials['Material.032']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plane163" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={materials['Material.029']} />
          <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={materials['Material.033']} />
        </group>
        <mesh name="Table003" geometry={nodes.Table003.geometry} material={materials['Material.060']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube153" geometry={nodes.Cube153.geometry} material={materials['Material.016']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane142" geometry={nodes.Plane142.geometry} material={materials['Material.048']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Cube154" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube023_1" geometry={nodes.Cube023_1.geometry} material={materials['Material.050']} />
          <mesh name="Cube023_2" geometry={nodes.Cube023_2.geometry} material={materials['Material.051']} />
        </group>
        <mesh name="Plane133" geometry={nodes.Plane133.geometry} material={materials['Material.058']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Plant1001" position={[4760.834, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plantt_2" geometry={nodes.Plantt_2.geometry} material={materials['plant t.']} />
          <mesh name="Plantt_3" geometry={nodes.Plantt_3.geometry} material={materials['PLant t3']} />
        </group>
        <mesh name="about_text_block" geometry={nodes.about_text_block.geometry} material={nodes.about_text_block.material} position={[1715.285, 279.178, 0.029]} />
        <mesh name="about_text_block001" geometry={nodes.about_text_block001.geometry} material={materials['Material.008']} position={[1715.285, 279.178, 0.029]} />
        <mesh name="crown_sugn_our_service" geometry={nodes.crown_sugn_our_service.geometry} material={materials['Material.003']} position={[12035.32, 385.325, 0.029]} scale={[1.52, 1.202, 39.55]} />
        <mesh name="hello_sign_contact" geometry={nodes.hello_sign_contact.geometry} material={materials['Material.014']} position={[17046.404, 398.64, 14.091]} />
        <mesh name="Play_button" geometry={nodes.Play_button.geometry} material={materials['Material.004']} position={[2864.844, 275.825, -115.224]} />
        <mesh name="portfolio_text_01" geometry={nodes.portfolio_text_01.geometry} material={nodes.portfolio_text_01.material} position={[6151.875, 287.038, 0.029]} />
        <mesh name="portfolio_text_02" geometry={nodes.portfolio_text_02.geometry} material={nodes.portfolio_text_02.material} position={[7004.646, 287.038, 0.029]} />
        <mesh name="portfolio_text_03" geometry={nodes.portfolio_text_03.geometry} material={nodes.portfolio_text_03.material} position={[7858.798, 287.038, 0.029]} />
        <mesh name="portfolio_text_04" geometry={nodes.portfolio_text_04.geometry} material={nodes.portfolio_text_04.material} position={[8730.079, 287.038, 0.029]} />
        <mesh name="portfolio_text_05" geometry={nodes.portfolio_text_05.geometry} material={nodes.portfolio_text_05.material} position={[9580.784, 287.038, 0.029]} />
        <mesh name="portfolio_text_06" geometry={nodes.portfolio_text_06.geometry} material={nodes.portfolio_text_06.material} position={[10447.699, 287.038, 0.029]} />
        <mesh name="screen_showreel" geometry={nodes.screen_showreel.geometry} material={materials['material-04']} position={[2865.328, 286.533, -343.839]} />
        <mesh name="services_text_block" geometry={nodes.services_text_block.geometry} material={nodes.services_text_block.material} position={[14004.598, 252.46, 0.029]} />
        <group name="Tex_01" position={[3133.68, 0, 0]}>
          <mesh name="Mesh075" geometry={nodes.Mesh075.geometry} material={materials.Tex_01} />
          <mesh name="Mesh075_1" geometry={nodes.Mesh075_1.geometry} material={materials.Material} />
        </group>
        <group name="FloorMirror" position={[3133.68, 0.821, 0]}>
          <mesh name="Tex_02_011002" geometry={nodes.Tex_02_011002.geometry} material={materials['Tex_02.003']} />
          <mesh name="Tex_02_011002_1" geometry={nodes.Tex_02_011002_1.geometry} material={materials['Tex_02.003']} />
          <mesh name="Tex_02_011002_2" geometry={nodes.Tex_02_011002_2.geometry} material={materials['Tex_02.003']} />
        </group>
        <group name="Tex_02_011" position={[3133.68, 0, 0]}>
          <mesh name="Tex_02_011002" geometry={nodes.Tex_02_011002.geometry} material={materials['Tex_02.003']} />
          <mesh name="Tex_02_011002_1" geometry={nodes.Tex_02_011002_1.geometry} material={materials['Tex_02.003']} />
          <mesh name="Tex_02_011002_2" geometry={nodes.Tex_02_011002_2.geometry} material={materials['Tex_02.003']} />
        </group>
        <mesh name="Tex_02_001" geometry={nodes.Tex_02_001.geometry} material={materials['Tex_02.003']} position={[16245.512, 64.865, -444.386]} />
        <mesh name="Tex_02_003" geometry={nodes.Tex_02_003.geometry} material={materials['Tex_02.003']} position={[3133.68, 0, 0]} />
        <mesh name="Tex_02_004" geometry={nodes.Tex_02_004.geometry} material={materials['Tex_02.003']} position={[3133.68, 0, 0]} />
        <mesh name="Tex_02_010" geometry={nodes.Tex_02_010.geometry} material={materials['Tex_02.003']} position={[16045.978, 0, -85.961]} />
        <mesh name="Tex_02_012" geometry={nodes.Tex_02_012.geometry} material={materials['Tex_02.003']} position={[11605.813, 126, -479.078]} />
        <mesh name="Tex_02_013" geometry={nodes.Tex_02_013.geometry} material={materials['Tex_02.003']} position={[1081.763, 0.233, -483.224]} />
        <mesh name="Tex_02_013001" geometry={nodes.Tex_02_013001.geometry} material={materials['Tex_02.003']} position={[5118.79, 0.809, -943.769]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_014" geometry={nodes.Tex_02_014.geometry} material={materials['Tex_02.003']} position={[16045.978, 0, -85.961]} />
        <mesh name="Tex_02_015" geometry={nodes.Tex_02_015.geometry} material={materials['Tex_02.003']} position={[11636.431, 0.8, -348.8]} />
        <mesh name="Tex_02_016" geometry={nodes.Tex_02_016.geometry} material={materials['Tex_02.003']} position={[11636.431, 0.8, -348.8]} />
        <mesh name="Tex_02_017" geometry={nodes.Tex_02_017.geometry} material={materials['Tex_02.003']} position={[11664.611, 62.413, -470.158]} />
        <mesh name="Tex_02_018" geometry={nodes.Tex_02_018.geometry} material={materials['Tex_02.003']} position={[4642.812, 57.755, -441.286]} />
        <mesh name="Tex_02_019" geometry={nodes.Tex_02_019.geometry} material={materials['Tex_02.003']} position={[1082.439, 21.396, -479.564]} />
        <mesh name="Planet_Rotation" geometry={nodes.Planet_Rotation.geometry} material={materials['Tex_02.003']} position={[16045.839, 286.533, -85.96]} />
        <mesh name="Tex_02_002001" geometry={nodes.Tex_02_002001.geometry} material={materials['Tex_02.003']} position={[2402.937, 33.262, -189.113]} />
        <mesh name="Tex_02_002002" geometry={nodes.Tex_02_002002.geometry} material={materials['Tex_02.003']} position={[3332.325, 33.445, -191.833]} rotation={[-Math.PI, 0.018, -Math.PI]} />
        <mesh name="Tex_02_017001" geometry={nodes.Tex_02_017001.geometry} material={materials['Tex_02.003']} position={[11664.611, 62.413, -470.158]} />
        <mesh name="Tex_03" geometry={nodes.Tex_03.geometry} material={materials.Tex_03} scale={821.018} />
        <mesh name="Text_Var_02" geometry={nodes.Text_Var_02.geometry} material={materials.Tex_03} position={[0.628, -0.57, -4.082]} scale={325.173} />
        <mesh name="ImageToStlcom_logo" geometry={nodes.ImageToStlcom_logo.geometry} material={materials['Material.005']} position={[862.551, 255.775, -58.937]} rotation={[1.585, 0, 0]} />
        <mesh name="portfolio_text_01001" geometry={nodes.portfolio_text_01001.geometry} material={materials['Material.007']} position={[3432.225, 316.713, -261.516]} rotation={[0, -1.528, 0]} scale={[0.379, 0.544, 0.699]} />
        <mesh name="portfolio_text_01002" geometry={nodes.portfolio_text_01002.geometry} material={materials['Material.006']} position={[2296.807, 315.353, -260.52]} rotation={[-Math.PI, 1.567, -Math.PI]} scale={[0.379, 0.544, 0.699]} />
        <mesh name="portfolio_text_06001" geometry={nodes.portfolio_text_06001.geometry} material={materials['Material.013']} position={[10895.171, 290.826, -263.851]} rotation={[-0.021, 1.57, 0.021]} scale={[0.422, 0.598, 1.188]} />
        <mesh name="portfolio_text_06002" geometry={nodes.portfolio_text_06002.geometry} material={materials['Material.012']} position={[11743.628, 299.703, -273.591]} rotation={[-0.021, 1.57, 0.021]} scale={[0.422, 0.598, 1.188]} />
        <mesh name="mouth_top_pac_&_ghost_0" geometry={nodes['mouth_top_pac_&_ghost_0'].geometry} material={materials.pac__ghost} />
        <mesh name="Text_Var_02001" geometry={nodes.Text_Var_02001.geometry} material={materials.Tex_03} position={[93.265, 46.919, -4.431]} scale={[218.828, 284.532, 329.405]} />
        <mesh name="Mesh_0" geometry={nodes.Mesh_0.geometry} material={materials['Material_0.002']} position={[11208.683, 129.967, -272.814]} scale={129.706} />
        <mesh name="Tex_02_004001" geometry={nodes.Tex_02_004001.geometry} material={materials['Tex_02.003']} position={[7071.491, -12.32, -652.565]} />
        <mesh name="Tex_02_019001" geometry={nodes.Tex_02_019001.geometry} material={materials['Tex_02.003']} position={[5120.63, 21.972, -940.533]} rotation={[0, 0.335, 0]} />
        <mesh name="Tex_02_003001" geometry={nodes.Tex_02_003001.geometry} material={materials['Tex_02.003']} position={[4871.04, 114.041, -646.055]} scale={[1, 1, 2.442]} />
        <mesh name="Tex_02_003002" geometry={nodes.Tex_02_003002.geometry} material={materials['Tex_02.003']} position={[5295.009, 105.261, -718.575]} rotation={[Math.PI, -0.08, Math.PI]} />
        <mesh name="Tex_02_003003" geometry={nodes.Tex_02_003003.geometry} material={materials['Tex_02.003']} position={[6013.339, 90.719, -1763.615]} rotation={[Math.PI, -0.08, Math.PI]} scale={[0.881, 0.999, 3.619]} />
        <mesh name="Tex_02_003004" geometry={nodes.Tex_02_003004.geometry} material={materials['Tex_02.003']} position={[5726.63, 128.086, -5199.97]} rotation={[Math.PI, -1.479, Math.PI]} scale={[0.878, 0.999, 2.268]} />
        <mesh name="Tex_02_003005" geometry={nodes.Tex_02_003005.geometry} material={materials['Tex_02.003']} position={[6275.888, 120.6, -5181.43]} rotation={[Math.PI, -1.479, Math.PI]} scale={[0.878, 0.999, 2.268]} />
        <mesh name="Tex_02_003006" geometry={nodes.Tex_02_003006.geometry} material={materials['Tex_02.003']} position={[4982.662, 125.001, -5189.448]} rotation={[Math.PI, -1.479, Math.PI]} scale={[0.878, 0.999, 2.268]} />
        <mesh name="Table002" geometry={nodes.Table002.geometry} material={materials['Material.028']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_Curve033" geometry={nodes.PM3D_Sphere3D1_Curve033.geometry} material={materials['Material.043']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2018" geometry={nodes.PM3D_Sphere3D1_2018.geometry} material={materials['Material.037']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2019" geometry={nodes.PM3D_Sphere3D1_2019.geometry} material={materials['Material.025']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="PM3D_Sphere3D1_2001_Curve002" geometry={nodes.PM3D_Sphere3D1_2001_Curve002.geometry} material={nodes.PM3D_Sphere3D1_2001_Curve002.material} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane020" geometry={nodes.Plane020.geometry} material={materials['Material.040']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane030" geometry={nodes.Plane030.geometry} material={materials['Material.041']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane036" geometry={nodes.Plane036.geometry} material={materials['Material.038']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane136" geometry={nodes.Plane136.geometry} material={materials['Material.049']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane144" geometry={nodes.Plane144.geometry} material={materials['Material.059']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane018_Curve177" geometry={nodes.Plane018_Curve177.geometry} material={materials['Material.039']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Plane156" geometry={nodes.Plane156.geometry} material={materials['Material.020']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Main_Room001" position={[4760.83, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube017_1" geometry={nodes.Cube017_1.geometry} material={materials.Tex_01} />
          <mesh name="Cube017_2" geometry={nodes.Cube017_2.geometry} material={materials['Tex_02.002']} />
        </group>
        <mesh name="Mac010" geometry={nodes.Mac010.geometry} material={materials['Material.026']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Mac016" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Plane002_1" geometry={nodes.Plane002_1.geometry} material={materials['Material.021']} />
          <mesh name="Plane002_2" geometry={nodes.Plane002_2.geometry} material={materials['Material.022']} />
          <mesh name="Plane002_3" geometry={nodes.Plane002_3.geometry} material={materials['Material.023']} />
        </group>
        <mesh name="Low001" geometry={nodes.Low001.geometry} material={materials['Material.046']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="High006" geometry={nodes.High006.geometry} material={materials['Material.037']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Cylinder003" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder019" geometry={nodes.Cylinder019.geometry} material={materials['Material.044']} />
          <mesh name="Cylinder019_1" geometry={nodes.Cylinder019_1.geometry} material={materials['Material.045']} />
        </group>
        <group name="Cylinder028" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials['Material.019']} />
          <mesh name="Cylinder_1" geometry={nodes.Cylinder_1.geometry} material={materials['Material.024']} />
        </group>
        <group name="Cube008" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube086" geometry={nodes.Cube086.geometry} material={materials['Material.025']} />
          <mesh name="Cube086_1" geometry={nodes.Cube086_1.geometry} material={materials['Material.030']} />
        </group>
        <mesh name="Cube017" geometry={nodes.Cube017.geometry} material={materials['Material.018']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube018" geometry={nodes.Cube018.geometry} material={materials['Material.090']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube021" geometry={nodes.Cube021.geometry} material={materials['Material.090']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube028" geometry={nodes.Cube028.geometry} material={materials['Material.017']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube029" geometry={nodes.Cube029.geometry} material={materials['Material.031']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube010_Curve001" geometry={nodes.Cube010_Curve001.geometry} material={materials['Material.036']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube150" geometry={nodes.Cube150.geometry} material={materials['Material.047']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Cube152" geometry={nodes.Cube152.geometry} material={materials['Material.052']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <mesh name="Circle001" geometry={nodes.Circle001.geometry} material={materials['Material.034']} position={[4760.835, -2.09, -4306.802]} scale={157.26} />
        <group name="Book001" position={[4760.835, -2.09, -4306.802]} scale={157.26}>
          <mesh name="Cube019" geometry={nodes.Cube019.geometry} material={materials['Material.054']} />
          <mesh name="Cube019_1" geometry={nodes.Cube019_1.geometry} material={materials['Material.055']} />
          <mesh name="Cube019_2" geometry={nodes.Cube019_2.geometry} material={materials['Material.056']} />
          <mesh name="Cube019_3" geometry={nodes.Cube019_3.geometry} material={materials['Material.057']} />
        </group>
        <mesh name="Material_002-material" geometry={nodes['Material_002-material'].geometry} material={materials['Material.009']} />
        <mesh name="Material_003-material002" geometry={nodes['Material_003-material002'].geometry} material={materials['Material.010']} />
        <mesh name="pac_man_machine_automat_0" geometry={nodes.pac_man_machine_automat_0.geometry} material={materials.automat} position={[11449.857, 1.07, -258.799]} rotation={[-Math.PI / 2, 0, 0]} scale={[6.183, 8.02, 5.095]} />
        <mesh name="scheibe_scheibe_0" geometry={nodes.scheibe_scheibe_0.geometry} material={materials.scheibe} position={[11449.857, 1.07, -258.799]} rotation={[-Math.PI / 2, 0, 0]} scale={[9.862, 8.02, 6.154]} />
        <mesh name="Mesh_FlagPole1_Mat_Flag_0001" geometry={nodes.Mesh_FlagPole1_Mat_Flag_0001.geometry} material={materials['Mat_Flag.001']} position={[15844.34, 91.408, -459.624]} scale={[1.427, 1.726, 1.094]} />
        <mesh name="Mesh_FlagPole1_Mat_FlagPole_0001" geometry={nodes.Mesh_FlagPole1_Mat_FlagPole_0001.geometry} material={materials['Mat_FlagPole.001']} position={[15844.34, 91.408, -459.624]} scale={[1.134, 1.726, 1.094]} />
        <mesh name="geometry_0" geometry={nodes.geometry_0.geometry} material={materials.Material_0} position={[3335.908, 82.197, -255.886]} rotation={[1.188, -1.272, 1.203]} scale={[213.195, 210.271, 213.195]} />
        <mesh name="geometry_0001" geometry={nodes.geometry_0001.geometry} material={materials['Material_0.001']} position={[2385.326, 75.118, -125.523]} rotation={[-3.134, 1.374, 3.134]} scale={276.247} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/6janmorning.glb')
