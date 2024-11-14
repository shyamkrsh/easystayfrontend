import React from 'react'
import { Link } from 'react-router-dom'
import itemIcons from './itemIconsData'

function ItemsIcon() {

    return (
        <div className='mt-8 md:mt-12'>
            <h1 className='text-center font-semibold md:font-bold text-xl md:text-2xl mt-5 mb-1 md:mb-5'>Available Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-5 services overflow-y-auto overflow-x-hidden mt-5'>
                {
                    itemIcons?.map((item, index) => (
                        <Link to={item?.link} key={index}>
                            <div key={index} className='border h-[12rem] md:h-[15rem] rounded shadow-md px-10 md:py-10 transition-all hover:scale-105'>
                                <img src={item?.image} className="w-[5rem]" />
                                <p className='text-xl md:text-2xl font-bold text-center'>{item?.title}</p>
                                <p className='text-md md:text-xl font-semibold text-center'>{item?.content}</p>
                            </div>
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default ItemsIcon