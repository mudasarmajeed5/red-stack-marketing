import {
  Pencil,
  Share2,
  SlidersHorizontal,
  Monitor,
  Search,
  Megaphone,
  Play,
  Code,
  Smartphone,
} from 'lucide-react';

const services = [
  {
    title: 'Creative Solutions',
    icon: Pencil,
    description: 'Innovative creative solutions for your brand',
  },
  {
    title: 'Social Media Marketing',
    icon: Share2,
    description: 'Engage your audience across social platforms',
  },
  {
    title: 'Media Buying',
    icon: SlidersHorizontal,
    description: 'Strategic media placement and purchasing',
  },
  {
    title: 'Web Designing',
    icon: Monitor,
    description: 'Beautiful and functional web designs',
  },
  {
    title: 'SEO Optimization',
    icon: Search,
    description: 'Improve your search engine rankings',
  },
  {
    title: 'Influencer Marketing',
    icon: Megaphone,
    description: 'Connect with influential voices',
  },
  {
    title: 'Video Animations',
    icon: Play,
    description: 'Engaging video and animation content',
  },
  {
    title: 'Web Development',
    icon: Code,
    description: 'Custom web development solutions',
  },
  {
    title: 'UI/UX Design',
    icon: Smartphone,
    description: 'User-centered interface and experience design',
  },
];

export default function DigitalServices() {
  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
         <h1 className="text-4xl text-center font-bold mb-12 flex justify-center sm:text-left">
          Digital <span className="text-yellow-400">&nbsp; Services</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 rounded-xl shadow-md hover:shadow-yellow-500/30 transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gray-800 group-hover:bg-yellow-700 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
