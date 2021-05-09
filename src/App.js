import * as React from "react";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/layout";

export const GridContext = React.createContext({
  cellSize: 24,
  selectFill: "#fa28ff",
  setSelectFill: () => {}
});

export default function App() {
  const [selectFill, setSelectFill] = React.useState("#fa28ff");
  return (
    <div className="App">
      <Router>
        <GridContext.Provider
          value={{ cellSize: 24, selectFill, setSelectFill }}
        >
          <Layout />
        </GridContext.Provider>
      </Router>
    </div>
  );
}
