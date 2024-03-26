import React from 'react';

const Navbar = () => {
    return (
        <nav className='h-12 w-1/3 backdrop-blur-sm bg-white/10 rounded-lg absolute z-50 m-4 flex flex-col justify-center'>
            <h1 className='text-slate-200 px-7 opacity-90'>koi pond || <a target="_blank" href="https://austinwisdom.dev/"><span className="text-orange-500 transition hover:text-orange-600 hover:cursor-pointer">austin wisdom</span></a></h1>
        </nav>
    );
};

export default Navbar;