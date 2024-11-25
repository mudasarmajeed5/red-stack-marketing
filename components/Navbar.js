'use client'
import "./Navbar.css"
import { IoIosArrowDown } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa6";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {  FaMapLocationDot } from "react-icons/fa6";
import { SlGrid } from "react-icons/sl";
import { IoCallSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const [DropDown, setDropDown] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isDhaOpen, setIsDhaOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [isOngoingProjectsOpen, setIsOngoingProjectsOpen] = useState(false);
  const closeAllDropdowns = () => {
    setIsProjectsOpen(false);
    setIsDhaOpen(false);
    setIsAboutOpen(false);
    setIsMediaOpen(false);
    setIsOngoingProjectsOpen(false);
  };
  const toggleOngoingProjects = (value) => {
    setIsOngoingProjectsOpen(value);
  };
  const toggleProjects = (value) => {
    closeAllDropdowns();
    setIsProjectsOpen(value);
  };

  const toggleDha = (value) => {
    closeAllDropdowns();
    setIsDhaOpen(value);
  };

  const toggleAbout = (value) => {
    closeAllDropdowns();
    setIsAboutOpen(value);
  };

  const toggleMedia = (value) => {
    closeAllDropdowns();
    setIsMediaOpen(value);
  };

  const router = useRouter()
  return (
    <div className='text-center bg-gradient-to-r from-black via-red-900 to-black text-white sticky top-0 py-2 px-4 grid md:place-items-start justify-items-start place-items-start md:grid-cols-3 grid-cols-2 grid-rows-1 text-[--text-color] z-50'>


      <div onClick={() => router.push('/')} className="md:text-3xl text-2xl cursor-pointer underline-offset-4 navbar-name">
        <img src="https://colors-agency.vercel.app/Logo-Analysis.svg" width={55} alt="" />
      </div>

      <div className="md:flex ml-[-5%] place-self-center gap-0 hidden" >
        {/* Projects Dropdown */}
        <div className="px-2 py-1 rounded-lg relative">
          <Link href="/">Home</Link>
        </div>

        {/* DHA Assist Dropdown */}
        <div className="px-2 py-1 rounded-lg relative">
          <button
            className="getquote hover:-translate-y-[1px] hover:text-green-500 transition-all flex justify-center items-center"
            onMouseEnter={() => toggleDha(true)}
            onMouseLeave={() => toggleDha(false)}
          >
            <span>Services</span>
            <span><IoIosArrowDown /></span>
          </button>
          {isDhaOpen && (
            <div
              onMouseEnter={() => toggleDha(true)}
              onMouseLeave={() => toggleDha(false)}
              className="z-10 text-left bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute"
            >
              <ul className="py-2 text-sm text-black">
                <li>
                  <Link href="#creative-agency" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Creative Agency</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#visual-story-telling" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Visual Story Telling</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#event-management" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Event Management</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#digital-marketing" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Digital Marketing</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#branding" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Branding</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#print-media" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Print Media</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#airing" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Airing</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#outdoor-advertising" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Outdoor Advertising</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>

            </div>
          )}
        </div>


        {/* About Us Dropdown */}
        <div className="px-2 py-1 rounded-lg relative">
          <button
            className="getquote hover:-translate-y-[1px] hover:text-green-500 transition-all flex justify-center items-center"
            onMouseEnter={() => toggleAbout(true)}
            onMouseLeave={() => toggleAbout(false)}
          >
            <span>About</span>
            <span><IoIosArrowDown /></span>
          </button>
          {isAboutOpen && (
            <div
              onMouseEnter={() => toggleAbout(true)}
              onMouseLeave={() => toggleAbout(false)}
              className="z-10 text-left bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute"
            >
              <ul className="py-2 text-sm text-black">
                <li>
                  <Link href="/aboutus" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Our Story</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/leaders" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Leaders</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </Link>
                </li>

              </ul>
            </div>
          )}
        </div>

        {/* Media DropDown */}
        <div className="px-2 py-1 rounded-lg relative">
          <Link href="/careers">Careers</Link>
        </div>
        {/* Media DropDown */}
        <div className="px-2 py-1 rounded-lg relative">
          <button
            className="getquote hover:-translate-y-[1px] hover:text-green-500 transition-all flex justify-center items-center"
            onMouseEnter={() => toggleMedia(true)}
            onMouseLeave={() => toggleMedia(false)}
          >
            <span>Blogs</span>
            <span><IoIosArrowDown /></span>
          </button>
          {isMediaOpen && (
            <div
              onMouseEnter={() => toggleMedia(true)}
              onMouseLeave={() => toggleMedia(false)}
              className="z-10 text-left bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute"
            >
              <ul className="py-2 text-sm text-black">
                <li>
                  <Link href="#" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Images</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>Videos</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                    <span>3D Tour / Maps</span>
                    <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

      </div>

      <div className="contact ml-[-5%] place-self-center md:flex hidden gap-1">
        <button className="rounded-full px-2 py-1 border-2 border-[--secondary-button] hover:bg-[--secondary-button] hover:text-white transition-all duration-300 flex gap-1 justify-center items-center"><span><IoCallSharp /></span><span>Get Quote</span></button>
      </div>


      <div className="place-self-center justify-self-end">
        <div className="md:hidden justify-center text-2xl flex items-center">
          <div>
            <span className="z-10 relative">
              {DropDown ? (
                <RxCross2 onClick={() => setDropDown(!DropDown)} className="text-[--text-color] relative z-20" />
              ) : (
                <span className="flex gap-1 text-[20px] text-[--secondary-button] font-extralight items-center">
                  <Link href="/BookAnAppointment"><FaCalendarDay /> </Link>|
                  <FaMapLocationDot /> |
                  <FaPhone />|
                  <span onClick={() => setDropDown(!DropDown)} className="cursor-pointer">
                    <SlGrid />
                  </span>
                </span>
              )}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <ul className={`${DropDown ? 'HamBurger_DropDown ' : 'hidden'} text-[--text-color] bg-[--bg-color]`}>
              <div className="mt-[15%] px-2">

                {/* Projects Dropdown */}
                <div className="px-2 py-1 text-left rounded-lg relative">
                  <Link href="/">Home</Link>
                </div>

                {/* DHA Assist Dropdown */}
                <div className="px-2 py-1 rounded-lg relative">
                  <button
                    className="getquote1 w-full hover:-translate-y-[1px] transition-all flex justify-between items-center"
                    onClick={() => toggleDha(!isDhaOpen)}
                  >
                    <span>Services</span>
                    <span><IoIosArrowDown /></span>
                  </button>
                  {isDhaOpen && (
                    <div className="z-10 text-left divide-y divide-gray-100 rounded-lg w-44 mt-2">
                      <ul className="py-2 text-sm text-white">
                        <li>
                          <Link href="#creative-agency" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                            <span>Creative Agency</span>
                            <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#visual-story-telling" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                            <span>Visual Story Telling</span>
                            <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#event-management" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                            <span>Event Management</span>
                            <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#digital-marketing" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                            <span>Digital Marketing</span>
                            <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#branding" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                            <span>Branding</span>
                            <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#print-media" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                            <span>Print Media</span>
                            <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#airing" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                            <span>Airing</span>
                            <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#outdoor-advertising" className="relative px-4 py-2 flex justify-between items-center transition-all duration-300 ease-in-out group">
                            <span>Outdoor Advertising</span>
                            <span className="absolute z-[-100] left-0 top-0 bottom-0 bg-[--secondary-button] transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                          </Link>
                        </li>
                      </ul>

                    </div>
                  )}
                </div>

                {/* About Us Dropdown */}
                <div className="px-2 py-1  rounded-lg relative">
                  <button
                    className="getquote1 w-full hover:-translate-y-[1px] transition-all flex justify-between items-center"
                    onClick={() => toggleAbout(!isAboutOpen)}
                  >
                    <span>About</span>
                    <span><IoIosArrowDown /></span>
                  </button>
                  {isAboutOpen && (
                    <div className="z-10 text-left divide-y divide-gray-100 rounded-lg w-44 mt-2">
                      <ul className="py-2 text-sm">
                        <li>
                          <Link href="/aboutus" className="block px-2 hover:text-[--secondary-button] py-2">Our Story</Link>
                        </li>
                        <li>
                          <Link href="/leaders" className="block px-2 hover:text-[--secondary-button] py-2">Leaders</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                {/* Media DropDown */}
                <div className="px-2 py-1 rounded-lg relative">
                  <button
                    className="getquote1 w-full hover:-translate-y-[1px] transition-all flex justify-between items-center"
                    onClick={() => toggleMedia(!isMediaOpen)}
                  >
                    <span>Media</span>
                    <span><IoIosArrowDown /></span>
                  </button>
                  {isMediaOpen && (
                    <div className="z-10 text-left divide-y divide-gray-100 rounded-lg shadow w-44 absolute mt-2">
                      <ul className="py-2 text-sm">
                        <li>
                          <Link href="#" className="block px-2 hover:text-[--secondary-button] py-2">Images</Link>
                        </li>
                        <li>
                          <Link href="#" className="block px-2 hover:text-[--secondary-button] py-2">Videos</Link>
                        </li>
                        <li>
                          <Link href="#" className="block px-2 hover:text-[--secondary-button] py-2">3D Tour/Map</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar