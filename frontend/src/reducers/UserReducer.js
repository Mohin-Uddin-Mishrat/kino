import { Clear_error, User_Login_Fail, User_Login_Success, User_Login_requset } from '../constant/UserConstant';

export const LoginReducers = (state={user:{}},action )=>{
    switch (action.type){
        case  User_Login_requset:
            return{
                loading: true,
                isAuthenticated:false
            }
        case User_Login_Success:
            return{
                loading: false,
                user:action.payLoad,
                isAuthenticated:true
            }
        case User_Login_Fail:
            return{
                ...state,
                isAuthenticated:false,
                loading: false,
                user:null,
                error:action.error
            }
        case Clear_error:
            return{
                ...state,
                error:null
            }
        default:
          return state;
    }
}