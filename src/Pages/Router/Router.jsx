import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Router = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[20%] border border-1-slate-500 pl-6">
          <Sidebar></Sidebar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Router;
