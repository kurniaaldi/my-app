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

  // Render logo or beautiful letter badge fallback
  const renderLogo = (imgUrl: string, name: string) => {
    if (imgUrl && imgUrl.trim() !== "") {
      return (
        <img 
          src={imgUrl} 
          alt={name} 
          className="w-full h-full object-contain rounded-xl"
        />
      );
    }
    
    // Clean company initials
    const cleanName = name.replace("PT.", "").replace(".id", "").trim();
    const initials = cleanName
      .split(" ")
      .map((n: string) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-cyan-500 text-white font-extrabold text-sm rounded-xl select-none shadow-inner">
        {initials}
      </div>
    );
  };

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
          isDarkMode ? "glow-border-violet" : "light-mode-card bg-white"
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
                {renderLogo(currentJob.img, currentJob.company || "PT. Paragon Technology and Innovation")}
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
                  @ {currentJob.company || "PT. Paragon Technology and Innovation"}
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
              Frontend Engineer
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
          const isEnablr = item.link.includes("enablr");
          const hoverClass = isEnablr ? "glow-border-cyan" : "glow-border-violet";
          
          return (
            <div 
              key={index} 
              className={`p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between group hover:translate-y-[-2px] relative overflow-hidden ${
                isDarkMode ? `${hoverClass} bg-[#151B2C]/30` : "light-mode-card bg-white"
              }`}
            >
              <div className="absolute top-[-10%] right-[-10%] w-32 h-32 rounded-full bg-slate-500/5 dark:bg-slate-500/10 blur-[40px] pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-1.5 rounded-xl border border-solid w-12 h-12 flex items-center justify-center overflow-hidden ${
                    isDarkMode ? "bg-slate-800/80 border-slate-700/40" : "bg-slate-100 border-slate-200"
                  }`}>
                    {renderLogo(item.img, item.company)}
                  </div>
                  <Chip 
                    label={index === 0 ? "2022 - 2025" : index === 1 ? "2021 - 2022" : index === 2 ? "2020 - 2021" : "BOOTCAMP"} 
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
                  isDarkMode ? "text-purple-400" : "text-slate-400"
                }`}>
                  @ {item.company}
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
                  Software & Frontend Dev
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

        {/* Education & Certifications Card */}
        <div className={`p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between group hover:translate-y-[-2px] relative overflow-hidden ${
          isDarkMode ? "glow-border-violet bg-[#151B2C]/30" : "light-mode-card bg-white"
        }`}>
          <div className="absolute top-[-10%] right-[-10%] w-32 h-32 rounded-full bg-slate-500/5 dark:bg-slate-500/10 blur-[40px] pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2.5 rounded-xl border border-solid text-xl ${
                isDarkMode ? "bg-slate-800/80 border-slate-700/40 text-purple-400" : "bg-slate-100 border-slate-200 text-purple-600"
              }`}>
                🎓
              </div>
              <Chip 
                label="EDUCATION" 
                size="small"
                className={`text-[9px] font-medium ${
                  isDarkMode ? "bg-slate-800/50 text-slate-400" : "bg-slate-100 text-slate-600"
                }`}
              />
            </div>

            <Typography 
              variant="h5" 
              className={`font-bold mb-3 ${isDarkMode ? "text-white" : "text-slate-800"}`}
              style={{ fontSize: "1.1rem" }}
            >
              Pendidikan & Sertifikasi
            </Typography>

            <div className="flex flex-col gap-4">
              {id.education.map((edu: any, index: number) => (
                <div key={index} className="flex flex-col gap-0.5">
                  <Typography className={`text-xs font-bold ${isDarkMode ? "text-slate-300" : "text-slate-800"}`}>
                    {edu.institution}
                  </Typography>
                  <Typography className={`text-[11px] font-semibold ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}>
                    {edu.degree} &bull; {edu.period}
                  </Typography>
                  <Typography className={`text-[10px] ${isDarkMode ? "text-slate-400" : "text-slate-550"}`}>
                    {edu.desc}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          <div className={`pt-4 border-t border-solid border-x-0 border-b-0 flex items-center justify-between ${
            isDarkMode ? "border-slate-800/60" : "border-slate-100"
          }`}>
            <span className={`text-[10px] font-medium ${
              isDarkMode ? "text-slate-500" : "text-slate-400"
            }`}>
              Universitas & Bootcamp
            </span>
          </div>
        </div>

        {/* Previous Non-IT/Tech Experiences Card - Spans 3 Columns */}
        <div className={`md:col-span-3 p-6 rounded-2xl transition-all duration-300 group hover:translate-y-[-2px] relative overflow-hidden ${
          isDarkMode ? "glow-border-cyan bg-[#151B2C]/20" : "light-mode-card bg-white"
        }`}>
          <div className="absolute top-[-20%] right-[-20%] w-60 h-60 rounded-full bg-cyan-600/5 dark:bg-cyan-600/10 blur-[80px] pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 pb-4 border-b border-solid border-x-0 border-t-0 border-slate-100 dark:border-slate-800/60">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl border border-solid text-xl ${
                isDarkMode ? "bg-slate-800/80 border-slate-700/40 text-cyan-400" : "bg-slate-100 border-slate-200 text-cyan-600"
              }`}>
                🛠️
              </div>
              <div>
                <Typography 
                  variant="h5" 
                  className={`font-bold ${isDarkMode ? "text-white" : "text-slate-800"}`}
                  style={{ fontSize: "1.1rem" }}
                >
                  Pengalaman Teknis & Industri Lainnya
                </Typography>
                <Typography className={`text-[11px] ${isDarkMode ? "text-slate-450 text-slate-400" : "text-slate-500"}`}>
                  Latar belakang pekerjaan teknis sebelum fokus sepenuhnya sebagai Software Engineer.
                </Typography>
              </div>
            </div>
            <Chip 
              label="BACKGROUND" 
              size="small"
              className={`text-[9px] font-medium mt-2 md:mt-0 ${
                isDarkMode ? "bg-slate-800/50 text-slate-400" : "bg-slate-100 text-slate-600"
              }`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {id.previousTechnical.map((item: any, index: number) => (
              <div key={index} className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <Typography className={`text-xs font-bold ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
                    {item.role}
                  </Typography>
                  <span className={`text-[10px] font-bold ${isDarkMode ? "text-cyan-400" : "text-cyan-600"}`}>
                    {item.period}
                  </span>
                </div>
                <Typography className={`text-[10px] font-medium ${isDarkMode ? "text-slate-450 text-slate-400" : "text-slate-500"}`}>
                  {item.company}
                </Typography>
                <Typography className={`text-[11px] leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                  {item.desc}
                </Typography>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
