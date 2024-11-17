import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5';
import Context from './context/Context';
import toast from 'react-hot-toast';





function ChangePassword() {

    let {userId} = useParams();

    const navigate = useNavigate();
    const { fetchUserDetails } = useContext(Context);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        console.log(data)
        handleCount();
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/changePassword/${userId}`, data, {
            withCredentials: true,
        }).then((res) => {
            if (res?.data?.success) {
                setSentOtp(true)
                toast.success("Password changed successfully", {
                    position: 'top-right'
                });

                fetchUserDetails();
                navigate("/login")
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
                <button onClick={() => window.history.back()} ><IoArrowBack className='text-2xl font-extrabold' /></button>
                <h2 className='text-xl font-semibold'>Change your password</h2>
            </div>

            <div className="w-[100%] shadow-md mt-0 md:mt-8 p-5 md:w-[40%]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">


                <h3 className="font-bold text-xl mb-5">Change Password</h3>
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

                    <div className={'mt-5 md:mt-3 block'}>
                        <TextField
                            id="1"
                            label='Enter old password'
                            type="number"
                            autoComplete="current-otp"
                            className='w-full'

                            {...register("oldpassword", { required: true })}
                        />
                        {errors.name && <span className='text-red-600'>Please fill this field</span>}
                    </div>
                    <div className={'mt-5 md:mt-3 block'}>
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
                    
                </form>

            </div>
        </>
    )
}

export default ChangePassword