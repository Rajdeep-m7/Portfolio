import React from "react";
import { RiArrowRightUpLongLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const ProjectData = [
 
  {
    emoji: "🛒",
    badge: "MERN",
    header: "E-Commerce App",
    description:
      "Full-stack shopping platform — product listings, cart, JWT auth, order management. Clean, scalable architecture.",
    techs: ["React", "Node.js", "MongoDB", "Express js", "JWT", "Redux"],
    github: "https://github.com/Rajdeep-m7/Ecom-Styleo",
    live: "https://styleo.onrender.com",
  },
  {
    emoji: "💬",
    badge: "Realtime",
    header: "Realtime Chat WebApp",
    description:
      "Instant messaging with private rooms, live online status, sub-100ms latency via Socket.io.",
    techs: ["Socket.io", "React", "MongoDB", "Express js", "JWT", "Zustand"],
    github: "https://github.com/Rajdeep-m7/chat-app",
    live: "https://talksy-vrku.onrender.com",
  },
  {
    emoji: "☕",
    badge: "MERN",
    header: "Cafe Menu Management",
    description:
      "Full CRUD café menu management with Admin dashboard — categories, items, and pricing.",
    techs: ["React", "MongoDB", "Express js", "Node.js"],
    github: "https://github.com/Rajdeep-m7/Cafe_management",
    live: "https://cafe-management-frontend.onrender.com",
  },
];

function Projects() {
   const isMobile = window.innerWidth < 768 ;
  return (
    <div id="projects" className="bg-slate-950 px-4 py-10 md:px-10 lg:px-20">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-white text-4xl md:text-7xl font-extrabold leading-tight"
      >
        Projects I've{" "}
        <span className="bg-linear-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
          built
        </span>
      </motion.h1>

      <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3 ">
        {ProjectData.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{scale:1.03 , y: -5,
              transition:{
                delay: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            transition={{ duration: 0.5, delay: isMobile? 0.3 : 0.1*i + 0.3 }}
            viewport={{ once: true }}
            key={i}
            className="flex flex-col justify-between border border-gray-700 p-5 rounded-xl text-white bg-slate-900 
  hover:border-t-4 hover:border-t-cyan-400 
  hover:shadow-lg hover:shadow-cyan-500/30"
          >
            <motion.div
            initial={{opacity:0 , y: -80}}
            whileInView={{opacity:1 , y:0}}
            transition={{ duration:0.7 , delay:0.2}}
            viewport={{once : true}}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-4xl">{item.emoji}</span>
                <span className="text-xs bg-slate-800 px-2 py-1 border border-blue-950 rounded-md text-gray-300">
                  {item.badge}
                </span>
              </div>

              <h2 className="text-xl font-bold mt-5">{item.header}</h2>
              <p className="text-gray-400 text-sm mt-2">{item.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {item.techs.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs border border-blue-900 px-2 py-1 rounded-md bg-slate-800 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
            initial={{opacity:0 , y: -80}}
            whileInView={{opacity:1 , y:0}}
            transition={{ duration:0.7 , delay:0.2}}
            viewport={{once : true}}
            className="flex gap-4 mt-6">
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-3 py-1 border border-gray-600 rounded-md hover:bg-gray-800 transition flex items-center gap-1"
              >
                GitHub <RiArrowRightUpLongLine />
              </a>
              <a
                href={item.live}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-3 py-1 bg-blue-500 rounded-md hover:bg-blue-600 transition flex items-center gap-1"
              >
                Live Demo <FaArrowRightLong />
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
