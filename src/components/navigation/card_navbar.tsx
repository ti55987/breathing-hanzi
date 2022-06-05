import VideoPlayer from "../common/video_player";
import AudioPlayer from "../common/audio_player";
import { MdLiveTv } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import { AiTwotoneCopy } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { demoPath, dragAndDropPath } from "../constants/word_navbar_data";
import "./card_navbar.css";

function CardNavigation(props: {
  word: string;
  audioUrl: string;
  videoUrl: string;
  showModal: boolean;
  setShowModal: any;
  isNextWordCard: boolean;
}) {
  const style = "demo-button";
  const history = useHistory();

  const routeChange = () => {
    let path = props.isNextWordCard
      ? demoPath(props.word)
      : dragAndDropPath(props.word, true);
    history.push(path);
  };

  const nextText = props.isNextWordCard ? "字卡" : "小試身手";
  const nextButton = props.isNextWordCard ? <AiTwotoneCopy /> : <BiBrain />;

  return (
    <div className="card-nav">
      <AudioPlayer url={props.audioUrl} btnText={""} style={style} />
      <button className={style} onClick={() => props.setShowModal(true)}>
        <MdLiveTv />
        <div className="tooltiptext">教學影片</div>
      </button>
      <button className={style} onClick={routeChange}>
        {nextButton}
        <div className="tooltiptext">{nextText}</div>
      </button>
      <VideoPlayer
        open={props.showModal}
        onClose={() => props.setShowModal(false)}
        url={props.videoUrl}
      />
    </div>
  );
}

export default CardNavigation;
