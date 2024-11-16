import React from 'react'
import ProfileNav from './ProfileNav'
import ProfileData from './ProfileData.jsx'
import { useSelector } from 'react-redux';

function ProfilePage() {
    const user = useSelector((state) => state.user.user);
    return (
        <>
            <ProfileNav/>
            <div className='mt-20 text-center border shadow-md md:w-[50%] flex items-center justify-center mx-auto py-10'>
                
               <ProfileData user={user}/>
            </div>
        </>
    )
}

export default ProfilePage