import React, { Requireable } from "react";
import PropTypes from "prop-types";
import HanziWriter from "hanzi-writer";
import { ReactComponent as GridPic } from "../images/grid.svg";
import { ReactComponent as NosePic } from "../images/nose.svg";
import { IWordContainerProps } from "./word_container";

const queryString = require("query-string");

class TesterContainer extends React.Component<IWordContainerProps> {
  static propTypes: {
    word: Requireable<string>;
  };

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

    return (
      <div id="list-div">
        <h1>請寫出{this.props.match.params.word}</h1>
        {background}
      </div>
    );
  }
}

TesterContainer.propTypes = {
  word: PropTypes.string
};

export default TesterContainer;
