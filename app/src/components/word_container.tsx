import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HanziWriter from "hanzi-writer";
import WordPresenter from "./word_presenter";

function WordContainer() {
  const { word } = useParams<{ word: string }>();
  const [gridWriter, setGridWriter] = useState<HanziWriter | null>(null);

  useEffect(() => {
    const writer = HanziWriter.create("grid", word, {
      width: 300,
      height: 300,
      padding: 20
    });

    setGridWriter(writer);
  }, [word]);

  return (
    <div id="list-div">
      <WordPresenter word={word} />
      <button
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
