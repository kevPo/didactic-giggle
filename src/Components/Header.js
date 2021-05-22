import React from "react";

const Header = () => (
  <header>
    <div className="intro-box">
      <img src={ require('../avi-website.png') } />
    </div>
    <div className="bio">
      <h1>Kevin Poston</h1>
      <p>
        Selfless software engineer with ten years of experience developing
        software for a variety of domains in both the private and public
        sectors. Specializes in leading teams to build maintainable software
        with automated testing and well-established design patterns.
      </p>
    </div>
    <div></div>
  </header>
);

export default Header;
