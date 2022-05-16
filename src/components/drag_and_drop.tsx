import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { WordData, WordToURLMap } from "./constants/word_data";
import WordNavbar from "./navigation/word_navbar";
import CardNavbar from "./navigation/card_navbar";
import AudioPlayer from "./common/audio_player";
import { ToastContainer, toast } from "react-toastify";

import "./drag_and_drop.css";
import "react-toastify/dist/ReactToastify.css";

function onDragStart(
  e: any,
  options: WordToURLMap,
  key: string,
  withPicture: boolean
) {
  e.dataTransfer.setData("id", key);
  if (!withPicture) return;

  var img = new Image(150, 150);
  img.src = options[key].ancientUrl;
  e.dataTransfer.setDragImage(img, 0, 0);
}

function DragAndDropPractice() {
  const { word } = useParams<{ word: string }>();
  const [options, setOptions] = useState(WordData);
  const [selectedOption, setSelectedOption] = useState("0");
  const [withPicture, setWithPicture] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isRightAnswer, setIsRightAnswer] = useState(false);

  useEffect(() => {
    const el = document.getElementById("character");
    const imageFilePath = withPicture
      ? WordData[word].imageUrl
      : WordData[word].ancientUrl;

    if (el) {
      el.style.backgroundImage = `url('${imageFilePath}')`;
    }
  }, [withPicture, word]);


  const draggableOptions = Object.keys(options).map((key) => {
    const option = withPicture ? (
      <img className="ancient-word" src={options[key].ancientUrl} />
    ) : (
      <span className="word-option">{key}</span>
    );
    return (
      <div
        key={key}
        onDragStart={(e) => {
          onDragStart(e, options, key, withPicture);
        }}
        draggable
        className="draggable"
      >
        {option}
      </div>
    );
  });

  const option =
    WordData[selectedOption] && withPicture ? (
      <img className="selected" src={WordData[selectedOption].ancientUrl} />
    ) : (
      <h2 className="selected-word">{selectedOption}</h2>
    );

  // (TODO) move to other tests containers
  const next = () => {
    setWithPicture(!withPicture);
    setSelectedOption("0");
    setOptions(WordData);
  };

  return (
    <div className="container-drag">
      <WordNavbar word={word} />
      <div className="options">
        <AudioPlayer
          showText={false}
          btnText="拖曳對應圖像到右側"
          url="https://dl.dropbox.com/s/0mr16u4khakqtid/%E6%8B%96%E6%9B%B3%E5%B0%8D%E6%87%89%E5%9C%96%E5%83%8F%E5%88%B0%E5%8F%B3%E5%81%B4.mp3"
        />
        {!isRightAnswer && <div className="draggle-options">{draggableOptions}</div>}
      </div>
      <div className="drag-drop-area">
        <div
          id="character"
          className="droppable"
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
            let rightAnswer = id === word
            setIsRightAnswer(rightAnswer)

            toast.dismiss();
            const toastTest = rightAnswer ? "答對了!" : "再試一次!";
            toast.warn(toastTest);
          }}
        >
          {WordData[selectedOption] && <div>{option}</div>}

        </div>
        <CardNavbar
          word={word}
          setShowModal={setShowModal}
          audioUrl={WordData[word].autdioUrl}
          videoUrl={WordData[word].videoUrl}
          showModal={showModal}
          isNextWordCard={true}
        />
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default DragAndDropPractice;
