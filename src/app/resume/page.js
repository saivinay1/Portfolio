'use client'
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css";
import React from "react"


export default function Resume() {
    return (

        <div className="w-full mb-10 relative">
            <h1 className="text-4xl text-center font-light "> My Resume</h1>
            <div className="flex justify-center"> <button className="w-40 p-2 bg-[#FF9000] mt-2 ">Resume</button></div>
            <p className="text-3xl absolute top-40 left-[48%] p-2 bg-[#FF9000] text-white rounded-full"><FontAwesomeIcon icon={faGraduationCap} /></p>
            <p className="text-3xl absolute top-[28%] left-[48%] p-2 bg-[#FF9000] text-white rounded-full"><FontAwesomeIcon icon={faGraduationCap} /></p>
            <p className="text-3xl absolute top-[49%] left-[48%] p-2 bg-[#FF9000] text-white rounded-full"><FontAwesomeIcon icon={faBriefcase} /></p>
            <p className="text-3xl absolute top-[75%] left-[48%] p-2 bg-[#FF9000] text-white rounded-full"><FontAwesomeIcon icon={faBriefcase} /></p>
            
            <p className="text-2xl text-center mx-auto mt-6 bg-gray-300 w-1/4">Education</p>

            <div className="w-4/5 flex grid grid-cols-2 mx-auto mt-8 ">

                <div className="w-full h-72 border-r-2 border-black text-end p-10">
                    <h1 className="text-2xl font-light ">Graduation</h1>
                    <h2 className="opacity-50">Aditya Engineering College<br></br>
                        CGPA 7.0
                    </h2>
                    <h4>2020-2024</h4>
                    <p>
                        I gained core engineering skills, hands-on technical experience, and a strong problem-solving mindset to support my professional growth.</p>
                </div>
                <div className="w-full h-72 "> </div>
                <div className="w-full h-72 border-r-2 border-black"></div>
                <div className="w-full h-72 p-10 ">
                    <h1 className="text-2xl font-light">Intermediate</h1>
                    <h2 className="opacity-50">Naryana jr College<br></br>
                        CGPA 7.54 </h2>
                    <h4>2020-2024</h4>
                </div>
            </div>
            <p className="text-2xl text-center mt-6 bg-gray-300 w-1/4 mx-auto">Work Experience</p>

            <div className="w-4/5 flex grid grid-cols-2 mx-auto mt-8 ">

                <div className="w-full h-96 border-r-2 border-black text-end pr-10">
                    <h1 className="text-2xl font-light">Web development Intern</h1>
                    <h2 className="opacity-50">Digital Lync </h2>
                    <h4>aug 2024 - nov 2024</h4>
                    <p className="text-justify">* Developed and maintained responsive websites using HTML5, CSS3,
                        Tailwind CSS, and JavaScript.
                        <br></br>* Ensured cross-browser compatibility and mobile optimization for all
                        projects.
                        <br></br> * Collaborated with designers to translate UI/UX wireframes into
                        functional web pages.
                        <br></br>* Utilized React.js and Node.js for building dynamic web applications
                        Integrated RESTful APIs for back-end data management and user
                        interaction.
                        <br></br>* Used Git for version control and collaborated via GitHub for team based development
                    </p>
                </div>
                <div className="w-full h-86 "> </div>
                <div className="w-full h-86 border-r-2 border-black "></div>
                <div className="w-full h-86 p-10 mt-[-4]">
                    <h1 className="text-2xl  font-light ">Devops Engineer</h1>
                    <p className=" text-justify mt-2">
                        *  Deployed the Skill Capital CRM project using DevOps practices.
                        <br></br> * Deployed a CRM project using manual methods and Docker, ensuring efficient, scalable,
                        and automated deployment workflows.
                        <br></br> * Created and managed Docker containers to encapsulate application environments,
                        leading to improved development consistency and streamlined deployments.
                        <br></br> * Troubleshooted and resolved deployment and integration issues within containerized
                        environments.
                        <br></br> * Ensured security best practices by configuring SSL for services running inside Docker
                        containers.
                    </p>
                </div>
            </div>

        </div>

    )
}