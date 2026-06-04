/* eslint-disable no-undef */
import { Button, TextField, Typography } from "@mui/material";
import React from "react";

interface ContactMeProps {
  isDarkMode: boolean;
}

function ContactMe({ isDarkMode }: ContactMeProps) {
  return (
    <section
      id="contact"
      className="w-full py-16 transition-colors duration-300 flex flex-col items-center"
    >
      <div className={`w-full max-w-2xl px-6 py-10 rounded-2xl border border-solid backdrop-blur-md shadow-xl relative overflow-hidden group ${
        isDarkMode ? "border-slate-800/80 bg-slate-900/10" : "border-slate-200 bg-white/60"
      }`}>
        {/* Glow decorative spot */}
        <div className="absolute top-[-50%] left-[-50%] w-96 h-96 rounded-full bg-purple-600/5 dark:bg-purple-600/10 blur-[100px] pointer-events-none" />
        
        <div className="text-center mb-8 relative z-10">
          <Typography 
            className={`font-bold mb-2 ${isDarkMode ? "text-white" : "text-slate-800"}`} 
            variant="h4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Hubungi Saya
          </Typography>
          <Typography className={`text-sm max-w-md mx-auto ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
            Ada ide proyek menarik atau ingin berdiskusi? Jangan ragu untuk mengirimkan pesan!
          </Typography>
        </div>

        <form className="w-full flex flex-col gap-5 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextField
              id="name"
              label="Nama Lengkap"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                className: isDarkMode ? "text-slate-500 font-medium text-sm" : "text-slate-400 font-medium text-sm",
              }}
              InputProps={{
                className: isDarkMode ? "text-white bg-slate-950/20 rounded-xl" : "text-slate-800 bg-slate-50/50 rounded-xl",
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)",
                    borderRadius: "12px",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(124, 58, 237, 0.4)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#7C3AED",
                  },
                },
              }}
            />
            <TextField
              id="email"
              label="Alamat Email"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                className: isDarkMode ? "text-slate-500 font-medium text-sm" : "text-slate-400 font-medium text-sm",
              }}
              InputProps={{
                className: isDarkMode ? "text-white bg-slate-950/20 rounded-xl" : "text-slate-800 bg-slate-50/50 rounded-xl",
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)",
                    borderRadius: "12px",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(124, 58, 237, 0.4)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#7C3AED",
                  },
                },
              }}
            />
          </div>

          <TextField
            id="message"
            label="Pesan Anda"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            InputLabelProps={{
              className: isDarkMode ? "text-slate-500 font-medium text-sm" : "text-slate-400 font-medium text-sm",
            }}
            InputProps={{
              className: isDarkMode ? "text-white bg-slate-950/20 rounded-xl" : "text-slate-800 bg-slate-50/50 rounded-xl",
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)",
                  borderRadius: "12px",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(124, 58, 237, 0.4)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#7C3AED",
                },
              },
            }}
          />

          <Button 
            fullWidth 
            variant="contained" 
            className={`normal-case font-bold py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white ${
              isDarkMode ? "btn-glow-violet" : "shadow-md"
            } transition-all duration-300 mt-2`}
            style={{ textTransform: "none" }}
          >
            Kirim Pesan
          </Button>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
