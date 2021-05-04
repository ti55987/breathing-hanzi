import React, { useState, useEffect } from "react";
import * as GiIcons from "react-icons/gi";

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

export default AudioPlayer;
