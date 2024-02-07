import React, { useEffect, useState } from "react";
import { RiSettings2Fill } from "react-icons/ri";
import axios from "axios";

const ProfileUserDetails = ({ username, fullname }) => {
  return (
    <div className="py-10 w-full">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            className="w-32 h-32 rounded-full object-cover"
            src="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_1280.jpg"
            alt=""
          ></img>
        </div>

        <div className=" space-y-3 text-md">
          <div className="flex gap-10 items-center">
            <p>{username}</p>
            <buttonp className="bg-gray-300 py-1 px-3 rounded-md">
              Edit Profile
            </buttonp>
            <RiSettings2Fill />
          </div>
          <div className="flex gap-10">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">5</span>
              <span>followers</span>
            </div>
            <div>
              <span className="font-semibold mr-2">7</span>
              <span>following</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">{fullname}</p>
            <p className="font-thin text-sm">
              Ocean lover, wave chaser, saltwater soul 🌊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserDetails;
