/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: 7PLUS (https://sketchfab.com/7plus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/koi-fish-236859b809984f52b70c94fd040b9c59
Title: Koi Fish
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import koiFishScene from '../assets/3d/koi_fish.glb'
import { a } from '@react-spring/three'

const KoiFish = (isSwimming, props) => {
  const group = useRef()
  const { nodes, materials, scene, animations } = useGLTF(koiFishScene)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['Take 001']?.play()
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="koifish_0" position={[-0.268, 0, 0]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh
                  name="mesh_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0.geometry}
                  material={materials.SimplygonCastMaterial}
                  morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/koi_fish.glb')

export default KoiFish;
