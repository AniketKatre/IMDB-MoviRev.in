import React from "react";
import { Navbar } from "./components/user/Navbar";
import { Signin } from "./components/auth/Signin";

const App = () => {
  return (
    <>
      <Navbar />
      <Signin />
    </>
  );
};

export default App;
