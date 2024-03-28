import { useState, useRef, useEffect } from 'react'
import soundoff from '../assets/icons/soundoff.svg'
import soundon from '../assets/icons/soundon.svg'

import lotus from '../assets/lotus.mp3'

const Navbar = () => {

    const audioRef = useRef(new Audio(lotus));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;

    const [isPlayingMusic, setIsPlayingMusic] = useState(true);

    useEffect(() => {
        if (isPlayingMusic) {
          audioRef.current.play();
        }
    
        return () => {
          audioRef.current.pause();
        };
      }, [isPlayingMusic]);

    return (
        <nav className='h-12 w-1/3 backdrop-blur-sm bg-white/10 rounded-lg absolute z-50 m-4 flex flex-row justify-around'>
            <h1 className='text-orange-500 px-7 opacity-90 self-center'>koi pond <span className='text-white'>|| </span><a target="_blank" href="https://austinwisdom.dev/"><span className="text-orange-500 drop-shadow-md transition hover:text-orange-600 hover:cursor-pointer">austin wisdom</span></a></h1>
            <img
                  src={!isPlayingMusic ? soundoff : soundon}
                  alt='jukebox'
                  onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                  className='w-8 h-8 cursor-pointer object-contain self-center'
                />
        </nav>
    );
};

export default Navbar;