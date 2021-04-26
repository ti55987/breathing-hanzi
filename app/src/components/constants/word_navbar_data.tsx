import React from "react";
import * as GiIcons from "react-icons/gi";

const demoPath = (word: string) => {
  return "/hanzi/" + word;
};

const testWithDrawingPath = (word: string) => {
  return "/hanzi/" + word + "/test?picture=true";
};

const testPath = (word: string) => {
  return "/hanzi/" + word + "/test";
};

const dragAndDropPath = (word: string) => {
  return "/hanzi/" + word + "/drap_and_drop";
};

export const WordNavbarData = [
  {
    title: "字卡",
    path: demoPath,
    icon: <GiIcons.GiAbstract055 />,
    cName: "navbar-top"
  },
  {
    title: "配對圖字",
    path: dragAndDropPath,
    icon: <GiIcons.GiBabyFace />,
    cName: "navbar-top"
  },
  {
    title: "看圖寫字",
    path: testWithDrawingPath,
    icon: <GiIcons.GiBalloonDog />,
    cName: "navbar-top"
  },
  {
    title: "測驗",
    path: testPath,
    icon: <GiIcons.GiBarbedStar />,
    cName: "navbar-top"
  }
];
