'use client'

import Link from "next/link"
import React from "react"

export default function Projects() {
    // const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaPSCzjFBogFTMdZRMQZuM_p638o6VNJALwA&s";
    return (
        <div>
            <h1 className="text-4xl text-center pt-10">Work</h1>
            <div className="w-3/4 h-[100vh] mx-auto grid grid-cols-4 mt-5 gap-5">
                <div className="h-80 bg-cover bg-center" >
                    <img  src="https://bootstrapmade.com/content/templatefiles/iPortfolio/iPortfolio-bootstrap-website-template.webp" className="w-full h-full object-fill"></img>
                    <h1 className="text-2xl text-gray-500 font-bold text-center">PORTFOLIO</h1>
                </div>

                <div className="h-80 bg-yellow-400 ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQf8smDfHznIH9eGTRWDPdPGb9RXZ9yTvMT8VqspcExQ-AFD1oliUWksf0WdOTt6dtUk&usqp=CAU" className="w-full h-full object-cover"></img>
                    <h1 className="text-2xl text-gray-500 font-bold text-center">LMS</h1>

                </div>
                <div className="h-80 bg-green-400 ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpXY5Jl0HKMV-MZRX137_ia-TF3KxTrix4cHZYrTBLjdhqcdrc8BlQJMt1KjrWwuoDFqk&usqp=CAU" className="w-full h-full object-cover"></img>
                <h1 className="text-2xl text-gray-500 font-bold text-center">CRM </h1>
                </div>
                <div className="h-80 bg-red-400 ">
                <img src="https://cdn4.vectorstock.com/i/1000x1000/23/68/instant-messaging-app-smartphone-interface-vector-29112368.jpg" className="w-full h-full object-cover"></img>
                <h1 className="text-2xl text-gray-500 font-bold text-center">Messaging-app</h1>
                </div>
                <div className="h-80 bg-red-400 ">
                <Link href="https://ecomm-lake-ten.vercel.app/"> <img  src="https://simicart.com/wp-content/uploads/eCommerce-logo.jpg" className="w-full h-full object-cover"></img></Link> 
                 <h1 className="text-2xl text-gray-500 font-bold text-center">Ecommerce</h1>
                </div>
                <div className="h-80 bg-yellow-400 ">
                <Link href="https://weather-proj-two.vercel.app/"><img src="https://uizard.io/static/89cb1d30cdee9c19b0ce72efe004ff49/a8e47/f5e31989f816c5b15c47cd54b0eb0b30b210b6f0-1440x835.png" className="w-full h-full object-cover"></img></Link> 
                <h1 className="text-2xl text-gray-500 font-bold text-center">Weather Report</h1>
                </div>
                <div className="h-80 bg-white ">
                 <Link href="https://kona-digital-one.vercel.app/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2PNypbPLJe6nEoFvZAK3iQshDOQ_CeyhQocfkIW3iLQRNScD9bbGYkCX0YmWTdaN9Dk&usqp=CAU" className="w-full h-full object-fill"></img></Link> 
                 <h1 className="text-2xl text-gray-500 font-bold text-center">Kona digital</h1>
                </div>
                <div className="h-80 bg-red-400 ">
                <Link href="https://calculator-ivory-gamma.vercel.app"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6rl3CED6ZM871N-xZ4pEJb77ongB1KLFA3Q&s" className="w-full h-full object-cover"></img></Link> 
                 <h1 className="text-2xl text-gray-500 font-bold text-center">Calculator</h1>
                </div>
            </div>


        </div>
    )
}