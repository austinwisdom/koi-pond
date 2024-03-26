import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { CubeCamera, useCubeTexture } from '@react-three/drei';

const Mirror = () => {
  const [cubeTexture, setCubeTexture] = useState(null);

  const cubeCameraRef = useRef();

  useFrame(() => {
    cubeCameraRef.current.update(renderer, scene);
  });

  useCubeTexture(cubeTexture, {
    envMap: cubeTexture,
  });

  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhongMaterial attach="material" envMap={cubeTexture} />
    </mesh>
  );
};

export default Mirror