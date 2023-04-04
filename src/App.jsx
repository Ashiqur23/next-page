import React from "react";
import Home from "./copmponents/Home";
import { Outlet } from "react-router-dom";
import Header from "./copmponents/Header";

const App = () => {
  return (
    <div>
      {/* header start */}
      <Header></Header>
      {/* header end */}
      {/* Outlet start */}
      <Outlet></Outlet>
      {/* Outlet end */}
      {/* header end */}
      {/* header end */}
    </div>
  );
};

export default App;
