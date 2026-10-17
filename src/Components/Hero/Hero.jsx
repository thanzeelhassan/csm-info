import React from "react";
import "./Hero.css";
import PropTypes from "prop-types";

const slideName = (slide) => [slide.text1, slide.text2].join(" ").trim();

const Hero = ({ slides, setHeroCount, heroCount }) => {
  const heroData = slides[heroCount];

  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          {slides.map((slide, index) => (
            <li key={slideName(slide)}>
              <button
                type="button"
                onClick={() => setHeroCount(index)}
                className={heroCount === index ? "hero-dot orange" : "hero-dot"}
                aria-label={`Show slide ${index + 1}: ${slideName(slide)}`}
                aria-current={heroCount === index ? "true" : undefined}
              />
            </li>
          ))}
        </ul>
        <div className="hero-play"></div>
      </div>
    </div>
  );
};
Hero.propTypes = {
  heroCount: PropTypes.number.isRequired,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      text1: PropTypes.string,
      text2: PropTypes.string,
    })
  ).isRequired,
  setHeroCount: PropTypes.func.isRequired,
};

export default Hero;
