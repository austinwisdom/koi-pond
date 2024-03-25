import React from 'react';
import { Router, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <main className='bg-slate-600'>
            <Router>
                {/* navbar */}
                <Routes>
                    <Route path='/' element={'HomePage'} />
                </Routes>
            </Router>
        </main>
    );
};

export default App;