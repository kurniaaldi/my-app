/* eslint-disable no-undef */
import { Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import id from "constan/id.json";

interface IntroProps {
  isDarkMode: boolean;
}

function Intro({ isDarkMode }: IntroProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      id="intro"
      container
      spacing={isMobile ? 4 : 8}
      direction={isMobile ? "column-reverse" : "row"}
      alignItems="center"
      className="py-16 md:py-24 min-h-[80vh] flex items-center"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Left side: Typography & CTA */}
      <Grid item xs={12} md={6} className="w-full">
        <div className="w-full flex items-start justify-center flex-col gap-6 text-left relative z-10">
          {/* Subtle colored tag */}
          <div 
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-solid font-semibold text-xs tracking-wider uppercase mb-2 ${
              isDarkMode 
                ? "bg-purple-500/10 border-purple-500/20 text-purple-400" 
                : "bg-purple-100 border-purple-200 text-purple-700"
            }`}
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className={`w-2 h-2 rounded-full animate-pulse ${
              isDarkMode ? "bg-purple-400" : "bg-purple-600"
            }`}></span>
            Available For Hire
          </div>

          <Typography 
            className={`font-medium tracking-wide uppercase text-sm md:text-base ${
              isDarkMode ? "text-slate-400" : "text-slate-500"
            }`}
            variant="h6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Frontend Developer
          </Typography>

          <Typography 
            className={`font-extrabold tracking-tight leading-none ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
            variant="h2"
            style={{ 
              fontSize: isMobile ? "2.75rem" : "4.5rem",
              fontFamily: "'Outfit', sans-serif" 
            }}
          >
            Aldi Kurniawan
          </Typography>

          <Typography 
            className={`text-base md:text-lg leading-relaxed max-w-xl font-normal ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}
            paragraph
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {id.profile}
          </Typography>

          <div className="mt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button 
              variant="contained" 
              className={`normal-case font-bold py-3 px-8 rounded-xl bg-purple-600 hover:bg-purple-700 text-white ${
                isDarkMode ? "btn-glow-violet" : "shadow-md hover:shadow-lg"
              } transition-all duration-300`}
              style={{ textTransform: "none", fontFamily: "'Outfit', sans-serif" }}
            >
              <a href="#contact" className="text-white w-full h-full flex items-center justify-center">
                {id.hubungi}
              </a>
            </Button>
            
            <Button 
              variant="outlined" 
              className={`normal-case font-semibold py-3 px-8 rounded-xl transition-all duration-300 ${
                isDarkMode 
                  ? "border-slate-700 hover:border-purple-400 text-slate-300 hover:text-purple-400" 
                  : "border-slate-300 hover:border-purple-500 text-slate-700 hover:text-purple-600"
              }`}
              style={{ textTransform: "none", fontFamily: "'Outfit', sans-serif" }}
            >
              <a href="#project" className="text-inherit w-full h-full flex items-center justify-center">
                Lihat Proyek
              </a>
            </Button>
          </div>
        </div>
      </Grid>

      {/* Right side: High-Tech 3D Abstract Glassmorphic Shape */}
      <Grid item xs={12} md={6} className="w-full flex justify-center items-center">
        <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center select-none">
          {/* Outer rotating neon glow background ring */}
          <div className={`absolute w-[80%] h-[80%] rounded-full border border-dashed animate-[spin_40s_linear_infinite] ${
            isDarkMode ? "border-purple-500/20" : "border-purple-500/30"
          }`} />
          <div className={`absolute w-[60%] h-[60%] rounded-full border border-solid animate-[spin_25s_linear_infinite_reverse] ${
            isDarkMode ? "border-cyan-500/10" : "border-cyan-500/20"
          }`} />
          
          {/* Subtle colored spot glows behind the 3D shape */}
          <div className={`absolute w-64 h-64 rounded-full blur-[80px] top-[10%] left-[10%] animate-[pulse_6s_ease-in-out_infinite] ${
            isDarkMode ? "bg-purple-600/30" : "bg-purple-600/20"
          }`} />
          <div className={`absolute w-64 h-64 rounded-full blur-[80px] bottom-[10%] right-[10%] ${
            isDarkMode ? "bg-cyan-600/20" : "bg-cyan-600/10"
          }`} />

          {/* Glassmorphism Abstract Floating Card / Ring behind shape */}
          <div className={`absolute p-6 rounded-2xl border border-solid backdrop-blur-md w-[85%] h-[85%] shadow-2xl rotate-3 -translate-y-2 hover:rotate-6 transition-transform duration-700 pointer-events-none ${
            isDarkMode ? "bg-white/5 border-white/5" : "bg-black/5 border-black/5"
          }`} />

          {/* Render profile image with custom layering & blend modes to remove/play with the white background */}
          <figure className="w-[85%] m-0 z-10 transition-all duration-700 hover:scale-105 hover:rotate-[-2deg] cursor-pointer drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center">
            <img
              src="./images/profile_new.jpg"
              alt="Aldi Kurniawan"
              className={`w-full h-auto object-contain rounded-2xl transition-all duration-700 ${
                isDarkMode 
                  ? "invert mix-blend-screen opacity-90 filter drop-shadow-[0_0_25px_rgba(124,58,237,0.4)]" 
                  : "mix-blend-multiply opacity-95"
              }`}
            />
          </figure>

          {/* Floating badge 1 */}
          <div 
            className={`absolute top-[20%] right-[-5%] px-4 py-2 rounded-xl border border-solid backdrop-blur-md shadow-lg flex items-center gap-2 z-20 animate-[bounce_4s_ease-in-out_infinite] ${
              isDarkMode ? "bg-slate-900/80 border-slate-800 text-slate-300" : "bg-white/80 border-slate-200 text-slate-700"
            }`}
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            <span className="text-xs font-semibold">Fast UI/UX</span>
          </div>

          {/* Floating badge 2 */}
          <div 
            className={`absolute bottom-[20%] left-[-5%] px-4 py-2 rounded-xl border border-solid backdrop-blur-md shadow-lg flex items-center gap-2 z-20 animate-[bounce_5s_ease-in-out_infinite_1s] ${
              isDarkMode ? "bg-slate-900/80 border-slate-800 text-slate-300" : "bg-white/80 border-slate-200 text-slate-700"
            }`}
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="text-xs font-semibold">⚡ React & Next.js</span>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Intro;
