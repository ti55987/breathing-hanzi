import React, { useState, useEffect } from "react";
import HanziWriter from "hanzi-writer";
import { useLocation, useParams } from "react-router-dom";
import { ReactComponent as GridPic } from "../images/grid.svg";
import WordNavbar from "./navigation/word_navbar";
import AudioPlayer from "./audio_player";
import { Hint, WordData } from "./constants/word_data";
import VideoPlayer from "./video_player";

import * as MdIcons from "react-icons/md";
import "./tester_container.css";
const queryString = require("query-string");

function Tester() {
  const location = useLocation();
  const { word } = useParams<{ word: string }>();
  const [showModal, setShowModal] = useState(false);

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
        {buildHints(data.hints, showModal, setShowModal)}
      </div>
    </div>
  );
}

function buildHints(hints: Array<Hint>, showModal: any, setShowModal: any) {
  let summary = "提示";
  return (
    <details className="hint-details">
      <summary>{summary}</summary>
      <ul className="hint-ul">
        {hints.map((item, index) => {
          const num = index + 1;
          const text = "提示 " + num.toString();
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
        <li className="hint-li">
          <button
            className="audio-button hint-button"
            onClick={() => setShowModal(true)}
          >
            複習 <MdIcons.MdLiveTv />
          </button>
          <VideoPlayer
            open={showModal}
            onClose={() => setShowModal(false)}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
        </li>
      </ul>
    </details>
  );
}

export default Tester;
