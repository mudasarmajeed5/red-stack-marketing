import EventsGrid from '@/components/events-grid'
import React from 'react'

const EventsSection = () => {
  return (
    <div className="font-playfair">
      <div className="min-h-[90vh] flex flex-col justify-center items-center text-white">
        <p className="text-2xl md:text-4xl font-bold max-w-xl text-center px-4">
          Discover our <span className="text-yellow-400 font-semibold">exciting events</span> and{' '}
          <span className="text-yellow-400 font-semibold">brand activations</span> designed to engage and connect you with the latest trends.
        </p>
        <span className="mt-10 animate-bounce text-yellow-400 text-xl">⬇ Scroll down</span>
      </div>
      <EventsGrid />
    </div>
  )
}

export default EventsSection
