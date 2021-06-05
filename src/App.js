import * as React from "react";
import * as Tone from "tone";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/layout";
import { colors } from "./theme/colors";

Tone.Transport.bpm.value = 160;

const defaultAppContext = {
  cellSize: 24,
  selectFill: colors.blue,
  setSelectFill: () => {},
  isAudioStarted: false,
  setIsAudioStarted: () => {}
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
            cellSize: 24,
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
