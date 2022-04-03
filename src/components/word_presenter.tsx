import WordNavbar from "./navigation/word_navbar";
import VideoPlayer from "./common/video_player";
import AudioPlayer from "./common/audio_player";
import { MdLiveTv } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import "./tester_container.css";
import "./word_presenter.css";

function CardNavigation(props: {
  audioUrl: string;
  videoUrl: string;
  showModal: boolean;
  setShowModal: any;
}) {
  const style = "demo-button";
  return (
    <div className="card-nav">
      <AudioPlayer url={props.audioUrl} btnText={""} style={style} />
      <button className={style} onClick={() => props.setShowModal(true)}>
        <MdLiveTv />
        <div className="tooltiptext">教學影片</div>
      </button>
      <button className={style}>
        <BiBrain />
        <div className="tooltiptext">小試身手</div>
      </button>
      <VideoPlayer
        open={props.showModal}
        onClose={() => props.setShowModal(false)}
        url={props.videoUrl}
      />
    </div>
  );
}

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
          <img width="80%" className="color-word" src={props.wordUrl} />
          <CardNavigation
            setShowModal={props.setShowModal}
            audioUrl={props.audioUrl}
            videoUrl={props.videoUrl}
            showModal={props.showModal}
          />
        </div>
      </div>
    </div>
  );
}

export default WordPresenter;
