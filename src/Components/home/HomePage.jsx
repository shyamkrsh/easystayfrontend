import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import ItemsIcon from './ItemsIcon'

import Footer from '../Footer'
import BottomAppBar from '../Bottombar'
import Loader from '../Loader'
import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'


function HomePage() {


  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 600);

  })

  return (
    <div className='overflow-hidden bg-white'>
      {/* <div className={loader ? " mx-auto  text-black w-[100%] h-[100vh] items-center justify-center fixed" : "hidden"}> */}
      {/* <Loader /> */}
      {/* </div> */}



      <Navbar />
      <div className='mt-16'>
        <Hero />
        <ItemsIcon />
      </div>
      <div className=''>
        <Footer />
      </div>

    </div>
  )
}

export default HomePage