import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Header/Navber";

const Root = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
