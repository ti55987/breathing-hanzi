import React from "react";
import { ReactComponent as NosePic } from "../images/nose.svg";
import { ReactComponent as GridPic } from "../images/grid.svg";
import WordNavbar from "./word_navbar";

function WordPresenter(props: { word: string }) {
  return (
    <div id="character-div">
      <WordNavbar word={props.word} />
      <GridPic id="grid" />
      <NosePic />
    </div>
  );
}

export default WordPresenter;
