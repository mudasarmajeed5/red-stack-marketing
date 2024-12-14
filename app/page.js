import TextAnimation from "@/components/TextAnimation";
import Carousel from "@/components/carousel";
import ContactUsSection from "@/components/contact-us-section";
import Footer from "@/components/footer";
import ServiceShowCase from "@/components/service-showcase";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div id="home" className="FirstPage relative">
        <div className="img">
          <img className='absolute object-cover object-center top-0 z-[-1000]  h-[100%] w-full' src={"/bodyImage.jpg"} alt="" />
        </div>
        <div className="text_anime flex justify-center items-center h-[80vh] flex-col relative">
          <TextAnimation />
          <div className="flex gap-2">
            <button className='text-white backdrop:blur-sm mt-20 bg-red-600 text-xl rounded-md hover:bg-red-700 animate-bounce px-3 py-1'><Link href="#creative-agency">Explore Services</Link></button>
          </div>
          <div className='flex justify-center items-center text-xl md:text-2xl lets_talk gap-2 mt-5 text-white font-sans'>Wanna get in Touch?<span><Link href="#contact">Lets Talk...</Link></span></div>
        </div >
        {/* Adding a tag here with postion absolute will make it appear on the first page at the end of the image. */}
        <div className="absolute bottom-0 w-full">
        <Carousel />
        </div>
      </div>
      <div id="services"><ServiceShowCase/></div>
      <div id="blogs">
      {/* <BlogWorkSection/> */}
      </div>
      <div id="contact">
      <ContactUsSection/>
      </div>
      <Footer/>
    </>
  );
}
