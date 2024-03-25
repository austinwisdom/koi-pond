import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber' 
import Loader from '../component/Loader';
import KoiFish from '../models/KoiFish';

const HomePage = () => {
    return (
        <section className='w-full h-screen relative'>
            <div className='absolute'>
                <h1 className='text-slate-100'>Koi Pond</h1>
                
            </div>
            <Canvas className='w-full h-screen bg-transparent'
                camera={ { near: 0.1, far: 1000}}
            >
                <Suspense fallback={<Loader />}>
                    <ambientLight />
                    <KoiFish />
                </Suspense>
            </Canvas>
        </section>
    );
};

export default HomePage;