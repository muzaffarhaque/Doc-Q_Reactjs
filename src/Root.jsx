import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <Navbar />
      <div className="main-wraper">
        <Outlet />
      </div>
    </div>
  );
}
