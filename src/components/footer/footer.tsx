import React from 'react'
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>    
      <footer className='bg-gray-100 w-full h-full'>
        <nav className='flex flex-col md:flex-row px-3 md:px-10'>
            <div className='flex flex-col gap-2 py-5 md:py-10 md:px-5'>
                <h6 className='font-bold text-slate-900 text-sm'>COMPANY INFO</h6>
                <p className='text-gray-600'>About</p>
                <p className='text-gray-600'>Social Responsibility</p>
                <p className='text-gray-600'>Affiliate</p>
                <p className='text-gray-600'>Fashion Blogger</p>
            </div>  

            <div className='flex flex-col gap-2 py-5 md:py-10 md:px-5'>
                <h6 className='font-bold text-slate-900 text-sm'>HELP & SUPPORT</h6>
                <p className='text-gray-600'>About</p>
                <p className='text-gray-600'>Social Responsibility</p>
                <p className='text-gray-600'>Affiliate</p>
                <p className='text-gray-600'>Fashion Blogger</p>
            </div>  

            <div className='flex flex-col gap-2 py-5 md:py-10 md:px-10'>
                <h6 className='font-bold text-slate-900 text-sm'>CUSTOMER CARE</h6>
                <p className='text-gray-600'>About</p>
                <p className='text-gray-600'>Social Responsibility</p>
                <p className='text-gray-600'>Affiliate</p>
                <p className='text-gray-600'>Fashion Blogger</p>
            </div>  

            <div className='flex flex-col gap-4 py-5 md:py-10 md:px-10 lg:px-40'>
                <div className='flex flex-col md:flex-row justify-between'>
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
                <div className='flex gap-2 w-full md:w-80'>    
                    <input className='w-full md:w-80 p-2' placeholder='Enter your mail'/> 
                    <button className='bg-slate-900 p-2 text-white'>Subscribe</button>    
                </div>  
                <span className='text-slate-500 text-xs'>By Clicking our Subscribe button you're agreeing to our <span className='text-blue-500 underline'>Privacy & Policy</span></span>  
            </div>
        </nav>  

        <div className='px-5 md:px-20 flex flex-col gap-2'>
            <div className='py-4'>
                <span className='text-slate-400 text-xs md:text-sm'>2020 - 2021 All Rights are Reserved </span>     
            </div>    

            <div className='flex flex-col py-8'>
                <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
                    <span className='text-slate-400 underline text-xs md:text-sm'>Privacy Center |</span>
                    <span className='text-slate-400 underline text-xs md:text-sm'>Privacy & Cookie Policy |</span>
                    <span className='text-slate-400 underline text-xs md:text-sm'>Manage Cookies |</span>
                </div>
                <div className='flex flex-col md:flex-row gap-2 md:gap-4 mt-4'>
                    <span className='text-slate-400 underline text-xs md:text-sm'>Terms & Condition |</span>
                    <span className='text-slate-400 underline text-xs md:text-sm'>Copyright |</span>
                    <span className='text-slate-400 underline text-xs md:text-sm'>Impure</span>
                </div>
            </div>
        </div>
      </footer>           
    </>   
  )
}

export default Footer
