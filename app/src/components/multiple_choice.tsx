import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./multiple_choice.css";
// @ts-ignore: Unreachable code error
import { Test, QuestionGroup, Question, Option } from "react-multiple-choice";
import { WordData } from "./constants/word_data";
import WordNavbar from "./word_navbar";

type SelectOption = {
  [key: string]: string;
};

function MultipleChoice() {
  const { word } = useParams<{ word: string }>();
  const [selectedOptions, setSelectedOptions] = useState("0");
  const [sumitted, setSubmitted] = useState(false);

  const questionNumber = 0;
  const rightAnswer = selectedOptions === word ? "答對了!" : "再試一次!";
  return (
    <div>
      <WordNavbar word={word} />
      {sumitted && <h2>{rightAnswer}</h2>}
      <Test
        onOptionSelect={(i: SelectOption) => {
          setSelectedOptions(i[questionNumber]);
          setSubmitted(false);
        }}
      >
        <QuestionGroup questionNumber={questionNumber}>
          <Question style={{ "font-size": "2rem" }}>
            請選擇對應 [ {word} ] 的圖像
          </Question>
          {Object.keys(WordData).map(key => {
            return (
              <Option value={key}>
                <img width="100" height="100" src={WordData[key].imageUrl} />
              </Option>
            );
          })}
        </QuestionGroup>
      </Test>
      <br />
      <button
        className="audio-button"
        onClick={() => {
          setSubmitted(true);
        }}
      >
        確認
      </button>
    </div>
  );
}

export default MultipleChoice;
