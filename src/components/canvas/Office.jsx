import { useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import React, { useEffect } from "react";

import * as THREE from "three";

export function Office(props) {
  const { nodes, materials } = useGLTF("models/scene.gltf");
  const texture = useTexture("textures/baked.jpg");
  const textureVSCode = useVideoTexture("textures/vscode.mp4");
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  });

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.42,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        name="Screen"
        geometry={nodes.Screen.geometry}
        position={[0.45, 0.94, -1.72]}
        rotation={[Math.PI, -1.1, Math.PI]}
      >
        <meshBasicMaterial map={textureVSCode} toneMapped={false} />
      </mesh>
      <group
        name="Desk"
        position={[-0.07, 0, -1.52]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Plane001_Plane002_BlackWood001"
          geometry={nodes.Plane001_Plane002_BlackWood001.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_1"
          geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_2"
          geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_3"
          geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_4"
          geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="keyboard"
        position={[0.21, 0.98, -1.21]}
        rotation={[0, -0.22, 0]}
        scale={0.63}
      >
        <mesh
          name="mesh425587018"
          geometry={nodes.mesh425587018.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_1"
          geometry={nodes.mesh425587018_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_2"
          geometry={nodes.mesh425587018_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_3"
          geometry={nodes.mesh425587018_3.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="screen"
        position={[0.45, 0.94, -1.72]}
        rotation={[Math.PI, -1.1, Math.PI]}
      >
        <mesh
          name="iMac_1_1"
          geometry={nodes.iMac_1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="iMac_1_2"
          geometry={nodes.iMac_1_2.geometry}
          material={textureMaterial}
        />
      </group>

      <mesh
        name="Comp_Mouse"
        geometry={nodes.Comp_Mouse.geometry}
        material={textureMaterial}
        position={[-0.01, 0, 0.08]}
      />

      <group name="plant" position={[-0.78, 1.07, -1.61]}>
        <mesh
          name="mesh24448074"
          geometry={nodes.mesh24448074.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh24448074_1"
          geometry={nodes.mesh24448074_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh24448074_2"
          geometry={nodes.mesh24448074_2.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="chair"
        position={[0.09, -0.2, -0.6]}
        rotation={[0, -0.35, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Node-Mesh_1"].geometry}
          material={textureMaterial}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/scene.gltf");
