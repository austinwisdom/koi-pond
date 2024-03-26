import { useTexture } from "@react-three/drei"
import { Sphere } from "@react-three/drei"
import { useControls } from 'leva'

const Mirror2 = () => {
    
    const tweakableProperties = useControls({
        roughness: { value: 0, min: 0, max: 1 },
        metalness: {value: 1, min: 0, max: 1 }
    })

    return (
        <Sphere args={[1, 256, 256]}>
            <meshStandardMaterial {...tweakableProperties} />
        </Sphere>
    )
  }

export default Mirror2