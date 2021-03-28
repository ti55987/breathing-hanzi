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
};

class WordPresenter extends React.Component<
  WordPresenterProps,
  WordPresenterState
> {
  static propTypes: {
    word: Requireable<string>;
  };

  constructor(props: any) {
    super(props);

    this.state = {
      progress: "teach"
    };
  }

  componentDidUpdate() {
    // Typical usage (don't forget to compare props):
    switch (this.state.progress) {
      case "teach":
        this.handleClick(this.props.word);
        return;
      case "demo":
        this.handleClick(this.props.word, true);
        return;
      case "draw":
        this.handleQuiz(this.props.word, "nose");
        return;
      case "test":
        this.handleQuiz(this.props.word);
        return;
    }
  }

  handleClick(word: string, animate: boolean = false) {
    let div = "grid-background-target";
    if (animate) {
      div = "nose";
    }

    const writer = HanziWriter.create(div, word, {
      width: 300,
      height: 300,
      padding: 20
    });
    if (animate) {
      writer.loopCharacterAnimation();
    }
  }

  handleQuiz(word: string, target: string = "grid-background-target") {
    const writer = HanziWriter.create(target, word, {
      width: 300,
      height: 300,
      padding: 20,
      showCharacter: false,
      showOutline: false
    });

    writer.quiz();
  }

  render() {
    const { word } = this.props;
    let background;
    if (this.state.progress === "demo" || this.state.progress === "draw") {
      background = <NosePic />;
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
