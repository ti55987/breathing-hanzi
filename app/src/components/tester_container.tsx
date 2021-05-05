import React, { useState, useEffect } from "react";
import HanziWriter from "hanzi-writer";
import { useLocation, useParams } from "react-router-dom";
import { ReactComponent as GridPic } from "../images/grid.svg";
import WordNavbar from "./word_navbar";
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
        {buildHints(data.hints, 0)}
      </div>
    </div>
  );
}

function buildHints(hints: Array<Hint>, index: number) {
  if (hints.length == index) {
    return;
  }

  let summary = "提示";
  if (index > 0) {
    summary = "下個提示";
  }

  return (
    <details className="hint-details">
      <summary>{summary}</summary>
      {hints[index].text}
      <AudioPlayer
        url={hints[index].audio}
        btnText=""
        style="audio-button hint-button"
      />
      {buildHints(hints, index + 1)}
    </details>
  );
}

export default Tester;
