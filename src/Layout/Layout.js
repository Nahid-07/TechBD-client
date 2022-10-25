import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Components/Home';
import Navbar from '../Components/Navbar';

const Layout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default Layout;