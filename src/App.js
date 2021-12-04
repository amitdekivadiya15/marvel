import React from "react";
import Navbar from "./Components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import MainCart from "./Components/MainCart";
import "antd/dist/antd.css";

const App = () => {
  return (
    <>
      <Navbar />
      <MainCart />
    </>
  );
};

export default App;
