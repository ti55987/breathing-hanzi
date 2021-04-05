import React, { useState, useEffect } from "react";
import HanziWriter from "hanzi-writer";
import { useLocation, useParams } from "react-router-dom";
import { ReactComponent as GridPic } from "../images/grid.svg";
import WordNavbar from "./word_navbar";
import * as googleTTS from "google-tts-api";
import * as ImIcons from "react-icons/im";
import "./tester_container.css";
const queryString = require("query-string");

function AudioPlayer(props: { word: string }) {
  const [audio] = useState(
    new Audio(
      "https://dl.dropbox.com/s/cw9uyg0bm6lzd2x/Record%20%28online-voice-recorder.com%29.mp3"
    )
  );
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
    <button onClick={hitPlayer}>
      <ImIcons.ImSoundcloud />
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
      const imageFilePath =
        "https://dl.dropbox.com/s/tmrkb8y57dlw1no/%E5%8F%88.png";
      if (el) {
        el.style.backgroundImage = `url('${imageFilePath}')`;
      }
    }
  }, [withPicture]);

  return (
    <div>
      <WordNavbar word={word} />
      <AudioPlayer word={word} />
      <h1>請寫出</h1>
      {backgroud}
    </div>
  );
}

export default Tester;
