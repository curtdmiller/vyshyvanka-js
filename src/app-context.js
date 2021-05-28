import { createContext } from "react";
import * as Tone from "tone";
import { colors } from "./theme/colors";

// GLOBAL TONEJS RESOURCES
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
const defaultMonoSettings = {
  oscillator: { type: "sawtooth" },
  envelope: { attack: 0.001, decay: 0.1, release: 0.5, sustain: 0.5 },
  filter: {
    Q: 1,
    rolloff: -12,
    type: "lowpass"
  },
  filterEnvelope: {
    attack: 0.4,
    baseFrequency: 150,
    decay: 0.2,
    exponent: 2,
    octaves: 3,
    release: 2,
    sustain: 0.5
  },
  volume: -12
};

// EFFECTS
const pitchShift = new Tone.PitchShift();
const delay = new Tone.FeedbackDelay({
  maxDelay: 2,
  feedback: 0.5,
  wet: 0.2
});
const reverb = new Tone.Freeverb();
const volume = new Tone.Volume(-6).toDestination();

// SYNTHS
const neQuadrantSynth = new Tone.FMSynth(defaultFMSettings).chain(
  pitchShift,
  delay,
  reverb,
  volume
);
const seQuadrantSynth = new Tone.FMSynth({
  ...defaultFMSettings,
  volume: 0
}).chain(pitchShift, delay, reverb, volume);
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

const ascLineSynth = new Tone.MonoSynth({
  ...defaultMonoSettings,
  volume: -6
}).chain(pitchShift, delay, reverb, volume);
const descLineSynth = new Tone.MonoSynth({
  ...defaultMonoSettings,
  volume: -6
}).chain(pitchShift, delay, reverb, volume);
const verticalLineSynth = new Tone.MonoSynth(defaultMonoSettings).chain(
  pitchShift,
  delay,
  reverb,
  volume
);
const horizontalLineSynth = new Tone.MonoSynth(defaultMonoSettings).chain(
  pitchShift,
  delay,
  reverb,
  volume
);

const outerDiamondSynth = new Tone.FMSynth({ volume: -9 }).chain(
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
  volume,
  neQuadrantSynth,
  seQuadrantSynth,
  swQuadrantSynth,
  nwQuadrantSynth,
  ascLineSynth,
  descLineSynth,
  verticalLineSynth,
  horizontalLineSynth,
  outerDiamondSynth
};

export const AppContext = createContext(defaultAppContext);
