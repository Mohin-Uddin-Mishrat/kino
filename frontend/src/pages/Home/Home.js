import React, { useEffect } from 'react';
import Bnr from './Bnr';
import  './home.css';
import FeatureProducts from './FeatureProducts';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../actions/PruductAction';

const Home = () => {

    const {loading,products}= useSelector(state => state.products.products)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllProduct());
    },[dispatch,loading])
    return (
        <div className='w-[95%]  mx-auto'>
            <Bnr></Bnr>
            <p className='feature big-font text-3xl '>Featured Products</p>

            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {
                   products && products.map(pro=>
                    <FeatureProducts product={pro}></FeatureProducts>

                    )
                }
            </div>
        </div>
    );
};

export default Home;