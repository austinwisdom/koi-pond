import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber' 
import Loader from '../component/Loader';
import KoiFish from '../models/KoiFish';
import { OrbitControls } from '@react-three/drei';
import SchoolOfFish from '../models/SchoolOfFish';

const HomePage = () => {

    const [isSwimming, setIsSwimming] = useState(true)

    const adjustModelSize = () => {
        let screenScale = null
        let screenPosition = [0, -6.5, -43]
        let rotation = [0.1, 4.7,0]

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
        } else {
            screenScale = [1, 1, 1]
        }

        return [ screenPosition, screenScale, rotation]
    }

    const [fishScale, fishPosition, fishRotation] = adjustModelSize()
    const koiPosition = [-0.268, 0, 0]

    return (
        <section className='w-full h-screen relative'>
            
            <Canvas className='w-full h-screen bg-transparent z-10'
                camera={ { near: 0.1, far: 1000}}
            >
                <Suspense fallback={<Loader />}>
                    {/* <OrbitControls /> */}
                    <ambientLight intensity={2} />
                    <KoiFish
                        // position={fishPosition}
                        // scale={fishScale}
                        // rotation={fishRotation}
                    />
                    <KoiFish
                        position={koiPosition} />
                    {/* <SchoolOfFish /> */}
                </Suspense>
            </Canvas>
        </section>
    );
};

export default HomePage;