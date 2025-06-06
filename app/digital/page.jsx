import React from 'react'
import DigitalServices from '@/components/digital-services-dark'

const DigitalService = () => {
  return (
    <div className="font-playfair">
      <div className="min-h-[90vh] flex flex-col justify-center items-center text-white">
        <p className="text-2xl md:text-4xl font-bold max-w-xl text-center px-4">
          Explore our <span className="text-yellow-400 font-semibold">cutting-edge digital solutions</span> crafted to elevate your business and drive innovation.
        </p>
        <span className="mt-10 animate-bounce text-yellow-400 text-xl">⬇ Scroll down</span>
      </div>
      <DigitalServices />
    </div>
  )
}

export default DigitalService
