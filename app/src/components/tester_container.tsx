import React, { useState, useEffect } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";

import WordNavbar from "./navigation/word_navbar";
import TestPresenter from "./test_presenter";
import AudioPlayer from "./common/audio_player";
import { Hint, WordData } from "./constants/word_data";
import VideoPlayer from "./common/video_player";

import HanziWriter from "hanzi-writer";
import * as CgIcon from "react-icons/cg";
import * as MdIcons from "react-icons/md";

import "./tester_container.css";
const queryString = require("query-string");

function getLevel(location: any) {
  switch (queryString.parse(location.search).level) {
    case "1":
      return 1;
    case "2":
      return 2;
    default:
      return 3;
  }
}

function Tester() {
  const location = useLocation();
  let history = useHistory();
  const { word } = useParams<{ word: string }>();
  const [showModal, setShowModal] = useState(false);

  const level = getLevel(location);

  useEffect(() => {
    const nID = `nose-${level}`;
    let idName = level < 3 ? nID : "grid-background-target";
    const gridWriter = HanziWriter.create(idName, word, {
      width: 400,
      height: 400,
      padding: 20
    });

    gridWriter.hideCharacter();
    gridWriter.hideOutline();
    gridWriter.quiz();
  }, [level, word]);

  useEffect(() => {
    const imageFilePath =
      level === 1 ? WordData[word].ancientUrl : WordData[word].imageUrl;
    if (level < 3) {
      const el = document.getElementById(`nose-${level}`);
      if (el) {
        el.style.backgroundImage = `url('${imageFilePath}')`;
      }
    }
  }, [level, word]);

  const data = WordData[word];
  const footer =
    level === 1 ? (
      <button
        className="level-button "
        onClick={() => history.push(`/hanzi/${word}/test?level=2`)}
      >
        <CgIcon.CgArrowRightR />
      </button>
    ) : (
      buildHints(data.hints, showModal, setShowModal)
    );
  return (
    <div className="test-container">
      <WordNavbar word={word} />
      <div className="test-area">
        <AudioPlayer url={data.testAudio} btnText="請寫出" />
        <TestPresenter
          level={level}
          pictureUrl={WordData[word].imageUrl}
          videoUrl={WordData[word].videoUrl}
        />
        <hr />
        {footer}
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
