import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HanziWriter from "hanzi-writer";
import { WordData, WordToURLMap } from "./constants/word_data";
import WordNavbar from "./word_navbar";
import * as CgIcon from "react-icons/cg";
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

  useEffect(() => {
    const el = document.getElementById("character");
    const imageFilePath = withPicture
      ? WordData[word].imageUrl
      : WordData[word].ancientUrl;

    if (el) {
      el.style.backgroundImage = `url('${imageFilePath}')`;
    }
  }, [withPicture, word]);

  const draggableOptions = Object.keys(options).map(key => {
    const option = withPicture ? (
      <img className="ancient-word" src={options[key].ancientUrl} />
    ) : (
      <span className="word-option">{key}</span>
    );
    return (
      <div
        key={key}
        onDragStart={e => {
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
  const next = () => {
    setWithPicture(!withPicture);
    setSelectedOption("0");
    setOptions(WordData);
  };
  return (
    <div className="container-drag">
      <WordNavbar word={word} />
      <div className="options">
        <h2>拖曳對應圖像到右側</h2>
        {draggableOptions}
      </div>
      <div
        id="character"
        className="droppable"
        onDragOver={e => {
          e.preventDefault();
        }}
        onDrop={e => {
          let id = e.dataTransfer.getData("id");
          const filteredByKey = Object.fromEntries(
            Object.entries(options).filter(([key, value]) => key !== id)
          );
          setOptions(filteredByKey);
          setSelectedOption(id);

          toast.dismiss();
          const rightAnswer = id === word ? "答對了!" : "再試一次!";
          toast.warn(rightAnswer);
        }}
      >
        <button className="next-button" onClick={next}>
          <CgIcon.CgArrowRightR />
        </button>
        {WordData[selectedOption] && <div>{option}</div>}
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default DragAndDropPractice;
