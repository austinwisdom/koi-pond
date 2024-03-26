/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Alex Martire (https://sketchfab.com/alexmartire)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/jangada-de-bambu-bamboo-raft-3400ef8db55a4e91ac0c9c53f4329e26
Title: Jangada de Bambu (Bamboo raft)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import bambooRaftScene from '../assets/3d/bamboo_raft.glb'

const BambooRaft = (props) => {

  const group = useRef()
  const { nodes, materials, scene, animations } = useGLTF(bambooRaftScene)

  return (
    <group {...props} dispose={null} position={[5.715, -56, -30]} rotation={[2, -5, Math.PI / 2]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.JangadaBambu_Bambu_0.geometry}
        material={materials.Bambu}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Remo_Bambu_0.geometry}
        material={materials.Bambu}
        // scale={[0.214, 14.387, 0.214]}
      />
    </group>
  )
}

useGLTF.preload('/jangada_de_bambu_bamboo_raft.glb')

export default BambooRaft;