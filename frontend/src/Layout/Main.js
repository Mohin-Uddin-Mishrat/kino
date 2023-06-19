import React from 'react';
import Navbar from '../common/Navabar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Navabar/Footer';

const Main = () => {
    return (
        <div className='w-full'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;