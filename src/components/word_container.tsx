import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HanziWriter from "hanzi-writer";
import WordPresenter from "./word_presenter";
import { WordData } from "./constants/word_data";

function WordContainer() {
  const { word } = useParams<{ word: string }>();
  const [showModal, setShowModal] = useState(false);


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
