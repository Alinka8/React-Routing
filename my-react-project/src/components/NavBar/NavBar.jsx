// src/components/Navigation.jsx
import { NavLink } from "react-router-dom";
import "./navbar.css"; // Import the CSS file for styling

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/" exact activeClassName="active-link" className="nav-link">
        Home
      </NavLink>
      <NavLink
        to="/browse-characters"
        activeClassName="active-link"
        className="nav-link"
      >
        Browse Characters
      </NavLink>
      <NavLink to="/comics" activeClassName="active-link" className="nav-link">
        Comics
      </NavLink>
    </nav>
  );
};

export default Navigation;
