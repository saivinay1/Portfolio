import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-8 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold">Sai Vinay</h2>
            <p className="text-gray-400 mt-2">Web Developer & Devops Engineer</p>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/saivinay1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors p-2" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/saivinay-vasamsetti" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors p-2" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=916303113002&text=HI%20vinay" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors p-2" aria-label="Twitter">
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
            <a href="https://www.gmail.com" className="hover:text-blue-400 transition-colors p-2" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            Specializing in creating beautiful, functional websites and applications.
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} sai vinay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}