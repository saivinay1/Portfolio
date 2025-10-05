'use client'
import React from "react"
import Link from "next/link"

export default function HireMe() {
  return (
    <div className="w-full bg-[#FF9000] mt-14 flex flex-col items-center justify-center text-white min-h-[60vh] px-4">
      <h1 className="text-4xl sm:text-5xl text-center font-bold">Hire Me</h1>
      <p className="text-center text-base sm:text-lg mt-5 max-w-2xl leading-relaxed">
        I&apos;m a Web Developer and DevOps Engineer skilled in building scalable applications and streamlining development.<br />
        I focus on Web Development, DevOps.<br />
        If you need a reliable, skilled partner to bring your project to life, let&apos;s connect!
      </p>
      <div className="flex justify-center mt-8">
        <Link href={"https://api.whatsapp.com/send?phone=916303113002&text=HI%20vinay"} target="_blank">
          <h1 className="w-36 h-10 border-2 bg-white text-center text-[#FF9000] rounded-xl flex items-center justify-center px-4 mx-auto hover:bg-gray-100 transition">
            Contact Me
          </h1>
        </Link>
      </div>
    </div>
  )
}
