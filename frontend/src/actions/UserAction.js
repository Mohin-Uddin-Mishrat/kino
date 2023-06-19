import axios from "axios";
import { Clear_error, User_Login_Fail, User_Login_Success, User_Login_requset } from "../constant/UserConstant";

export const LoginAction = (email,password)=>async(dispatch)=>{
    try{
    dispatch({
        type:User_Login_requset,
    });

    const {data} = await axios.post(`http://localhost:5000/api/v1/login`,{email,password},{
        headers:{"content-type":"application/json"}
    });
    
    dispatch({
        type:User_Login_Success,
        payLoad:data
    });
  
}
  catch(error){
    dispatch({
        type:User_Login_Fail,
        error:error.message
    });
  }
}
export const clearError = ()=>async(dispatch)=>{
    dispatch({type:Clear_error})
}