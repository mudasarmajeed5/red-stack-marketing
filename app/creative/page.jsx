import CreativeServices from '@/components/creative-services'
import React from 'react'

const Creative = () => {
  return (
    <div className="font-playfair">
      <div className="min-h-[90vh] flex flex-col justify-center items-center text-white">
        <p className="text-2xl md:text-4xl font-bold max-w-2xl text-center px-4">
          Unlock your brand’s potential with our <span className="text-yellow-400 font-semibold">innovative creative solutions</span> that inspire and engage.
        </p>
        <span className="mt-10 animate-bounce text-yellow-400 text-xl">⬇ Scroll down</span>
      </div>
      <CreativeServices />
    </div>
  )
}

export default Creative
