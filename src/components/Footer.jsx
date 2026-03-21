import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 px-4 md:px-10 py-5 border-t border-gray-800">
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        <h2 className="text-white font-semibold text-lg">
          Rajdeep Majumdar
        </h2>

        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/Rajdeep-m7"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rajdeep-majumdar-01736a28a"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:amazumder781@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} All rights reserved
        </p>

      </div>
    </footer>
  );
}

export default Footer;