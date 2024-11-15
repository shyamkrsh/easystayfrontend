import React from 'react'
import ProfileNav from './ProfileNav'
import ProfileData from './profileData'

function ProfilePage() {
    return (
        <>
            <ProfileNav/>
            <div className='mt-20 text-center border shadow-md md:w-[50%] flex items-center justify-center mx-auto py-10'>
                
               <ProfileData/>
            </div>
        </>
    )
}

export default ProfilePage