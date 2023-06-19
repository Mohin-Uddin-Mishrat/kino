import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Login from "../pages/Login";
const Router = createBrowserRouter([
    {path:"/" ,element:<Main></Main> , children:[
        {
            path:"/",element:<Home></Home>
        },
        {
            path:"/productDetails/:id",element:<ProductDetails></ProductDetails>
        },
        {
            path:"/login",element:<Login></Login>
        },
        {
            path:"/sighnup/:id",element:<ProductDetails></ProductDetails>
        },
        
        
    ]}
])

export default Router;