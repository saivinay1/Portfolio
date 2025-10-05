'use client'

import React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { motion } from 'framer-motion'

import Resume from "./resume/page"
import Services from "./services/page"
import Projects from "./projects/page"
import HireMe from "./hireme/page"
import Contact from "./contact/page"
import Footer from "./footer/page"

export default function Home() {
  const socialLinks = [
    { icon: faGithub, link: "https://github.com/saivinay1" },
    { icon: faEnvelope, link: "https://www.gmail.com" },
    { icon: faLinkedin, link: "https://www.linkedin.com/in/saivinay-vasamsetti" },
    { icon: faWhatsapp, link: "https://api.whatsapp.com/send?phone=916303113002&text=HI%20vinay" },
  ]

  return (
    <div>

      {/* Hero Section */}
      <motion.div initial={{ y: 0 }} animate={{ y: -20 }} transition={{ duration: 1 }}>
        <div className="w-full h-[110vh] bg-[#FD8A0A] content-center">
          <div className="w-2/5 h-3/5 mx-auto content-center">
            <img
              className="w-44 h-44 rounded-full mx-auto"
              src="https://mir-s3-cdn-cf.behance.net/projects/404/9e4bda125322351.Y3JvcCw2MzkyLDQ5OTksMzAwLDA.jpg"
              alt="Sai Vinay"
            />
            <h1 className="font-title text-4xl text-white font-medium text-center">-sai vinay -</h1>
            <h3 className="text-xl text-white font-medium text-center mt-3">web developer / DevOps engineer</h3>

            <div className="flex text-white gap-x-4 text-2xl mx-auto mt-3 justify-center">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.link} target="_blank">
                  <FontAwesomeIcon icon={social.icon} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* About Me Section */}
      <motion.div className="w-full h-[100vh] mt-[-20px]">
        <h1 className="text-center text-4xl font-bold mt-10">About Me</h1>
        <div className="w-4/5 flex mx-auto mt-8">
          <div className="w-1/2 h-[60vh] p-5 flex flex-col gap-y-8 pt-14 pl-16">
            <h1>Full Name: Sai Vinay Vasamsetti</h1>
            <h1>Phone: 6303113002</h1>
            <h1>Email: vinaysai965@gmail.com</h1>
          </div>

          <div className="w-1/2 h-[60vh] p-5">
            <h1 className="text-4xl font-semibold">Hello There!</h1>
            <p className="pt-3 pr-6">
              Hi, I'm Sai Vinay, a passionate Web Developer and DevOps Engineer. I specialize in building modern, responsive websites and applications, while automating deployment pipelines for seamless CI/CD. With a strong background in both front-end and back-end development, I create scalable, high-performing web solutions.
            </p>
            <p className="pt-3">
              I’m always learning new tools and technologies to improve efficiency and deliver better results. My focus is on bridging development and operations to ensure smooth deployments and faster, more reliable applications.
            </p>

            <div className="flex gap-x-4 text-4xl mx-auto mt-3">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.link} target="_blank">
                  <FontAwesomeIcon icon={social.icon} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Other Sections */}
      <Resume />
      <Services />
      <Projects />
      <HireMe />
      <Contact />
      <Footer />
    </div>
  )
}
