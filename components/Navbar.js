'use client'
import "./Navbar.css"
import { IoIosArrowDown } from "react-icons/io";
import {MdOutlinePhoneInTalk} from "react-icons/md"
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoCallSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

import Link from "next/link";
import logoBase64 from "./logo";
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
    <div className='text-center bg-black text-white sticky top-0 py-2 px-4 grid md:place-items-start justify-items-start place-items-start md:grid-cols-3 grid-cols-2 grid-rows-1 text-[--text-color] z-50'>


      <div onClick={() => router.push('/')} className="md:text-3xl text-2xl cursor-pointer underline-offset-4 navbar-name">
       <img
        src={logoBase64}
        width="185"
        height="40"
        alt="Brainwave Logo"
      />
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
            <Link href={"#services"}>Services</Link>
          </button>
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
          <Link href={"#blogs"}>Blogs</Link>
        </div>

      </div>

      <div className="contact ml-[-5%] place-self-center md:flex hidden gap-1">
        <button className="rounded-full px-2 py-1 border-2 border-[--secondary-button] hover:bg-[--secondary-button] hover:text-white transition-all duration-300 flex gap-1 justify-center items-center"><span><IoCallSharp /></span><Link href={"tel:03365954484"}>Get Quote</Link></button>
      </div>



      {/* Mobile Navbar */}

      <div className="place-self-center justify-self-end">
        <div className="md:hidden justify-center text-2xl flex items-center">
          <div>
            <span className="z-10 relative">
              {DropDown ? (
                <RxCross2 onClick={() => setDropDown(!DropDown)} className="text-[--text-color] relative z-20" />
              ) : (
                <span className="flex gap-3 text-[20px] text-[--secondary-button] font-extralight items-center">
                  <Link href={"tel:03335954484"}><MdOutlinePhoneInTalk size={25} /></Link>
                  <span onClick={() => setDropDown(!DropDown)} className="cursor-pointer">
                  <CiMenuFries size={25} />
                  </span>
                </span>
              )}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <ul className={`${DropDown ? 'HamBurger_DropDown ' : 'hidden'} text-[--text-color] bg-[--bg-color]`}>
              <div className="mt-[15%] px-2">
                {/* Mobile menu items */}
                <div className="px-2 hover:bg-red-600 ml-2 py-1 text-left relative">
                  <Link href="/" onClick={() => setDropDown(false)}>Home</Link>
                </div>

                {/* Services Dropdown */}
                <div className="px-2 py-1 rounded-lg relative">
                  <button
                    className="getquote1 w-full hover:-translate-y-[1px] transition-all flex justify-between items-center"
                    onClick={() => toggleDha(!isDhaOpen)}
                  >
                    <Link href={"#services"}>Services</Link>
                  </button>
                </div>

                {/* About Dropdown */}
                <div className="px-2 py-1 rounded-lg relative">
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
                        <li><Link href="/aboutus" className="block px-2 hover:text-[--secondary-button] py-2" onClick={() => setDropDown(false)}>Our Story</Link></li>
                        <li><Link href="/leaders" className="block px-2 hover:text-[--secondary-button] py-2" onClick={() => setDropDown(false)}>Leaders</Link></li>
                        <li><Link href="/team" className="block px-2 hover:text-[--secondary-button] py-2" onClick={() => setDropDown(false)}>Team</Link></li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Media Dropdown */}
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
                        <li><Link href="#" className="block px-2 hover:text-[--secondary-button] py-2" onClick={() => setDropDown(false)}>Images</Link></li>
                        <li><Link href="#" className="block px-2 hover:text-[--secondary-button] py-2" onClick={() => setDropDown(false)}>Videos</Link></li>
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
