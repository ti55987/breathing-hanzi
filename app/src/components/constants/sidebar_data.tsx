import React from "react";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "關於",
    path: "/about",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "幫助中心",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text"
  }
];
