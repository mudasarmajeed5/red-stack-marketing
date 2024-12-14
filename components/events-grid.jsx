'use client'

import { useState } from 'react'
import { Send, Hexagon, RouteIcon as Road, Building, Map, Star, Music, Ruler, Video, Box, Camera } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function EventsGrid() {
  const [theme, setTheme] = useState('red')

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
    (<div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Events & Activations</h1>
          <div className="space-x-4">
            
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className={cn(
                "p-8 rounded-lg flex flex-col items-center justify-center space-y-4 transition-colors duration-300",
                theme === 'red' 
                  ? 'bg-red-600/10 hover:bg-red-600/20' 
                  : 'bg-white/10 hover:bg-white/20'
              )}>
              <event.icon
                className={cn("w-12 h-12", theme === 'red' ? 'text-red-500' : 'text-white')} />
              <span className="text-lg font-medium">{event.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>)
  );
}

