import WordNavbar from "./navigation/word_navbar";
import VideoPlayer from "./common/video_player";
import { MdLiveTv } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";
import { BiBrain } from "react-icons/bi";
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
          <img width="250" height="50%" src={props.pictureUrl} />
          <img width="250" height="50%" src={props.ancientUrl} />
          <div className="word-card">
            {props.word}
            <div className="card-nav"> 
              <button
                className="demo-button"
              >
                <AiFillSound />
              </button>              
              <button
                className="demo-button"
                onClick={() => props.setShowModal(true)}
              >
                <MdLiveTv />
              </button>
              <button
                className="demo-button"
              >
                <BiBrain />
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
