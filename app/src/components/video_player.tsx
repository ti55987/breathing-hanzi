import Modal from "./modal";
import ReactPlayer from "react-player";

function VideoPlayer(props: { url: string; open: any; onClose: any }) {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <ReactPlayer
        url={props.url}
        controls={true}
        width="960px"
        height="540px"
      />
    </Modal>
  );
}

export default VideoPlayer;
