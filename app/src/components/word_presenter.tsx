import React from "react";
import { ReactComponent as GridPic } from "../images/grid.svg";
import WordNavbar from "./word_navbar";

function WordPresenter(props: { word: string; url: string }) {
  return (
    <div id="character-div">
      <WordNavbar word={props.word} />
      <GridPic id="grid" />
      <img width="300" height="300" src={props.url} />
    </div>
  );
}

export default WordPresenter;
