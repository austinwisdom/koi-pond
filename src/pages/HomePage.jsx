import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber' 
import Loader from '../component/Loader';
import { CubeCamera, Environment, OrbitControls, useEnvironment } from '@react-three/drei';

import KoiFish from '../models/KoiFish';
import BambooRaft from '../models/BambooRaft';
import Mirror from '../models/Mirror';
import Grass from '../models/Grass';
import Sand from '../models/Sand';
import Bridge from '../models/Bridge';
import Samurai from '../models/Samurai';

const HomePage = () => {

    //need to hook this up
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
    const koiPosition2 = [-5, -5, -3]
    const koiPosition3 = [-23, -7, -10]
    const koiPosition4 = [-44, -6, -2]
    const koiPosition5 = [-10, -4, -3]
    const koiPosition6 = [-10, 1, 3]

    const koiBounds1 = [15, 10]
    const koiBounds2 = [27, 20]
    const koiBounds3 = [45, 40]
    const koiBounds4 = [15, 15]
    const koiBounds5 = [35, 35]

    const koiSwing1 = 2
    const koiSwing2 = 3
    const koiSwing3 = 4

    const koiZMovement = 0.0025
    const koiSpeed1 = .02
    const koiSpeed2 = .03

    const grassPosition1 = [-10, -12, -10]
    const grassPosition2 = [10, -12, -10]

    const envMap = useEnvironment({ path: "/underwater"})


    return (
        <section className='w-full h-screen relative'>
            
            <Canvas className='w-full h-screen bg-transparent z-10'
                camera={ { near: 0.1, far: 1000}}
            >
                <Suspense fallback={<Loader />}>
                    <OrbitControls />
                    <ambientLight intensity={1} />
                    <pointLight position={[5, 5, 5]} />
                    <Environment map={envMap} background />
                    <Sand />
                    <Bridge />
                    <Samurai />
                    <CubeCamera frames={Infinity}>
                        
                        {(texture) => (
                          <>
                            <Environment map={texture} />
                            <Mirror />
                          </>
                        )}
                    </CubeCamera>
                    <BambooRaft />
                    <Grass position={grassPosition1} />
                    <Grass position={grassPosition2} />
                    <KoiFish
                        position={koiPosition}
                        bounds={koiBounds1}
                        swing={koiSwing1}
                        zMovement={koiZMovement}
                    />
                    <KoiFish
                        position={koiPosition2}
                        bounds={koiBounds2}
                        swing={koiSwing2}
                        zMovement={koiZMovement}
                        speed={koiSpeed1}
                    />
                    <KoiFish 
                        position={koiPosition3} 
                        bounds={koiBounds3}
                        swing={koiSwing3}
                    />
                    <KoiFish 
                        position={koiPosition4} 
                        bounds={koiBounds4}
                        swing={koiSwing3}
                        orientation={1}
                        speed={koiSpeed1}
                    />
                    <KoiFish 
                        position={koiPosition5} 
                        bounds={koiBounds5}
                        swing={koiSwing3}
                    />
                    <KoiFish 
                        position={koiPosition6} 
                        bounds={koiBounds5}
                        swing={koiSwing3}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
};

export default HomePage;