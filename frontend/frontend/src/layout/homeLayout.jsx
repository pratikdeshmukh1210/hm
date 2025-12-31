import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Nyabar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;