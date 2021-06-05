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
    component: <StarDiamond />,
    hasAudio: true
  },
  {
    url: "/free-draw",
    title: "Free Draw",
    component: <FreeDraw />,
    hasAudio: false
  }
];

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: "2em",
    fontSize: "2em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5em",
      textAlign: "center"
    }
  },
  slash: {
    fontWeight: 100,
    fontSize: "2em",
    position: "relative",
    top: 4,
    margin: "0 .1em 0 .2em"
  },
  menu: {
    margin: 0,
    padding: 0,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px 20px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "100%"
    }
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
      backgroundImage: `linear-gradient(
      rgba(255,255,255, 0.3), 
      rgba(255,255,255, 0.3)
    ), url(${interfaceImage})`
    },
    "&:nth-child(2)": {
      backgroundImage: `linear-gradient(
      rgba(255,255,255, 0.3), 
      rgba(255,255,255, 0.3)
    ), url(${freeDrawImage})`
    },
    "&:nth-child(3)": {
      backgroundImage: `linear-gradient(
      rgba(255,255,255, 0.3), 
      rgba(255,255,255, 0.3)
    ), url(${testImage})`
    }
  },
  menuLink: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  menuItemText: {
    position: "absolute",
    top: 10,
    left: 10,
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
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <main>
      <Route path="/" exact>
        <h1 className={classes.title}>
          Вишиванка.js<span className={classes.slash}>/</span>Vyshyvanka.js
        </h1>
        <nav>
          <ul className={classes.menu}>
            <li className={classes.menuItem}>
              <Link to="/star-diamond" className={classes.menuLink}>
                <span className={classes.menuItemText}>Star Interface</span>
              </Link>
            </li>
            <li className={classes.menuItem}>
              <Link to="/free-draw" className={classes.menuLink}>
                <span className={classes.menuItemText}>Free Draw</span>
              </Link>
            </li>
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
      <Route path="/star-diamond">
        <Link to="/" className={classes.backLink}>
          Back
        </Link>
        <ColorPicker />
        <AudioStartButton />
        <div className={classes.embroidery}>
          <StarDiamond />
        </div>
      </Route>
      <Route path="/free-draw">
        <Link to="/" className={classes.backLink}>
          Back
        </Link>
        <ColorPicker />
        <div className={classes.embroidery}>
          <FreeDraw />
        </div>
      </Route>
    </main>
  );
}
