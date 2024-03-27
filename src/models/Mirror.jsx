import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import { useControls, button, folder } from 'leva'

const Mirror2 = () => {

    const sphereRef = useRef()

    useFrame(({clock, camera}) => {
        sphereRef.current.position.x = Math.cos(clock.elapsedTime) * 0.2 + .01;
        sphereRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + .01;
    })
    
    const [{roughness, metalness, scale}, set] = useControls("Pearl", () => ({
        roughness: { value: 0, min: 0, max: 1 },
        metalness: {value: 1, min: 0, max: 1 },
        scale: {value: 1, min: 0, max: 2},
        reset: button(() => {
            set({
                roughness:0,
                metalness:1,
                scale: 1
            })
        }),
    }))

    return (
        <Sphere scale={scale} ref={sphereRef} args={[1, 256, 256]} position={[0, -1, 0]}>
            <meshStandardMaterial roughness={roughness} metalness={metalness} />
        </Sphere>
    )
  }

export default Mirror2