import { useState, useEffect } from "react";
import { AiFillSound } from "react-icons/ai";

function AudioPlayer(props: { url: string; btnText: string; showText?: boolean; style?: string }) {
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
  let className = "audio-button";
  if (props.style) {
    className = props.style;
  }

  let showText = true
  if (props.showText == false) {
    showText = props.showText
  }

  return (
    <button className={className} onClick={hitPlayer}>
      {props.btnText} <AiFillSound />
      {showText && <div className="tooltiptext">聽聽看</div>}
    </button>
  );
}

export default AudioPlayer;
