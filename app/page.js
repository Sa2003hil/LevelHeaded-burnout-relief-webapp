"use client"

import Image from 'next/image'
import Section1 from '@/components/Section1'
// import Footer from '@/components/Footer'
import SubscribeNew from '@/components/Subscribe'
import Reviews from '@/components/Crousel'
import Cta from '@/components/Cta'
import Howitworks from '@/components/howitworks'
import Cards from '@/components/Cards'
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Pahad from '@/components/Pahad'

export default function Home() {
  useEffect(() => {
    AOS.init({
    })
  }, [])
  return (
    <div className="flex flex-col items-center justify-center gap-28">
      <div id="Section-1">
        <Section1 />
      </div>
      <div className="w-full h-full">
        <Howitworks />
      </div>
      <div className="flex w-full items-center justify-center">
        <Cta />
      </div>
      <div className="flex w-full items-center justify-center">
        {/* <Cta /> */}
        <Pahad />
      </div>

      <div className=" w-[95%]">
        <Cards />
      </div>


      {/* <div className='h-full w-screen px-40'>
        <SubscribeNew />
      </div> */}

    </div>
  )
}
