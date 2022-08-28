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
  key: string,
) {
  e.dataTransfer.setData("id", key);
}

function DragDropStrokeContainer() {
  const { word } = useParams<{ word: string }>();
  const [options, setOptions] = useState(WordData[word].strokes || []);
  const [selectedOption, setSelectedOption] = useState("0");
  const [isRightAnswer, setIsRightAnswer] = useState(false);

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

  const draggableOptions = (WordData[word].strokes || []).map((item, index) => {
        return (
          <div
            key={index}
            onDragStart={(e) => {
              onDragStart(e, item);
            }}
            draggable
            className="draggable stroke"
          >
            <img className="ancient-word" src={item} />
          </div>
        );
      })

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
        {isRightAnswer && <img className="thumbsup" src={thumbsup} />}
      </div>
      <div className="drag-drop-area stroke">
        <div
          id="character"
          className="droppable stroke top"
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            let id = e.dataTransfer.getData("id");
            const filteredByKey =  options.filter(key => key !== id)
            setOptions(filteredByKey);
            setSelectedOption(id);

            let ans = WordData[word]?.strokes?.[0];
            let rightAnswer = id === ans;
            setIsRightAnswer(rightAnswer);

            toast.dismiss();
            const toastTest = rightAnswer ? "答對了!" : "再試一次!";
            toast.warn(toastTest);
          }}
        >
          {WordData[selectedOption] && <div>{option}</div>}
        </div>
        <div
          id="character2"
          className="droppable stroke bottom"
          onDragOver={(e) => {
            e.preventDefault();
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

export default DragDropStrokeContainer;
