import React from "react";
import { RouteComponentProps } from "react-router-dom";
import HanziWriter from "hanzi-writer";
import { ReactComponent as NosePic } from "../images/nose.svg";
import { ReactComponent as GridPic } from "../images/grid.svg";
import { withRouter } from "react-router-dom";
import WordPresenter from "./word_presenter";

export interface IWordContainerProps extends RouteComponentProps {
  match: {
    params: {
      word: string;
    };
    isExact: boolean;
    path: string;
    url: string;
  };
}

type WordPresenterState = {
  gridWriter: HanziWriter | null;
};

class WordContainer extends React.Component<
  IWordContainerProps,
  WordPresenterState
> {
  componentDidMount() {
    const gridWriter = HanziWriter.create(
      "grid",
      this.props.match.params.word,
      {
        width: 300,
        height: 300,
        padding: 20
      }
    );

    this.setState({ gridWriter: gridWriter });
  }
  // (TODO) match state with props
  render() {
    const { match } = this.props;
    const testLink = "/hanzi/" + match.params.word + "/test";
    return (
      <div id="list-div">
        <WordPresenter word={match.params.word} />
        <button
          onClick={() => {
            this.state.gridWriter && this.state.gridWriter.animateCharacter();
          }}
        >
          示範
        </button>
      </div>
    );
  }
}

export default withRouter(WordContainer);
