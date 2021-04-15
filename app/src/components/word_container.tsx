import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HanziWriter from "hanzi-writer";
import WordPresenter from "./word_presenter";
import { WordData } from "./constants/word_data";
import "./tester_container.css";

function WordContainer() {
  const { word } = useParams<{ word: string }>();
  const [gridWriter, setGridWriter] = useState<HanziWriter | null>(null);

  useEffect(() => {
    if (gridWriter !== null) {
      gridWriter.setCharacter(word);
      return;
    }

    const writer = HanziWriter.create(word, word, {
      width: 300,
      height: 300,
      padding: 20
    });

    setGridWriter(writer);
  }, [word]);

  return (
    <div>
      <WordPresenter word={word} url={WordData[word].imageUrl} />
      <hr />
      <button
        className="audio-button"
        onClick={() => {
          gridWriter && gridWriter.animateCharacter();
        }}
      >
        示範
      </button>
    </div>
  );
}

export default WordContainer;
