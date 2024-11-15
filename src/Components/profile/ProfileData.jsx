import React from 'react'
import { useSelector } from 'react-redux'

function ProfileData() {
    const user = useSelector((state) => state.user.user);
    
    return (
        <>
            <div className='mx-auto'>
                <div className='flex items-center justify-center'>
                    {user && user.profileImage ?
                    <img src={user?.profileImage} className='w-[35px] md:w-[120px] rounded-full'/>
                    :
                    <img src="https://i.ibb.co/Pt6K1zh/55f43de2412ad3f18fe90fac70c6472a-removebg-preview.png" className='w-[100px] md:w-[120px] rounded-full'  />
                    }
                </div>
                <div>
                    <h1 className='text-3xl font-semibold'>{user?.name}</h1>
                </div>
                <div>
                    <p className='text-lg font-semibold mt-3'>Gmail: {user?.email}</p>
                </div>
                <div>
                    <p className='text-lg font-semibold mt-3 text-left'>Phone: +91 {user?.mobNumber}</p>
                </div>
            </div>
        </>
    )
}

export default ProfileData