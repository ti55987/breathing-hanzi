import React from "react";
import { ReactComponent as GridPic } from "../images/grid.svg";
import WordNavbar from "./navigation/word_navbar";
import * as MdIcons from "react-icons/md";
import VideoPlayer from "./video_player";

import "./tester_container.css";
import "./word_presenter.css";

function WordPresenter(props: {
  word: string;
  ancientUrl: string;
  pictureUrl: string;
  videoUrl: string;
  showModal: boolean;
  setShowModal: any;
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
          <div className="grid-children">
            <button
              className="audio-button demo-button"
              onClick={() => props.setShowModal(true)}
            >
              <MdIcons.MdLiveTv /> 教學影片
            </button>
            <VideoPlayer
              open={props.showModal}
              onClose={() => props.setShowModal(false)}
              url={props.videoUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordPresenter;
