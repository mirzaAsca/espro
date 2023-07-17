// src/components/sections/Section1.js

import React from "react";
import ButtonWhite from "../common/ButtonWhite";
import "./Section1.scss";

const Section1 = () => {
  return (
    <section className="section1">
      <div className="content-wrapper">
        <h1 className="title">BREW ANYWHERE. BE ANYWHERE.</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo.
        </p>
        <ButtonWhite text="POUR ON THE GO" />
        <div className="explore-link">
          <span>
            EXPLORE
            <img
              src="https://i.ibb.co/nLncXQk/arrow-right-short-2x.png"
              className="arrow"
              alt="Arrow"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section1;
