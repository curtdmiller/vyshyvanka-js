import * as React from "react";
import * as Tone from "tone";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/layout";
import { colors } from "./theme/colors";

Tone.Transport.bpm.value = 160;

const pitchShift = new Tone.PitchShift();
const delay = new Tone.FeedbackDelay({
  maxDelay: 2,
  feedback: 0.5,
  wet: 0.2
});
const reverb = new Tone.Freeverb();
const volume = new Tone.Volume(-6).toDestination();

const synthNode = new Tone.Gain(0, "decibels").chain(
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
  synthNode
};

export const AppContext = React.createContext(defaultAppContext);

export default function App() {
  const [selectFill, setSelectFill] = React.useState(colors.blue);
  const [isAudioStarted, setIsAudioStarted] = React.useState(false);

  return (
    <div className="App">
      <Router>
        <AppContext.Provider
          value={{
            ...defaultAppContext,
            selectFill,
            setSelectFill,
            isAudioStarted,
            setIsAudioStarted
          }}
        >
          <Layout />
        </AppContext.Provider>
      </Router>
    </div>
  );
}
