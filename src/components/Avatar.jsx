import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
// import { useAnimationFBX } from "./canvas/animations/Typing";

const Avatar = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("models/6590738a9e1b858d3d32467a.gltf");

  //   const typingAnimation = useFBX("animations/Typing.fbx");

  //   useEffect(() => {
  //     if (typingAnimation) {
  //       console.log("Animação Carregada:", typingAnimation);
  //     }
  //   }, [typingAnimation]);

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load("animations/Typing.fbx", (fbx) => {
      console.log("Animação Carregada:", fbx.animations);
    });
  }, []);

  return (
    <group {...props} ref={group} dispose={null}>
      <mesh geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} />
      <mesh
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
      />
      <mesh
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
      />
      <mesh
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
      />
      <mesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
      />
      <mesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
      />
      <mesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
      />
      <mesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
      />
      <mesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
      />
      <mesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
      />
    </group>
  );
};

useGLTF.preload("models/6590738a9e1b858d3d32467a.gltf");

export default Avatar;
