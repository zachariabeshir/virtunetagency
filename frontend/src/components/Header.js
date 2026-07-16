import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" aria-label="VirtuNet homepage">
          <span className="logo-mark">VN</span>
          <span>VirtuNet</span>
        </Link>

        <button
          className={`menu-toggle${menuOpen ? " open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`nav${menuOpen ? " open" : ""}`}
          aria-label="Primary navigation"
        >
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>

          <NavLink to="/services" className="nav-link">
            Services
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>

          <NavLink to="/contact" className="nav-link header-cta">
            Request a Consultation
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;