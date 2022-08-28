import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import thumbsup from "../images/thumbsup.jpg";
import AudioPlayer from "./common/audio_player";
import { WordData } from "./constants/word_data";
import { dragDropStrokePath } from "./constants/word_navbar_data";

import "./assessment.css";
import "./drag_and_drop.css";
import WordNavbar from "./navigation/word_navbar";

function onDragStart(
  e: any,
  key: string,
  withPicture: boolean
) {
  e.dataTransfer.setData("id", key);
}

function AssessmentContainer() {
  const { word } = useParams<{ word: string }>();
  const [options, setOptions] = useState(WordData);
  const [selectedOption, setSelectedOption] = useState("0");
  const [isRightAnswer, setIsRightAnswer] = useState(false);
  const history = useHistory();

  const routeChange = () => {
    history.push(dragDropStrokePath(word));
  };

  useEffect(() => {
    const el = document.getElementById("character");
    const imageFilePath = WordData[word].ancientUrl

    if (el) {
      el.style.backgroundImage = `url('${imageFilePath}')`;
      el.style.backgroundSize = "35%";
    }
  }, [word]);

  const draggableOptions = Object.keys(options).map((key) => {
    const option = <span className="word-option">{key}</span>
    return (
      <div
        key={key}
        onDragStart={(e) => {
          onDragStart(e, key, false);
        }}
        draggable
        className="draggable assessment"
      >
        {option}
      </div>
    );
  });

  const option =
    WordData[selectedOption] && (<h2 className="selected-word">{selectedOption}</h2>)

  return (
    <div className="container-drag">
      <WordNavbar word={word} />
      <div className="options">
        <AudioPlayer
          showText={false}
          btnText="拖曳對應圖像到右側"
          url="https://dl.dropbox.com/s/0mr16u4khakqtid/%E6%8B%96%E6%9B%B3%E5%B0%8D%E6%87%89%E5%9C%96%E5%83%8F%E5%88%B0%E5%8F%B3%E5%81%B4.mp3"
        />
        {!isRightAnswer && (
          <div className="draggle-options">{draggableOptions}</div>
        )}
        {isRightAnswer && (
        <div>
          <img className="thumbsup" src={thumbsup} ></img>
          <button className="next-button" onClick={routeChange}>
            <div>挑戰下一關</div>
          </button>
        </div>)}
      </div>
      <div className="drag-drop-area assessment">
        <div
          id="character"
          className="droppable assessment"
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            let id = e.dataTransfer.getData("id");
            const filteredByKey = Object.fromEntries(
              Object.entries(options).filter(([key, value]) => key !== id)
            );
            setOptions(filteredByKey);
            setSelectedOption(id);
            let rightAnswer = id === word;
            setIsRightAnswer(rightAnswer);

            toast.dismiss();
            const toastTest = rightAnswer ? "答對了!" : "再試一次!";
            toast.warn(toastTest);
          }}
        >
          {WordData[selectedOption] && <div>{option}</div>}
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default AssessmentContainer;
