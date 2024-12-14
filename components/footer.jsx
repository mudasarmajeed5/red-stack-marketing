import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa6'
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (

    <footer className="bg-gradient-to-br from-black via-red-500 text-white to-black dark:bg-gray-900 py-8">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <Link href="https://flowbite.com/" className="flex items-center">
          <img
            src="./red-stack-logo.png"
            className="h-12 me-3"
            alt="FlowBite Logo"
          />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
            Resources
          </h2>
          <ul className="text-white dark:text-white font-medium">
            <li className="mb-4">
              <Link href="https://flowbite.com/" className="hover:underline">
                Team
              </Link>
            </li>
            <li>
              <Link href="https://tailwindcss.com/" className="hover:underline">
                Our Motive
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
            Follow us
          </h2>
          <ul className="text-white dark:text-white font-medium">
            
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
            Legal
          </h2>
          <ul className="text-white dark:text-white font-medium">
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-white sm:text-center dark:text-white">
        <Link href="/" className="hover:underline">
        Copyright © 2024 Red Stack Marketing - All Rights Reserved.
        </Link>
      </span>
      <div className="flex mt-4 sm:justify-center sm:mt-0">
        <Link
          href="https://wa.me/923365954484"
          className="text-white hover:text-white dark:hover:text-white"
        >
          <FaWhatsapp/>
          <span className="sr-only">Whatsapp</span>
        </Link>
        <Link
          href="#"
          className="text-white hover:text-white dark:hover:text-white ms-5"
        >
          <FaFacebook/>
          <span className="sr-only">Facebook community</span>
        </Link>
        <Link
          href="#"
          className="text-white hover:text-white dark:hover:text-white ms-5"
        >
         <FaXTwitter />
          <span className="sr-only">Twitter page</span>
        </Link>
      
        <Link
          href="https://www.instagram.com/redstackmarketing/"
          className="text-white hover:text-white dark:hover:text-white ms-5"
        >
          <FaInstagram/>
          <span className="sr-only">Dribbble account</span>
        </Link>
      </div>
    </div>
  </div>
</footer>


  )
}

export default Footer
