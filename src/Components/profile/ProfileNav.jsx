import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';


function ProfileNav() {
    return (
        <div className='z-10 flex bg-blue-700 fixed top-0 w-[100vw] py-3 text-white items-center gap-10 px-5 md:px-16'>
            <div>
                <Link onClick={() => window.history.back()}  > <IoArrowBack className='text-3xl ' /></Link>
            </div>
            <div>
                <h2 className='text-2xl font-semibold'>Your profile</h2>
            </div>
            
        </div>
    )
}

export default ProfileNav