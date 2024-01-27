import React, { useState } from "react";
import {
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
  BsThreeDots,
} from "react-icons/bs";
import "./PostCard.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const PostCard = ({ userId, image, caption, timestamp }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSaved = () => {
    setIsSaved(!isSaved);
  };

  const handlePostLike = () => {
    setIsLiked(!isLiked);
  };

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="flex justify-between items-center w-full py-4 px-5">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="https://cdn.pixabay.com/photo/2015/12/16/20/22/driving-1096517_1280.jpg"
              alt=""
            />
            <div className="pl-2">
              <p className="font-semibold text-sm">username</p>
              <p className="font-thin text-sm">location</p>
            </div>
          </div>
          <div className="dropdown">
            <BsThreeDots className="dots" onClick={handleClick} />
            <div className="dropdown-content">
              {showDropdown && (
                <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="w-full">
          <img className="w-full" src={image} alt="" />
        </div>

        <div className="flex justify-between items-center w-full px-3 pt-3">
          <div className="flex gap-3 items-center">
            {isLiked ? (
              <FaHeart
                className="text-red-600 text-xl cursor-pointer"
                onClick={handlePostLike}
              />
            ) : (
              <FaRegHeart
                className="text-xl hover:opacity-50 cursor-pointer"
                onClick={handlePostLike}
              />
            )}
            <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
          </div>

          <div className="cursor-pointer">
            {isSaved ? (
              <BsBookmarkFill
                onClick={handleSaved}
                className="text-xl cursor-pointer"
              />
            ) : (
              <BsBookmark
                onClick={handleSaved}
                className="text-xl hover:opacity-50 cursor-pointer"
              />
            )}
          </div>
        </div>

        <div className="w-full pt-1 px-3">
          <p>129 likes</p>
          <p className="inline-block font-semibold text-sm mr-1">username</p>
          <p className="inline-block">{caption}</p>
          <p className="opacity-50 pt-1 pb-2">view all 10 comments</p>
        </div>

        <div className="border border-t w-full">
          <div className="w-full px-3 py-2">
            <input
              className="outline-none border-none w-full"
              type="text"
              placeholder="Add a comment..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
