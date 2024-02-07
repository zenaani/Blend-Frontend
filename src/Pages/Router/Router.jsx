import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import LoginPage from "../LoginPage/LoginPage";
import NewPost from "../NewPost/NewPost";
import Search from "../Search/Search";
import OtherProfile from "../Search/OtherProfile";

const Router = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[20%] border border-1-slate-500 pl-6">
          <Sidebar></Sidebar>
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/newPost" element={<NewPost />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/username/:uid" element={<OtherProfile />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Router;
