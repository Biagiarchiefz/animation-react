import React from 'react'
import Navbar from '../Navbar/Navbar'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { HeadPhoneData } from '../../data/MockData';
import { useEffect, useState } from 'react'

const Hero = () => {

  const [activeData, setActiveData] = useState(HeadPhoneData[0]);

  return (
    <section className='bg-red-400 text-white'>
      <Navbar/>
      <div className="container grid grid-cols-1 md:grid-cols-2 h-screen md:h-[700px] relative">

        {/* headphone info section */}
        <div className="flex flex-col justify-center py-14 md:py-0 xl-:max-w-[500px] order-2 md:order-1">
          <div className="space-y-5 md:space-y-7 text-center md:text-left">
            <h1 className='text-3xl lg:text-4xl xl:text-5xl  font-bold'>{activeData.title}</h1>
            <p className='text-sm leading-loose text-white/80'>{activeData.subtitle}</p>
            <p className='text-3xl lg:text-4xl xl:text-5xl font-bold'>{activeData.price}</p>
            
          {/* icons */}
          <div className="flex justify-center md:justify-start items-center gap-4 text-3xl">
            <FaFacebook className='cursor-pointer border rounded-full p-[6px]'/>
            <FaInstagram className='cursor-pointer border rounded-full p-[6px]'/>
            <FaTwitter className='cursor-pointer border rounded-full p-[6px]'/>
          </div>

          </div>
        </div>

        {/* headphone img section */}
        <div className="order-1 md:order-2 flex flex-col justify-center items-center relative">
          <img src={activeData.Image}  alt="" className='w-[300px] md:w-[400px] xl:w-[500px] relative '/>
          <div className="text-[300px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 text-white/5 font-poppins font-extrabold">
            {activeData.modal}  
          </div>
        </div>



      </div>
    </section>
  )
}

export default Hero
