import { Button, Grid, Typography } from "@mui/material";
import React from "react";

function Intro() {
  return (
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
            I am a frontend developer with strong passion to learn new things. I
            am familiar with ReactJs, React Native, Node.Js and ExpressJs. I’m
            starting to learn programming language from php and currently use
            javascript as my main language
          </Typography>
          <Button color="primary" variant="contained" className="normal-case">
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
  );
}

export default Intro;
