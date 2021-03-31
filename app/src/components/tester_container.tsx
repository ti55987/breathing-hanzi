import React, { Requireable } from "react";
import PropTypes from "prop-types";
import HanziWriter from "hanzi-writer";
import { ReactComponent as GridPic } from "../images/grid.svg";
import { IWordPresenterProps } from "./word_presenter";

interface TesterContainerProps {
  word: string;
}

type TesterContainerState = {
  progress: string;
  gridWriter: HanziWriter | null;
};

class TesterContainer extends React.Component<IWordPresenterProps> {
  static propTypes: {
    word: Requireable<string>;
  };

  constructor(props: IWordPresenterProps) {
    super(props);
  }

  componentDidMount() {
    const gridWriter = HanziWriter.create(
      "grid-background-target",
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
    return (
      <div id="list-div">
        <h1>請寫出{this.props.match.params.word}</h1>
        <GridPic />
      </div>
    );
  }
}

TesterContainer.propTypes = {
  word: PropTypes.string
};

export default TesterContainer;
