import React from 'react'
import { Palette, Smartphone, Projector } from 'lucide-react'
import Link from 'next/link'
const ServiceShowCase = () => {
    return (<div className="container bg-black text-white px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-20">
            <span className="text-white">Servi</span>
            <span className="text-red-600">ces</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
            {/* Creative Service */}
            <div className="flex flex-col items-center text-center group p-8 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <Link href={"/creative"}><div className="w-24 h-24 rounded-lg bg-black p-6 mb-6 group-hover:bg-red-600 transition-colors">
                    <Palette className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">CREATIVE</h3></Link>
            </div>

            {/* Digital Service */}
            <div className="flex flex-col items-center text-center group p-8 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <Link href={"/digital"}><div className="w-24 h-24 rounded-lg bg-black p-6 mb-6 group-hover:bg-red-600 transition-colors">
                    <Smartphone className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">DIGITAL</h3></Link>
            </div>

            {/* Events Service */}
            <div className="flex flex-col items-center text-center group p-8 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <Link href={"/events"}><div className="w-24 h-24 rounded-lg bg-black p-6 mb-6 group-hover:bg-red-600 transition-colors">
                    <Projector className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">EVENTS & ACTIVATION</h3></Link>
            </div>
        </div>
    </div>
    )
}

export default ServiceShowCase