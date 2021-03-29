import React, { Requireable } from "react";
import PropTypes from "prop-types";
import HanziWriter from "hanzi-writer";
import { ReactComponent as NosePic } from "../images/nose.svg";
import { ReactComponent as GridPic } from "../images/grid.svg";

interface WordPresenterProps {
  word: string;
}

type WordPresenterState = {
  progress: string;
  gridWriter: HanziWriter | null;
};

class WordPresenter extends React.Component<
  WordPresenterProps,
  WordPresenterState
> {
  static propTypes: {
    word: Requireable<string>;
  };

  constructor(props: WordPresenterProps) {
    super(props);

    this.state = {
      progress: "",
      gridWriter: null
    };
  }

  componentDidMount() {
    const gridWriter = HanziWriter.create(
      "grid-background-target",
      this.props.word,
      {
        width: 300,
        height: 300,
        padding: 20
      }
    );
    gridWriter.hideCharacter();
    this.setState({ gridWriter: gridWriter });
  }

  componentDidUpdate() {
    // Typical usage (don't forget to compare props):
    switch (this.state.progress) {
      case "teach":
        if (!this.state.gridWriter) {
          return;
        }
        // (TODO) quit quiz?
        this.state.gridWriter.showCharacter();
        return;
      case "demo":
        this.handleWithPic(this.props.word, this.state.progress, true);
        return;
      case "draw":
        this.handleWithPic(this.props.word, this.state.progress);
        return;
      case "test":
        this.handleQuiz(this.props.word);
        return;
    }
  }

  handleWithPic(word: string, div: string, animate: boolean = false) {
    const writer = HanziWriter.create(div, word, {
      width: 300,
      height: 300,
      padding: 20
    });

    if (animate) {
      writer.animateCharacter();
    } else {
      writer.hideCharacter();
      writer.hideOutline();
      writer.quiz();
    }
  }

  handleQuiz(word: string, target: string = "grid-background-target") {
    if (!this.state.gridWriter) {
      return;
    }

    this.state.gridWriter.hideCharacter();
    this.state.gridWriter.hideOutline();
    this.state.gridWriter.quiz();
  }

  render() {
    const { word } = this.props;
    let background;
    if (this.state.progress === "demo" || this.state.progress === "draw") {
      background = <NosePic id={this.state.progress} />;
    } else {
      background = <GridPic />;
    }

    return (
      <div id="list-div">
        <button
          disabled={this.state.progress === "teach"}
          onClick={() => {
            this.setState({ progress: "teach" });
          }}
        >
          {word}
        </button>
        <button
          disabled={this.state.progress === "demo"}
          onClick={() => {
            this.setState({ progress: "demo" });
          }}
        >
          示範
        </button>
        <button
          disabled={this.state.progress === "draw"}
          onClick={() => {
            this.setState({ progress: "draw" });
          }}
        >
          看圖寫字
        </button>
        <button
          disabled={this.state.progress === "test"}
          onClick={() => {
            this.setState({ progress: "test" });
          }}
        >
          測驗
        </button>
        <div id="character-div"></div>
        {background}
      </div>
    );
  }
}

WordPresenter.propTypes = {
  word: PropTypes.string
};

export default WordPresenter;
