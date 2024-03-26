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

const KoiFish = ({position, bounds, swing, zMovement, orientation, ...props}) => {

  const group = useRef()
  const { nodes, materials, scene, animations } = useGLTF(koiFishScene)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['MorphBake']?.play()
  }, [])

const koiPosition = position
const koiRBound = bounds[0] || 15
const koiLBound = bounds[1] || 10
const koiSwing = swing || 2
const koiZMovement = zMovement || 0
const koiOrientation = orientation || 0

const rotateX = group?.current?.rotation?.x
const rotateY = group?.current?.rotation?.y
const rotateZ = group?.current?.rotation?.z

const positionX = group?.current?.position?.x
const positionY = group?.current?.position?.y
const positionZ = group?.current?.position?.z

const pokeFish = () => {
    console.log("Fish poked")
    
    const moveToCamera = group.current.rotation.y -= .5
    const returnToPosition = group.current.rotation.y += .25
    
    moveToCamera

}


useFrame(({ clock, camera }) => {
    // Update the Y position to simulate koi-like motion using a sine wave
    group.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + koiSwing;

    // Check if the koi reached a certain endpoint relative to the camera
    if (group.current.position.x > camera.position.x + koiRBound) {
      // Change direction to backward and rotate the koi 180 degrees on the y-axis
      group.current.rotation.y = Math.PI;
    } else if (group.current.position.x < camera.position.x - koiLBound) {
      // Change direction to forward and reset the koi's rotation
      group.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (group.current.rotation.y === 0) {
      // Moving forward
      group.current.position.x += 0.01;
      group.current.position.z -= koiZMovement;
    } else if (group.current.rotation.y === 1) {
      // Moving backward
      group.current.position.x -= 0.01;
      group.current.position.z += koiZMovement;
    } else {
        // Moving backward
        group.current.position.x -= 0.01;
        group.current.position.z += koiZMovement;
      }
    
  });

  return (
    <group ref={group} 
    {...props} 
    dispose={null}>
      <group name="Sketchfab_Scene">
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="koifish_0" position={koiPosition} rotation={[Math.PI, koiOrientation, Math.PI]}>
                <mesh
                  name="mesh_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0.geometry}
                  material={materials.SimplygonCastMaterial}
                  morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
                  onClick={pokeFish}
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
