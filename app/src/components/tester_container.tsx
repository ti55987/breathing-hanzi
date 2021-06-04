import React, { useState, useEffect } from "react";
import HanziWriter from "hanzi-writer";
import { useLocation, useParams } from "react-router-dom";
import { ReactComponent as GridPic } from "../images/grid.svg";
import WordNavbar from "./navigation/word_navbar";
import AudioPlayer from "./audio_player";
import { Hint, WordData } from "./constants/word_data";
import "./tester_container.css";
const queryString = require("query-string");

function Tester() {
  const location = useLocation();
  const { word } = useParams<{ word: string }>();

  const withPicture = queryString.parse(location.search).picture === "true";
  const picture = <div id="nose" className="drawing-background"></div>;
  const backgroud = withPicture ? (
    picture
  ) : (
    <GridPic className="grid-background" />
  );

  useEffect(() => {
    const idName = withPicture ? "nose" : "grid-background-target";
    const gridWriter = HanziWriter.create(idName, word, {
      width: 400,
      height: 400,
      padding: 20
    });

    gridWriter.hideCharacter();
    gridWriter.hideOutline();
    gridWriter.quiz();
  }, [withPicture, word]);

  useEffect(() => {
    if (withPicture) {
      const el = document.getElementById("nose");
      const imageFilePath = WordData[word].imageUrl;
      if (el) {
        el.style.backgroundImage = `url('${imageFilePath}')`;
      }
    }
  }, [withPicture, word]);

  const data = WordData[word];
  return (
    <div className="test-container">
      <WordNavbar word={word} />
      <div className="test-area">
        <AudioPlayer url={data.testAudio} btnText="請寫出" />
        {backgroud}
        <hr />
        {buildHints(data.hints)}
      </div>
    </div>
  );
}

function buildHints(hints: Array<Hint>) {
  let summary = "提示";
  return (
    <details className="hint-details">
      <summary>{summary}</summary>
      <ul className="hint-ul">
        {hints.map((item, index) => {
          const text = "提示 " + index.toString();
          return (
            <li key={index} className="hint-li">
              <AudioPlayer
                url={item.audio}
                btnText={text}
                style="audio-button hint-button"
              />
            </li>
          );
        })}
      </ul>
    </details>
  );
}

export default Tester;
