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
    <div>
      <WordPresenter
        word={word}
        url={"https://dl.dropbox.com/s/tmrkb8y57dlw1no/%E5%8F%88.png"}
      />
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
