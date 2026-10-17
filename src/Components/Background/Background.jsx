import React from "react";
import "./Background.css";
import image1 from "../../assets/images/hero/angel-devil-1920.webp";
import image2 from "../../assets/images/hero/weapons-1920.webp";
import image3 from "../../assets/images/hero/makima-eyes-1920.webp";
import PropTypes from "prop-types";

const images = [image1, image2, image3];

// Once the first slide has loaded, fetch the rest in the background so
// switching slides doesn't flash an empty frame.
const preloadOtherSlides = () => {
  images.slice(1).forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const Background = ({ heroCount }) => {
  return (
    <img
      key={heroCount}
      src={images[heroCount]}
      className="background-image fade-in"
      alt=""
      fetchpriority={heroCount === 0 ? "high" : undefined}
      onLoad={heroCount === 0 ? preloadOtherSlides : undefined}
    />
  );
};
Background.propTypes = {
  heroCount: PropTypes.number.isRequired, // Add PropTypes validation
};

export default Background;
