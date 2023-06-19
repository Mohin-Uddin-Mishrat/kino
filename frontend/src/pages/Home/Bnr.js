import React from 'react';
import laptop from '../../assets/laptop.webp';
import watch from '../../assets/watch-1.png';

const Bnr = () => {
    return (
       <div className='my-10  grid gap-2 grid-cols-2 sm:grid-cols-3 sm:gap-4 '>
         <div className="hero  bg-base-200 col-span-2 sm:row-span-2">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={laptop} alt='laptop' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl font-bold">Walton tamarind ex-3</h1>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
         <div className="hero sm:py-10  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={watch} alt='watch' className="sm:w-[50%] rounded-lg shadow-2xl"/>
                <div>
                    <h1 className="text-3xl font-bold">Box Office News!</h1>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
         <div className="hero sm:py-10  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={watch}  alt='watch' className=" sm:w-[50%] rounded-lg " />
                <div>
                    <h1 className="text-3xl font-bold">Box Office News!</h1>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Bnr;