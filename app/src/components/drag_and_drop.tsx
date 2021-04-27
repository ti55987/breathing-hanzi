import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HanziWriter from "hanzi-writer";
import { WordData } from "./constants/word_data";
import WordNavbar from "./word_navbar";
import "./drag_and_drop.css";

function DragAndDropPractice() {
  const { word } = useParams<{ word: string }>();
  const [options, setOptions] = useState(WordData);
  const [selectedOption, setSelectedOption] = useState("0");

  useEffect(() => {
    const gridWriter = HanziWriter.create("character", word, {
      width: 200,
      height: 200
    });
  }, [word]);

  const draggableOptions = Object.keys(options).map(key => {
    return (
      <div
        key={key}
        onDragStart={e => {
          e.dataTransfer.setData("id", key);
          var img = new Image(150, 150);
          img.src = options[key].imageUrl;
          e.dataTransfer.setDragImage(img, 0, 0);
        }}
        draggable
        className="draggable"
      >
        <img width="150" height="150" src={options[key].imageUrl} />
      </div>
    );
  });

  const rightAnswer = selectedOption === word ? "答對了!" : "再試一次!";
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
        }}
      >
        {WordData[selectedOption] && (
          <div>
            <h2>{rightAnswer}</h2>
            <img
              width="150"
              height="150"
              src={WordData[selectedOption].imageUrl}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default DragAndDropPractice;
