import React from "react";
import { Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import AudioStartButton from "../../components/AudioStart";
import ColorPicker from "../../components/ColorPicker";

import NestedDiamonds from "./nested-diamonds";
import NestedPlus from "./nested-plus";
import PlusCross from "./plus-cross";
import PlusStars from "./plus-stars";
import ToneTest from "./tone-test";
import SquareTest from "./square-test";
import LineTest from "./line-test";
import StarDiamond from "./star-diamond-test";
import StarTest from "./star-test";
import EmptyDiamond from "./empty-diamond";
import NoiseSquare from "./noise-square";
import IsoscelesTriangles from "./iso-triangles";
import XStitchSet from "./x-stitch-set";
import TriangleInD from "./triangle-in-d";

const menu = [
  {
    url: "/tests/nested-diamonds",
    title: "Nested Diamonds",
    component: <NestedDiamonds />
  },
  {
    url: "/tests/nested-plus",
    title: "Nested Plus",
    component: <NestedPlus />
  },
  { url: "/tests/plus-cross", title: "Plus Cross", component: <PlusCross /> },
  { url: "/tests/plus-star", title: "Plus Star", component: <PlusStars /> },
  // { url: "/tests/tone-test", title: "Tone Test", component: <ToneTest /> },
  {
    url: "/tests/square-test",
    title: "Square Test",
    component: <SquareTest />
  },
  { url: "/tests/line-test", title: "Line Test", component: <LineTest /> },
  { url: "/tests/star-test", title: "Star Test", component: <StarTest /> },
  {
    url: "/tests/star-diamond",
    title: "Star Diamond Test",
    component: <StarDiamond />
  },
  {
    url: "/tests/empty-diamond",
    title: "Empty Diamond",
    component: <EmptyDiamond />
  },
  {
    url: "/tests/noise-square",
    title: "Noise Square",
    component: <NoiseSquare width={20} />
  },
  {
    url: "/tests/iso-triangles",
    title: "Isosceles Triangles",
    component: <IsoscelesTriangles />
  },
  {
    url: "/tests/x-stitch-set",
    title: "X Stitch Set",
    component: <XStitchSet />
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

export default function TestPage() {
  const classes = useStyles();

  return (
    <main>
      <Route path="/tests" exact>
        <Link to="/">← back to home</Link>
        <h1>Tests</h1>
        <nav>
          <ul>
            {menu.map((item) => (
              <li key={item.url}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Route>
      {menu.map((item) => (
        <Route path={item.url} key={item.url}>
          <Link to="/tests">Back</Link>
          <ColorPicker />
          <AudioStartButton />
          <div className={classes.embroidery}>{item.component}</div>
        </Route>
      ))}
    </main>
  );
}
