import React from "react";
import Fade from 'react-reveal/Fade';

const Header = () => (
  <header>
    <Fade left>
      <div className="intro-box">
        <img src={ require('../avi-website.png') } />
      </div>
    </Fade>
    <Fade right>
      <div className="bio">
        <h1>Kevin Poston</h1>
        <p>
          Selfless software engineer with ten years of experience developing
          software for a variety of domains in both the private and public
          sectors. Specializes in leading teams to build maintainable software
          with automated testing and well-established design patterns.
        </p>
      </div>
    </Fade>
    <div>
    </div>
  </header>
);

export default Header;
