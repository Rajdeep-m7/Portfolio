import React from "react";

const CONTACT_LINKS = [
  {
    icon: "✉",
    label: "Email",
    sub: "Drop a message",
    val: "amazumder781@gmail.com",
    href: "mailto:amazumder781@gmail.com",
  },
  {
    icon: "💻",
    label: "GitHub",
    sub: "See my code",
    val: "github.com/Rajdeep-m7",
    href: "https://github.com/Rajdeep-m7",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    sub: "Professional network",
    val: "linkedin.com/in/rajdeep-majumdar-01736a28a",
    href: "https://linkedin.com/in/rajdeep-majumdar-01736a28a",
  },
];

function Contact() {
  return (
    <section id="contact" className="bg-slate-950 text-white px-4 py-16 md:px-10 lg:px-20">
      
      <h2 className="text-4xl md:text-7xl font-extrabold leading-tight">
        Let's build something <br />
        <span className="bg-linear-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
          great together.
        </span>
      </h2>

      <p className="text-gray-400 mt-4 max-w-xl">
        Open to internships, freelance projects, and collaborations.
      </p>

      <div className="flex flex-col gap-4 mt-10">
        {CONTACT_LINKS.map((c, i) => (
          <a
            key={i}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-5 rounded-xl bg-slate-900 border border-gray-700 
            hover:border-cyan-400 hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-500/20 
            transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800 text-xl">
                {c.icon}
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase">{c.sub}</p>
                <h3 className="font-bold text-lg">{c.label}</h3>
                <p className="text-sm text-gray-400">{c.val}</p>
              </div>
            </div>

            <span className="text-gray-400 text-lg">↗</span>
          </a>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-xl bg-slate-900 border border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        
        <div>
          <h3 className="font-bold text-lg">Currently open to opportunities</h3>
          <p className="text-sm text-gray-400">
            <span className="text-green-500 animate-ping text-xl">●</span> Available for internships · Freelance · Full-time
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href="mailto:amazumder781@gmail.com"
            className="px-4 py-2 bg-linear-to-r from-blue-500 to-cyan-500 rounded-md text-sm font-semibold hover:opacity-90"
          >
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/rajdeep-majumdar-01736a28a"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-gray-600 rounded-md text-sm hover:bg-slate-800"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;