import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  content: {
    maxWidth: "40em"
  }
});

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to="/" className={classes.backLink}>
        Back
      </Link>
      <div className={classes.content}>
        <h1>Vyshyvanka.js</h1>
        <p>
          Vyshyvanka.js is a cross-stitch embroidery interface for drawing and
          editing embroidery patterns and an instrumental interface that
          sonifies embroidery patterns through mouse click interactions.
          Vyshyvanka is a name for a traditional embroidered Ukrainian shirt
          with distinctive patterns that vary by region and carry meanings that
          range from narrative to spiritual and mythological, acting as
          protective talismans for the wearer. Users of Vyshyvanka.js can use
          the examples on the site for inspiration and attempt to draw their own
          patterns in addition to interacting with the sound interface we have
          created.
        </p>
        <h2>Common Patterns/Symbols</h2>
        <ul>
          <li>
            <b>Circular patterns</b> embody divine perfection, also symbolising
            the sun
          </li>
          <li>
            <b>Square</b> symbolises perfection/harmony/order/earth - divided
            into equal portions fields 4 corners of the square - natural events
            occurring in fours, such as change of seasons, etc
          </li>
          <li>
            <b>Triangle:</b> narrow gate that leads to eternal life, also
            associated with fire Triangles whose tips touching each other -
            world and anti-world - transition from one world onto the other
          </li>
          <li>
            <b>Spirals</b> (vertically arranged parallel zigzags) - wavy lines -
            the fluidity of life - represents water
          </li>
          <li>
            <b>Chevrons</b> - open triangles - pointing down: female symbol -
            pointing upward: male
          </li>
          <li>
            <b>Cross</b> - symbolises centricity/not separation of forces/two
            crosses forms an eight-pointed star (a union of male and female)
          </li>
          <li>
            <b>Star</b> a cross superimposed with an oblique cross (male and
            female) joined together an 8 cornered star (octahedron) - an energy
            field formed around living beings
          </li>
          <li>
            <b>Winding Dance Lines</b> - a symbol of vitality, harmonious flow
            of life
          </li>
          <li>
            <b>Lozenges</b> (two triangles also rhombus) - fertility,
            female/male relations Lozenges with hooks - heavenly moisture that
            gives life
          </li>
        </ul>
        <h2>The Interface</h2>
        <p>
          For the current iteration of the instrumental interface, we chose to
          focus on the star that combines a few shapes like superimposed
          crosses, forming eight triangle shapes within a square. The star to us
          represents an energy field that is both radiant and threatening as a
          magical ethereal body composed of combustible gas materials. In the
          interface, this energy is represented by a combination of note
          patterns sonified through different synths in Tone.js.
        </p>
        <p>
          We took inspiration from Tom Johnson’s illustrated music in which he
          signifies different geometrical shapes by calculating repeatable note
          instances for different triangles, squares and block patterns. In the
          star shape, the triangles and squares use the repeating patterns
          centred around D Dorian and C Aeolian modes. These modes are
          representative of early Ukrainian traditional music. Thus the driving
          energy of the repeatable patterns with geometrical considerations for
          repeatability of certain notes within a D Dorian mode through Tone.js
          synths patterns and sequences is what the user mostly hears when
          interacting with the star-shaped instrumental interface. The interface
          is designed with delay, reverb, pitch-shift up and down at each corner
          of the star diamond. Also, one can change the velocity and volume of
          the patterns by clicking on four black corners of the star design.
        </p>
      </div>
    </div>
  );
}
