import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'>Chainsaw-Man</div>
      <ul className='nav-menu'>
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/explore" className="nav-link">Explore</Link>
        </li> 
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/discussions" className="nav-link">Discussions</Link>
        </li>
        <li>
          <Link to="/colouredManga" className="nav-link">Coloured Manga</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar