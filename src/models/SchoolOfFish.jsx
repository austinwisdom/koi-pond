/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: 7PLUS (https://sketchfab.com/7plus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/school-of-fish-91eb21198a274974a1fae477d14fe52c
Title: School Of Fish
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import schoolOfFishScene from '../assets/3d/school_of_fish.glb'

const SchoolOfFish = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(schoolOfFishScene)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['MorphBake']?.play()
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sketchfab_model_8" rotation={[-Math.PI / 2, 0, 0]}>
                <group name="root_7">
                  <group name="GLTF_SceneRootNode_6" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Sketchfab_model_4_5" rotation={[-Math.PI / 2, 0, 0]}>
                      <group name="root_3_4">
                        <group name="GLTF_SceneRootNode_2_3" rotation={[Math.PI / 2, 0, 0]}>
                          <group
                            name="fish_0_1_2"
                            position={[-0.249, 0, -0.058]}
                            rotation={[-Math.PI, 7, -Math.PI]}
                            scale={0.445}>
                            <group name="mesh_0_0_1">
                              <group name="mesh_0_0">
                                <mesh
                                  name="mesh_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.mesh_0.geometry}
                                  material={materials['Material.001']}
                                  morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
                                  morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/school_of_fish.glb')

export default SchoolOfFish