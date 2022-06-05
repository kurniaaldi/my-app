/* eslint-disable no-unused-vars */
import * as React from "react";
import { Chip, Typography } from "@mui/material";

import { CODECLAZZ, MICROGEN, STATS } from "assets/project";
import { GITHUB, GMAIL, LINKEDIN } from "assets/connect";
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
      stack: ["Next.Js", "Axios", "Tailwind", "formik", "etc."],
    },
    {
      image: "./images/62trade.png",
      title: "62Trade.com",
      thumb: <img src="./images/logo_name.png" className="w-30 h-auto" />,
      desc: "62Trade.com is ready to take important role to connect market from all around the world. We will take you to experience a simple way of importing and exporting your products. If you are thinking of selling and buying products, our platform can be a media to present the products that might suitable for your needs.",
      stack: ["Next.Js", "Axios", "Scss", "formik", "etc."],
    },
    {
      image: "./images/codeclazz.png",
      title: "Codeclazz.com",
      thumb: <CODECLAZZ className="w-20 h-20" />,
      desc: "Platform Belajar Coding secara Hands On.",
      stack: ["Next.Js", "Axios", "Apollo Graphql", "Material UI", "etc."],
    },
    {
      image: "./images/codeclazz.png",
      title: "Codeclazz Mobile",
      thumb: <CODECLAZZ className="w-20 h-20" />,
      desc: "Platform Belajar Coding secara Hands On.",
      stack: [
        "React Native",
        "Apollo Graphql",
        "React Native Paper",
        "webview",
        "etc",
      ],
    },
    {
      image: "./images/microgen.png",
      title: "Microgen.com",
      thumb: <MICROGEN className="w-28 h-auto" />,
      desc: "Low Code Microservices Backend. Create Scalable App Faster!.",
      stack: ["Next.Js", "Axios", "Apollo Graphql", "Material UI", "etc."],
    },
  ];

  const connect = [
    {
      link: "aldikurniawan1606@gmail.com",
      component: <GMAIL className="w-10 h-auto" />,
    },
    {
      link: "https://www.linkedin.com/in/aldi-kurniawan/",
      component: <LINKEDIN className="w-10 h-auto" />,
    },
    {
      link: "https://github.com/kurniaaldi",
      component: <GITHUB className="w-10 h-auto" />,
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
                        <div className="flex items-start justify-center gap-2 flex-col max-w-[25rem]">
                          <Typography
                            className="font-bold text-primary"
                            variant="h5"
                          >
                            {item.title}
                          </Typography>
                          <div className="flex flex-wrap gap-2">
                            {item.stack.map((stack: any) => {
                              return (
                                <Chip
                                  key={stack}
                                  label={stack}
                                  className="text-text bg-background-light"
                                />
                              );
                            })}
                          </div>

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
        <footer className="w-full h-full min-h-[10rem] flex items-center justify-center flex-col gap-4">
          <Typography className="font-bold text-primary" variant="h5">
            Connect To Me
          </Typography>
          <div className="flex items-center justify-center gap-8">
            {connect.map((item: any) => {
              return (
                <a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="no noreferrer"
                >
                  {item.component}
                </a>
              );
            })}
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
