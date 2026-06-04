/* eslint-disable no-undef */
import { Button, Chip, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React from "react";
import id from "constan/id.json";

interface BentoTimelineProps {
  isDarkMode: boolean;
}

export default function BentoTimeline({ isDarkMode }: BentoTimelineProps) {
  // Current job
  const currentJob = id.iDoNow.child[0];
  
  // Past jobs
  const pastJobs = id.before.child;

  return (
    <section className="w-full py-12 transition-colors duration-300">
      <div className="flex flex-col gap-3 mb-10 text-center md:text-left">
        <Typography 
          variant="h3" 
          className={`font-bold tracking-tight ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}
          style={{ fontSize: "2.25rem" }}
        >
          Perjalanan Karir
        </Typography>
        <Typography className={`max-w-xl text-sm ${
          isDarkMode ? "text-slate-400" : "text-slate-500"
        }`}>
          Bagaimana saya tumbuh dan berkontribusi di industri teknologi dari tahun ke tahun.
        </Typography>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Highlighted Card: Sekarang Sibuk Apa? */}
        <div className={`md:col-span-2 row-span-2 flex flex-col justify-between p-8 rounded-2xl transition-all duration-300 group hover:translate-y-[-2px] overflow-hidden relative ${
          isDarkMode ? "glow-border-violet" : "light-mode-card"
        }`}>
          {/* Decorative backdrop elements (glow spots) */}
          <div className={`absolute top-[-20%] right-[-20%] w-60 h-60 rounded-full blur-[80px] pointer-events-none group-hover:scale-110 transition-transform duration-500 ${
            isDarkMode ? "bg-purple-600/20" : "bg-purple-600/10"
          }`} />
          <div className={`absolute bottom-[-20%] left-[-20%] w-60 h-60 rounded-full blur-[80px] pointer-events-none ${
            isDarkMode ? "bg-cyan-600/10" : "bg-blue-600/5"
          }`} />

          <div>
            <div className="flex items-center justify-between mb-6">
              <Chip 
                label="SEKARANG SIBUK APA?" 
                size="small"
                className={`font-semibold tracking-wider text-[10px] ${
                  isDarkMode 
                    ? "bg-purple-900/40 text-purple-300" 
                    : "bg-purple-100 text-purple-700"
                }`}
              />
              <span className={`text-xs font-semibold tracking-widest uppercase ${
                isDarkMode ? "text-purple-400" : "text-slate-400"
              }`}>
                Active
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
              <div className={`flex-shrink-0 p-2 rounded-2xl border border-solid w-20 h-20 flex items-center justify-center overflow-hidden ${
                isDarkMode ? "bg-slate-800 border-slate-700/50" : "bg-slate-100 border-slate-200"
              }`}>
                <img 
                  src={currentJob.img} 
                  alt="Paramatech logo" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <Typography 
                  variant="h4" 
                  className={`font-bold mb-1 ${
                    isDarkMode ? "text-white" : "text-slate-800"
                  }`}
                  style={{ fontSize: "1.5rem" }}
                >
                  {currentJob.role}
                </Typography>
                <Typography className={`font-medium mb-3 text-sm ${
                  isDarkMode ? "text-purple-400" : "text-purple-600"
                }`}>
                  @ Paramatech.id
                </Typography>
              </div>
            </div>

            <Typography className={`text-sm leading-relaxed mb-6 ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}>
              {currentJob.desc}
            </Typography>
          </div>

          <div className={`pt-4 border-t border-solid border-x-0 border-b-0 flex items-center justify-between ${
            isDarkMode ? "border-slate-800/80" : "border-slate-100"
          }`}>
            <span className={`text-xs font-medium ${
              isDarkMode ? "text-slate-500" : "text-slate-400"
            }`}>
              Software Engineer
            </span>
            <Button 
              variant="outlined" 
              endIcon={<ArrowRightAltIcon className="group-hover:translate-x-1 transition-transform" />}
              className={`capitalize font-medium rounded-lg text-xs ${
                isDarkMode 
                  ? "text-purple-400 border-purple-400 hover:bg-purple-950/20" 
                  : "text-purple-600 border-purple-600 hover:bg-purple-50"
              }`}
            >
              <a href={currentJob.link} target="_blank" rel="noreferrer" className="text-inherit">
                {currentJob.button}
              </a>
            </Button>
          </div>
        </div>

        {/* Past Experience Cards (Chronological) */}
        {pastJobs.map((item: any, index: number) => {
          // Alternative glow styles for past experiences
          const isEnablr = item.link.includes("enablr");
          const hoverClass = isEnablr ? "glow-border-cyan" : "glow-border-violet";
          
          return (
            <div 
              key={index} 
              className={`p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between group hover:translate-y-[-2px] relative overflow-hidden ${
                isDarkMode ? `${hoverClass} bg-[#151B2C]/30` : "light-mode-card bg-white"
              }`}
            >
              {/* Subtle background color accents */}
              <div className="absolute top-[-10%] right-[-10%] w-32 h-32 rounded-full bg-slate-500/5 dark:bg-slate-500/10 blur-[40px] pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-1.5 rounded-xl border border-solid w-12 h-12 flex items-center justify-center overflow-hidden ${
                    isDarkMode ? "bg-slate-800/80 border-slate-700/40" : "bg-slate-100 border-slate-200"
                  }`}>
                    <img 
                      src={item.img} 
                      alt={item.role} 
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <Chip 
                    label={index === 0 ? "SEBELUMNYA" : index === 1 ? "AWAL MULAI" : "BOOTCAMP"} 
                    size="small"
                    className={`text-[9px] font-medium ${
                      isDarkMode 
                        ? "bg-slate-800/50 text-slate-400" 
                        : "bg-slate-100 text-slate-600"
                    }`}
                  />
                </div>

                <Typography 
                  variant="h5" 
                  className={`font-bold mb-1 ${
                    isDarkMode ? "text-white" : "text-slate-800"
                  }`}
                  style={{ fontSize: "1.1rem" }}
                >
                  {item.role}
                </Typography>
                
                <Typography className={`text-xs font-semibold mb-4 ${
                  isDarkMode ? "text-slate-450 text-purple-400" : "text-slate-400"
                }`}>
                  {item.title || (isEnablr ? "@ Enablr.id" : item.link.includes("microgen") ? "@ Microgen.id / Mejik" : "@ Dumbways.id")}
                </Typography>

                <Typography className={`text-xs leading-relaxed mb-6 ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}>
                  {item.desc}
                </Typography>
              </div>

              <div className={`pt-4 border-t border-solid border-x-0 border-b-0 flex items-center justify-between ${
                isDarkMode ? "border-slate-800/60" : "border-slate-100"
              }`}>
                <span className={`text-[10px] font-medium ${
                  isDarkMode ? "text-slate-500" : "text-slate-400"
                }`}>
                  {isEnablr ? "Frontend Dev" : "Fullstack Dev"}
                </span>
                <Button 
                  variant="text" 
                  endIcon={<ArrowRightAltIcon className="group-hover:translate-x-1 transition-transform" />}
                  className={`capitalize p-0 min-w-0 text-xs ${
                    isDarkMode 
                      ? "text-slate-400 hover:text-purple-400" 
                      : "text-slate-600 hover:text-purple-600"
                  }`}
                >
                  <a href={item.link} target="_blank" rel="noreferrer" className="text-inherit">
                    {item.button}
                  </a>
                </Button>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
