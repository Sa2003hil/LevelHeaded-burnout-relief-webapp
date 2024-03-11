import React from 'react'
import Image from 'next/image'
import supp from '../assets/supp.png'
import house from '../assets/house.png'
import price from '../assets/price.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const WhyWeBest = () => {
    useEffect(() => {
        AOS.init({
        })
    }, [])
    return (
        <div className='flex gap-10 w-full items-center justify-center m-auto'>
            <div className=' flex items-center justify-center ml-14'>
                <p className='text-[#2c3a4d] font-semibold text-xl w-36'>Why we are
                    the best?</p>
            </div>
            <div className='flex gap-12'>
                <div className=' p-4 w-[30%] shadow-2xl  rounded-2xl' data-aos="fade-right">
                    <div className='flex items-center justify-center'>
                        <Image src={supp} alt='' width={200} height={200} />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className=' flex items-center justify-center font-semibold text-blue-950 text-lg w-[90%]'>Best  Support Guaranteed</p>
                        <p className='w-[90%] text-gray-500 text-center text-sm'>We assure you that sharing your  stories
                            with fellow corporate workers will help
                            you drastically enhane your  work life</p>
                    </div>

                </div>
                <div className=' p-4 w-[25%] shadow-2xl  rounded-2xl' data-aos="fade-right">
                    <div className='flex items-center justify-center'>
                        <Image src={price} alt='' width={170} height={170} />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='  flex items-center justify-center font-semibold text-blue-950 text-lg w-[90%]'>Best Price Guaranteed</p>
                        <p className='w-[90%] text-gray-500 text-center text-sm'>We assure you that sharing your stories with fellow corporate workers will help you drastically enhane your work life

                        </p>
                    </div>

                </div>
                <div className=' p-4 w-[30%] shadow-2xl  rounded-2xl' data-aos="fade-right">
                    <div className='flex items-center justify-center'>
                        <Image src={house} alt='' width={200} height={200} />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='  flex items-center justify-center font-semibold text-blue-950 text-center text-lg w-[90%]'>Help provided right from your home</p>
                        <p className='w-[90%] text-gray-500 text-center text-sm'>You do not have to seek help .from external sources, all the help you need  is right under your fingertips.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WhyWeBest