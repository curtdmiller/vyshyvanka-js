import { createContext } from "react";
import * as Tone from "tone";
import { colors } from "./theme/colors";
import { defaultFMSettings, defaultMonoSettings } from "./tone/synth-defaults";
// GLOBAL TONEJS RESOURCES

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

const fmPolySynth = new Tone.PolySynth(Tone.FMSynth, defaultFMSettings).connect(
  synthNode
);

const xPolySynth = new Tone.PolySynth(Tone.MonoSynth, {
  ...defaultMonoSettings,
  volume: -6
}).connect(synthNode);

const plusPolySynth = new Tone.PolySynth(Tone.MonoSynth, {
  ...defaultMonoSettings,
  volume: -15
}).connect(synthNode);

const outerDiamondGain = new Tone.Gain(-12, "decibels").connect(
  Tone.Destination
);

// Outer Diamonds

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
  fmPolySynth,
  xPolySynth,
  plusPolySynth,
  outerDiamondSynth,
  outerDiamondDelay
};

export const AppContext = createContext(defaultAppContext);
