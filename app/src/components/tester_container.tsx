import React from "react";
import HanziWriter from "hanzi-writer";
import { ReactComponent as GridPic } from "../images/grid.svg";
import { ReactComponent as NosePic } from "../images/nose.svg";
import { IWordContainerProps } from "./word_container";
import WordNavbar from "./word_navbar";

const queryString = require("query-string");

class TesterContainer extends React.Component<IWordContainerProps> {
  withPicture(query: string): boolean {
    return (
      queryString.parse(this.props.history.location.search).picture === "true"
    );
  }

  componentDidMount() {
    let background = "grid-background-target";
    if (this.withPicture(this.props.history.location.search)) {
      background = "nose";
    }

    const gridWriter = HanziWriter.create(
      background,
      this.props.match.params.word,
      {
        width: 300,
        height: 300,
        padding: 20
      }
    );

    gridWriter.hideCharacter();
    gridWriter.hideOutline();
    gridWriter.quiz();
  }

  render() {
    let background = <GridPic />;
    if (this.withPicture(this.props.history.location.search)) {
      background = <NosePic />;
    }
    const word = this.props.match.params.word;
    return (
      <div id="list-div">
        <WordNavbar word={word} />
        <h1>請寫出{word}</h1>
        {background}
      </div>
    );
  }
}

export default TesterContainer;
