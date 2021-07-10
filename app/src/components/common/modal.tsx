// @ts-nocheck
import React from "react";

import * as MdIcons from "react-icons/md";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "black",
  padding: "50px",
  zIndex: 1000
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000
};

const CLOSE_MODEL_STYLES = {
  position: "absolute",
  top: "10px",
  right: "10px",
  width: "40px",
  height: "40px",
  backgroundColor: "rgba(0, 0, 0, 0)",
  border: "none",
  color: "white",
  fontSize: "40px",
  padding: 0,
  zIndex: 1000
};

export default function Modal(props: {
  open: any;
  children: any;
  onClose: any;
}) {
  if (!props.open) return null;

  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button style={CLOSE_MODEL_STYLES} onClick={props.onClose}>
          <MdIcons.MdClose />
        </button>
        {props.children}
      </div>
    </>
  );
}
