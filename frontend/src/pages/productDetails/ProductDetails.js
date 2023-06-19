import React, { useEffect } from 'react';
import './ProductDetail.css';
import laptop from '../../assets/laptop.webp';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../actions/PruductAction';
import { useMatches } from 'react-router-dom';
import Loading from '../../utils/Loading';
import StarRatings from 'react-star-ratings';
const ProductDetails = () => {
    const match = useMatches();
    const id = match[0].params.id;
    const dispatch = useDispatch();
    const { products, loading } = useSelector(state => state.productDetails);

    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [dispatch, id])
    return (
        <>
            {
                loading ? <Loading></Loading> :
                    <div className='productDetails  mx-auto'>
                        <div className='details w-[95%] mx-auto   '>
                            <div >
                                <img className='w-1/2' src={laptop} alt="Shoes" />
                            </div>
                            <div >
                                <h1 className='border-bottom big-font text-primary text-[20px] '>{products?.product?.name}</h1>
                                <div className='text-4xl'>
                                    <StarRatings
                                        rating={products?.product?.rating}
                                        starRatedColor="yellow"
                                        numberOfStars={5}
                                        starDimension='15px'
                                    />
                                </div>

                                <h1 className='big-font text-2xl py-3'>${products?.product?.price}</h1>
                                <form className='flex border-bottom pb-5 '>
                                    <button className='button'>+</button>
                                    <input value={1} readOnly className='text-center w-[40px]' type='number' />
                                    <button className='button'>-</button>
                                </form>
                                <h1 className='big-font border-bottom'>Status : <span className='text-secondary'>Instock</span></h1>
                                <h1 className='big-font '>Description :</h1>
                                <h1 className='border-bottom'>{products?.product?.description}</h1>
                                <form className='my-10'>
                                    <StarRatings
                                        rating={2.5}
                                        starRatedColor="yellow"
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension='20px'
                                        starHoverColor='yellow'
                                        changeRating={3}

                                    />
                                    <textarea className='reviewInput my-3'>

                                    </textarea>
                                    <button className='block rounded-lg big-font px-2 py-2 bg-secondary ' >Submit Review</button>

                                </form>
                            </div>


                        </div>
                        <div className='w-[95%] mx-auto my-10'>
                            <h1 className='border-bottom big-font text-primary text-[20px] '>Reviews : <StarRatings
                                rating={products?.product?.rating}
                                starRatedColor="yellow"
                                numberOfStars={5}
                                name='rating'
                                starDimension='20px'
                            /></h1>

                            <div className='border-b-2 py-3'>
                                <div className='flex  items-center gap-2'>
                                    <div className="avatar ">
                                        <div className="w-10 rounded-full">
                                            <img src={laptop} />
                                        </div>
                                    </div>
                                    <div>
                                        <h1>Mohin uddin mishrat</h1>
                                        <StarRatings
                                            rating={products?.product?.rating}
                                            starRatedColor="yellow"
                                            numberOfStars={5}
                                            name='rating'
                                            starDimension='15px'
                                        />
                                    </div>
                                </div>
                                <p>heloo my name is mish aafdas;fjadsfjaf amar mon valo nai  a afdfsadfasdff</p>
                                
                            </div>

                        </div>
                    </div>
            }
        </>
    );
};

export default ProductDetails;