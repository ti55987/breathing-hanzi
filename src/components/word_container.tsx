import { useState } from "react";
import { useParams } from "react-router-dom";
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
      audioUrl={WordData[word].autdioUrl}
      videoUrl={WordData[word].videoUrl}
      wordUrl={WordData[word].wordUrl}
      showModal={showModal}
      setShowModal={setShowModal}
    />
  );
}

export default WordContainer;
