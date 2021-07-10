import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HanziWriter from "hanzi-writer";
import WordPresenter from "./word_presenter";
import { WordData } from "./constants/word_data";

function WordContainer() {
  const { word } = useParams<{ word: string }>();
  const [gridWriter, setGridWriter] = useState<HanziWriter | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (gridWriter !== null) {
      gridWriter.setCharacter(word);
      return;
    }

    const writer = HanziWriter.create(word, word, {
      width: 350,
      height: 350,
      padding: 20
    });

    setGridWriter(writer);
  }, [word]);

  return (
    <WordPresenter
      word={word}
      ancientUrl={WordData[word].ancientUrl}
      pictureUrl={WordData[word].imageUrl}
      videoUrl={WordData[word].videoUrl}
      showModal={showModal}
      setShowModal={setShowModal}
    />
  );
}

export default WordContainer;
