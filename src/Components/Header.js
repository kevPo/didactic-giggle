import React from "react";
import Fade from "react-reveal/Fade";

const Header = () => (
  <header>
    <Fade left>
      <div className="intro-box">
        <img src={require("../avi-website.png")} />
      </div>
    </Fade>
    <Fade right>
      <div className="bio">
        <h1>Kevin Poston</h1>
        <p className="no-mobile">
          For over 11 years now I have taken pride in being an engineer that was
          not tied to a specific language or technology stack. I have enjoyed
          the journey of learning how different languages and paradigms solve
          common problems in a unique way. Well except for JavaScript
          frameworks, those are awful. I'm kidding, well mostly. Below you will
          find a summary of the different tools I've used over the years in a
          production environment.
        </p>
      </div>
    </Fade>
    <Fade bottom>
      <p className="bio mobile-only">
        For over 11 years now I have taken pride in being an engineer that was
        not tied to a specific language or technology stack. I have enjoyed the
        journey of learning how different languages and paradigms solve common
        problems in a unique way. Well except for JavaScript frameworks, those
        are awful. I'm kidding, well mostly. Below you will find a summary of
        the different tools I've used over the years in a production
        environment.
      </p>
    </Fade>
  </header>
);

export default Header;
