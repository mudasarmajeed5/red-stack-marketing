import { Pencil, Lightbulb, Rocket, PenTool, Package, Smartphone } from 'lucide-react'

export default function CreativeServices() {
  const services = [
    {
      title: "Graphic Design",
      icon: Pencil
    },
    {
      title: "Logo Development",
      icon: Lightbulb
    },
    {
      title: "Animations",
      icon: Rocket
    },
    {
      title: "Brand Development", 
      icon: PenTool
    },
    {
      title: "Product & Packaging Design",
      icon: Package
    },
    {
      title: "UI UX",
      icon: Smartphone
    }
  ]

  return (
    (<div className="bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-center text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
          Creative Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-8 text-center transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <service.icon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>)
  );
}

