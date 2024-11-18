import React from 'react'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-hot-toast';


function ApplyForm({id}) {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/application/${id}/new`, data, {
            withCredentials: true,
        }).then((res) => {
            toast.success("Application accepted", {
                position: 'top-right'
              })
            reset()
        }).catch((err) => {
            toast.error(err.message);
        })
    }

    return (
        <div className='w-[95vw] md:w-[50%] bg-slate-900 rounded-md p-5 md:p-10 shadow-md'>

            <form onSubmit={handleSubmit(onSubmit)} >
                <h2 className='text-center text-2xl font-bold text-white'>Book Your Choice</h2>
                <div className='mt-3'>
                    <TextField
                        id=""
                        label='Enter your name'
                        type="text"
                        autoComplete="current-name"
                        className='w-full '
                        {...register("name", { required: true })}
                        InputLabelProps={{
                            style: { color: 'white' } // Makes label text white
                        }}
                        inputProps={{
                            style: { color: 'white', backgroundColor: '#3a5d5e', borderRadius: "10px" } // Makes input text white
                        }}
                    />
                    {errors.name && <span className='text-red-600'>Please fill this field</span>}
                </div>
                <div className='mt-3 '>
                    <TextField
                        id=""
                        label='Enter your email'
                        type="email"
                        autoComplete="current-email"
                        className='w-full '
                        {...register("email", { required: true })}
                        InputLabelProps={{
                            style: { color: 'white' } // Makes label text white
                        }}
                        inputProps={{
                            style: { color: 'white', backgroundColor: '#3a5d5e', borderRadius: "10px" } // Makes input text white
                        }}
                    />
                    {errors.password && <span className='text-red-600'>Please fill this field</span>}
                </div>
                <div className='mt-5'>
                    <TextField
                        id=""
                        label='Enter your mobile number'
                        type="text"
                        autoComplete="current-number"
                        className='w-full'
                        {...register("mobNumber", { required: true })}
                        InputLabelProps={{
                            style: { color: 'white' } // Makes label text white
                        }}
                        inputProps={{
                            style: { color: 'white', backgroundColor: '#3a5d5e', borderRadius: "10px" } // Makes input text white
                        }}
                    />
                    {errors.name && <span className='text-red-600'>Please fill this field</span>}
                </div>
                <div className='mt-3'>
                    <TextField
                        id=""
                        label='Enter your address'
                        type="text"
                        autoComplete="current-address"
                        className='w-full'
                        {...register("location", { required: true })}
                        InputLabelProps={{
                            style: { color: 'white' } // Makes label text white
                        }}
                        inputProps={{
                            style: { color: 'white', backgroundColor: '#3a5d5e', borderRadius: "10px" } // Makes input text white
                        }}
                    />
                    {errors.password && <span className='text-red-600'>Please fill this field</span>}
                </div>
                <div className='flex flex-col mt-5'>
                    <Button variant="contained" type='submit'>
                        Apply
                    </Button>
                </div>
                
            </form>
        </div>
    )
}

export default ApplyForm;