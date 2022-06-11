import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

function Intro() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      id="intro"
      container
      spacing={isMobile ? 1 : 2}
      direction={isMobile ? "column" : "row"}
      alignItems="center"
      className="mobile:h-full sm:h-full lg:min-h-[45rem]"
    >
      <Grid item xs={1} sm={6} className="w-full h-full">
        <div className="w-full h-full flex items-start justify-center flex-col gap-4">
          <Typography className="font-semibold" variant="h5">
            Frontend Developer
          </Typography>
          <Typography className="text-primary font-bold" variant="h3">
            Aldi Kurniawan
          </Typography>
          <Typography paragraph>
            I am a frontend developer with strong passion to learn new things. I
            am familiar with ReactJs, React Native, Node.Js and ExpressJs. I’m
            starting to learn programming language from php and currently use
            javascript as my main language.
          </Typography>
          <Button color="primary" variant="contained" className="normal-case">
            Contact Me
          </Button>
        </div>
      </Grid>
      <Grid item xs={1} sm={6}>
        <figure className="w-full m-0">
          <img
            src="./images/profile.png"
            alt="my-profile.png"
            className="w-[inherit]"
          />
        </figure>
      </Grid>
    </Grid>
  );
}

export default Intro;
