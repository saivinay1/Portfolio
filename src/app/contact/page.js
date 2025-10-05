'use client'

import React, { useState } from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const subject = encodeURIComponent("New Contact Form Submission")
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    const mailtoLink = `mailto:vinaysai965@gmail.com?subject=${subject}&body=${body}`
    
    window.location.href = mailtoLink

    alert("Email client opened. Please send the email from your default email client.")
  }

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1583916438680-f047ee7a5aad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
          alt="Contact"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center mb-8">CONTACT</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md min-h-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  )
}