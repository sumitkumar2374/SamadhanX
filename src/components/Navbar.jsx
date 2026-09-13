import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Bell, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("userRole")),
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("userRole")));
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <div className="brand-logo">
          <img src="/samadhanx-icon.svg" alt="SamadhanX logo" />
        </div> 
        <div>
          <h2>
            Samadhan<span className="brand-x">X</span>
          </h2>
          <span>Innovation Network</span>
        </div>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/challenges">Explore Challenges</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/collaborate">Collaborate</Link>
        <Link to="/project-tracking">Project Tracking</Link>
      </div>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/challenges" onClick={() => setMenuOpen(false)}>
            Explore Challenges
          </Link>

          <Link to="/how-it-works" onClick={() => setMenuOpen(false)}>
            How It Works
          </Link>

          <Link to="/collaborate" onClick={() => setMenuOpen(false)}>
            Collaborate
          </Link>

          <Link to="/project-tracking" onClick={() => setMenuOpen(false)}>
            Project Tracking
          </Link>

          <Link to="/submit" onClick={() => setMenuOpen(false)}>
            Report a Challenge
          </Link>
          <Link to="/notifications" onClick={() => setMenuOpen(false)}>
            Notifications
          </Link>

          {isLoggedIn ? (
            <button
              className="mobile-logout"
              onClick={() => {
                localStorage.removeItem("userRole");
                setIsLoggedIn(false);
                setMenuOpen(false);
                navigate("/");
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/signin" onClick={() => setMenuOpen(false)}>
              Sign In
            </Link>
          )}
        </div>
      )}

      <div className="nav-actions">
        <Link to="/notifications" className="notification-btn">
          <Bell size={19} />
        </Link>

        {isLoggedIn ? (
          <button
            className="signin"
            onClick={() => {
              localStorage.removeItem("userRole");
              setIsLoggedIn(false);
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/signin" className="signin">
            Sign In
          </Link>
        )}

        <Link to="/submit" className="report-btn">
          Report a Challenge
          <ArrowRight size={17} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
