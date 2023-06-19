import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../actions/PruductAction';
import laptop from '../../assets/laptop.webp';
import { Link } from 'react-router-dom';

const FeatureProducts = ({product}) => {
   
    return (
        <Link to={`/productDetails/${product._id}`} className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={laptop}alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="big-font text-[20px]">{product.name}</h2>
                <h2 className="big-font text-2xl">{product.rating}</h2>
                <h2 className="big-font text-2xl text-secondary">{product.price}</h2>
                <div className="card-actions justify-end">
                </div>
            </div>
        </Link>
    );
};

export default FeatureProducts;