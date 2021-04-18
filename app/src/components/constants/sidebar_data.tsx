import React from "react";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "漢字庫",
    path: "/",
    icon: <GiIcons.GiAbstract057 />,
    cName: "nav-text"
  },
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
