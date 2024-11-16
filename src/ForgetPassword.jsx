import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5';
import Context from './context/Context';
import toast from 'react-hot-toast';





function ForgetPassword() {

    const [count, setCount] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount > 0) {
                    return prevCount - 1; 
                } else {
                    clearInterval(interval); 
                    return prevCount; 
                }
            }
            );
        }, 1000)
        return () => clearInterval(interval);
    }, [])


    const navigate = useNavigate();
    const { fetchUserDetails } = useContext(Context);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const onSubmit = (data) => {
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/forgetPassword`, data, {
            withCredentials: true,
        }).then((res) => {
            if (res?.data?.success) {
                toast.success("OTP Send successfully", {
                    position: 'top-right'
                });

                fetchUserDetails();
                navigate("/")
            } else {
                toast.error(res?.data?.message, {
                    position: 'top-right'
                })
            }
        }).catch((err) => {
            toast.error(err.message, {
                position: 'top-right'
            })
        })
    }



    return (
        <>
            <div className='bg-blue-600 text-white flex flex-start gap-5 w-[100%] px-5 py-3'>
                <Link onClick={() => window.history.back()} ><IoArrowBack className='text-2xl font-extrabold' /></Link>
                <h2 className='text-xl font-semibold'>Login to your Account</h2>
            </div>

            <div className="w-[100%] mt-0 md:mt-8 p-5 md:w-[40%]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">


                <h3 className="font-bold text-xl mb-5">Forget Password</h3>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='mt-5 md:mt-3'>
                        <TextField
                            id="1"
                            label='Enter your email'
                            type="email"
                            autoComplete="current-email"
                            className='w-full'

                            {...register("email", { required: true })}
                        />
                        {errors.name && <span className='text-red-600'>Please fill this field</span>}
                    </div>

                    <div className='flex flex-col mt-5'>
                        <Button variant="contained" type='submit'>
                            Sent OTP
                        </Button>
                    </div>
                    <div className='flex items-center justify-between px-10 mt-5'>
                        <p className='text-primary'>{count}</p>
                        <p className='text-slate-700 font-semibold cursor-pointer'>Resend OTP</p>
                    </div>
                </form>

            </div>
        </>
    )
}

export default ForgetPassword