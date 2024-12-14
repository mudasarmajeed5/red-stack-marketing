import EventsGrid from '@/components/events-grid'
import React from 'react'
const EventsSection = () => {
    return (
        <div>
            <video src="./videos/red_plate.mov" autoPlay muted loop className='w-screen absolute h-[90vh] z-[-100] object-cover object-center'></video>
            <h1 className='min-h-screen flex justify-center items-center text-5xl text-white'>Events and Activations</h1>
            <EventsGrid/>
        </div>
    )
}

export default EventsSection