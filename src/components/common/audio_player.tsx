import { useState, useEffect } from "react";
import * as GiIcons from "react-icons/gi";

function AudioPlayer(props: { url: string; btnText: string; style?: string }) {
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

  return (
    <button className={className} onClick={hitPlayer}>
      {props.btnText} <GiIcons.GiAwareness />
    </button>
  );
}

export default AudioPlayer;
