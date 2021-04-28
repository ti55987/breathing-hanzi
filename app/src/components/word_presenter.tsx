import React from "react";
import { ReactComponent as GridPic } from "../images/grid.svg";
import WordNavbar from "./word_navbar";
import "./word_presenter.css";
import "./tester_container.css";

function WordPresenter(props: {
  word: string;
  ancientUrl: string;
  pictureUrl: string;
  demo: any;
}) {
  return (
    <div className="word-container">
      <WordNavbar word={props.word} />
      <div id="character-div" className="word-area">
        <img width="300" height="300" src={props.pictureUrl} />
        <img width="250" height="250" src={props.ancientUrl} />
        <GridPic id={props.word} className="grid-background" />
        <hr />
        <button className="audio-button" onClick={props.demo}>
          示範
        </button>
      </div>
    </div>
  );
}

export default WordPresenter;
