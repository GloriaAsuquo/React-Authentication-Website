import React from "react";
import { Outlet } from "react-router";

export default function Unauthenticated() {
  return (
    <div className="h-full flex flex-col lg:flex-row ">
      <div className="h-full lg:w-1/2">
        <Outlet />
      </div>
      <div className="w-full h-full lg:w-1/2 bg-slate-400 flex justify-between items-center p-6"></div>
    </div>
  );
}
