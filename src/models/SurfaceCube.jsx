import { useState, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, RoundedBox, MeshReflectorMaterial, MeshWobbleMaterial, MeshRefractionMaterial, MeshDistortMaterial } from "@react-three/drei";
import Loader from "../component/Loader";

const SurfaceCube = () => {

    const cubeRef = useRef()

    return (
        <>
            <RoundedBox
                ref={cubeRef}
                position={[0, -15, -15]}
                args={[65, 5, 10]} // Width, height, depth. Default is [1, 1, 1]
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={4} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
               
            >                          
            <MeshReflectorMaterial color={"#64748b"} />
            {/* <MeshWobbleMaterial color={"#64748b"} /> */}
            
            
            </RoundedBox>
        </>
        
    );
};

export default SurfaceCube;