import {
  BarChart3,
  Camera,
  Users2,
  LineChart,
  Newspaper,
  Laptop2,
  MonitorSmartphone,
} from 'lucide-react';

export default function MediaServices() {
  const services = [
    {
      title: 'TVC Production',
      icon: Camera,
    },
    {
      title: 'Print Media',
      icon: Users2,
    },
    {
      title: 'DVC Production',
      icon: LineChart,
    },
    {
      title: 'Out of Home Buying',
      icon: Newspaper,
    },
    {
      title: 'Photgraphy & Videography',
      icon: Laptop2,
    },
    {
      title: 'Music Production',
      icon: MonitorSmartphone,
    },
  ];

  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl text-center font-bold mb-12 flex justify-center sm:text-left">
          Media <span className="text-yellow-400">&nbsp;Services</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 rounded-xl shadow-md hover:shadow-yellow-500/30 transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gray-800 group-hover:bg-yellow-700 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
