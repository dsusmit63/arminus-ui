import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
];

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Logo */}
        <Link to="/" className="logo" aria-label="Arminus Home">
          <img
            src="http://arminus.co.in/img/arminus-logo.png"
            alt="Arminus company logo"
          />
        </Link>

        {/* Navigation */}
        <nav className="navbar-right" aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map(({ label, to }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  end={to === "/"}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link to="/contact" className="navbar-cta">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
