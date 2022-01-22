import React from "react";
import { WordData } from "./constants/word_data";
import { Link } from "react-router-dom";
import "./word_card_list.css";

function WordCardList() {
  return (
    <div>
      <ul className="wordcard-container">
        {Object.keys(WordData).map(key => {
          return (
            <li key={key} className="wordcard-item">
              <Link to={`/hanzi/${key}`}>
                  {key}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default WordCardList;
