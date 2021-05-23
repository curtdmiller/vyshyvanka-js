import * as React from "react";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/layout";
import * as Tone from "tone";
import { AppContext, defaultAppContext } from "./app-context";

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
