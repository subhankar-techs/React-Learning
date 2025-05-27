import React from 'react';
import Menu from './Menu';
import Home from './Home';
import Landing from './Landing';
import Demo2 from './Demo2';
import Getid from './Getid';
import Getdata from './Getdata';
import Login from './login';
import Dashboard from './Dashboard';
import Product from './Product';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

const Rules = () => {
    return (
        <>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/test1" element={<Home />} />
                    <Route path="/demo2" element={<Demo2 />} />
                    <Route path="/test3/:uid" element={<Getid />} />
                    <Route path="/test4" element={<Getdata />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route path="product" element={<Product />} />
                        <Route path="view/:name" element= {<}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default Rules;