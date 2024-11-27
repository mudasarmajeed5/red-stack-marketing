import { Button } from "@/components/ui/button"
import { BarChart3, Camera, Users2, LineChart, Newspaper, Laptop2, Radio, MonitorSmartphone } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      title: "Creative Agency",
      description: "Our versatile creative agency offers a wide array of services, including graphic design and multimedia production.",
      icon: BarChart3,
      imagePosition: "right",
      image: "/images/marketing.png", 
    },
    {
      title: "Visual Story Telling",
      description: "Our visual storytelling services utilize captivating visuals to convey messages effectively.",
      icon: Camera,
      imagePosition: "left",
      image: "/images/storytelling.jpg", 
    },
    {
      title: "Event Management",
      description: "We manage memorable events and expos that create genuine connections with your audience.",
      icon: Users2,
      imagePosition: "right",
      image: "/images/event management.jpg", 
    },
    {
      title: "Digital Marketing",
      description: "We leverage SEO, social media, and online ads to engage your digital audience with data-driven strategies.",
      icon: LineChart,
      imagePosition: "left",
      image: "/images/digital marketing.jpg",
    },
    {
      title: "Branding",
      description: "Our branding services encompass comprehensive solutions to enhance your brand's identity and visibility.",
      icon: Newspaper,
      imagePosition: "right",
      image: "/images/branding.png",
    },
    {
      title: "Print Media",
      description: "Print media include news reporting, feature articles, advertising, promotional materials, newspapers and more.",
      icon: Laptop2,
      imagePosition: "left",
      image: "/images/print media.png",
    },
    // {
    //   title: "Airing",
    //   description: "We craft compelling TV ads and secure airtime for maximum reach, making your brand memorable on television.",
    //   icon: Radio,
    //   imagePosition: "right",
    //   image: "/images/airing.png",
    // },
    {
      title: "Outdoor Advertising",
      description: "Our outdoor advertising captures attention with strategically placed billboards and digital screens.",
      icon: MonitorSmartphone,
      imagePosition: "left",
      image: "/images/outdoor advertising.avif",
    }
  ]

  return (
    <div className="w-full min-h-screen bg-black py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-32">
        {services.map((service, index) => (
          <div
            id={service.title.toLowerCase().replace(/\s+/g, '-')} // Creating a slug from the title
            key={index}
            className={`flex flex-col ${service.imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}>
            <div className="flex-1 space-y-6">
              <service.icon className="w-16 h-16 text-red-500" />
              <h3 className="text-4xl font-bold text-white uppercase">{service.title}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">{service.description}</p>
              <Button
                variant="outline"
                size="lg"
                className="mt-4 font-bold text-red-500 border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300">
                Explore Service
              </Button>
            </div>
            <div className="flex-1">
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <img
                  src={service.image}
                  alt={`${service.title} illustration`}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
