import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="bg-background-light text-text">
        <Toolbar className="px-40">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Aldi
          </Typography>
          <div className="flex items-center justify-center gap-2">
            <Button color="inherit">Project</Button>

            <Button color="inherit">Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
