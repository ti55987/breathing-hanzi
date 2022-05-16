import WordNavbar from "./navigation/word_navbar";
import CardNavbar from "./navigation/card_navbar";
import "./tester_container.css";
import "./word_presenter.css";


function WordPresenter(props: {
  word: string;
  ancientUrl: string;
  pictureUrl: string;
  audioUrl: string;
  videoUrl: string;
  wordUrl: string;
  showModal: boolean;
  setShowModal: any;
}) {
  return (
    <div className="word-container">
      <WordNavbar word={props.word} />
      <div id="character-div" className="word-area">
        <img width="30%" className="evolution" src={props.pictureUrl} />
        <img width="20%" className="evolution" src={props.ancientUrl} />
        <div className="word-card">
          <img width="80%" className="color-word" src={props.wordUrl} />
          <CardNavbar
            word={props.word}
            setShowModal={props.setShowModal}
            audioUrl={props.audioUrl}
            videoUrl={props.videoUrl}
            showModal={props.showModal}
            isNextWordCard={false}
          />
        </div>
      </div>
    </div>
  );
}

export default WordPresenter;
