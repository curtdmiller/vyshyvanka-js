import React from "react";
import * as Tone from "tone";
import { AppContext } from "../App";

export default function AudioStartButton() {
  const { isAudioStarted, setIsAudioStarted } = React.useContext(AppContext);

  async function handleAudioStart() {
    if (!isAudioStarted) {
      await Tone.start();
      setIsAudioStarted(true);
    }
  }

  return <button onClick={handleAudioStart}>Start Audio</button>;
}
