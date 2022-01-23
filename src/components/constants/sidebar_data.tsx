import { IoMdHelpCircle } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { FaHome } from 'react-icons/fa';
export const SidebarData = [
  {
    title: "漢字庫",
    path: "/",
    icon: <FaHome/>,
    cName: "nav-text"
  },
  {
    title: "關於",
    path: "/about",
    icon: <RiTeamFill/>,
    cName: "nav-text"
  },
  {
    title: "幫助中心",
    path: "/support",
    icon: <IoMdHelpCircle/>,
    cName: "nav-text"
  }
];
