import React from 'react'
import MediaServices from '@/components/MediaServices'

const MediaService = () => {
  return (
    <div className="font-playfair">
      <div className="min-h-[90vh] flex flex-col justify-center items-center text-white">
        <p className="text-2xl md:text-4xl font-bold max-w-xl text-center px-4">
          Discover our <span className="text-yellow-400 font-semibold">dynamic media solutions</span> designed to capture attention and amplify your brand story.
        </p>
        <span className="mt-10 animate-bounce text-yellow-400 text-xl">⬇ Scroll down</span>
      </div>
      <MediaServices />
    </div>
  )
}

export default MediaService
