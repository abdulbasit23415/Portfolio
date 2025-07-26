"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ImLink } from "react-icons/im"
import { Mail, MapPin, User, Calendar, GraduationCap, Code } from "lucide-react"

function MyCard({ repo }) {
  const personalInfo = [
    { icon: User, label: "Name", value: "ABDULBASIT" },
    { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },
    { icon: Mail, label: "Email", value: "kashifabdulbasit@gmail.com" },
    { icon: Code, label: "Skills", value: "Python, Node.js, ML, SQL" },
    { icon: GraduationCap, label: "Education", value: "Undergraduate (6th Semester)" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* About Me Section */}
      <div className="container mx-auto px-4 py-8 lg:py-16 ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <Image
                src="/myimage2.jpeg"
                className="w-64 h-80 sm:w-80 sm:h-96 lg:w-[350px] lg:h-[397px] object-cover rounded-lg shadow-2xl border-2 border-gray-700"
                width={350}
                height={397}
                priority={true}
                alt="Abdul Basit - Profile Image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-[#ff4b5c] font-bold text-sm sm:text-base mb-2 tracking-wider uppercase">Discover</h1>
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">About Me</h2>
              <div className="w-16 h-0.5 bg-[#ff4b5c] mx-auto lg:mx-0 mb-6"></div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto text-justify lg:mx-0 ">
              Python developer and full-stack engineer with a strong focus on data-driven applications and intelligent systems. I build scalable, efficient solutions using modern technologies like Node.js, Next.js, and Tailwind, blending backend logic with seamless user experiences. My work often integrates machine learning, automation, and real-world problem-solving, ranging from finance and education to healthcare. Passionate about creating impactful tech that’s both innovative and practical
            </p>

            {/* Personal Info Grid */}
            <div className="border-2 border-[#ff4b5c] rounded-lg p-4 sm:p-6 mb-8 bg-gray-800/50 backdrop-blur-sm">
              <div className="grid text-left sm:grid-cols-2 gap-4 text-white">
                {personalInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700/50 transition-colors"
                    >
                      <IconComponent className="w-4 h-4 text-[#ff4b5c] flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <span className="font-semibold text-sm">{info.label}: </span>
                        <span className="text-gray-300 text-sm break-words">{info.value}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Resume Button */}
            <a href="/Abdul Basit cv1.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#ff4b5c] hover:bg-[#ff4b5c]/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-[#25273E] min-h-screen py-10 lg:py-20">
        <div className="container mx-auto px-5">
          <div className="text-center lg:text-left mb-12">
            <h1 className="text-[#ff4b5c] font-bold text-sm sm:text-base mb-2 tracking-wider uppercase">What I Do</h1>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">My Projects</h2>
            <div className="w-16 h-0.5 bg-[#ff4b5c] mx-auto lg:mx-0"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {repo && repo.length > 0 ? (
              repo.map((repos) => (
                <div key={repos.id} className="group">
                  <a
                    href={repos.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-2 border-[#ff4b5c] rounded-lg p-6 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <ImLink className="text-[#ff4b5c] text-xl group-hover:rotate-12 transition-transform duration-300" />
                      <h3 className="font-bold text-lg lg:text-xl text-white group-hover:text-[#ff4b5c] transition-colors duration-300 truncate">
                        {repos.name}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {repos.description
                        ? repos.description.length > 120
                          ? repos.description.slice(0, 120) + "..."
                          : repos.description
                        : "No description available."}
                    </p>
                  </a>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400 text-lg">No projects available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCard
