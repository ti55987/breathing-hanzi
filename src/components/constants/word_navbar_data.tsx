import { AiTwotoneCopy } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { GiAbstract089 } from "react-icons/gi";
import { ImQuill } from "react-icons/im";

const homwPath = (word: string) => {
  return "/";
};

export const demoPath = (word: string) => {
  return "/hanzi/" + word;
};

const testWithDrawingPath = (word: string) => {
  return "/hanzi/" + word + "/test?level=1";
};

const testPath = (word: string) => {
  return "/hanzi/" + word + "/test";
};

export const dragAndDropPath = (word: string, withPicture: boolean = false) => {
  return "/hanzi/" + word + "/drag_and_drop?picture=" + withPicture;
};

export const assessmentPath = (word: string) => {
  return "/hanzi/" + word + "/assessment"
};

export const dragDropStrokePath = (word: string) => {
  return "/hanzi/" + word + "/drag_drop_stroke"
};

export const WordNavbarData = [
  {
    title: "字庫",
    path: homwPath,
    icon: <FaHome />,
    cName: "navbar-top"
  },
  {
    title: "字卡",
    path: demoPath,
    icon: <AiTwotoneCopy />,
    cName: "navbar-top"
  },
  {
    title: "配對圖字",
    path: assessmentPath,
    icon: <GiAbstract089 />,
    cName: "navbar-top"
  },
  {
    title: "看圖寫字",
    path: testWithDrawingPath,
    icon: <BsPencilSquare />,
    cName: "navbar-top"
  },
  {
    title: "測驗",
    path: testPath,
    icon: <ImQuill />,
    cName: "navbar-top"
  }
];
