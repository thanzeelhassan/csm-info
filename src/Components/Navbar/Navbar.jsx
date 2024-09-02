import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">CSM Info</div>
      <ul className="nav-menu">
        <li>
          <Link to="/csm-info" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/csm-info/discussions" className="nav-link">
            Discussions
          </Link>
        </li>
        <li>
          <Link to="/csm-info/colouredManga" className="nav-link">
            Coloured Manga
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
