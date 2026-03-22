import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "FRONTEND",
    color: "bg-cyan-500",
    items: [
      "React",
      "HTML5",
      "CSS",
      "Tailwind CSS",
      "JavaScript ES6+",
      "Framer Motion",
      "Redux Toolkit",
      "Zustand",
    ],
  },
  {
    title: "BACKEND",
    color: "bg-violet-500",
    items: ["Node.js", "Express.js", "Socket.io", "JWT Auth", "REST APIs"],
  },
  {
    title: "DATABASE",
    color: "bg-green-500",
    items: ["MongoDB", "PostgreSQL", "Mongoose ODM"],
  },
  {
    title: "OTHERS",
    color: "bg-amber-500",
    items: ["Core Java", "GitHub", "Git", "Postman", "VS Code"],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-gray-950 px-6 py-12 lg:px-20 lg:py-20">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-4xl  md:text-7xl font-extrabold text-white mb-12"
      >
        Tech I{" "}
        <span className="bg-linear-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
          work with
        </span>
      </motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((section, index) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{
              scale: 1.03,
              y: -6,
              transition: {
                delay: 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            transition={{ duration: 0.5, delay: 0.01 * index + 0.3 }}
            viewport={{ once: true }}
            key={index}
            className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-600  hover:shadow-xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className={`w-8 h-1 rounded ${section.color}`}></div>
              <p className="text-gray-400 text-sm tracking-wider">
                {section.title}
              </p>
            </motion.div>

            <ul className="text-gray-300 text-sm font-medium space-y-1">
              {section.items.map((skill, i) => (
                <motion.li
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1*i + 0.1 }}
                  viewport={{ once: true }}
                  key={i}
                  className="px-3 py-2 rounded-md hover:bg-slate-900"
                >
                  ● {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
