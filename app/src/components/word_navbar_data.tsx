import React from "react";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";

const demoPath = (word: string) => {
  return "/hanzi/" + word;
};

const testWithDrawingPath = (word: string) => {
  return "/hanzi/" + word + "/test?picture=true";
};

const testPath = (word: string) => {
  return "/hanzi/" + word + "/test";
};

export const WordNavbarData = [
  {
    title: "字卡",
    path: demoPath,
    icon: <AiIcons.AiFillHome />,
    cName: "navbar-top"
  },
  {
    title: "看圖寫字",
    path: testWithDrawingPath,
    icon: <ImIcons.ImQuill />,
    cName: "navbar-top"
  },
  {
    title: "測驗",
    path: testPath,
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "navbar-top"
  }
];
