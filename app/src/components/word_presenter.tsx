import React, { Requireable } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import HanziWriter from "hanzi-writer";
import { ReactComponent as NosePic } from "../images/nose.svg";
import { ReactComponent as GridPic } from "../images/grid.svg";

export interface IWordPresenterProps {
  match: {
    params: {
      word: string;
    };
    [key: string]: unknown;
  };
}

type WordPresenterState = {
  progress: string;
  gridWriter: HanziWriter | null;
  picWriter: HanziWriter | null;
};

function NavTest(word: string) {
  let history = useHistory();

  return (
    <button
      onClick={() => {
        history.push("");
      }}
    >
      測驗
    </button>
  );
}

class WordPresenter extends React.Component<
  IWordPresenterProps,
  WordPresenterState
> {
  constructor(props: IWordPresenterProps) {
    super(props);

    this.state = {
      progress: "init",
      gridWriter: null,
      picWriter: null
    };
  }

  componentDidMount() {
    const picWriter = HanziWriter.create("nose", this.props.match.params.word, {
      width: 300,
      height: 300,
      padding: 20
    });
    picWriter.hideCharacter();
    this.setState({ picWriter: picWriter });
  }

  componentDidUpdate() {
    // Typical usage (don't forget to compare props):
    switch (this.state.progress) {
      case "demo":
        this.handleWithPic(this.props.match.params.word, true);
        return;
      case "draw":
        this.handleWithPic(this.props.match.params.word);
        return;
    }
  }

  handleWithPic(word: string, animate: boolean = false) {
    if (!this.state.picWriter) {
      return;
    }

    if (animate) {
      this.state.picWriter.animateCharacter();
    } else {
      this.state.picWriter.hideCharacter();
      this.state.picWriter.hideOutline();
      this.state.picWriter.quiz();
    }
  }

  render() {
    const testLink = "/hanzi/" + this.props.match.params.word + "/test";
    return (
      <div id="list-div">
        <h1>{this.props.match.params.word}</h1>
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
        <NosePic />
      </div>
    );
  }
}

export default WordPresenter;
