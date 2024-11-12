import axios from 'axios'
import React, { useState, useEffect } from 'react'


function ShowReviews({ id }) {
    const [listingData, setListingData] = useState(null);

    useEffect(() => {
        try {
            axios.get(`https://easystaybackend.onrender.com/api/reviews/${id}/show`).then((res) => {
                setListingData(res?.data?.data?.reviews);

            }).catch((err) => {
                console.log(err);
            })
        } catch (err) {
            console.log(err);
        }
    })

    return (
        <div className='mb-32'>
            <div className='text-xl font-semibold mb-5'>
                All Reviews :
            </div>
            <div>
                {
                    listingData ?
                        listingData?.map((item, index) => (
                            <div className='mb-4' key={index}>
                                <div className='flex items-center'>
                                    {
                                        item?.author?.profileImage ? 
                                        <img src={item?.author?.profileImage} className='w-[35px] md:w-[40px] rounded-full mr-3' />
                                        : 
                                        <img src="https://i.ibb.co/Pt6K1zh/55f43de2412ad3f18fe90fac70c6472a-removebg-preview.png" className='w-[35px] md:w-[40px] rounded-full mr-3'  />
                                    }
                                   
                                    

                                    <h3 className='text-xl font-semibold'>{item?.author?.name}</h3>
                                </div>

                                <p>{(item?.rating == 1) ? '⭐' : ((item?.rating == 2) ? '⭐⭐' : ((item?.rating == 3) ? '⭐⭐⭐' : (item?.rating == 4) ? '⭐⭐⭐⭐' : (item?.rating == 5) ? '⭐⭐⭐⭐⭐' : ""))}</p>
                                <p>{item?.content}</p>
                                <span className='text-slate-500 text-sm'>{item?.createdAt}</span>
                            </div>
                        ))
                        : ""
                }

            </div>
        </div>
    )
}

export default ShowReviews