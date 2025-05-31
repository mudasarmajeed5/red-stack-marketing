'use client'

import { Send, Hexagon, RouteIcon as Road, Building, Map, Star, Music, Ruler, Video, Box, Camera } from 'lucide-react'

export default function EventsGrid() {

  const events = [
    { icon: Send, label: 'Corporate Events' },
    { icon: Hexagon, label: 'Event PR' },
    { icon: Road, label: 'Road Shows' },
    { icon: Building, label: 'Mall Activations' },
    { icon: Map, label: '3D Design' },
    { icon: Star, label: 'Store Launch' },
    { icon: Music, label: 'Music Festivals' },
    { icon: Ruler, label: 'Artist Management' },
    { icon: Video, label: 'Animations' },
    { icon: Star, label: 'AR/VR' },
    { icon: Camera, label: 'Projection Mapping' },
    { icon: Box, label: 'Product Launch' },
  ]

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-center font-bold mb-12 flex justify-center sm:text-left">
          Events & <span className="text-yellow-400"> Activations</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(({ icon: Icon, label }, index) => (
            <div
              key={index}
              className="bg-gray-900 shadow-lg rounded-lg p-8 flex flex-col items-center space-y-4 text-center
                transition-transform hover:scale-105
                hover:shadow-yellow-900/70"
            >
              <Icon className="w-12 h-12 text-yellow-400" />
              <span className="text-lg font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
