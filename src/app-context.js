import { createContext } from "react";
import * as Tone from "tone";
import { colors } from "./theme/colors";

// DEFAULTS
const defaultFMSettings = {
  oscillator: {
    type: "sine"
  },
  modulationIndex: 20,
  modulation: {
    type: "sawtooth"
  },
  envelope: {
    attack: 0.01,
    decay: 0.2,
    sustain: 0.2,
    release: 2,
    attackCurve: "sine"
  },
  volume: -9
};

// EFFECTS
const pitchShift = new Tone.PitchShift();
const delay = new Tone.FeedbackDelay({
  maxDelay: 2,
  feedback: 0.5,
  wet: 0.2
});
const reverb = new Tone.Freeverb();
const filter = new Tone.Filter(4000, "lowpass");
const volume = new Tone.Volume(-12).toDestination();

// SYNTHS
const neQuadrantSynth = new Tone.FMSynth(defaultFMSettings).chain(
  pitchShift,
  delay,
  reverb,
  volume
);
const seQuadrantSynth = new Tone.FMSynth(defaultFMSettings).chain(
  pitchShift,
  delay,
  reverb,
  volume
);
const swQuadrantSynth = new Tone.FMSynth(defaultFMSettings).chain(
  pitchShift,
  delay,
  reverb,
  volume
);
const nwQuadrantSynth = new Tone.FMSynth(defaultFMSettings).chain(
  pitchShift,
  delay,
  reverb,
  volume
);

export const defaultAppContext = {
  cellSize: 24,
  selectFill: colors.blue,
  setSelectFill: () => {},
  isAudioStarted: false,
  setIsAudioStarted: () => {},
  pitchShift,
  delay,
  reverb,
  filter,
  volume,
  neQuadrantSynth,
  seQuadrantSynth,
  swQuadrantSynth,
  nwQuadrantSynth
};

export const AppContext = createContext(defaultAppContext);
