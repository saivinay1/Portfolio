'use client'
import { faAws, faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Resume() {
  const education = [
    {
      title: "Graduation",
      school: "Aditya Engineering College",
      cgpa: "7.0",
      year: "2020-2024",
      description: "I gained core engineering skills, hands-on technical experience, and a strong problem-solving mindset to support my professional growth."
    },
    {
      title: "Intermediate",
      school: "Narayana Jr College",
      cgpa: "7.54",
      year: "2020-2024",
      description: ""
    }
  ];

  const experience = [
    {
      role: "Web development Intern",
      company: "Digital Lync",
      period: "Aug 2024 - Nov 2024",
      description: [
        "Developed and maintained responsive websites using HTML5, CSS3, Tailwind CSS, and JavaScript.",
        "Ensured cross-browser compatibility and mobile optimization.",
        "Collaborated with designers to translate UI/UX wireframes into functional web pages.",
        "Utilized React.js and Node.js for building dynamic web applications.",
        "Integrated RESTful APIs for back-end data management.",
        "Used Git for version control and collaborated via GitHub."
      ]
    },
    {
      role: "Devops Engineer",
      company: "Skill Capital",
      period: "Nov 2024 - Present",
      description: [
        "Deployed the Skill Capital CRM project using DevOps practices.",
        "Deployed a CRM project using manual methods and Docker.",
        "Created and managed Docker containers for application environments.",
        "Troubleshooted deployment and integration issues.",
        "Ensured security best practices by configuring SSL for Docker services."
      ]
    }
  ];

  return (
    <div className="w-full mb-10 relative">
      <h1 className="text-4xl text-center font-light "> My Resume</h1>
      <div className="flex justify-center">
        <button className="w-40 p-2 bg-[#FF9000] mt-2 ">Resume</button>
      </div>

      {/* Timeline icons */}
      <p className="text-3xl absolute top-40 left-[48%] p-2 bg-[#FF9000] text-white rounded-full">
        <FontAwesomeIcon icon={faGraduationCap} />
      </p>
      <p className="text-3xl absolute top-[28%] left-[48%] p-2 bg-[#FF9000] text-white rounded-full">
        <FontAwesomeIcon icon={faGraduationCap} />
      </p>
      <p className="text-3xl absolute top-[49%] left-[48%] p-2 bg-[#FF9000] text-white rounded-full">
        <FontAwesomeIcon icon={faBriefcase} />
      </p>
      <p className="text-3xl absolute top-[75%] left-[48%] p-2 bg-[#FF9000] text-white rounded-full">
        <FontAwesomeIcon icon={faBriefcase} />
      </p>

      {/* Education */}
      <p className="text-2xl text-center mx-auto mt-6 bg-gray-300 w-1/4">Education</p>
      <div className="w-11/12 sm:w-10/12 md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 mt-8 gap-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className={`w-full h-72 p-10 ${index % 2 === 0 ? "md:border-r-2 md:border-black md:text-end" : ""}`}
          >
            <h1 className="text-2xl font-light">{edu.title}</h1>
            <h2 className="opacity-50">
              {edu.school}
              <br />
              CGPA {edu.cgpa}
            </h2>
            <h4>{edu.year}</h4>
            {edu.description && <p>{edu.description}</p>}
          </div>
        ))}
      </div>

      {/* Work Experience */}
      <p className="text-2xl text-center mt-16 bg-gray-300 w-1/4 mx-auto">Work Experience</p>
      <div className="w-11/12 sm:w-10/12 md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 mt-8 gap-6">
        {experience.map((exp, index) => (
          <div
            key={index}
            className={`w-full h-96 p-10 ${index % 2 === 0 ? "md:border-r-2 md:border-black md:text-end md:pr-10" : ""}`}
          >
            <h1 className="text-2xl font-light">{exp.role}</h1>
            <h2 className="opacity-50">{exp.company}</h2>
            <h4>{exp.period}</h4>
            <p className="text-justify mt-2">
              {exp.description.map((item, i) => (
                <React.Fragment key={i}>
                  * {item}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
