import React from 'react'
import Image from 'next/image'
import { IoPersonOutline } from "react-icons/io5";
import { PiClockClockwise } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import Img from '../../assets/Saly-16.png'
import Link from 'next/link'

const dashboard = () => {
    return (
        <div className="flex ">
            <div className='w-1/5 h-screen rounded-r-3xl shadow-2xl'>
                <div className='flex flex-col mt-6 gap-6 justify-center items-center'>

                    <Link href="/home" className='shadow-xl  rounded-lg p-5 transition-transform transform hover:scale-110'>
                        <IoPersonOutline color='#9FAACA' size={20} />
                    </Link>
                    <Link href="/home" className='shadow-xl  rounded-lg p-5 transition-transform transform hover:scale-110'>
                        <PiClockClockwise color='#9FAACA' size={25} />
                    </Link>
                    <Link href="/home" className='shadow-xl  rounded-lg p-5 transition-transform transform hover:scale-110'>
                        <CiSettings color='#9FAACA' size={30} />
                    </Link>
                    <Link href="/home" className='shadow-xl  rounded-lg p-5 transition-transform transform hover:scale-110'>
                        <CiLogout color='#9FAACA' size={30} />
                    </Link>


                </div>
            </div>
            <div className="flex-1">
                <div className='flex mx-10 justify-center items-center my-5 gap-14  '>
                    <div className='w-[40%]  rounded-xl shadow-xl h-full p-6'>
                        <p className='font-semibold text-blue-950 text-xl mx-2 my-2'>Hello Jon</p>
                        <p className='text-sm  mx-2'>Don’t forget to track your working hours today.</p>
                        <button className='p-2  w-32 justify-center items-center  mt-3 flex text-center  text-white bg-[#5D50C6] hover:transition hover:ease-in-out hover:bg-[#7164d8] rounded-full '>
                            Proceed <IoIosArrowRoundForward size={20} className='ml-1 hover:ml-1 hover:transition hover:ease-in ' />
                        </button>
                    </div>
                    <div className='w-[50%] rounded-xl shadow-xl h-full p-5'>
                        <div className='flex'>
                            <div className='mt-5'>
                                <p className='text-blue-950 font-medium text-xl '>Your current work behaviour </p>
                                <p className='text-violet-400 mt-4 font-semibold text-2xl '>"The Chill Dude"</p>
                            </div>
                            <div>
                                <Image src={Img} width={130} height={130} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dashboard