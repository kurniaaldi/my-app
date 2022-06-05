import * as React from "react";
import { Button, Grid, Typography } from "@mui/material";

import { CODECLAZZ, MICROGEN, SIXTWOTRADE, STATS } from "assets/project";
import { Intro, Skills } from "components/molecules";
import {
  KeenSliderInstance,
  KeenSliderPlugin,
  useKeenSlider,
} from "keen-slider/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "components/atoms/nav-bar";

function ThumbnailPlugin(
  mainRef: React.MutableRefObject<KeenSliderInstance | null>,
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main: any) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(next);
      });
    });
  };
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#5222D0",
    },
    secondary: {
      main: "#f44336",
    },
  },
});
function App() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)],
  );

  const project = [
    {
      image: "./images/stats.png",
      title: "Stats.enablr.id",
      thumb: <STATS className="w-24 h-auto" />,
      desc: "Stats adalah tools riset pemasaran yang membantu Anda menganalisa pasar, kompetisi dan trend produk untuk memaksimalkan aktivitas penjualan online di marketplace terbesar di Indonesia.",
    },
    {
      image: "./images/62trade.png",
      title: "62Trade.com",
      thumb: <img src="./images/logo_name.png" className="w-30 h-auto" />,
      desc: "Stats adalah tools riset pemasaran yang membantu Anda menganalisa pasar, kompetisi dan trend produk untuk memaksimalkan aktivitas penjualan online di marketplace terbesar di Indonesia.",
    },
    {
      image: "./images/codeclazz.png",
      title: "Codeclazz.com",
      thumb: <CODECLAZZ className="w-20 h-20" />,
      desc: "Stats adalah tools riset pemasaran yang membantu Anda menganalisa pasar, kompetisi dan trend produk untuk memaksimalkan aktivitas penjualan online di marketplace terbesar di Indonesia.",
    },
    {
      image: "./images/codeclazz.png",
      title: "Codeclazz Mobile",
      thumb: <CODECLAZZ className="w-20 h-20" />,
      desc: "Stats adalah tools riset pemasaran yang membantu Anda menganalisa pasar, kompetisi dan trend produk untuk memaksimalkan aktivitas penjualan online di marketplace terbesar di Indonesia.",
    },
    {
      image: "./images/microgen.png",
      title: "Microgen.com",
      thumb: <MICROGEN className="w-28 h-auto" />,
      desc: "Stats adalah tools riset pemasaran yang membantu Anda menganalisa pasar, kompetisi dan trend produk untuk memaksimalkan aktivitas penjualan online di marketplace terbesar di Indonesia.",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="w-full h-full">
        <Navbar />
        <main className="px-40 w-full space-y-10">
          <Intro />
          {/* <div className="w-full h-fit flex items-start justify-start flex-col">
            <Typography>About me</Typography>
          </div> */}
          <Skills />
          <div className="w-full h-screen flex items-start justify-start flex-col">
            <Typography className="my-8 font-bold" variant="h5">
              Project
            </Typography>
            <div className="w-full">
              <div ref={sliderRef} className="keen-slider">
                {project.map((item: any, index) => {
                  return (
                    <div
                      key={index}
                      className="keen-slider__slide number-slide1 h-80 flex items-center justify-center rounded bg-background-dark"
                    >
                      <div className="w-full h-full px-20 py-4 flex items-center justify-around">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-auto h-[19rem] object-contain rounded border border-primary"
                        />
                        <div className="flex items-start justify-center gap-2 flex-col max-w-[20rem]">
                          <Typography
                            className="font-bold text-primary"
                            variant="h5"
                          >
                            {item.title}
                          </Typography>

                          <Typography className="text-[#fff]" paragraph>
                            {item.desc}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div ref={thumbnailRef} className="keen-slider thumbnail">
                {project.map((item: any, index) => {
                  return (
                    <div
                      key={index}
                      className="keen-slider__slide number-slide1 flex items-center justify-center border border-solid borderpr rounded"
                    >
                      {item.thumb}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
