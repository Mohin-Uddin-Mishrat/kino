import React from 'react';
import { BsBlockquoteRight, BsCartPlusFill, BsPersonCircle, BsSearch } from "react-icons/bs";

import './nav.css';

const Navbar = () => {
    const optionsList = [
        { icon: <BsCartPlusFill></BsCartPlusFill> },
        { icon: <BsPersonCircle></BsPersonCircle> },
        { icon: <BsBlockquoteRight></BsBlockquoteRight> },
    ]
    return (
        <>
            <div className='bg-primary min-w-[500px]'>
                <div className='nav '>
                    <div className=' text-5xl big-font'>
                        <h1>Kino.<span className='text-accent'>COM</span></h1>
                    </div >
                    <div className='srch w-full'>
                        <form className='flex'>
                            <input placeholder='search product' className='search w-full' type='text'></input>
                            <button className='bg-accent rounded-r-sm text-3xl p-3 '><BsSearch></BsSearch></button>
                        </form>
                    </div>
                    <div className='text-black '>
                        <ul className='flex justify-center'>
                            {optionsList.map((li, i) =>
                                <li className='text-3xl mx-7' key={i}>{li.icon}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;