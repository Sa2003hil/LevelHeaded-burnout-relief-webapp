"use client"

import React from 'react';
import Image from 'next/image';
import howitworks from '@/assets/howitworks.png';

import lapigirl from '@/assets/lapigirl.png'
import time from '@/assets/Time.png'
import stat from '@/assets/stat.png'
import chat from '@/assets/Bubble.png'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Component = () => {
    useEffect(() => {
        AOS.init({
        })
    }, [])
    return (
        <>

            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <div data-aos="fade-up">
                    <span className="text-purple-500 mb-2 block text-lg font-semibold">
                        How it works
                    </span>
                    <h2 className="text-dark mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                        Pomodoro
                    </h2>
                    <p className="text-gray-400 text-base ">
                        Build a better relationship
                        with your work
                    </p>
                </div>
            </div>
            <div id="solution">
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6" id="campuslink">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-sky-500">
                            <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
                        </svg>
                        <div className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
                            <div data-aos="fade-left" className="md:5/12 lg:w-1/2 ">
                                <Image src={lapigirl} alt="Pomodoro:how it works section" style={{ borderRadius: 150, boxShadow: '7px 7px 1px blueviolet' }} width={'500'} height={'500'} />
                            </div>
                            <div className="md:7/12 lg:w-1/2">
                                <h2 data-aos="fade" className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-black">
                                    Introducing Pomodoro
                                </h2>
                                <p className="my-8 text-gray-600 dark:text-black">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </p>
                                <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                                    <div className="mt-8 flex gap-4 md:items-center">
                                        <div className="w-12 h-12 flex gap-4 p-2 rounded-full items-center justify-center bg-indigo-100 dark:bg-indigo-900/20">
                                            {/* <Image src={time} alt='' width={40} height={50} /> */}
                                        </div>
                                        <div data-aos="fade-up" className="w-5/6">
                                            <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                                                Pomodoro Counter</h4>
                                            <p className="text-gray-500 dark:text-gray-400">After logging in, head over to dashboard  and start the
                                                pomodoro counter</p>
                                        </div>
                                    </div>
                                    <div className="pt-4 flex gap-4 md:items-center">
                                        <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                                        </div>
                                        <div data-aos="fade-up" className="w-5/6">
                                            <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">Statistics</h4>
                                            <p className="text-gray-500 dark:text-gray-400">Receive daily statistics on how long you are working.
                                                Keep track of your levels</p>
                                        </div>
                                    </div>
                                    <div className="pt-4 flex gap-4 md:items-center">
                                        <div className="w-12 h-12 flex gap-4 rounded-full bg-yellow-300 dark:bg-teal-900/20">
                                        </div>
                                        <div data-aos="fade-up" className="w-5/6">
                                            <h4 className="font-semibold text-lg text-yellow-300 dark:text-yellow-400">Level System</h4>
                                            <p className="text-gray-500 dark:text-gray-400">Understand how our level system works</p>
                                        </div>
                                    </div>
                                    <div className="pt-4 flex gap-4 md:items-center">
                                        <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                                        </div>
                                        <div data-aos="fade-up" className="w-5/6">
                                            <h4 className="font-semibold text-lg text-gray-700 dark:text-blue-200">Community</h4>
                                            <p className="text-gray-500 dark:text-gray-400">Communicate with fellow  community member or schedule a professional therapy session </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Component;
