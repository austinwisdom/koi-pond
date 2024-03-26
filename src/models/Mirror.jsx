import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, useAnimations } from "@react-three/drei"
import { useControls } from 'leva'

const Mirror2 = () => {

    const [sphereExists, setSphereExists] = useState(true)
    const sphereRef = useRef()

    if (sphereExists) {
        useFrame(({clock, camera}) => {
            sphereRef.current.position.x = Math.cos(clock.elapsedTime) * 0.2 + .01;
            sphereRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + .01;
            if (sphereRef.current.position.y < camera.position.y + 1) {
                sphereRef.current.position.y += .01
            } else {
                setSphereExists(true)
                sphereRef.current.position.y == 0
            }
        })
    }
    
    const tweakableProperties = useControls({
        roughness: { value: 0, min: 0, max: 1 },
        metalness: {value: 1, min: 0, max: 1 }
    })

    return (
        (sphereExists && <Sphere ref={sphereRef} args={[1, 256, 256]} position={[0, -1, 0]}>
            <meshStandardMaterial {...tweakableProperties} />
        </Sphere>)
    )
  }

export default Mirror2