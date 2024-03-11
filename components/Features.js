import React from 'react'
import Image from 'next/image'
import person from '../assets/pers.png'
import world from '../assets/wrld.png'
import phn from '../assets/phn.png'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsArrowRight } from "react-icons/bs";


const Features = () => {
    useEffect(() => {
        AOS.init({
        })
    }, [])
    return (
        <div className='flex flex-col gap-20'>
            <div className=' flex gap-36 items-center justify-center' >
                <div className='' data-aos="flip-left">
                    <Image src={person} className='rounded-xl' alt='' width={400} height={400} />
                </div>
                <div className='flex flex-col w-[40%] gap-5' data-aos="fade">
                    <p className='font-semibold text-3xl'>LevelHeaded is a unique blend of
                        passionate therapist</p>
                    <p>We have over 100 clinical psychologist speacializing in people getting disengaged
                        with their work
                    </p>
                    <button className='text-white flex bg-[#5D50C6] mt-12 p-3 w-36 items-center justify-center rounded-full hover:bg-[#473ba0] hover:gap-1 hover:transition hover:ease-in-out '>
                        Get Started <BsArrowRight />
                    </button>

                </div>
            </div>
            <div className=' flex gap-36 items-center justify-center' >
                <div className='flex flex-col w-[40%] gap-5' data-aos="fade">
                    <p className='font-semibold text-3xl'>LevelHeaded  gives you in control of
                        your work behaviour </p>
                    <p>We have over 100 clinical psychologist speacializing in people getting disengaged
                        with their work

                    </p>
                    <button className='text-white flex bg-[#5D50C6] mt-12 p-3 w-36 items-center justify-center rounded-full hover:bg-[#473ba0] hover:gap-1 hover:transition hover:ease-in-out '>
                        Get Started <BsArrowRight />
                    </button>
                </div>
                <div className='' data-aos="flip-left">
                    <Image src={phn} className='rounded-xl' alt='' width={400} height={400} />
                </div>

            </div>
            <div className=' flex gap-36 items-center justify-center' >
                <div className='' data-aos="flip-left">
                    <Image src={person} className='rounded-xl' alt='' width={400} height={400} />
                </div>
                <div className='flex flex-col w-[40%] gap-5' data-aos="fade">
                    <p className='font-semibold text-3xl'>LevelHeaded  creates a
                        nurture environment </p>
                    <p>We want to create an positive environment around your work and know and keeping
                        yourself first is not a crime
                    </p>
                    <button className='text-white flex bg-[#5D50C6] mt-12 p-3 w-36 items-center justify-center rounded-full hover:bg-[#473ba0] hover:gap-1 hover:transition hover:ease-in-out '>
                        Get Started <BsArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Features