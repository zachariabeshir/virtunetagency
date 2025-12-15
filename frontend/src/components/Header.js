import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" aria-label="VirtuNet Home">
          VirtuNet
        </Link>

        <nav className="nav" aria-label="Primary">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/services" className="nav-link">
            Services
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link cta">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
