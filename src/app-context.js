import { createContext } from "react";
import * as Tone from "tone";
import { colors } from "./theme/colors";

export const defaultAppContext = {
  cellSize: 24,
  selectFill: colors.blue,
  setSelectFill: () => {},
  isAudioStarted: false,
  setIsAudioStarted: () => {},
  pitchShift: new Tone.PitchShift(),
  delay: new Tone.FeedbackDelay({
    maxDelay: 2,
    feedback: 0.5,
    wet: 0.2
  }),
  reverb: new Tone.Freeverb(),
  distortion: new Tone.Distortion(0.8),
  filter: new Tone.Filter(4000, "lowpass"),
  volume: new Tone.Volume(-12).toDestination()
};

export const AppContext = createContext(defaultAppContext);
