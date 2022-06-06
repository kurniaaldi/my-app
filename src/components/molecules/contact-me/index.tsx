import { Button, TextField, Typography } from "@mui/material";
import React from "react";

function ContactMe() {
  return (
    <section
      id="contact"
      className="w-full mobile:h-full sm:h-full flex items-start justify-start flex-col"
    >
      <Typography className="my-8 font-bold" variant="h5">
        Contact Me
      </Typography>
      <div className="w-full flex items-start justify-start flex-col gap-4">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />
        <Button fullWidth variant="contained" className="normal-case">
          Submit
        </Button>
      </div>
    </section>
  );
}

export default ContactMe;
