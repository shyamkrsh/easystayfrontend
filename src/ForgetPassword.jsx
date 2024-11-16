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

    const [count, setCount] = useState(60);
    const [sentOtp, setSentOtp] = useState(false);

    let handleCount = () => {
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
    }



    const navigate = useNavigate();
    const { fetchUserDetails } = useContext(Context);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const onSubmit = (data) => {
        console.log(data)
        handleCount();
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/forgetPassword`, data, {
            withCredentials: true,
        }).then((res) => {
            if (res?.data?.success) {
                setSentOtp(true)
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

            <div className="w-[100%] shadow-md mt-0 md:mt-8 p-5 md:w-[40%]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">


                <h3 className="font-bold text-xl mb-5">Forget Password</h3>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className={'mt-5 md:mt-3'}>
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

                    <div className={sentOtp == true ? 'mt-5 md:mt-3 block': 'hidden'}>
                        <TextField
                            id="1"
                            label='Enter OTP'
                            type="number"
                            autoComplete="current-otp"
                            className='w-full'

                            {...register("otp", { required: true })}
                        />
                        {errors.name && <span className='text-red-600'>Please fill this field</span>}
                    </div>
                    <div className={sentOtp == true ? 'mt-5 md:mt-3 block': 'hidden'}>
                        <TextField
                            id="1"
                            label='Enter your new password'
                            type="password"
                            autoComplete="current-password"
                            className='w-full'

                            {...register("newpassword", { required: true })}
                        />
                        {errors.name && <span className='text-red-600'>Please fill this field</span>}
                    </div>



                    <div className={sentOtp == true ? 'flex flex-col mt-5' : 'hidden'}>
                        <Button variant="contained" type='submit'>
                            Submit
                        </Button>
                    </div>
                    <div className='flex items-center justify-between px-10 mt-5'>
                        <p className={sentOtp == true ? 'text-primary' : "hidden"}>{sentOtp == true ? count : ""}</p>

                        {
                            sentOtp == true ?
                                <p className={count == 0 ? 'text-blue-600 font-semibold cursor-pointer' : 'text-slate-700-600 font-semibold '}>
                                    {sentOtp == false ? "Send OTP" : "Resend OTP"}</p>
                                :
                                <Button variant="contained" type='submit'>
                                    Send verification OTP
                                </Button>
                        }

                    </div>
                </form>

            </div>
        </>
    )
}

export default ForgetPassword