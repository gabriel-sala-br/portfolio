import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Office(props) {
  const { nodes, materials } = useGLTF("models/office.glb");
  const texture = useTexture("textures/baked.jpg");
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.42,
  });

  return (
    <group {...props} dispose={null}>
      <group position={[-0.074, 0, -1.521]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="keyboard"
        position={[0.1, 0.981, -1.21]}
        rotation={[0, -0.22, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh425587018.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh425587018_1.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh425587018_2.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh425587018_3.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="screen"
        position={[0.454, 0.939, -1.723]}
        rotation={[Math.PI, -1.099, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iMac_1.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iMac_1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iMac_1_2.geometry}
          material={textureMaterial}
        />
      </group>
      <group position={[0.09, 0.025, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Comp_Mouse.geometry}
          material={textureMaterial}
        />
      </group>
      <group position={[-0.78, 1.071, -1.61]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh24448074.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh24448074_1.geometry}
          material={textureMaterial}
        />
        <mesh
          castShadow
          receiveShadow
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

useGLTF.preload("models/office.glb");
