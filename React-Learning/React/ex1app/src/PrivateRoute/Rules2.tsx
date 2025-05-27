import {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import MenuBar from './MenuBar';
import Protected from './Protected';
import Product from './Product';
import Dashboard from './Dashboard';

const Rules2 = () => {
    
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

    const signin = () => {
        setIsSignedIn(true);
    }

    const signout = () => {
        setIsSignedIn(false);
    }       

    return(
        <>
            <BrowserRouter>
                <MenuBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={
                        <Protected isSignedIn={isSignedIn}>
                            <Product />
                        </Protected>
                    } />
                    <Route path="/dashboard" element={
                        <Protected isSignedIn={isSignedIn}>
                            <Dashboard />
                        </Protected>
                    } />
                </Routes><br /><br />

                {isSignedIn ? (
                    <div>
                        <button onClick= {signout}>Sign Out</button>
                    </div>
                ) : (
                    <div>
                        <button onClick= {signin}>Sign In</button>
                    </div>
                )}
            </BrowserRouter>
        </>
    )
};
export default Rules2;