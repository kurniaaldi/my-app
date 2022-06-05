import * as React from "react";
import { Button, Grid, Typography } from "@mui/material";

import { Intro, Skills } from "components/molecules";
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
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
