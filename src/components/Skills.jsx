import React from "react";

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
    <section className="bg-gray-950 px-6 py-12 lg:px-20 lg:py-20">
      
      <h1 className="text-6xl  lg:text-7xl font-extrabold text-white mb-12">
        Tech I{" "}
        <span className="bg-linear-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
          work with
        </span>
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((section, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-8 h-1 rounded ${section.color}`}></div>
              <p className="text-gray-400 text-sm tracking-wider">
                {section.title}
              </p>
            </div>

            <ul className="text-gray-300 text-sm font-medium space-y-1">
              {section.items.map((skill, i) => (
                <li
                  key={i}
                  className="px-3 py-2 rounded-md hover:bg-slate-900 transition"
                >
                  ● {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;