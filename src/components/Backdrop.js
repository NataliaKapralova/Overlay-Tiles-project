import React from "react";

export default function Backdrop(props) {
  return <div onClick={props.click} className="backdrop"></div>;
}
