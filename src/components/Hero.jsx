import React from "react";
import { RiArrowRightUpLongLine } from "react-icons/ri";

function Hero() {
  return (
    <div id="home" className="bg-gray-950 min-h-screen px-4 py-10 sm:px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="w-full lg:w-1/2">
        <div className="px-2 p-1 rounded-2xl flex bg-gray-900 w-fit items-center gap-3 border border-blue-950 hover:scale-105">
          <span className="bg-green-400 rounded-full w-2.5 h-2.5 animate-pulse"></span>
          <p className="text-gray-400 font-semibold text-xs sm:text-sm md:text-base">
            Available for Work
          </p>
        </div>

        <h1 className="text-white font-extrabold text-6xl lg:text-7xl mt-5 leading-tight">
          FULL STACK
        </h1>

        <h1 className="text-6xl lg:text-7xl font-extrabold bg-linear-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent leading-tight">
          DEVELOPER
        </h1>

        <p className="text-gray-400 mt-5 max-w-xl">
          BCA 3rd Year <span className="font-bold">@ SIT Siliguri</span>.
          Crafting production-grade web apps with{" "}
          <span className="text-violet-500 font-bold">MERN</span>, PostgreSQL,
          Redux & modern tooling.
        </p>

        <a href="#projects" className="px-5 sm:px-6 mt-8 py-3 sm:py-4 flex gap-2 items-center bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-md text-sm sm:text-base w-fit">
          View Projects <RiArrowRightUpLongLine />
        </a>

        <div className="rounded-md bg-slate-900 flex flex-wrap border border-blue-950 text-white font-bold mt-10 w-full sm:w-fit">
          <div className="flex-1 sm:flex-none text-center hover:bg-slate-800 border-r border-blue-950 px-6 py-4 sm:px-10 sm:py-5">
            <h1 className="text-lg sm:text-xl">8.77</h1>
            <p className="text-xs sm:text-sm">CGPA</p>
          </div>
          <div className="flex-1 sm:flex-none text-center hover:bg-slate-800 border-r border-blue-950 px-6 py-4 sm:px-10 sm:py-5">
            <h1 className="text-lg sm:text-xl">3+</h1>
            <p className="text-xs sm:text-sm">Projects</p>
          </div>
          <div className="flex-1 sm:flex-none text-center hover:bg-slate-800 px-6 py-4 sm:px-10 sm:py-5">
            <h1 className="text-lg sm:text-xl">2</h1>
            <p className="text-xs sm:text-sm">Awards</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-3/7 flex flex-col justify-center">
        <div className="flex gap-5 mb-5 flex-wrap text-sm justify-center">
          {[
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "PostgreSQL",
            "Redux",
            "JavaScript",
            "zustand",
            "Socket.io",
          ].map((tech, i) => (
            <div
              key={i}
              className="px-2 p-1 border rounded-md text-gray-400 float hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {tech}
            </div>
          ))}
        </div>
        <div className="w-full max-w-lg sm:max-w-xl md:max-w-3xl bg-[#0d1117] text-green-400 font-mono rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-5 sm:py-3 bg-gray-800">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="ml-2 md:ml-4 text-gray-400 text-xs sm:text-sm">
                ~/dev
              </span>
            </div>

            <p className="hidden sm:block text-gray-400 text-xs md:text-sm">
              portfolio_terminal.sh
            </p>

            <div className="flex items-center gap-2">
              <div className="bg-green-400 rounded-full w-2.5 h-2.5 animate-pulse"></div>
              <p className="text-gray-400 font-semibold text-xs sm:text-sm">
                Live
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed word-break-words">
            <p>
              <span className="text-blue-400">~/dev $</span> whoami
            </p>
            <p>Rajdeep Majumdar — Full-Stack MERN Developer</p>

            <p>
              <span className="text-blue-400">~/dev $</span> cat skills.txt
            </p>
            <p>React.js · Express.js · MongoDB · Node.js · PostgreSQL</p>

            <p>
              <span className="text-blue-400">~/dev $</span> cat education.txt
            </p>
            <p>BCA 3rd Year · SIT Siliguri · CGPA 8.77</p>

            <p>
              <span className="text-blue-400">~/dev $</span> cat status.txt
            </p>
            <p className="flex items-center gap-2 flex-wrap">
              <span className="text-green-400">●</span>
              Open to internships & opportunities
            </p>

            <p className="flex items-center gap-2 text-blue-400">
              ~/dev $
              <span className="animate-pulse inline-block w-2 h-5 bg-green-500 ml-1"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
