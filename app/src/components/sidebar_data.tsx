import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "關於",
    path: "/about",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "鼻",
    path: "/hanzi/鼻",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "幫助中心",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text"
  }
];
