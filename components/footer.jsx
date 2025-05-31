import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import logoBase64 from './logo'

const Footer = () => {
  return (
    <footer className="bg-yellow-500/80 text-white py-8">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* LEFT COLUMN - Company Info */}
          <div className="flex gap-1 flex-col md:flex-row gap-6 max-w-xl">
            <Link href="/" className="mb-4 md:mb-0">
              <img src={logoBase64} width="185" height="40" alt="Brainwave Logo" />
            </Link>
            <div className="text-sm space-y-3">
              <p>
                Illustrate Marketing helps businesses grow with smart digital strategies and tailored campaigns.
                Let's build something impactful together.
              </p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <Link href="mailto:info@illustratemarketing.com" className="hover:underline">
                  info@illustratemarketing.com
                </Link>
              </p>
              \
            </div>
          </div>

          {/* RIGHT COLUMNS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h2 className="mb-4 font-semibold uppercase">Resources</h2>
              <ul className="space-y-2">
                <li><Link href="/team" className="hover:underline">Team</Link></li>
                <li><Link href="/aboutus" className="hover:underline">Our Motive</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-semibold uppercase">Follow us</h2>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Facebook</Link></li>
                <li><Link href="#" className="hover:underline">Twitter (X)</Link></li>
                <li><Link href="https://www.instagram.com/redstackmarketing/" className="hover:underline">Instagram</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-semibold uppercase">Legal</h2>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-white/40" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-sm text-white text-center sm:text-left">
            <Link href="/" className="hover:underline">
              © 2024 Illustrate Marketing - All Rights Reserved.
            </Link>
          </span>
          <div className="flex gap-4 text-xl">
            <Link href="https://wa.me/923365954484" className="hover:text-white"><FaWhatsapp /><span className="sr-only">WhatsApp</span></Link>
            <Link href="#" className="hover:text-white"><FaFacebook /><span className="sr-only">Facebook</span></Link>
            <Link href="#" className="hover:text-white"><FaXTwitter /><span className="sr-only">Twitter</span></Link>
            <Link href="https://www.instagram.com/redstackmarketing/" className="hover:text-white"><FaInstagram /><span className="sr-only">Instagram</span></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
