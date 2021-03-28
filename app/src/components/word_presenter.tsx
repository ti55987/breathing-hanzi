import React from "react";
import PropTypes from "prop-types";
import HanziWriter from "hanzi-writer";

interface WordPresenterProps {
  word: string;
}

type WordPresenterState = { isOpen: boolean };

class WordPresenter extends React.Component<
  WordPresenterProps,
  WordPresenterState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  handleClick(word: string) {
    const writer = HanziWriter.create("character-target-div", word, {
      width: 100,
      height: 100,
      padding: 5
    });
    writer.loopCharacterAnimation();
    this.setState({ isOpen: true });
  }

  render() {
    const { word } = this.props;

    return (
      <div id="character-target-div">
        <button
          disabled={this.state.isOpen}
          onClick={() => {
            this.handleClick(word);
          }}
        >
          {word}
        </button>
      </div>
    );
  }

  static defaultProps = { word: "" };
}
//
// WordPresenter.propTypes = {
//   word: PropTypes.string.isRequired
// };

export default WordPresenter;
