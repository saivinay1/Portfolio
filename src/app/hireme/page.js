'use client'
import React from "react"
import Link from "next/link"

export default function HireMe() {
  return (
    <div className="w-full h-[60vh] bg-[#FF9000] mt-14 content-center text-white">
      <h1 className="text-5xl text-center">Hire Me</h1>
      <p className="text-center text-lg mt-5">
        I'm a Web Developer and DevOps Engineer skilled in building scalable applications and streamlining development.<br />
        I focus on Web Development, DevOps.<br />
        If you need a reliable, skilled partner to bring your project to life, let’s connect!
      </p>
      <div className="flex justify-center mt-8">
        <Link href={"https://api.whatsapp.com/send?phone=916303113002&text=HI%20vinay"} target="_blank">
          <h1 className="w-36 h-10 border-2 bg-white text-center content-center text-[#FF9000] rounded-xl px-4 mx-auto">
            Contact Me
          </h1>
        </Link>
      </div>
    </div>
  )
}
