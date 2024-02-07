import React, { useState } from "react";
import { FaComment, FaHeart } from "react-icons/fa";

const ReqUserPostCard = ({ image }) => {
  return (
    <div className="relative">
      <div className="w-60 h-60">
        <img className="cursor-pointer w-full h-full" src={image} alt="" />
        <div>
          <div>
            <div className="flex justify-center items-center w-full gap-10 bg-black absolute top-0  h-full opacity-0 hover:opacity-50 transition-all duration-1000">
              <div className="text-white">
                <FaHeart></FaHeart> <span>77</span>
              </div>
              <div className="text-white">
                <FaComment></FaComment> <span>12</span>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReqUserPostCard;
