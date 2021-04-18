import React from "react";
import { WordData } from "./constants/word_data";
import * as ImIcons from "react-icons/im";
import { Link } from "react-router-dom";
import "./word_card_list.css";

function WordCardList() {
  return (
    <div>
      <ul className="word-card-items">
        {Object.keys(WordData).map(key => {
          return (
            <li key={key} className="word-card-text">
              <Link to={`/hanzi/${key}`}>
                <ImIcons.ImQuill />
                <span>{key}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default WordCardList;
