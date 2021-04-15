import React, { useState, useEffect } from "react";
import HanziWriter from "hanzi-writer";
import { useLocation, useParams } from "react-router-dom";
import { ReactComponent as GridPic } from "../images/grid.svg";
import WordNavbar from "./word_navbar";
import { WordData } from "./constants/word_data";
import * as googleTTS from "google-tts-api";
import * as GiIcons from "react-icons/gi";
import "./tester_container.css";
const queryString = require("query-string");

function AudioPlayer(props: { url: string; btnText: string }) {
  const [audio] = useState(new Audio(props.url));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playing) {
      audio.play();
    }
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  const hitPlayer = () => setPlaying(!playing);
  return (
    <button className="audio-button" onClick={hitPlayer}>
      {props.btnText} <GiIcons.GiAwareness />
    </button>
  );
}

function Tester() {
  const location = useLocation();
  const { word } = useParams<{ word: string }>();

  const withPicture = queryString.parse(location.search).picture === "true";
  const picture = <div id="nose" className="drawing-background"></div>;
  const backgroud = withPicture ? picture : <GridPic />;

  useEffect(() => {
    const idName = withPicture ? "nose" : "grid-background-target";
    const gridWriter = HanziWriter.create(idName, word, {
      width: 300,
      height: 300,
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

  return (
    <div>
      <WordNavbar word={word} />
      <AudioPlayer url={WordData[word].testAudio} btnText="請寫出" />
      <br />
      <br />
      {backgroud}
      <hr />
      <AudioPlayer url={WordData[word].hintAudio} btnText="提示" />
    </div>
  );
}

export default Tester;
