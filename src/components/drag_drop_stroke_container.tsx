import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import thumbsup from "../images/thumbsup.jpg";
import AudioPlayer from "./common/audio_player";
import { WordData } from "./constants/word_data";
import WordNavbar from "./navigation/word_navbar";

import "react-toastify/dist/ReactToastify.css";
import "./drag_and_drop.css";
import "./drag_drop_stroke_container.css";

function onDragStart(
  e: any,
  key: number,
) {
  e.dataTransfer.setData("selected_stroke", key);
}

function DragDropStrokeContainer() {
  const { word } = useParams<{ word: string }>();
  const [options, setOptions] = useState(WordData[word].strokes || []);
  const [selectedOption, setSelectedOption] = useState(-1);
  const [isRightAnswer, setIsRightAnswer] = useState(false);
  const [allAnswersState, setallAnswersState] = useState([false, false]);

  useEffect(() => {
    const el = document.getElementById("character");
    const el2 = document.getElementById("character2");
    const topImageFilePath = "https://dl.dropbox.com/s/17wtsdpavmkoksk/3.png"
    const bottonImagePath = "https://dl.dropbox.com/s/3m917kgnqe6scpe/4.png"
    if (el && el2) {
      el.style.backgroundImage = `url('${topImageFilePath}')`;
      el.style.backgroundSize = "40%";
      el2.style.backgroundImage = `url('${bottonImagePath}')`;
      el2.style.backgroundSize = "60%";
    }

  }, [word]);

  useEffect(() => {
    allAnswersState[selectedOption] = true
    setallAnswersState(allAnswersState);
    console.log(allAnswersState)
  }, [selectedOption]);

  const draggableOptions = (WordData[word].strokes || []).map((item, index) => {
        return (
          <div
            key={index}
            onDragStart={(e) => {
              onDragStart(e, index);
            }}
            draggable
            className="draggable stroke"
          >
            <img className="ancient-word" src={item} />
          </div>
        );
      })

  const getOption = (index: number) => {
    return <img className="selected-word" src={WordData[word]?.strokes?.[index]}/>
  }

  const isAllPassed = () => {
    console.log(allAnswersState[0] && allAnswersState[1])
    return allAnswersState[0] && allAnswersState[1]
  }

  const onDrop = (e: any, rightIndex: number) => {
    let id = e.dataTransfer.getData("selected_stroke");
    const filteredByKey =  options.filter(key => key !== id)
    setOptions(filteredByKey);

    let rightAnswer = id === rightIndex.toString();
    setIsRightAnswer(rightAnswer)
    if (rightAnswer) {
      setSelectedOption(rightIndex);
    }

    toast.dismiss();
    const toastTest = rightAnswer ? "答對了!" : "再試一次!";
    toast.warn(toastTest);
  }

  return (
    <div className="container-drag">
      <WordNavbar word={word} />
      <div className="options">
        <AudioPlayer
          showText={false}
          btnText="拖曳對應圖像到右側"
          url="https://dl.dropbox.com/s/0mr16u4khakqtid/%E6%8B%96%E6%9B%B3%E5%B0%8D%E6%87%89%E5%9C%96%E5%83%8F%E5%88%B0%E5%8F%B3%E5%81%B4.mp3"
        />
        {!isAllPassed() && (
          <div className="draggle-options">{draggableOptions}</div>
        )}
        {isAllPassed() && <img className="thumbsup" src={thumbsup} />}
      </div>
      <div className="drag-drop-area stroke">
        <div
          id="character"
          className="droppable stroke top"
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            console.log('stroke top')
            onDrop(e, 0)
          }}
        >
          {allAnswersState[0] && getOption(0)}
        </div>
        <div
          id="character2"
          className="droppable stroke bottom"
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            console.log('stroke bottom')
            onDrop(e, 1)
          }}
        >
          {allAnswersState[1] && getOption(1)}
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default DragDropStrokeContainer;
