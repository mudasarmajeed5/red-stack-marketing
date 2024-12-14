import React from 'react'
import DigitalServices from '@/components/digital-services-dark'
const DigitalService = () => {
    return (
        <div>
            <video src="./videos/BackgroundVideo.mp4" autoPlay muted loop className='w-screen absolute h-[90vh] z-[-100] object-cover object-center'></video>
            <h1 className='min-h-screen flex justify-center items-center text-5xl text-white'>Digital Services</h1>
            <DigitalServices/>
        </div>
    )
}

export default DigitalService