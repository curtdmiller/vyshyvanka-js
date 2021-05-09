import React from "react";
import * as Tone from "tone";
import { polySketchInC } from "../components/tonejs/polysketchinC";
// import { synthTone } from "./components/tonejs/simpleorder";

export default function ToneTest() {
  const loopBeat = React.useRef(new Tone.Loop(polySketchInC, "16n"));

  React.useEffect(() => {
    // stuff to do on initial component mount
    loopBeat.current.start(0);
  }, []);

  function handleClick() {
    // synthTone();
    Tone.Transport.toggle();
  }

  return <button onClick={handleClick}>Toggle Beat</button>;
}
