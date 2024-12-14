import CreativeServices from '@/components/creative-services'
import React from 'react'

const Creative = () => {
  return (
    <div>
        <video src="./videos/BackgroundVideo.mp4" autoPlay muted loop className='w-screen absolute h-[90vh] z-[-100] object-cover object-center'></video>
        <h1 className='min-h-screen flex justify-center items-center text-5xl text-white'>Creative Services</h1>
        <CreativeServices/>
    </div>
  )
}

export default Creative