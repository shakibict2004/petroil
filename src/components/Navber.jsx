import React, { useState } from 'react'
import Logo from "../assets/img.svg"
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";


const Navber = () => {
   let [show,setShow] = useState(false)
   
  return (
    <nav className='bg-[#F40404] py-4'>
 <div className=" max-w-Container mx-auto ">
    <div className="flex items-center">
        <div className="w-1/4 ">
        <img src={Logo} alt="" />
        </div>
        <div className="w-3/4 ">
        <ul className='flex justify-end '>
            <li className='text-[16px] font-pops  text-white font-semibold hover:text-[#282828]
             duration-300 ease-in-out p-4'>Home</li>
            <li className='text-[16px] font-pops  text-white  font-semibold hover:text-[#282828] duration-300 ease-in-out p-4'>About</li>
            <li className='text-[16px] font-pops  text-white  font-semibold hover:text-[#282828] duration-300 ease-in-out p-4'>Service</li>
            <li className='text-[16px] font-pops  text-white font-semibold hover:text-[#282828] uration-300 ease-in-out p-4'>Gallery</li>
            <li className='text-[16px] font-pops  text-white font-semibold hover:text-[#282828] duration-300 ease-in-out p-4'>Blog</li>
            <li className='text-[16px] font-pops  text-white font-semibold hover:text-[#282828] duration-300 ease-in-out border-2 border-[#fff] p-4 rounded-full'>Contact</li>
        </ul>
        </div>
        <div onClick={()=> setShow(!show) } className='lg:hidden' >
         {show ?< ImCross/> :  <FaBars/>}
           
           
        </div>
    </div>
 </div>
 </nav>
  )
}

export default Navber