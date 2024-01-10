import React from "react";
import { FaComment, FaHeart } from "react-icons/fa";

const ReqUserPostCard = () => {
  return (
    <div>
      <div className="w-60 h-60">
        <img
          className="cursor-pointer"
          src="https://cdn.pixabay.com/photo/2020/04/19/20/23/zzz-5065457_1280.jpg"
          alt=""
        />
        <div>
          <div>
            <div>
              <FaHeart></FaHeart> <span>77</span>
              <div>
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
