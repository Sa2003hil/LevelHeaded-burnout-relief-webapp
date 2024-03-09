import React from 'react'
import Image from 'next/image'
import pahad from '@/assets/mountain.png'

const Pahad = () => {
    return (
        <div className='flex flex-col gap-16'>
            <div className='flex items-center justify-center'>
                <p className='font-semibold text-3xl text-gray-900 text-center'>Reconnect with your profession<br /> with professional help</p>
            </div>
            <div>
                <Image className='w-sreen' src={pahad} alt='pahad' width={1200} height={1000} />
            </div>
        </div>
    )
}

export default Pahad