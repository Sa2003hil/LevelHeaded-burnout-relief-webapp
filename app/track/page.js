"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { IoPersonOutline } from "react-icons/io5";
import { PiClockClockwise } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import Indicator from '@/assets/group.png';
import Link from 'next/link'
import Boy from '@/assets/Boy.png'
import ProgressBar from '../../assets/ProgressBar.png'
import { useAuth } from '@/context/authContext';
import { useRouter } from "next/navigation";
import axios from 'axios';
import secureLocalStorage from "react-secure-storage";
import { toast } from 'react-hot-toast';
import stopwatch from '../../assets/stopwatch.png'
import sideImg from '../../assets/sideimg.png'
import AOS from 'aos';

import 'aos/dist/aos.css';

const dashboard = () => {
    const { authData, logout } = useAuth();
    const router = useRouter();
    useEffect(() => {
        AOS.init();
    }, []);


    const handleSignOut = async () => {
        // Add your sign-out logic here
        try {
            logout();
            secureLocalStorage.clear();
            await axios.get('/api/users/logout');
            toast.success("Logged out successfully");
            setTimeout(() => {
                router.push('/signIn');
            });

        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        }
    };
    return (
        <div className='flex flex-col'>
            <div className="flex ">
                <div className='w-1/5 h-screen rounded-r-3xl shadow-2xl' data-aos="fade-right">

                    <div className='flex p-6 gap-6 items-center justify-center shadow-md rounded-xl'>
                        <Image src={Boy} width={40} height={40} className='rounded-full' />

                        <div>
                            <p className='text-base font-light  text-blue-950 '>Current Level : 2</p>
                            <p className='font-semibold text-blue-950 '>{authData?.userN?.username}</p>
                        </div>
                    </div>
                    <div className='flex flex-col mt-6 gap-6 justify-center items-center'>



                        <div className='flex m-auto items-center justify-center'>
                            <Image src={Indicator} height={200} width={200} alt='' />
                        </div>

                        <Link href="/profile" data-aos="fade-up" className='shadow-xl  rounded-lg p-5 transition-transform transform hover:scale-110'>
                            <IoPersonOutline color='#9FAACA' size={20} />
                        </Link>
                        <Link href="/track" data-aos="fade-up" className='shadow-xl  rounded-lg p-5 transition-transform transform hover:scale-110'>
                            <PiClockClockwise color='#9FAACA' size={25} />
                        </Link>
                        <Link href="/profile" data-aos="fade-up" className='shadow-xl  rounded-lg p-5 transition-transform transform hover:scale-110'>
                            <CiSettings color='#9FAACA' size={30} />
                        </Link>
                        <button data-aos="fade-up" onClick={handleSignOut} className='shadow-xl  rounded-lg p-5 transition-transform transform hover:scale-110'>
                            <CiLogout color='#9FAACA' size={30} />
                        </button>


                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-16 ">
                    <div className='flex items-center justify-center'>
                        <div className=' ml-12 flex flex-col items-center justify-center  '>
                            <div className='flex gap-7'>
                                <button className='bg-slate-200 p-3 shadow-2xl rounded-full'>Short Break</button>
                                <button className='bg-[#5D50C6] text-white p-3 shadow-2xl rounded-full'>Long Break</button>
                            </div>
                            <Image src={stopwatch} alt='' height={350} width={350} />
                            <div className='flex gap-7'>
                                <button className='bg-[#5D50C6] text-white p-3 shadow-2xl rounded-full'>Start Timer</button>
                                <button className='bg-slate-200 p-3 shadow-2xl rounded-full'>Short Timer</button>
                            </div>
                        </div>
                        <div className=' '>
                            <Image src={sideImg} alt='' height={500} width={500} />

                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-7 justify-center ml-20'>
                        <p className='text-2xl text-gray-400 font-semibold '>Progress Bar</p>
                        <Image src={ProgressBar} alt='' height={900} width={900} />
                    </div>

                </div>



            </div>


        </div>
    )
}

export default dashboard