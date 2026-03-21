import React, { useState } from "react";
import {AnimatePresence, motion} from "framer-motion";

function Header() {
  const [isOpen , setIsOpen]= useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 , y:-100 }}
      animate={{ opacity: 1 , y:0 }}
      transition={{ duration: 0.5, delay: 0.3 }} 
      className=" w-full bg-slate-950 text-white px-4 md:px-10 lg:px-20 py-4 border-b border-gray-800 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold">
          Rajdeep{" "}
          <span className="bg-linear-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            Majumdar
          </span>
        </h1>

        <nav className="hidden md:flex gap-6 text-sm font-bold text-gray-300">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>

        <div onClick={()=>setIsOpen(!isOpen)} className="md:hidden text-2xl cursor-pointer">{isOpen ? "X" : "☰"}</div>
      </div>

      <AnimatePresence>
      {
        isOpen && 
        <motion.div
        initial={{opacity:0 , y: -10}}
        animate={{opacity:1 , y:0}}
        exit={{ opacity: 0, y: -10 }}
        transition={{duration:0.5 , delay:0.3}}
         className="h-40 w-full flex flex-col justify-center items-center gap-2 mt-3 absolute bg-slate-950 font-bold text-white right-0 left-0">
          <a onClick={()=>setIsOpen(false)} href="#home" className="hover:text-white transition">
            Home
          </a>
          <a onClick={()=>setIsOpen(false)} href="#about" className="hover:text-white transition">
            About
          </a>
          <a onClick={()=>setIsOpen(false)} href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a onClick={()=>setIsOpen(false)} href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a onClick={()=>setIsOpen(false)} href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </motion.div>
      }
      </AnimatePresence>
    </motion.div>
  );
}

export default Header;
