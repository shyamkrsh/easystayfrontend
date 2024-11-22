import React, { useEffect, useState } from 'react'
import Card from './Card'
import Filter from './Filter';
import Footer from '../Footer'
import SearchNavbar from '../SearchNavbar';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import Loader from '../Loader'
import toast from 'react-hot-toast';
import speeking from '../../assets/video/speeking.gif'

function Listings() {
  let baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [listings, setListings] = useState([]);
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState("");
  const [showListen, setShowListen] = useState(false);


  let str1 = "search balupur";
  let str2 = "patna, balupur, bihar"




  const { category } = useParams();                               

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      axios.get(`${baseUrl}/api/listings/search/${category}`, { withCredentials: true }).then((res) => {
        setLoader(false);
        setListings(res.data.data);
      }).catch((err) => {

      })
    }, 1500);

  }, []);

  return (
    <>
      <SearchNavbar search={search} setSearch={setSearch} setShowListen={setShowListen} />
      {/* <div className='mb-20'>
        <Filter />
      </div> */}
      <div className={loader ? " mx-auto  text-black w-[100%] h-[100vh] items-center justify-center fixed" : "hidden"}>
        <Loader />
      </div>

      <div className={showListen ? 'pt-28' : 'hidden'}>
        <div className='w-[100vw] h-[90vh] flex items-center justify-center'>
          <img src={speeking} className='' />
        </div>
      </div>

      <div className={showListen ? "hidden" : 'pt-28 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 px-5 gap-2'}>
        {
          search ?
            listings?.map((item) => (
              search && search.replaceAll(",", "").toLowerCase().split(" ").some((word) => item.location.replaceAll(",", "").toLowerCase().includes(word) || item.title.replaceAll(",", "").toLowerCase().includes(word) ) ?
                <Link to={`/listings/show/${item?._id}`} key={item?._id}>
                  <Card key={item?._id} image={item?.images} title={item?.title} price={item?.price} description={item?.description} street_address={item?.location} />
                </Link>
                : null
            ))
            :
            listings?.map((item) => (
              <Link to={`/listings/show/${item?._id}`} key={item?._id}>
                <Card key={item?._id} image={item?.images} title={item?.title} price={item?.price} description={item?.description} street_address={item?.location} />
              </Link>
            ))
        }
      </div>

      <div className='w-full text-center mt-28'>
        <h1 className={listings?.length != 0 ? "hidden" : 'text-3xl font-bold text-center p-5'}>No Such Result Available</h1>
      </div>

      <div className='mt-[100%]'>
        <Footer />
      </div>

    </>
  )
}

export default Listings