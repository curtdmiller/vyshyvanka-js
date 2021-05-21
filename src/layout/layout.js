import React from "react";
import { Route, Link } from "react-router-dom";
import ColorPicker from "../components/ColorPicker";
import { makeStyles } from "@material-ui/core";
import StarDiamond2 from "./star-diamond-2";
import TriangleInD from "./triangle-in-d";
import AudioStartButton from "../components/AudioStart";
import TestPage from "./tests/TestPage";

const menu = [
  {
    url: "/star-diamond-2",
    title: "Star Diamond II",
    component: <StarDiamond2 />
  },
  {
    url: "/triangle-in-d",
    title: "Triangle In D",
    component: <TriangleInD />
  }
];

const useStyles = makeStyles({
  embroidery: {
    maxWidth: 800,
    margin: "0 auto"
  }
});

export default function Layout() {
  const classes = useStyles();

  return (
    <main>
      <Route path="/" exact>
        <h1>Vyshyvanka.js/Вишиванка.js</h1>
        <nav>
          <ul>
            <li>
              <Link to={"/tests"}>Tests</Link>
            </li>
            {menu.map((item) => (
              <li key={item.url}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Route>
      <Route path={"/tests"}>
        <TestPage />
      </Route>
      {menu.map((item) => (
        <Route path={item.url} key={item.url}>
          <Link to="/">Back</Link>
          <ColorPicker />
          <AudioStartButton />
          <div className={classes.embroidery}>{item.component}</div>
        </Route>
      ))}
    </main>
  );
}
