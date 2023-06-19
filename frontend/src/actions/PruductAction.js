import { all_product_fail, all_product_request, all_product_success, clear_error, product_Detials_fail, product_Detials_request, product_Detials_success } from "../constant/PruductConstant"
import axios from 'axios';
export const getAllProduct = ()=>async(dispatch)=>{
    try{
    dispatch({
        type:all_product_request,
    });

    const {data} = await axios.get('http://localhost:5000/api/v1/products');
    
    dispatch({
        type:all_product_success,
        payLoad:data
    });
  
}
  catch(error){
    dispatch({
        type:all_product_fail,
        error:error.message
    });
  }
}
export const getProductDetails = (id)=>async(dispatch)=>{
    try{
    dispatch({
        type:product_Detials_request,
    });

    const {data} = await axios.get(`http://localhost:5000/api/v1/productDetails/${id}`);
    
    dispatch({
        type:product_Detials_success,
        payLoad:data
    });
  
}
  catch(error){
    dispatch({
        type:product_Detials_fail,
        error:error.message
    });
  }
}
export const clearError = ()=>async(dispatch)=>{
    dispatch({type:clear_error})
}