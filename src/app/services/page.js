'use client'
import { faAws, faBootstrap, faCss3, faDocker, faGit, faGithub, faHtml5, faJava, faJenkins, faJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons"
import { faAnchor, faBook, faCloud, faCubes, faD, faDatabase, faDharmachakra, faGift, faS, faTableCellsRowLock, faTrailer } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"


export default function services(){
    return(
        <div className="w-full bg-[#FF9000]">
            <h1 className=" text-4xl text-center pt-14 text-white">My Skills</h1>
           <div className="w-3/4 mx-auto mt-8 grid grid-cols-4 ">
              <div className=" h-44 text-center pt-4 ">
                <FontAwesomeIcon icon={faHtml5} className="text-6xl text-white border border-2 p-4 rounded-full px-6 hover:text-black hover:border-black  "/>
                <h1 className="text-white mt-2">HTML</h1>
              </div>
              <div className=" h-44 text-center pt-4">
                <FontAwesomeIcon icon={faCss3} className="text-6xl text-white border border-2 p-4 rounded-full hover:text-black hover:border-black  "/>
                <h1 className="text-white mt-2">CSS</h1>
              </div>
              <div className=" h-44 text-center pt-4">
                <FontAwesomeIcon icon={faJs} className="text-6xl text-white border border-2 p-4 rounded-full px-5 hover:text-black hover:border-black "/>
                <h1 className="text-white mt-2">JS</h1>
              </div>
              <div className=" h-44 text-center pt-4">
                <FontAwesomeIcon icon={faReact} className="text-6xl text-white border border-2 p-4 rounded-full px-4 hover:text-black hover:border-black "/>
                <h1 className="text-white mt-2">React</h1>
              </div>
              <div className=" h-44 text-center pt-4">
                <FontAwesomeIcon icon={faBootstrap} className="text-6xl text-white border border-2 p-4 py-5 rounded-full hover:text-black hover:border-black   "/>
                <h1 className="text-white mt-2">Bootstrap</h1>
              </div>
              <div className=" h-44 text-center pt-4">
                <FontAwesomeIcon icon={faDocker} className="text-6xl text-white border border-2 p-4 rounded-full py-5 hover:text-black hover:border-black "/>
                <h1 className="text-white mt-2">Docker</h1>
              </div>
              <div className=" h-44 text-center pt-4">
                <FontAwesomeIcon icon={faGit} className="text-6xl text-white border border-2 p-4 rounded-full hover:text-black hover:border-black  "/>
                <h1 className="text-white mt-2">GIT</h1>
              </div>
              <div className=" h-44 text-center pt-4">
                <FontAwesomeIcon icon={faGithub} className="text-6xl text-white border border-2 p-4 rounded-full hover:text-black hover:border-black "/>
                <h1 className="text-white mt-2">Git Hub</h1>
              </div>
              <div className=" h-44 text-center pt-4">
                <FontAwesomeIcon icon={faJenkins} className="text-6xl text-white border border-2 p-4 rounded-full hover:text-black hover:border-black "/>
                <h1 className="text-white mt-2">Jenkins</h1>
              </div>
              <div className=" h-44 text-center pt-4">
                <FontAwesomeIcon icon={faDharmachakra} className="text-6xl text-white border border-2 p-4 rounded-full hover:text-black hover:border-black "/>
                <h1 className="text-white mt-2">Kubernetes</h1>
              </div>
              <div className=" h-44 text-center pt-4">
                <FontAwesomeIcon icon={faPython} className="text-6xl text-white border border-2 p-4 rounded-full px-6 hover:text-black hover:border-black "/>
                <h1 className="text-white mt-2">Python</h1>
              </div>
              
              <div className=" h-44 text-center pt-4">
                <FontAwesomeIcon icon={faDatabase} className="text-6xl text-white border border-2 p-4 rounded-full px-6 hover:text-black hover:border-black "/>
                <h1 className="text-white mt-2">MySql</h1>
              </div>
              <div className=" h-44 text-center pt-4">
                <FontAwesomeIcon icon={faAws} className="text-5xl text-white border border-2 p-4 py-5 rounded-full  hover:text-black hover:border-black "/>
                <h1 className="text-white mt-2">AWS</h1>
              </div>
              <div className=" h-44 text-center pt-4">
                <FontAwesomeIcon icon={faTableCellsRowLock} className="text-5xl text-white border border-2 p-4 rounded-full py-5 hover:text-black hover:border-black "/>
                <h1 className="text-white mt-2">IAM service</h1>
              </div><div className=" h-44 text-center pt-4">
                <FontAwesomeIcon icon={faCloud} className="text-5xl text-white border border-2 p-4 py-5 rounded-full hover:text-black hover:border-black "/>
                <h1 className="text-white mt-2">VPC</h1>
              </div><div className=" h-44 text-center pt-4">
                <FontAwesomeIcon icon={faCubes} className="text-5xl text-white border border-2 p-5 rounded-full hover:text-black hover:border-black "/>
                <h1 className="text-white mt-2">S3</h1>
              </div>
              

              

              
              
            </div>     
            
        </div>
    )
}