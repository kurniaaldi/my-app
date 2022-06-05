import * as React from "react";
import { Button, Grid, Typography } from "@mui/material";
import {
  EXPRESS,
  GIT,
  GRAPHQL,
  JAVASCRIPT,
  JEST,
  NEXT,
  NODE,
  REACT,
  REACT_NATIVE,
  REDUX,
  TYPESCRIPT,
} from "./assets";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "components/atoms/nav-bar";

function App() {
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

  const skill = [
    {
      id: 1,
      name: "JavaScript",
      component: <JAVASCRIPT className="w-40 h-40 filter-gray" />,
    },
    {
      id: 2,
      name: "TypeScript",
      component: <TYPESCRIPT className="w-40 h-40 filter-gray" />,
    },
    {
      id: 11,
      name: "Node Js",
      component: <NODE className="w-40 h-40 filter-gray" />,
    },
    {
      id: 3,
      name: "React Js",
      component: <REACT className="w-40 h-40 filter-gray" />,
    },
    {
      id: 4,
      name: "Next Js",
      component: <NEXT className="w-40 h-40 filter-gray" />,
    },
    {
      id: 5,
      name: "React Native",
      component: <REACT_NATIVE className="w-40 h-40 filter-gray" />,
    },
    {
      id: 6,
      name: "Express Js",
      component: <EXPRESS className="w-40 h-40 filter-gray" />,
    },
    {
      id: 7,
      name: "Graphql",
      component: <GRAPHQL className="w-40 h-40 filter-gray" />,
    },
    {
      id: 9,
      name: "GIT",
      component: <GIT className="w-40 h-40 filter-gray" />,
    },
    {
      id: 8,
      name: "JEST",
      component: <JEST className="w-40 h-40 filter-gray" />,
    },
    {
      id: 12,
      name: "Redux",
      component: <REDUX className="w-40 h-40 filter-gray" />,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="w-full h-full">
        <Navbar />
        <main className="px-40 w-full space-y-10">
          <Grid container spacing={2} alignItems="center" className="h-screen">
            <Grid item xs={1} md={6} className="w-full h-full">
              <div className="w-full h-full flex items-start justify-center flex-col gap-4">
                <Typography className="font-semibold" variant="h5">
                  Developer
                </Typography>
                <Typography className="text-primary font-bold" variant="h3">
                  Aldi Kurniawan
                </Typography>
                <Typography paragraph>
                  I am a frontend developer with strong passion to learn new
                  things. I am familiar with ReactJs, React Native, Node.Js and
                  ExpressJs. I’m starting to learn programming language from php
                  and currently use javascript as my main language
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  className="normal-case"
                >
                  Contact Me
                </Button>
              </div>
            </Grid>
            <Grid item xs={1} md={6}>
              <figure>
                <img src="./images/profile.png" alt="my-profile.png" />
              </figure>
            </Grid>
          </Grid>
          {/* <div className="w-full h-fit flex items-start justify-start flex-col">
            <Typography>About me</Typography>
          </div> */}
          <div className="w-full h-screen flex items-start justify-start flex-col gap-4">
            <Typography className="my-8 font-bold" variant="h5">
              Skill
            </Typography>
            <div className="w-full h-full flex items-center justify-center gap-12 flex-wrap">
              {skill.map((item: any) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center justify-center gap-2"
                  >
                    {item.component}
                    <Typography variant="h5">{item.name}</Typography>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full h-screen flex items-start justify-start flex-col">
            <Typography>Project</Typography>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
