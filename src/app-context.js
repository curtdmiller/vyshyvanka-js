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
const synthNode = new Tone.Gain(0, "decibels").chain(
  pitchShift,
  delay,
  reverb,
  volume
);

const neQuadrantSynth = new Tone.FMSynth(defaultFMSettings).connect(synthNode);
const seQuadrantSynth = new Tone.FMSynth({
  ...defaultFMSettings,
  volume: 0
}).connect(synthNode);
const swQuadrantSynth = new Tone.FMSynth(defaultFMSettings).connect(synthNode);
const nwQuadrantSynth = new Tone.FMSynth(defaultFMSettings).connect(synthNode);

const ascLineSynth = new Tone.MonoSynth({
  ...defaultMonoSettings,
  volume: -6
}).connect(synthNode);
const descLineSynth = new Tone.MonoSynth({
  ...defaultMonoSettings,
  volume: -6
}).connect(synthNode);
const verticalLineSynth = new Tone.MonoSynth(defaultMonoSettings).connect(
  synthNode
);
const horizontalLineSynth = new Tone.MonoSynth(defaultMonoSettings).connect(
  synthNode
);

const outerDiamondGain = new Tone.Gain(-12, "decibels").connect(
  Tone.Destination
);

const outerDiamondDelay = new Tone.FeedbackDelay({
  maxDelay: 2,
  feedback: 0.5,
  wet: 0.2
}).connect(outerDiamondGain);

const outerDiamondSynth = new Tone.FMSynth({ volume: -9 }).chain(
  outerDiamondDelay,
  pitchShift,
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
  outerDiamondSynth,
  outerDiamondDelay
};

export const AppContext = createContext(defaultAppContext);
