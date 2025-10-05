'use client'

import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  const projects = [
    { title: "PORTFOLIO", src: "https://bootstrapmade.com/content/templatefiles/iPortfolio/iPortfolio-bootstrap-website-template.webp" },
    { title: "LMS", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQf8smDfHznIH9eGTRWDPdPGb9RXZ9yTvMT8VqspcExQ-AFD1oliUWksf0WdOTt6dtUk&usqp=CAU" },
    { title: "CRM", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpXY5Jl0HKMV-MZRX137_ia-TF3KxTrix4cHZYrTBLjdhqcdrc8BlQJMt1KjrWwuoDFqk&usqp=CAU" },
    { title: "Messaging-app", src: "https://cdn4.vectorstock.com/i/1000x1000/23/68/instant-messaging-app-smartphone-interface-vector-29112368.jpg" },
    { title: "Ecommerce", src: "https://simicart.com/wp-content/uploads/eCommerce-logo.jpg", link: "https://ecomm-lake-ten.vercel.app/" },
    { title: "Weather Report", src: "https://uizard.io/static/89cb1d30cdee9c19b0ce72efe004ff49/a8e47/f5e31989f816c5b15c47cd54b0eb0b30b210b6f0-1440x835.png", link: "https://weather-proj-two.vercel.app/" },
    { title: "Kona digital", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2PNypbPLJe6nEoFvZAK3iQshDOQ_CeyhQocfkIW3iLQRNScD9bbGYkCX0YmWTdaN9Dk&usqp=CAU", link: "https://kona-digital-one.vercel.app/" },
    { title: "Calculator", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6rl3CED6ZM871N-xZ4pEJb77ongB1KLFA3Q&s", link: "https://calculator-ivory-gamma.vercel.app" },
  ]

  return (
    <div>
      <h1 className="text-4xl text-center pt-10">Work</h1>
      <div className="w-11/12 sm:w-10/12 md:w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {projects.map((project, index) => (
          <div key={index} className="h-80 bg-gray-200 flex flex-col">
            {project.link ? (
              <Link href={project.link} target="_blank">
                <Image
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  width={500}
                  height={320}
                />
              </Link>
            ) : (
              <Image
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover"
                width={500}
                height={320}
              />
            )}
            <h1 className="text-2xl text-gray-500 font-bold text-center mt-2">{project.title}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}
