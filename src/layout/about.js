import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import circles from "../assets/about/circles.jpeg";
import spirals from "../assets/about/spirals.jpg";
import triangle from "../assets/about/triangle.jpg";
import chevrons from "../assets/about/chevrons.jpg";
import cross from "../assets/about/cross.jpg";
import lozenge from "../assets/about/lozenge.jpeg";
import square from "../assets/about/square.jpg";
import star1 from "../assets/about/star1.jpg";
import star2 from "../assets/about/star2.jpg";
import star3 from "../assets/about/star3.jpg";
import windingdances from "../assets/about/windingdances.jpg";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  content: {
    maxWidth: "40em"
  },
  starGroup: {
    display: "flex",
    width: "100%",
    "& img": {
      maxWidth: "33%"
    }
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
            <p>
              <b>Circular patterns</b> embody divine perfection, also
              symbolising the sun
            </p>
            <img src={circles} />
          </li>
          <li>
            <p>
              <b>Square</b> symbolises perfection/harmony/order/earth - divided
              into equal portions fields 4 corners of the square - natural
              events occurring in fours, such as change of seasons, etc
            </p>
            <img src={square} />
          </li>
          <li>
            <p>
              <b>Triangle:</b> narrow gate that leads to eternal life, also
              associated with fire Triangles whose tips touching each other -
              world and anti-world - transition from one world onto the other
            </p>
            <img src={triangle} />
          </li>
          <li>
            <p>
              <b>Spirals</b> (vertically arranged parallel zigzags) - wavy lines
              - the fluidity of life - represents water
            </p>
            <img src={spirals} />
          </li>
          <li>
            <p>
              <b>Chevrons</b> - open triangles - pointing down: female symbol -
              pointing upward: male
              <img src={chevrons} />
            </p>
          </li>
          <li>
            <p>
              <b>Cross</b> - symbolises centricity/not separation of forces/two
              crosses forms an eight-pointed star (a union of male and female)
            </p>
            <img src={cross} />
          </li>
          <li>
            <p>
              <b>Star</b> a cross superimposed with an oblique cross (male and
              female) joined together an 8 cornered star (octahedron) - an
              energy field formed around living beings
              <div className={classes.starGroup}>
                <img src={star1} />
                <img src={star2} />
                <img src={star3} />
              </div>
            </p>
          </li>
          <li>
            <p>
              <b>Winding Dance Lines</b> - a symbol of vitality, harmonious flow
              of life
            </p>
            <img src={windingdances} />
          </li>
          <li>
            <p>
              <b>Lozenges</b> (two triangles also rhombus) - fertility,
              female/male relations Lozenges with hooks - heavenly moisture that
              gives life
            </p>
            <img src={lozenge} />
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
        <h2>Resources</h2>
        <cite>
          <a
            href="https://kutsenko.udpu.edu.ua/wp-content/%D0%9A%D0%BD%D0%B8%D0%B3%D0%B8/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D0%BA%D0%BE%D1%81%D1%82%D1%8E%D0%BC.pdf"
            rel="noreferrer nofollow"
            target="_blank"
          >
            Ukrainian Folk Costumes
          </a>{" "}
          (alternate link:{" "}
          <a
            href="https://web.archive.org/web/20191014114157/https://kutsenko.udpu.edu.ua/wp-content/%D0%9A%D0%BD%D0%B8%D0%B3%D0%B8/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D0%BA%D0%BE%D1%81%D1%82%D1%8E%D0%BC.pdf"
            rel="noreferrer nofollow"
            target="_blank"
          >
            Archived
          </a>
          ) (PDF) (in Ukrainian and English). Translated by Paszczak-Tracz,
          Orysia. Toronto — Philadelphia: the World Federation of Ukrainian
          Women's Organizations. Folk Art Committee. LCCN 90-071681.{" "}
        </cite>
        <h3>Symbols</h3>
        <p>
          Euromaidan Press:{" "}
          <a
            href="http://euromaidanpress.com/2016/05/19/secret-ancestral-codes-12-main-symbols-in-ukrainian-embroidery/"
            rel="noreferrer nofollow"
            target="_blank"
          >
            Secret ancestral codes: 12 main symbols in Ukrainian embroidery
          </a>
        </p>
        <h3>Fashion</h3>
        <p>
          Fashion For Fashionlovers:{" "}
          <a
            href="https://web.archive.org/web/20150529221857/http://fashionforfashionlovers.com/2015/05/14/designers-to-watch-vyshyvankas-by-vita-kin-traditional-ukrainian-chic/"
            rel="noreferrer nofollow"
            target="_blank"
          >
            DESIGNERS TO WATCH: Vyshyvankas by Vita Kin – Traditional Ukrainian
            Chic
          </a>
        </p>
        <p>
          Harper's Bazaar:{" "}
          <a
            href="https://www.harpersbazaar.com/fashion/trends/a10578/were-obsessed-vita-kin/"
            rel="noreferrer nofollow"
            target="_blank"
          >
            We're Obsessed: Vita Kin Introduces The Perfect Bohemia
          </a>
        </p>
      </div>
    </div>
  );
}
