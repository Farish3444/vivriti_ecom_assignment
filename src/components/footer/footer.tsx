import React from 'react'
import { FaFacebook } from "react-icons/fa";



const Footer = () => {
  return (
    <>    
      <footer className='bg-gray-100 w-full h-full'>
        <nav className='flex flex-row px-10'>
            <div className='flex flex-col gap-2 px-10 py-10'>
                <h6 className='font-bold text-slate-900 text-sm'>COMPANY INFO</h6>
                <p className='text-gray-600'>About</p>
                <p className='text-gray-600'>Social Responsibility</p>
                <p className='text-gray-600'>Affiliate</p>
                <p className='text-gray-600'>Fashion Blogger</p>
            </div>  

            <div className='flex flex-col gap-2 px-10 py-10'>
                <h6 className='font-bold text-slate-900 text-sm'>HELP & SUPPORT</h6>
                <p className='text-gray-600'>About</p>
                <p className='text-gray-600'>Social Responsibility</p>
                <p className='text-gray-600'>Affiliate</p>
                <p className='text-gray-600'>Fashion Blogger</p>
            </div>  

            <div className='flex flex-col gap-2 px-10 py-10'>
                <h6 className='font-bold text-slate-900 text-sm'>CUSTOMER CARE</h6>
                <p className='text-gray-600'>About</p>
                <p className='text-gray-600'>Social Responsibility</p>
                <p className='text-gray-600'>Affiliate</p>
                <p className='text-gray-600'>Fashion Blogger</p>
            </div>  

            

<div className='flex flex-col gap-2 px-40 py-10'>
    <div className='flex justify-between'>
        <div className='flex flex-col gap-2'>
            <h6 className='font-bold text-slate-900 text-sm'>SOCIALS</h6>
            <div className='flex gap-3 mb-5'>
                <FaFacebook />
                <FaFacebook />
                <FaFacebook />
                <FaFacebook />
                <FaFacebook />
            </div>
        </div>

        <div className='flex flex-col gap-2'>
            <h6 className='font-bold text-slate-900 text-sm'>PLATFORMS</h6>
            <div className='flex gap-3 mb-5'>
                <FaFacebook />
                <FaFacebook />
            </div>
        </div>
    </div>

    <span className='text-gray-600'>    
        SIGN UP     
    </span>
    <div className='flex gap-2 w-120'>    
        <input className='w-96' placeholder='Enter your mail'/> 
        <button className='bg-slate-900 p-2 text-white'>Subscribe</button>    
    </div>  
    <span className='text-slate-500'>By Clicking our Subscribe button your agreeing to our <span className='text-blue-500 underline'>Privacy & Policy</span></span>  
</div>
        </nav>  

      <div className='px-20 flex-col gap-2'>

      <div className='py-4'>
        <span className='text-slate-400'>2020 - 2021 All Rights are Reserved </span>     
      </div>    
        

      <div className='flex flex-row gap-4'>
        <span className='text-slate-400 underline'>Privacy Center | </span>   <span className='text-slate-400 underline'>Privacy & Cookie Policy |</span> <span className='text-slate-400 underline'>Manage Cookies |</span> <span className='text-slate-400 underline'>Terms & Condition |</span>
      </div>
      
      
      </div>

      </footer>           
    </>   
  )
}

export default Footer