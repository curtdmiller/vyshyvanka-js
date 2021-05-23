import { createContext } from "react";
import * as Tone from "tone";

export const defaultAppContext = {
  cellSize: 24,
  selectFill: "#fa28ff",
  setSelectFill: () => {},
  isAudioStarted: false,
  setIsAudioStarted: () => {},
  pitchShift: new Tone.PitchShift().toDestination(),
  delay: new Tone.FeedbackDelay({
    maxDelay: 2,
    feedback: 0.8,
    wet: 0.2
  }).toDestination(),
  reverb: new Tone.Freeverb().toDestination()
};

export const AppContext = createContext(defaultAppContext);
