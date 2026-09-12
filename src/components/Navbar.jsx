import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <div className="brand-logo">M</div>

        <div>
          <h2>MadTechX</h2>
          <span>Innovation Network</span>
        </div>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/challenges">Explore Challenges</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/collaborate">Collaborate</Link>
      </div>

      <div className="nav-actions">
        <Link to="/signin" className="signin">
          Sign In
        </Link>

        <Link to="/submit" className="report-btn">
          Report a Challenge
          <ArrowRight size={17} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar; 