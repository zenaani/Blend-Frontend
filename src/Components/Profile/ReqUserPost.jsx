import React, { useEffect, useState } from "react";
import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import ReqUserPostCard from "./ReqUserPostCard";
import axios from "axios";

const ReqUserPost = ({ post }) => {
  const [activeTab, setActiveTab] = useState();

  const tabs = [
    {
      tab: "Post",
      icon: <AiOutlineTable />,
      activeTab: "",
    },
    {
      tab: "Reels",
      icon: <RiVideoAddLine />,
    },
    {
      tab: "Saved",
      icon: <BiBookmark />,
    },
    {
      tab: "Tagged",
      icon: <AiOutlineUser />,
    },
  ];
  return (
    <div>
      <div className="flex gap-14 border-t relative">
        {tabs.map((item) => (
          <div
            onClick={() => setActiveTab(item.tab)}
            className={` ${
              activeTab === item.tab ? "border-t-2 border-black" : "opacity-60"
            } flex items-center cursor-pointer py-2 px-6 text-md`}
          >
            <p>{item.icon}</p>
            <p className="ml-1">{item.tab}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-wrap">
          {post.map((item, i) => (
            <div key={i}>
              <ReqUserPostCard image={item?.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReqUserPost;
