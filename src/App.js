import * as React from "react";
import * as Tone from "tone";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/layout";
import { AppContext, defaultAppContext } from "./app-context";
import { colors } from "./theme/colors";

Tone.Transport.bpm.value = 160;
Tone.Transport.start();

export default function App() {
  const [selectFill, setSelectFill] = React.useState(colors.blue);
  const [isAudioStarted, setIsAudioStarted] = React.useState(false);

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
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
