import React from "react";
import { Route, Link } from "react-router-dom";
import NestedDiamonds from "./nested-diamonds";
import NestedPlus from "./nested-plus";
import PlusCross from "./plus-cross";
import PlusStars from "./plus-stars";
import ToneTest from "./tone-test";
import SquareTest from "./square-test";
import LineTest from "./line-test";
import StarDiamond from "./star-diamond";
import StarTest from "./star-test";
import EmptyDiamond from "./empty-diamond";
import NoiseSquare from "./noise-square";
import StarDiamond2 from "./star-diamond-2";
import ColorPicker from "../components/ColorPicker";
import TriangleInD from "./triangle-in-d";
import AudioStartButton from "../components/AudioStart";
import { makeStyles } from "@material-ui/core";
import IsoscelesTriangles from "./iso-triangles";
import XStitchSet from "./x-stitch-set";

const menu = [
  {
    url: "/nested-diamonds",
    title: "Nested Diamonds",
    component: <NestedDiamonds />
  },
  { url: "/nested-plus", title: "Nested Plus", component: <NestedPlus /> },
  { url: "/plus-cross", title: "Plus Cross", component: <PlusCross /> },
  { url: "/plus-star", title: "Plus Star", component: <PlusStars /> },
  { url: "/tone-test", title: "Tone Test", component: <ToneTest /> },
  { url: "/square-test", title: "Square Test", component: <SquareTest /> },
  { url: "/line-test", title: "Line Test", component: <LineTest /> },
  { url: "/star-test", title: "Star Test", component: <StarTest /> },
  { url: "/star-diamond", title: "Star Diamond", component: <StarDiamond /> },
  {
    url: "/empty-diamond",
    title: "Empty Diamond",
    component: <EmptyDiamond />
  },
  {
    url: "/noise-square",
    title: "Noise Square",
    component: <NoiseSquare width={20} />
  },
  {
    url: "/star-diamond-2",
    title: "Star Diamond II",
    component: <StarDiamond2 />
  },
  {
    url: "/triangle-in-d",
    title: "Triangle In D",
    component: <TriangleInD />
  },
  {
    url: "/iso-triangles",
    title: "Isosceles Triangles",
    component: <IsoscelesTriangles />
  },
  {
    url: "/x-stitch-set",
    title: "X Stitch Set",
    component: <XStitchSet />
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
          <Link to="/">Back</Link>
          <ColorPicker />
          <AudioStartButton />
          <div className={classes.embroidery}>{item.component}</div>
        </Route>
      ))}
    </main>
  );
}
