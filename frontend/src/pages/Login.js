import React, { useEffect, useState } from 'react';
import  { useForm } from 'react-hook-form';
import  { useDispatch } from 'react-redux';
import { LoginAction } from '../actions/UserAction';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData]=useState({})
    const onSubmit = data => setData(data);
    console.log(data)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(LoginAction(data.email , data.password))
    },[dispatch])
    return (
        <div className='w-[100vw]  h-[100vh] flex justify-center items-center'>
            <div className='w-[400px]'>
                <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='big-font py-2'>Email</h2>
                    <input className='loginInput py-3 rounded-lg pl-6' placeholder='email' {...register("email", { required: true })} />
                    {errors.email && <span>This field is required</span>}


                    <h2 className='big-font py-2'>Password</h2>
                    <input className='loginInput py-3 rounded-lg pl-6' placeholder='Password' {...register("password", { required: true })} />
                    {errors.password && <span>This field is required</span>}

                    <input className='bg-primary big-font py-3 mt-3 rounded-lg pl-6' value='Login' type="submit" />
                    <h1>Forget password ? </h1>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                        <input className='bg-primary big-font py-3 rounded-lg pl-6' value='SighnUp' type="submit" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;