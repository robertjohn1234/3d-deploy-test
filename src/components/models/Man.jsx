
"use client";
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

const Man = React.memo(function Man(props) {
    // Use React.memo for performance optimization
    const { nodes, materials } = useGLTF("/models/man-transformed.glb");
  
    const modelRef = useRef();
  
    useFrame((state) => {
      // code for moving the model up and down
      modelRef.current.position.y =
        -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
    });

  
  return (

    <group {...props}
    dispose={null}
    ref={modelRef}
    position={[0, -1.5, 0]}
    scale={[1.7, 1.7, 1.7]}
    rotation={[0.5, 0, 0]}
    >
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials['Wolf3D_Skin.003']}
          skeleton={nodes.Object_7.skeleton}
          scale={0.966}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials['Wolf3D_Teeth.003']}
          skeleton={nodes.Object_9.skeleton}
          scale={0.966}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials['Wolf3D_Body.003']}
          skeleton={nodes.Object_11.skeleton}
          scale={0.966}
        />
        <skinnedMesh
          name="Object_13"
          geometry={nodes.Object_13.geometry}
          material={materials['Wolf3D_Outfit_Bottom.003']}
          skeleton={nodes.Object_13.skeleton}
          scale={0.966}
        />
        <skinnedMesh
          name="Object_15"
          geometry={nodes.Object_15.geometry}
          material={materials['Wolf3D_Outfit_Footwear.003']}
          skeleton={nodes.Object_15.skeleton}
          scale={0.966}
        />
        <skinnedMesh
          name="Object_17"
          geometry={nodes.Object_17.geometry}
          material={materials['Wolf3D_Outfit_Top.003']}
          skeleton={nodes.Object_17.skeleton}
          scale={0.966}
        />
        <skinnedMesh
          name="Object_19"
          geometry={nodes.Object_19.geometry}
          material={materials['Wolf3D_Hair.003']}
          skeleton={nodes.Object_19.skeleton}
          scale={0.966}
        />
        <skinnedMesh
          name="Object_21"
          geometry={nodes.Object_21.geometry}
          material={materials['Wolf3D_Glasses.003']}
          skeleton={nodes.Object_21.skeleton}
          scale={0.966}
        />
        <skinnedMesh
          name="Object_23"
          geometry={nodes.Object_23.geometry}
          material={materials['Wolf3D_Eye.003']}
          skeleton={nodes.Object_23.skeleton}
          scale={0.966}
        />
        <skinnedMesh
          name="Object_25"
          geometry={nodes.Object_25.geometry}
          material={materials['Wolf3D_Eye.003']}
          skeleton={nodes.Object_25.skeleton}
          scale={0.966}
        />
      </group>
    </group>
  )
});

export default Man;
useGLTF.preload('/models/man-transformed.glb')