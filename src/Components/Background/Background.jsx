import './Background.css'
import image1 from '../../assets/1278939.png'
import image2 from '../../assets/1343977.jpeg'
import image3 from '../../assets/1345656.png'
import image4 from '../../assets/1319295.jpeg'
import image5 from '../../assets/1298385.jpg'
import PropTypes from 'prop-types';

const Background = ({heroCount}) => {
  if(heroCount === 0)
  {
    return <img src={image1} className= 'background fade-in' alt="" />
  }
  else if(heroCount === 1)
  {
    return <img src={image2} className= 'background fade-in' alt="" />
  }
  else if(heroCount === 2)
  {
    return <img src={image3} className= 'background fade-in' alt="" />
  }
  else if(heroCount === 3)
    {
      return <img src={image4} className= 'background fade-in' alt="" />
    }
    else if(heroCount === 4)
  {
    return <img src={image5} className= 'background fade-in' alt="" />
  }
}
Background.propTypes = {
  heroCount: PropTypes.number.isRequired, // Add PropTypes validation
};

export default Background