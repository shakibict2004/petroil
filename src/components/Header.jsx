import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";





const Header = () => {
  return (
 <header className="py-3 bg-black">
  <div className="max-w-Container mx-auto">
 <div className="flex items-center flex-wrap ">

  <div className=" w-full lg:w-1/4">
  <div className="flex items-center  justify-center lg:justify-start gap-2">
    <MdOutlineMail className='text-white'/>
    <h2 className='text-white '>mail@yourcompany.com</h2>
  </div>
  </div>
  <div className="w-full  lg:w-1/4">
  <div className="flex items-center  justify-center lg:justify-start gap-x-2">
    <MdAddIcCall className='text-white'/>
  <h2 className='text-white'>+896 120 5889 (Toll free)</h2>
  </div>
  </div>
  <div className="w-full lg:w-1/2">
  <div className="flex lg:justify-end gap-4 justify-center text-white  ">
    < FaFacebookF/>
    <FaTwitter/>
    <FaLinkedinIn/>
    <GrInstagram />
  </div>
  </div>
 </div>
  </div>
 </header>
  )
}

export default Header