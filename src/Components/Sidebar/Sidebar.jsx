import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { menu } from "./SidebarConfig";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState();
  const navigate = useNavigate();

  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title == "Profile") {
      navigate("/username");
    } else if (title == "Home") {
      navigate("/");
    } else if (title == "Create") {
      navigate("/newPost");
    }
  };

  return (
    <div className="sticky top-0 h-[100vh]">
      <div className="flex flex-col justify-between h-full px-10">
        <div>
          <div className="pt-10">
            <div className="w-40 text-5xl font-bold">Blend</div>
          </div>
          <div className="mt-8">
            {menu.map((item) => (
              <div
                onClick={() => handleTabClick(item.title)}
                className="flex items-center mb-5 cursor-pointer text-xl"
              >
                {activeTab === item.title ? item.activeIcon : item.icon}
                <p
                  className={`${
                    activeTab === item.title
                      ? "ml-3 font-bold"
                      : "ml-3 font-semibold"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center cursor-pointer pb-10">
          <IoMenu />
          <p className="ml-5">More</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
