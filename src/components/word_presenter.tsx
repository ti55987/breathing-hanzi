import WordNavbar from "./navigation/word_navbar";
import VideoPlayer from "./common/video_player";
import AudioPlayer from "./common/audio_player";
import { MdLiveTv } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import "./tester_container.css";
import "./word_presenter.css";

function WordPresenter(props: {
  word: string;
  ancientUrl: string;
  pictureUrl: string;
  audioUrl: string;
  videoUrl: string;
  wordUrl: string;
  showModal: boolean;
  setShowModal: any;
}) {
  return (
    <div className="word-container">
      <WordNavbar word={props.word} />
      <div id="character-div" className="word-area">
          <img width="30%" className="evolution" src={props.pictureUrl} />
          <img width="20%" className="evolution" src={props.ancientUrl} />
          <div className="word-card">
            <img width="80%" className="color-word" src={props.wordUrl}/>
            <div className="card-nav">
              <AudioPlayer
                url={props.audioUrl}
                btnText={''}
                style="demo-button"
              />              
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
