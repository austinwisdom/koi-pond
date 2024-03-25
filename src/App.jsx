import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';

const App = () => {
    return (
        <main className='bg-slate-600 h-screen w-screen'>
            <Router>
                {/* navbar */}
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
            </Router>
        </main>
    );
};

export default App;