import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "components/atoms/nav-bar";

function App() {
  return (
    <div className="w-full h-screen">
      <CssBaseline />
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
