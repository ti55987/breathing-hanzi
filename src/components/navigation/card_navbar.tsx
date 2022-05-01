import VideoPlayer from "../common/video_player";
import AudioPlayer from "../common/audio_player";
import { MdLiveTv } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { dragAndDropPath, demoPath } from "../constants/word_navbar_data";
import "../tester_container.css";
import "../word_presenter.css";

function CardNavigation(props: {
  word: string;
  audioUrl: string;
  videoUrl: string;
  showModal: boolean;
  setShowModal: any;
}) {
  const style = "demo-button";
  const history = useHistory();

  const routeChange = () =>{
    let path = demoPath(props.word);
    history.push(path);
  }

  return (
    <div className="card-nav">
      <AudioPlayer url={props.audioUrl} btnText={""} style={style} />
      <button className={style} onClick={() => props.setShowModal(true)}>
        <MdLiveTv />
        <div className="tooltiptext">教學影片</div>
      </button>
      <button className={style} onClick={routeChange}>
        <BiBrain />
        <div className="tooltiptext">字卡</div>
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
