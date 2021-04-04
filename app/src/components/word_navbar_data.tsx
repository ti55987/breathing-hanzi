import React from "react";
import * as BsIcons from "react-icons/bs";
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
    icon: <BsIcons.BsCardText />,
    cName: "navbar-top"
  },
  {
    title: "看圖寫字",
    path: testWithDrawingPath,
    icon: <AiIcons.AiFillPicture />,
    cName: "navbar-top"
  },
  {
    title: "測驗",
    path: testPath,
    icon: <ImIcons.ImPencil2 />,
    cName: "navbar-top"
  }
];
