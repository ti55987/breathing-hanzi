import React from "react";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";

export const SidebarData = [
  {
    title: "關於",
    path: "/about",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "又",
    path: "/hanzi/又",
    icon: <ImIcons.ImQuill />,
    cName: "nav-text"
  },
  {
    title: "幫助中心",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text"
  }
];
