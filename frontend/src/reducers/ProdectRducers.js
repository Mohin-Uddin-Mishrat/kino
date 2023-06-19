import { all_product_fail, all_product_request, all_product_success, clear_error, product_Detials_fail, product_Detials_request, product_Detials_success } from "../constant/PruductConstant"

export const produtReducers = (state={products:[]},action )=>{
    switch (action.type){
        case all_product_request:
            return{
                loading: true,
                products:[]
            }
        case all_product_success:
            return{
                loading: false,
                products:action.payLoad,
            }
        case all_product_fail:
            return{
                loading: false,
                error:action.error
            }
        case clear_error:
            return{
                ...state,
                error:null
            }
        default:
          return state;
    }
}

export const produtDetailsReducers = (state={product:{}},action )=>{
    switch (action.type){
        case product_Detials_request:
            return{
                loading: true,
                ...state
            }
        case product_Detials_success:
            return{
                loading: false,
                products:action.payLoad,
            }
        case product_Detials_fail:
            return{
                loading: false,
                error:action.error
            }
        case clear_error:
            return{
                ...state,
                error:null
            }
        default:
          return state;
    }
}