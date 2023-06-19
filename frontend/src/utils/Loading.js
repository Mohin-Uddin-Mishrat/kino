import React from 'react';
import  './loading.css';

const Loading = () => {
    return (
        <div className='w-[100vw] h-[100vh]  flex justify-center items-center'>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    );
};

export default Loading;