import { GoHome, GoHomeFill } from "react-icons/go";
import { IoSearchOutline, IoSearchSharp } from "react-icons/io5";
import { MdExplore, MdOutlineExplore } from "react-icons/md";
import { PiFilmReel, PiFilmReelFill } from "react-icons/pi";
import { RiChat1Line, RiChat1Fill } from "react-icons/ri";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiFillPlusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { MdAccountCircle, MdOutlineAccountCircle } from "react-icons/md";

export const menu = [
  { title: "Home", icon: <GoHome />, activeIcon: <GoHomeFill /> },
  { title: "Search", icon: <IoSearchOutline />, activeIcon: <IoSearchSharp /> },
  { title: "Explore", icon: <MdOutlineExplore />, activeIcon: <MdExplore /> },
  { title: "Reels", icon: <PiFilmReel />, activeIcon: <PiFilmReelFill /> },
  { title: "Message", icon: <RiChat1Line />, activeIcon: <RiChat1Fill /> },
  { title: "Notification", icon: <FaRegHeart />, activeIcon: <FaHeart /> },
  {
    title: "Create",
    icon: <AiOutlinePlusCircle />,
    activeIcon: <AiFillPlusCircle />,
  },
  {
    title: "Profile",
    icon: <MdOutlineAccountCircle />,
    activeIcon: <MdAccountCircle />,
  },
];
