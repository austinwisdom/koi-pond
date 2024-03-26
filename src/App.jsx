import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
    return (
        <main className='bg-slate-700 h-screen w-screen'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
                {/* <Footer /> */}
            </Router>
        </main>
    );
};

export default App;