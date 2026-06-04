import {
  EXPRESS,
  GIT,
  GOLANG,
  GRAPHQL,
  JAVASCRIPT,
  JEST,
  NEXT,
  NODE,
  REACT,
  REACT_NATIVE,
  REDUX,
  TYPESCRIPT,
} from "assets";
import { Typography } from "@mui/material";
import React from "react";

function Skills() {
  const skill = [
    {
      id: 1,
      name: "JavaScript",
      component: <JAVASCRIPT className="w-12 h-12 transition-all duration-300" />,
      color: "hover:shadow-[0_0_20px_rgba(247,223,30,0.3)] hover:border-yellow-500/30"
    },
    {
      id: 2,
      name: "TypeScript",
      component: <TYPESCRIPT className="w-12 h-12 transition-all duration-300" />,
      color: "hover:shadow-[0_0_20px_rgba(49,120,198,0.3)] hover:border-blue-500/30"
    },
    {
      id: 13,
      name: "GoLang",
      component: <GOLANG className="w-12 h-12 transition-all duration-300" />,
      color: "hover:shadow-[0_0_20px_rgba(0,173,216,0.3)] hover:border-cyan-500/30"
    },
    {
      id: 14,
      name: "Dart",
      component: (
        <img
          alt="dart"
          src="./images/dart.png"
          className="w-12 h-12 object-contain transition-all duration-300"
        />
      ),
      color: "hover:shadow-[0_0_20px_rgba(0,181,250,0.3)] hover:border-sky-500/30"
    },
    {
      id: 11,
      name: "Node.js",
      component: <NODE className="w-12 h-12 transition-all duration-300" />,
      color: "hover:shadow-[0_0_20px_rgba(104,159,99,0.3)] hover:border-green-500/30"
    },
    {
      id: 3,
      name: "React.js",
      component: <REACT className="w-12 h-12 transition-all duration-300" />,
      color: "hover:shadow-[0_0_20px_rgba(97,218,251,0.3)] hover:border-cyan-400/30"
    },
    {
      id: 4,
      name: "Next.js",
      component: <NEXT className="w-12 h-12 transition-all duration-300" />,
      color: "hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:border-slate-400/30"
    },
    {
      id: 5,
      name: "React Native",
      component: <REACT_NATIVE className="w-12 h-12 transition-all duration-300" />,
      color: "hover:shadow-[0_0_20px_rgba(97,218,251,0.3)] hover:border-blue-400/30"
    },
    {
      id: 26,
      name: "Flutter",
      component: (
        <img
          src="./images/flutter.png"
          alt="flutter"
          className="w-12 h-12 object-contain transition-all duration-300"
        />
      ),
      color: "hover:shadow-[0_0_20px_rgba(2,86,155,0.3)] hover:border-sky-600/30"
    },
    {
      id: 6,
      name: "Express.js",
      component: <EXPRESS className="w-12 h-12 transition-all duration-300" />,
      color: "hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:border-slate-500/30"
    },
    {
      id: 7,
      name: "GraphQL",
      component: <GRAPHQL className="w-12 h-12 transition-all duration-300" />,
      color: "hover:shadow-[0_0_20px_rgba(225,0,152,0.3)] hover:border-pink-500/30"
    },
    {
      id: 9,
      name: "Git",
      component: <GIT className="w-12 h-12 transition-all duration-300" />,
      color: "hover:shadow-[0_0_20px_rgba(240,80,50,0.3)] hover:border-orange-500/30"
    },
    {
      id: 8,
      name: "Jest",
      component: <JEST className="w-12 h-12 transition-all duration-300" />,
      color: "hover:shadow-[0_0_20px_rgba(194,61,86,0.3)] hover:border-rose-600/30"
    },
    {
      id: 12,
      name: "Redux",
      component: <REDUX className="w-12 h-12 transition-all duration-300" />,
      color: "hover:shadow-[0_0_20px_rgba(118,74,188,0.3)] hover:border-violet-500/30"
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-16 transition-colors duration-300"
    >
      <div className="flex flex-col gap-3 mb-12 text-center md:text-left">
        <Typography 
          variant="h3" 
          className="font-bold tracking-tight text-slate-900 dark:text-white"
          style={{ fontSize: "2.25rem" }}
        >
          Tech Stack & Keahlian
        </Typography>
        <Typography className="text-slate-500 dark:text-slate-400 max-w-xl">
          Kumpulan bahasa pemrograman, framework, dan tools yang saya gunakan untuk mendevelop aplikasi modern skala produksi.
        </Typography>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {skill.map((item: any) => {
          return (
            <div
              key={item.id}
              className={`flex flex-col items-center justify-center p-6 rounded-2xl border border-solid border-slate-200/60 dark:border-slate-800/40 bg-white/50 dark:bg-slate-900/10 backdrop-blur-md transition-all duration-300 hover:translate-y-[-4px] group cursor-pointer ${item.color}`}
            >
              <div className="mb-4 filter-gray group-hover:filter-none group-hover:scale-110 transition-all duration-300">
                {item.component}
              </div>
              <Typography 
                variant="body2" 
                className="font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-center text-xs"
              >
                {item.name}
              </Typography>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
