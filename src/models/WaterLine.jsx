import { useState, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, RoundedBox, MeshReflectorMaterial, MeshWobbleMaterial, MeshRefractionMaterial, MeshDistortMaterial, Box } from "@react-three/drei";
import Loader from "../component/Loader";
import { MeshLambertMaterial } from "three";

const WaterLine = () => {

    const cubeRef = useRef()

    return (
        <>
            <Box
                ref={cubeRef}
                position={[0, 37, -40]}
                args={[280, 0.01, 25]} // Width, height, depth. Default is [1, 1, 1]
               
            >         
                           
            <MeshDistortMaterial 
                color={"#94a3b8"}
                distort={.75}
                speed={1}
                mirror={1}
            />
            {/* <MeshWobbleMaterial color={"#94a3b8"} /> */}
            </Box>
        </>
        
    );
};

export default WaterLine;