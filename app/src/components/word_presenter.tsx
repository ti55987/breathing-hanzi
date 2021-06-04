import React from "react";
import { ReactComponent as GridPic } from "../images/grid.svg";
import WordNavbar from "./navigation/word_navbar";
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
        <div className="evolution">
          <img width="250" height="250" src={props.pictureUrl} />
          <img width="200" height="200" src={props.ancientUrl} />
        </div>
        <div className="grid">
          <GridPic id={props.word} />
          <button className="audio-button" onClick={props.demo}>
            示範
          </button>
        </div>
      </div>
    </div>
  );
}

export default WordPresenter;
