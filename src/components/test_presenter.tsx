import { ReactComponent as GridPic } from "../images/grid.svg";
import ReactPlayer from "react-player";

import "./test_presenter.css";

function TestPresenter(props: {
  level: number;
  pictureUrl?: string;
  videoUrl?: string;
}) {
  switch (props.level) {
    case 1:
      return (
        <div className="level-1">
          <img width="300" height="300" src={props.pictureUrl} />
          <div id="nose-1" className="drawing-background"></div>
          <ReactPlayer url={props.videoUrl} width="400px" height="270px" />
        </div>
      );
    case 2:
      return <div id="nose-2" className="drawing-background"></div>;
    case 3:
      return <GridPic className="grid-background" />;
    default:
      return <div id="nose" className="drawing-background"></div>;
  }
}

export default TestPresenter;
