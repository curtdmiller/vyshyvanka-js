import * as React from "react";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/layout";
import * as Tone from "tone";

export const AppContext = React.createContext({
  isAudioStarted: false,
  setIsAudioStarted: () => {},
  cellSize: 24,
  selectFill: "#fa28ff",
  setSelectFill: () => {}
});

Tone.Transport.bpm.value = 160;
Tone.Transport.start();

export default function App() {
  const [selectFill, setSelectFill] = React.useState("#fa28ff");
  const [isAudioStarted, setIsAudioStarted] = React.useState(false);

  return (
    <div className="App">
      <Router>
        <AppContext.Provider
          value={{
            isAudioStarted,
            setIsAudioStarted,
            cellSize: 24,
            selectFill,
            setSelectFill
          }}
        >
          <Layout />
        </AppContext.Provider>
      </Router>
    </div>
  );
}
