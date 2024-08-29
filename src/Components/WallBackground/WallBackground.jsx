import './WallBackground.css'
import image1 from '../../assets/images/background/white-wall-bg.jpg'
import image2 from '../../assets/images/background/black-flowers.jpg'
import image3 from '../../assets/images/background/black-wall.jpg'

import PropTypes from 'prop-types';

const Background = ({heroCount}) => {
  if(heroCount === 0)
  {
    return <img src={image1} className= 'background fade-in' alt="" />
  }
  if(heroCount === 1)
  {
    return <img src={image2} className= 'background fade-in' alt="" />
  }
  if(heroCount === 2)
  {
    return <img src={image3} className= 'background fade-in' alt="" />
  }
}
Background.propTypes = {
  heroCount: PropTypes.number.isRequired, // Add PropTypes validation
};

export default Background
