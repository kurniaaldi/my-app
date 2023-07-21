/* eslint-disable no-unused-vars */
import * as React from "react";
import {
  Avatar,
  Button,
  Chip,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import { CODECLAZZ, MICROGEN, STATS } from "assets/project";
import { CONTACT, PROJECT, SKILLS } from "assets/navigation";
import { ContactForm, Intro, Skills } from "components/molecules";
import { DUMBWAYS } from "assets/project/dumbways";
import { GITHUB, GMAIL, LINKEDIN } from "assets/connect";
import {
  KeenSliderInstance,
  KeenSliderPlugin,
  useKeenSlider,
} from "keen-slider/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CssBaseline from "@mui/material/CssBaseline";
import id from "constan/id.json";

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
      thumb: <STATS className="w-24 h-24 mobile:h-auto mobile:w-10" />,
      desc: "Stats adalah tools riset pemasaran yang membantu Anda menganalisa pasar, kompetisi dan trend produk untuk memaksimalkan aktivitas penjualan online di marketplace terbesar di Indonesia.",
      link: "https://stats.enablr.id/",
      stack: ["Next.Js", "Axios", "Tailwind", "formik", "etc."],
    },
    {
      image: "./images/62trade.png",
      title: "62Trade.com",
      thumb: (
        <img
          src="./images/logo_name.png"
          className="w-30 h-30 mobile:h-auto mobile:w-10"
        />
      ),
      desc: "62Trade.com is ready to take important role to connect market from all around the world. We will take you to experience a simple way of importing and exporting your products. If you are thinking of selling and buying products, our platform can be a media to present the products that might suitable for your needs.",
      link: "https://62trade.com/",
      stack: ["Next.Js", "Axios", "Scss", "formik", "etc."],
    },
    {
      image: "./images/codeclazz.png",
      title: "Codeclazz.com",
      thumb: <CODECLAZZ className="w-20 h-20 mobile:h-auto mobile:w-10" />,
      desc: "Platform Belajar Coding secara Hands On.",
      link: "https://codeclazz.com/",
      stack: ["Next.Js", "Axios", "Apollo Graphql", "Material UI", "etc."],
    },
    {
      image: "./images/codeclazz.png",
      title: "Codeclazz Mobile",
      thumb: <CODECLAZZ className="w-20 h-20 mobile:h-auto mobile:w-10" />,
      desc: "Platform Belajar Coding secara Hands On.",
      link: "https://play.google.com/store/apps/details?id=com.codeclazz",
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
      thumb: <MICROGEN className="w-28 h-28 mobile:h-auto mobile:w-10" />,
      desc: "Low Code Microservices Backend. Create Scalable App Faster!.",
      link: "https://microgen.id/",
      stack: ["Next.Js", "Axios", "Apollo Graphql", "Material UI", "etc."],
    },
  ];

  const connect = [
    {
      link: "mailto:aldikurniawan1606@gmail.com",
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
      <div className="w-full h-full bg-background-light max-w-screen-2xl mx-auto relative">
        {/* <Navbar /> */}
        {/* <nav className="fixed top-10 left-10 flex flex-col items-center justify-center gap-4">
          <IconButton aria-label="delete" size="large">
            <a href="#intro">
              <Avatar className="bg-background-dark">AK</Avatar>
            </a>
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <a href="#skills">
              <Avatar>
                <SKILLS />
              </Avatar>
            </a>
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <a href="#project">
              <Avatar>
                <PROJECT />
              </Avatar>
            </a>
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <a href="#contact">
              <Avatar>
                <CONTACT />
              </Avatar>
            </a>
          </IconButton>
        </nav> */}
        <main className="lg:px-60 mobile:px-6 sm:px-12 w-full space-y-16">
          <Intro />
          <section className="w-full mobile:h-full sm:h-full flex items-start justify-start flex-col space-y-4">
            <div className="flex items-center justify-center w-full">
              <Typography variant="h3">{id.iDoNow.title}</Typography>
            </div>
            {id.iDoNow.child.map((item: any) => {
              return (
                <>
                  <div>
                    <img src={item.img} alt="enablr.id" className="w-40 h-40" />
                  </div>
                  <Typography variant="h4">{item.role}</Typography>

                  <Typography>{item.desc}</Typography>
                  <Button variant="outlined" endIcon={<ArrowRightAltIcon />}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.button}
                    </a>
                  </Button>
                </>
              );
            })}
          </section>
          <section className="w-full mobile:h-full sm:h-full flex items-start justify-start flex-col space-y-8">
            <div className="flex items-center justify-center w-full">
              <Typography variant="h3">{id.before.title}</Typography>
            </div>
            {id.before.child.map((item: any, index: number) => {
              return (
                <div key={index} className="space-y-4">
                  <div>
                    <img src={item.img} alt="enablr.id" className="w-40 h-40" />
                  </div>
                  <Typography variant="h4">{item.role}</Typography>
                  <Typography variant="h4">{item.title}</Typography>
                  <Typography>{item.desc}</Typography>
                  <Button variant="outlined" endIcon={<ArrowRightAltIcon />}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.button}
                    </a>
                  </Button>
                </div>
              );
            })}
          </section>
          <Skills />
          <section
            id="project"
            className="w-full mobile:h-full sm:h-full flex items-start justify-start flex-col"
          >
            <Typography className="my-8 font-bold" variant="h5">
              Project
            </Typography>
            <Typography className="mb-8">{id.project}</Typography>
            <div className="w-full">
              <div ref={sliderRef} className="keen-slider">
                {project.map((item: any, index) => {
                  return (
                    <div
                      key={index}
                      className="keen-slider__slide number-slide1 min-h-80 h-auto mobile:min-h-full flex items-center justify-center rounded"
                    >
                      <div className="w-full h-full px-20 py-4 flex lg:items-center justify-around lg:flex-row mobile:flex-col sm:flex-col mobile:px-4 gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-auto h-[19rem] mobile:h-[10rem] object-contain rounded border border-primary"
                        />
                        <div className="h-full flex items-start lg:justify-center gap-2 flex-col max-w-[25rem] mobile:max-w-none">
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
                                  className="text-[#fff] bg-primary"
                                />
                              );
                            })}
                          </div>

                          <Typography className="text-text" paragraph>
                            {item.desc}
                          </Typography>
                          <Button
                            variant="outlined"
                            endIcon={<ArrowRightAltIcon />}
                          >
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Kunjungi
                            </a>
                          </Button>
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
                      className="keen-slider__slide number-slide1 h-auto flex items-center justify-center border border-solid borderpr rounded mobile:p-4"
                    >
                      {item.thumb}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          {/* <ContactForm /> */}
        </main>
        <footer
          id="contact"
          className="w-full h-full min-h-[10rem] flex items-center justify-center flex-col gap-4"
        >
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
