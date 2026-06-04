/* eslint-disable no-unused-vars, no-undef */
import * as React from "react";
import {
  Avatar,
  Button,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";

import { BentoTimeline, ContactForm, Intro, Skills } from "components/molecules";
import { CODECLAZZ, MICROGEN, STATS } from "assets/project";
import { CONTACT, PROJECT, SKILLS } from "assets/navigation";
import { DUMBWAYS } from "assets/project/dumbways";
import { GITHUB, GMAIL, LINKEDIN } from "assets/connect";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import id from "constan/id.json";

// Hook for scroll element visibility entrance animations
function useElementOnScreen() {
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return [containerRef, isVisible] as const;
}

function App() {
  // Theme state: defaults to dark mode
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(true);
  const [activeProjectIdx, setActiveProjectIdx] = React.useState<number>(0);

  // Scroll references
  const [heroRef, heroVisible] = useElementOnScreen();
  const [statsRef, statsVisible] = useElementOnScreen();
  const [timelineRef, timelineVisible] = useElementOnScreen();
  const [skillsRef, skillsVisible] = useElementOnScreen();
  const [servicesRef, servicesVisible] = useElementOnScreen();
  const [projectsRef, projectsVisible] = useElementOnScreen();
  const [contactRef, contactVisible] = useElementOnScreen();

  // Sync with html/body/root elements for Tailwind CSS dark: selectors
  React.useEffect(() => {
    const rootEl = document.getElementById("root");
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      if (rootEl) rootEl.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      if (rootEl) rootEl.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Dynamic Material UI theme
  const theme = React.useMemo(() => {
    return createTheme({
      palette: {
        mode: isDarkMode ? "dark" : "light",
        primary: {
          main: "#7C3AED", // Neon Violet
        },
        secondary: {
          main: "#06B6D4", // Electric Blue/Cyan
        },
        background: {
          default: isDarkMode ? "#0B0F19" : "#FAFAFA",
          paper: isDarkMode ? "#151B2C" : "#FFFFFF",
        },
        text: {
          primary: isDarkMode ? "#F3F4F6" : "#1F2626",
          secondary: isDarkMode ? "#9CA3AF" : "#64748B",
        },
      },
      typography: {
        fontFamily: "'Inter', sans-serif",
      },
    });
  }, [isDarkMode]);

  const stats = [
    { value: "5+", label: "Tahun Pengalaman", accent: isDarkMode ? "text-purple-400" : "text-purple-600" },
    { value: "20+", label: "Proyek Selesai", accent: isDarkMode ? "text-cyan-400" : "text-cyan-600" },
    { value: "100%", label: "Kepuasan Klien", accent: isDarkMode ? "text-green-400" : "text-green-600" },
    { value: "99.9%", label: "Uptime Aplikasi", accent: isDarkMode ? "text-rose-400" : "text-rose-600" }
  ];

  const services = [
    {
      title: "Frontend Development",
      desc: "Visual website modern responsif & interaktif menggunakan React, Next.js, dan Tailwind CSS.",
      icon: "💻"
    },
    {
      title: "Mobile App Development",
      desc: "Pembuatan aplikasi mobile cross-platform handal dengan React Native dan Flutter.",
      icon: "📱"
    },
    {
      title: "API & Backend Integration",
      desc: "Microservices backend cepat, secure, dan scalable dengan Go, Node.js, dan GraphQL.",
      icon: "⚙️"
    },
    {
      title: "Performance & SEO",
      desc: "Optimasi performa kecepatan, aksesibilitas, skor Lighthouse, serta SEO ranking teratas.",
      icon: "⚡"
    }
  ];

  const projects = [
    {
      image: "./images/heron_wms.png",
      title: "Heron WMS (Paragon)",
      thumb: (
        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-600 text-white font-extrabold text-xs rounded-xl shadow-inner select-none">
          HR
        </div>
      ),
      desc: "Warehouse Management System (WMS) internal untuk PT. Paragon Technology and Innovation. Mengelola manajemen stok, instant delivery routing, order tracking, inbound/outbound fulfillment, dan dashboard analytics pergudangan secara real-time.",
      link: "https://heron.paragon.co.id",
      stack: ["React.js", "Material UI", "Redux Toolkit", "RESTful APIs", "Lighthouse"],
    },
    {
      image: "./images/stats.png",
      title: "Stats.enablr.id",
      thumb: <STATS className="w-10 h-10 object-contain text-purple-600 dark:text-purple-400" />,
      desc: "Stats adalah tools riset pemasaran yang membantu Anda menganalisa pasar, kompetisi dan trend produk untuk memaksimalkan aktivitas penjualan online di marketplace terbesar di Indonesia.",
      link: "https://stats.enablr.id/",
      stack: ["Next.js", "Axios", "Tailwind", "Formik", "Highcharts"],
    },
    {
      image: "./images/62trade.png",
      title: "62Trade.com",
      thumb: (
        <img
          src="./images/logo_name.png"
          alt="62trade logo"
          className="w-12 h-6 object-contain"
        />
      ),
      desc: "62Trade.com connects global markets, delivering a simple import/export experience. The platform streamlines international trading, product matching, and cross-border buyer discovery.",
      link: "https://62trade.com/",
      stack: ["Next.js", "Axios", "SCSS", "Formik", "Redux"],
    },
    {
      image: "./images/codeclazz.png",
      title: "Codeclazz.com",
      thumb: <CODECLAZZ className="w-10 h-10 object-contain text-purple-600 dark:text-purple-400" />,
      desc: "Platform belajar coding secara hands-on interaktif dengan feedback real-time, sandbox editor, dan materi kurikulum komprehensif untuk developer pemula hingga intermediate.",
      link: "https://codeclazz.com/",
      stack: ["Next.js", "Apollo GraphQL", "Material UI", "Express", "Docker"],
    },
    {
      image: "./images/codeclazz.png",
      title: "Codeclazz Mobile",
      thumb: <CODECLAZZ className="w-10 h-10 object-contain text-purple-600 dark:text-purple-400" />,
      desc: "Aplikasi mobile Codeclazz untuk belajar programming secara portable. Menyediakan mini coding challenge, kuis teori interaktif, dan video tutorial offline.",
      link: "https://play.google.com/store/apps/details?id=com.codeclazz",
      stack: ["React Native", "Apollo GraphQL", "React Native Paper", "WebView"],
    },
    {
      image: "./images/microgen.png",
      title: "Microgen.id",
      thumb: <MICROGEN className="w-12 h-12 object-contain text-purple-600 dark:text-purple-400" />,
      desc: "Low-code microservices backend builder. Membantu developer membuat database relational, file storage, user authentication, dan deployment secara instan.",
      link: "https://microgen.id/",
      stack: ["Next.js", "Apollo GraphQL", "Material UI", "PostgreSQL", "Node.js"],
    },
  ];

  const connect = [
    {
      link: "mailto:aldikurniawan1606@gmail.com",
      component: <GMAIL className={`w-6 h-6 hover:text-purple-500 transition-colors ${isDarkMode ? 'text-slate-400 hover:text-purple-400' : 'text-slate-600'}`} />,
      name: "Gmail"
    },
    {
      link: "https://www.linkedin.com/in/aldi-kurniawan/",
      component: <LINKEDIN className={`w-6 h-6 hover:text-purple-500 transition-colors ${isDarkMode ? 'text-slate-400 hover:text-purple-400' : 'text-slate-600'}`} />,
      name: "LinkedIn"
    },
    {
      link: "https://github.com/kurniaaldi",
      component: <GITHUB className={`w-6 h-6 hover:text-purple-500 transition-colors ${isDarkMode ? 'text-slate-400 hover:text-purple-400' : 'text-slate-600'}`} />,
      name: "GitHub"
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={`w-full min-h-screen transition-colors duration-300 relative ${
        isDarkMode ? 'bg-[#0B0F19] text-[#F3F4F6] dark' : 'bg-[#FAFAFA] text-[#1F2626]'
      }`}>
        
        {/* SVG Grid Pattern Background */}
        <div className={`absolute inset-0 -z-10 h-full w-full bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_75%,transparent_100%)] pointer-events-none ${
          isDarkMode 
            ? 'bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)]' 
            : 'bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)]'
        }`} />

        {/* Sticky Glassmorphic Navbar */}
        <header className={`sticky top-0 z-50 w-full backdrop-blur-md border-b border-solid border-x-0 border-t-0 px-6 md:px-16 py-4 flex items-center justify-between transition-colors duration-300 ${
          isDarkMode ? 'border-slate-800/40 bg-[#0B0F19]/70' : 'border-slate-200/50 bg-white/70'
        }`}>
          <a href="#intro" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center text-white font-black text-sm tracking-tighter">
              AK
            </span>
            <span className={`font-extrabold text-lg tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Aldi<span className="text-purple-600">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#intro" className={`text-sm font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>Tentang</a>
            <a href="#skills" className={`text-sm font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>Keahlian</a>
            <a href="#services" className={`text-sm font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>Layanan</a>
            <a href="#project" className={`text-sm font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>Proyek</a>
            <a href="#contact" className={`text-sm font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>Kontak</a>
          </nav>

          {/* Controls Right */}
          <div className="flex items-center gap-4">
            {/* Theme mode toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-xl border border-solid hover:text-purple-600 transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-purple-400' 
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <LightModeIcon className="w-4 h-4" /> : <DarkModeIcon className="w-4 h-4" />}
            </button>

            {/* Resume button / CTA */}
            <a 
              href="#contact" 
              className="hidden sm:inline-flex text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl shadow-sm hover:shadow transition-all"
            >
              Hubungi
            </a>
          </div>
        </header>

        {/* Content Wrapper - Compacted spacing gap-16 pb-16 */}
        <main className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col gap-16 pb-16">
          
          {/* 1. Hero Section */}
          <div ref={heroRef} className="animate-load">
            <Intro isDarkMode={isDarkMode} />
          </div>

          {/* 2. Stats Milestones Grid */}
          <div 
            ref={statsRef} 
            className={`w-full transition-all duration-700 ${
              statsVisible ? "animate-slide-up-fade" : "opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((item, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl border border-solid backdrop-blur-md text-center hover:scale-[1.02] transition-transform duration-300 ${
                    isDarkMode ? 'border-slate-800/40 bg-[#151B2C]/20' : 'border-slate-200/60 bg-white/50'
                  }`}
                >
                  <Typography 
                    variant="h3" 
                    className={`font-black tracking-tight ${item.accent} mb-1`}
                    style={{ fontSize: "2rem" }}
                  >
                    {item.value}
                  </Typography>
                  <Typography className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
                    {item.label}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          
          {/* 3. Bento Grid Timeline Section */}
          <div 
            ref={timelineRef} 
            className={`transition-all duration-700 delay-100 ${
              timelineVisible ? "animate-slide-up-fade" : "opacity-0"
            }`}
          >
            <BentoTimeline isDarkMode={isDarkMode} />
          </div>
          
          {/* 4. Skills Matrix Section */}
          <div 
            ref={skillsRef} 
            className={`transition-all duration-700 ${
              skillsVisible ? "animate-slide-up-fade" : "opacity-0"
            }`}
          >
            <Skills />
          </div>

          {/* 5. Services Grid Section */}
          <section 
            id="services" 
            ref={servicesRef} 
            className={`w-full py-8 transition-all duration-700 ${
              servicesVisible ? "animate-slide-up-fade" : "opacity-0"
            }`}
          >
            <div className="flex flex-col gap-3 mb-10 text-center md:text-left">
              <Typography 
                variant="h3" 
                className={`font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                style={{ fontSize: "2.25rem" }}
              >
                Layanan & Keahlian
              </Typography>
              <Typography className="text-slate-500 dark:text-slate-400 max-w-xl">
                Solusi teknologi berkualitas tinggi yang saya tawarkan untuk membantu merealisasikan visi digital Anda.
              </Typography>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((svc, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl border border-solid backdrop-blur-md transition-all duration-300 hover:translate-y-[-2px] group relative overflow-hidden flex flex-col justify-between ${
                    isDarkMode ? 'border-slate-800/40 bg-[#151B2C]/20' : 'border-slate-200/60 bg-white/50'
                  }`}
                >
                  <div className="absolute top-[-20%] right-[-20%] w-24 h-24 rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-2xl group-hover:scale-110 transition-transform duration-500" />
                  
                  <div>
                    <div className={`text-2xl mb-4 p-2.5 rounded-xl max-w-max border border-solid ${
                      isDarkMode ? 'bg-slate-800 border-slate-700/50' : 'bg-slate-100 border-slate-200'
                    }`}>
                      {svc.icon}
                    </div>
                    <Typography 
                      variant="h5" 
                      className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}
                      style={{ fontSize: "1.1rem" }}
                    >
                      {svc.title}
                    </Typography>
                    <Typography className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                      {svc.desc}
                    </Typography>
                  </div>
                  
                  <div className={`mt-6 pt-4 border-t border-solid border-x-0 border-b-0 text-right ${
                    isDarkMode ? 'border-slate-800/60' : 'border-slate-100'
                  }`}>
                    <span className="text-[10px] text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">
                      Professional
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Projects Gallery Section */}
          <div 
            ref={projectsRef} 
            className={`transition-all duration-700 ${
              projectsVisible ? "animate-slide-up-fade" : "opacity-0"
            }`}
          >
            <section id="project" className="w-full py-8 transition-colors duration-300">
              <div className="flex flex-col gap-3 mb-10 text-center md:text-left">
                <Typography 
                  variant="h3" 
                  className={`font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                  style={{ fontSize: "2.25rem" }}
                >
                  Gallery Showcase
                </Typography>
                <Typography className="text-slate-500 dark:text-slate-400 max-w-xl">
                  Studi kasus terpilih dari produk digital yang telah saya kembangkan dari konsep awal hingga siap rilis.
                </Typography>
              </div>

              {/* Layout Wrapper: Tab switcher + browser preview */}
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                
                {/* Left Side: Modern Asymmetrical Project List Selector */}
                <div className="w-full lg:w-1/3 flex flex-col gap-3">
                  {projects.map((proj, idx) => {
                    const isActive = activeProjectIdx === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveProjectIdx(idx)}
                        className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border border-solid flex items-center gap-4 ${
                          isActive
                            ? isDarkMode ? "bg-purple-950/20 border-purple-500/50 shadow-md scale-[1.01]" : "bg-white border-purple-500/50 shadow-md scale-[1.01]"
                            : isDarkMode ? "bg-transparent border-slate-800/40 hover:bg-slate-900/20 hover:border-slate-800" : "bg-transparent border-slate-200/60 hover:bg-white/40 hover:border-slate-300"
                        }`}
                      >
                        <div className={`p-2 rounded-xl border border-solid transition-all ${
                          isActive 
                            ? isDarkMode ? "bg-purple-900/30 border-purple-800/50 scale-105" : "bg-purple-100 border-purple-200 scale-105"
                            : isDarkMode ? "bg-slate-800/80 border-slate-700/60" : "bg-slate-100 border-slate-200"
                        }`}>
                          {proj.thumb}
                        </div>
                        <div className="flex-grow min-w-0">
                          <Typography 
                            variant="body1" 
                            className={`font-bold tracking-tight ${
                              isActive ? "text-purple-600 dark:text-purple-400" : isDarkMode ? "text-slate-300" : "text-slate-700"
                            }`}
                          >
                            {proj.title}
                          </Typography>
                          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold tracking-wider">
                            {proj.stack[0]} &bull; {proj.stack[1]}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Right Side: High-fidelity interactive Browser Mockup */}
                <div className="w-full lg:w-2/3">
                  <div className="relative w-full group/mockup transition-all duration-500 hover:translate-y-[-2px]">
                    
                    {/* Neon Glow backdrop shadow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl blur-3xl opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Browser Window Wrapper */}
                    <div className={`relative rounded-2xl border border-solid shadow-2xl overflow-hidden ${
                      isDarkMode ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200 bg-white'
                    }`}>
                      
                      {/* Header bar */}
                      <div className={`flex items-center justify-between px-4 py-3.5 border-b border-solid ${
                        isDarkMode ? 'bg-slate-900/70 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                      }`}>
                        {/* Red, Yellow, Green mock controls */}
                        <div className="flex items-center gap-1.5 w-16">
                          <span className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/80" />
                          <span className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/80" />
                          <span className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/80" />
                        </div>
                        
                        {/* URL bar */}
                        <div className={`flex-grow max-w-sm md:max-w-md px-4 py-1.5 border border-solid rounded-xl text-center text-[10px] font-mono tracking-wide select-none truncate ${
                          isDarkMode ? 'bg-slate-950/60 border-slate-800/80 text-slate-500' : 'bg-slate-100 border-slate-200/80 text-slate-400'
                        }`}>
                          {projects[activeProjectIdx].link}
                        </div>
                        
                        {/* Layout spacing balancer */}
                        <div className="w-16 flex justify-end gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                        </div>
                      </div>

                      {/* Screenshot Frame Area */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                        <img
                          src={projects[activeProjectIdx].image}
                          alt={projects[activeProjectIdx].title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/mockup:scale-[1.01]"
                        />
                        
                        {/* Bottom dark shadow gradient mask */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 pointer-events-none" />

                        {/* Floating Micro-interaction Information Overlay */}
                        <div className={`absolute bottom-6 left-6 right-6 p-5 rounded-2xl border border-solid backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-[fade-in_0.5s_ease-out] ${
                          isDarkMode ? 'bg-slate-950/90 border-slate-800/70 text-white' : 'bg-white/95 border-slate-200/60 text-slate-800'
                        }`}>
                          
                          <div className="flex-grow max-w-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Typography className={`font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-800'}`} variant="h6">
                                {projects[activeProjectIdx].title}
                              </Typography>
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                              <span className="text-[10px] text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">
                                Live
                              </span>
                            </div>
                            <Typography className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                              {projects[activeProjectIdx].desc}
                            </Typography>
                            
                            <div className="flex flex-wrap gap-1.5 mt-3">
                              {projects[activeProjectIdx].stack.map((stack) => (
                                <Chip
                                  key={stack}
                                  label={stack}
                                  size="small"
                                  className="text-[9px] bg-slate-100 text-slate-600 dark:bg-purple-900/30 dark:text-purple-300 font-semibold"
                                />
                              ))}
                            </div>
                          </div>

                          <div className="flex-shrink-0 w-full md:w-auto self-end md:self-center">
                            <Button
                              variant="contained"
                              endIcon={<ArrowRightAltIcon />}
                              className={`normal-case font-bold w-full md:w-auto px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white ${
                                isDarkMode ? "btn-glow-violet" : "shadow-sm"
                              }`}
                              style={{ textTransform: "none" }}
                            >
                              <a
                                href={projects[activeProjectIdx].link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-white"
                              >
                                Kunjungi
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* 7. Contact Section */}
          <div 
            ref={contactRef} 
            className={`transition-all duration-700 ${
              contactVisible ? "animate-slide-up-fade" : "opacity-0"
            }`}
          >
            <ContactForm isDarkMode={isDarkMode} />
          </div>
        </main>

        {/* Premium Minimalist Footer */}
        <footer
          id="footer"
          className={`w-full border-t border-solid border-x-0 border-b-0 transition-colors duration-300 ${
            isDarkMode ? 'border-slate-800/80 bg-[#080C14]' : 'border-slate-200 bg-white'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-purple-600 flex items-center justify-center text-white font-black text-xs tracking-tighter">
                  AK
                </span>
                <Typography className={`font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`} variant="body1">
                  Aldi Kurniawan<span className="text-purple-600">.</span>
                </Typography>
              </div>
              <Typography className="text-slate-400 dark:text-slate-500 text-xs text-center md:text-left">
                &copy; {new Date().getFullYear()} Aldi Kurniawan. All rights reserved.
              </Typography>
            </div>

            {/* Glowing social icons */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <Typography className="font-bold text-xs text-slate-400 dark:text-slate-500 tracking-wider uppercase">
                Connect To Me
              </Typography>
              <div className="flex items-center gap-4">
                {connect.map((item: any) => {
                  return (
                    <a
                      key={item.link}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2.5 rounded-xl border border-solid hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(124,58,237,0.25)] hover:scale-105 transition-all duration-300 flex items-center justify-center ${
                        isDarkMode ? 'border-slate-800/80 bg-slate-950/30' : 'border-slate-200 bg-slate-50/50'
                      }`}
                      title={item.name}
                    >
                      {item.component}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
