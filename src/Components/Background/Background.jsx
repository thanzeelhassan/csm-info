import "./Background.css";
import image1 from "../../assets/images/Angel_devil.png";
import image2 from "../../assets/images/Weapons.jpeg";
import image3 from "../../assets/images/Makima_eyes.jpg";
import PropTypes from "prop-types";

const Background = ({ heroCount }) => {
  if (heroCount === 0) {
    return <img src={image1} className="background fade-in" alt="" />;
  } else if (heroCount === 1) {
    return <img src={image2} className="background fade-in" alt="" />;
  } else if (heroCount === 2) {
    return <img src={image3} className="background fade-in" alt="" />;
  }
};
Background.propTypes = {
  heroCount: PropTypes.number.isRequired, // Add PropTypes validation
};

export default Background;
