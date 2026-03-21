import React from "react";

function Header() {
  return (
    <header className="w-full bg-slate-950 text-white px-4 md:px-10 lg:px-20 py-4 border-b border-gray-800 sticky top-0 z-50">
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

        <div className="md:hidden text-2xl cursor-pointer">☰</div>
      </div>
    </header>
  );
}

export default Header;
