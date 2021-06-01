import React from "react";
import { Route, Link } from "react-router-dom";
import ColorPicker from "../components/ColorPicker";
import { makeStyles } from "@material-ui/core";
import StarDiamond from "./star-diamond";
import AudioStartButton from "../components/AudioStart";
import TestPage from "./tests/TestPage";
import FreeDraw from "./FreeDraw";
import interfaceImage from "../assets/StarInterface.png";
import freeDrawImage from "../assets/FreeDraw.png";
import testImage from "../assets/NestedDiamonds.png";

const menu = [
  {
    url: "/star-diamond",
    title: "Star Interface",
    component: <StarDiamond />
  },
  {
    url: "/free-draw",
    title: "Free Draw",
    component: <FreeDraw />
  }
];

const useStyles = makeStyles({
  menu: {
    margin: 0,
    padding: 0,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px 20px"
  },
  menuItem: {
    position: "relative",
    display: "block",
    listStyle: "none",
    margin: 0,
    padding: 0,
    height: 0,
    paddingTop: "100%",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    "&:first-child": {
      backgroundImage: `url(${interfaceImage})`
    },
    "&:nth-child(2)": {
      backgroundImage: `url(${freeDrawImage})`
    },
    "&:nth-child(3)": {
      backgroundImage: `url(${testImage})`
    }
  },
  menuLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  menuItemText: {
    backgroundColor: "black",
    color: "white",
    fontSize: "2em",
    lineHeight: 1,
    padding: 10
  },
  embroidery: {
    maxWidth: 800,
    margin: "0 auto"
  },
  backLink: {
    display: "inline-block"
  }
});

export default function Layout() {
  const classes = useStyles();

  return (
    <main>
      <Route path="/" exact>
        <h1>Vyshyvanka.js/Вишиванка.js</h1>
        <nav>
          <ul className={classes.menu}>
            {menu.map((item) => (
              <li key={item.url} className={classes.menuItem}>
                <Link to={item.url} className={classes.menuLink}>
                  <span className={classes.menuItemText}>{item.title}</span>
                </Link>
              </li>
            ))}
            <li className={classes.menuItem}>
              <Link to={"/tests"} className={classes.menuLink}>
                <span className={classes.menuItemText}>Tests</span>
              </Link>
            </li>
          </ul>
        </nav>
      </Route>
      <Route path={"/tests"}>
        <TestPage />
      </Route>
      {menu.map((item) => (
        <Route path={item.url} key={item.url}>
          <Link to="/" className={classes.backLink}>
            Back
          </Link>
          <ColorPicker />
          <AudioStartButton />
          <div className={classes.embroidery}>{item.component}</div>
        </Route>
      ))}
    </main>
  );
}
