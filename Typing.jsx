/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/animations/Typing.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Typing.gltf')
  return (
    <group {...props} dispose={null}>
      <group />
    </group>
  )
}

useGLTF.preload('/Typing.gltf')
