'use client'

import { useState } from 'react'

export default function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phoneNo: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({
      name: '',
      companyName: '',
      email: '',
      phoneNo: '',
      message: ''
    })
  }

  return (
    (<section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-500 mb-12 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-white bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="companyName" className="block mb-2 text-sm font-medium">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-white bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-white bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="phoneNo" className="block mb-2 text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-white bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 text-white bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-block bg-red-600 text-white py-3 px-8 rounded-md hover:bg-red-700 transition duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>)
  );
}
