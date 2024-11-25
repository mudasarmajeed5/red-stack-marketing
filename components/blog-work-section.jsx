import Image from 'next/image'
import Link from 'next/link'

export default function BlogWorkSection() {
  const items = [
    {
      title: "Project Alpha",
      description: "A groundbreaking initiative that revolutionizes user experience.",
      image: "/ThirdPageImages/Article_2_Table.jpg",
      link: "#"
    },
    {
      title: "Blog: Future of AI",
      description: "Exploring the potential impacts of artificial intelligence on society.",
      image: "/ThirdPageImages/NightOfHope.jpg",
      link: "#"
    },
    {
      title: "Case Study: Beta Corp",
      description: "How we transformed Beta Corp's digital presence and boosted their ROI.",
      image: "/ThirdPageImages/Laptop_Image.png",
      link: "#"
    }
  ]

  return (
    (<section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-500 mb-12 text-center">Our Work & Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <Link
                  href={item.link}
                  className="inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>)
  );
}

