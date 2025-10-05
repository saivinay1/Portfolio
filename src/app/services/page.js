'use client'
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faAws, faBootstrap, faCss3, faDocker, faGit, faGithub, faHtml5, faJenkins, faJs, faPython, faReact 
} from "@fortawesome/free-brands-svg-icons"
import { faDatabase, faTableCellsRowLock, faCloud, faCubes, faDharmachakra } from "@fortawesome/free-solid-svg-icons"

export default function Services() {
  const skills = [
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3 },
    { name: "JS", icon: faJs },
    { name: "React", icon: faReact },
    { name: "Bootstrap", icon: faBootstrap },
    { name: "Docker", icon: faDocker },
    { name: "GIT", icon: faGit },
    { name: "Git Hub", icon: faGithub },
    { name: "Jenkins", icon: faJenkins },
    { name: "Kubernetes", icon: faDharmachakra },
    { name: "Python", icon: faPython },
    { name: "MySql", icon: faDatabase },
    { name: "AWS", icon: faAws },
    { name: "IAM service", icon: faTableCellsRowLock },
    { name: "VPC", icon: faCloud },
    { name: "S3", icon: faCubes },
  ]

  return (
    <div className="w-full bg-[#FF9000]">
      <h1 className="text-4xl text-center pt-14 text-white">My Skills</h1>
      <div className="w-11/12 sm:w-10/12 md:w-3/4 mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="h-44 text-center pt-4">
            <FontAwesomeIcon 
              icon={skill.icon} 
              className="text-6xl text-white border border-2 p-4 rounded-full hover:text-black hover:border-black" 
            />
            <h1 className="text-white mt-2">{skill.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}
