import React from 'react'
import Image from 'next/image'
import dashboardImg from '../../assets/dashboardImg.png'

const dashboard = () => {
    return (
        <div className="">
            <div className="text-4xl sm:text-6xl flex justify-center font-bold md:px-20 pb-2 text-gradient bg-gradient-to-r from-purple-500 to-green-300 bg-clip-text text-transparent">
                Dashboard
            </div>
            <p className="text-2xl font-thin flex justify-center  md:px-20 pb-6 text-gradient">
                Powered by CWS
            </p>

            <Image
                src={dashboardImg}
                height={1000}
                width={1000}
                className="flex m-auto py-6"
            />


        </div>
    )
}

export default dashboard