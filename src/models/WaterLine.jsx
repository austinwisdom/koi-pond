import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const WaterLine = () => {

    const sphereRef = useRef()

    return (
        <>
            <Sphere
                ref={sphereRef}
                position={[0, 200, -4]}
                args={[100, 100, 100]} // Width, height, depth. Default is [1, 1, 1]
                opacity={.1}
            >         
                           
            <MeshDistortMaterial 
                color={"#94a3b8"}
                opacity={.1}
                distort={.75}
                speed={1}
                mirror={1}
            />
            {/* <MeshWobbleMaterial color={"#94a3b8"} /> */}
            </Sphere>
        </>
        
    );
};

export default WaterLine;