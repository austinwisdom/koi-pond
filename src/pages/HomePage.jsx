import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber' 
import Loader from '../component/Loader';
import KoiFish from '../models/KoiFish';
import { CubeCamera, Environment, OrbitControls, useEnvironment } from '@react-three/drei';
import BambooRaft from '../models/BambooRaft';
import WaterLine from '../models/WaterLine';
import Mirror from '../models/Mirror';

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
    const koiPosition2 = [-5, -5, -3]
    const koiPosition3 = [-23, -7, -10]
    const koiPosition4 = [-44, -6, -2]
    const koiPosition5 = [-10, -4, -3]

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
                    <pointLight position={[-3, -3, 2]} />
                    <Environment map={envMap} background />
                    {/* <WaterLine /> */}
                    <CubeCamera frames={Infinity}>
                        
                        {(texture) => (
                          <>
                            <Environment map={texture} />
                            <Mirror />
                          </>
                        )}
                    </CubeCamera>
                    <BambooRaft />
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
                </Suspense>
            </Canvas>
        </section>
    );
};

export default HomePage;