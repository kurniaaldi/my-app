import * as React from "react";
import { Grid, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "components/atoms/nav-bar";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="w-full h-screen">
        <Navbar />
        <main className="px-40 mt-10 w-full space-y-10">
          <Grid container spacing={2}>
            <Grid item xs={1} md={6}>
              kiri
            </Grid>
            <Grid item xs={1} md={6}>
              kanan
            </Grid>
          </Grid>
          <div className="w-full h-fit flex items-start justify-start flex-col">
            <Typography>About me</Typography>
          </div>
          <div className="w-full h-fit flex items-start justify-start flex-col">
            <Typography>Project</Typography>
          </div>
          <div className="w-full h-fit flex items-start justify-start flex-col">
            <Typography>Skill</Typography>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
