import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa6'
const Footer = () => {
  return (

    <footer className="bg-gradient-to-br from-black via-red-500 text-white to-black dark:bg-gray-900 py-8">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <Link href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://colors-agency.vercel.app/Logo-Analysis.svg"
            className="h-12 me-3"
            alt="FlowBite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Red stack Marketing
          </span>
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
            <li className="mb-4">
              <Link
                href="https://github.com/themesberg/flowbite"
                className="hover:underline "
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href="https://discord.gg/4eeurUVvTy"
                className="hover:underline"
              >
                Discord
              </Link>
            </li>
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
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 17"
          >
            <path
              fillRule="evenodd"
              d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
              clipRule="evenodd"
            />
          </svg>
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
