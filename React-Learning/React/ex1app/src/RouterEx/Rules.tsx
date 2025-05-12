import React from 'react';
import Menu from './Menu';
import Home from './Home';
import Landing from './Landing';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

const Rules = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/test1" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default Rules;