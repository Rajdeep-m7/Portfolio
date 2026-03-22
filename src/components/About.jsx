import React from "react";
import { motion } from "framer-motion";

function About() {
  const IsMobile = window.innerWidth < 768 ;
  return (
    <div id="about" className="bg-slate-950 h-fit p-4 md:p-20">
      <div className="flex flex-col gap-10 lg:justify-between lg:flex-row">
        <div className="lg:w-2/5">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-extrabold text-white"
            >
              Who I <span className="text-cyan-400">am</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-400 text-xl mt-10"
            >
              I'm a{" "}
              <span className="font-bold text-white">BCA 3rd Year student</span>{" "}
              at Siliguri Institute of Technology with a CGPA of{" "}
              <span className="text-violet-400 font-bold">8.77</span>. I'm
              passionate about building fast, scalable, and beautiful web
              applications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-400 text-xl mt-5"
            >
              My core stack includes{" "}
              <span className="font-bold text-white">
                React, Node.js, Express, MongoDB,
              </span>{" "}
              and <span className="font-bold text-white">PostgreSQL</span>. I’m
              always exploring new technologies and pushing myself to write
              better, more efficient code. For me, development is not just about
              functionality — it’s about crafting smooth user experiences.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-5"
          >
            <div className="flex justify-between border-b border-gray-900 text-gray-400 p-2 hover:bg-slate-900">
              <h1 className="text-sm">ROLE</h1>
              <h1 className="text-sm font-semibold text-white">
                Full Stack MERN Developer
              </h1>
            </div>
            <div className="flex justify-between border-b border-gray-900 text-gray-400 p-2 hover:bg-slate-900">
              <h1 className="text-sm ">DEGREE</h1>
              <h1 className="text-sm font-semibold text-white">
                Bachelor of Computer Applications
              </h1>
            </div>
            <div className="flex justify-between border-b border-gray-900 text-gray-400 p-2 hover:bg-slate-900">
              <h1 className="text-sm ">COLLEGE</h1>
              <h1 className="text-sm font-semibold text-white">
                Siliguri Institute of Technology
              </h1>
            </div>
            <div className="flex justify-between border-b border-gray-900 text-gray-400 p-2 hover:bg-slate-900">
              <h1 className="text-sm ">YEAR</h1>
              <h1 className="text-sm font-semibold text-white">
                3rd Year · 2022 – Present
              </h1>
            </div>
            <div className="flex justify-between border-b border-gray-900 text-gray-400 p-2 hover:bg-slate-900">
              <h1 className="text-sm ">LOCATION</h1>
              <h1 className="text-sm font-semibold text-white">
                Siliguri, West Bengal, India
              </h1>
            </div>
            <div className="flex justify-between border-b border-gray-900 text-gray-400 p-2 hover:bg-slate-900">
              <h1 className="text-sm ">STATUS</h1>
              <h1 className="text-sm font-semibold text-green-400">
                ● Open to Opportunities
              </h1>
            </div>
          </motion.div>
        </div>

        <div className="lg:max-w-1/2 text-gray-400 flex flex-col w-full justify-center items-center gap-5">
          <motion.div
            initial={{ opacity: 0, x: IsMobile? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="border border-blue-950 p-5 rounded-xl w-full"
          >
            <div className="flex justify-between">
              <div>
                <p className="text-white mb-1">Academic Performance</p>
                <p>Siliguri Institute of Technology</p>
              </div>
              <div>
                <p className="bg-linear-to-r from-violet-900 to-cyan-400 bg-clip-text text-transparent leading-tight font-bold text-4xl">
                  8.77
                </p>
              </div>
            </div>
            <div className="w-full rounded-xl h-2 bg-gray-900 mt-2">
              <div className="w-9/10 h-2 bg-linear-to-r from-violet-900 to-cyan-400 rounded-xl"></div>
            </div>
            <div className="flex justify-between text-sm">
              <p>0</p>
              <p>10</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: IsMobile ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              y: -6,
              transition: {
                delay: 0.1,
                type: "spring",
              },
            }}
            transition={{
              duration: 0.4,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="border border-blue-950 p-5 rounded-xl border-l-4 border-l-cyan-400 w-full 
             hover:bg-gray-950
             hover:shadow-lg hover:shadow-cyan-400/40 "
          >
            <div className="flex gap-5 items-center">
              <p className="text-3xl">🏆</p>
              <div>
                <p className="font-bold text-white">3rd Semester Topper</p>
                <p>
                  Ranked #1 in the 3rd Semester at Siliguri Institute of
                  Technology.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: IsMobile? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
            transition={{
              duration: 0.4,
              delay: IsMobile ? 0.5 : 0.6,
              ease: "easeOut",
            }}
            className="border border-blue-950 p-5 rounded-xl border-l-4 border-l-cyan-400 w-full hover:bg-gray-950 hover:shadow-lg  hover:shadow-cyan-500/30 "
          >
            <div className="flex gap-5  items-center">
              <p className="text-3xl">🥈</p>
              <div>
                <p className="font-bold text-white">SIH Hackathon Runner-up</p>
                <p>2nd place in SIT Internal Smart India Hackathon 2025.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
