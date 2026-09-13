import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userRole", role);

    if (role === "university") {
      navigate("/university-dashboard");
    } else if (role === "industry") {
      navigate("/collaborate");
    } else if (role === "government") {
      navigate("/government-dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <main className="signin-page">
      <div className="signin-card">
        <div className="signin-icon">
          <LogIn size={24} />
        </div>

        <span>SIGN IN</span>

        <h1>
          Welcome back to 
          <br />
          <strong>SamadhanX.</strong>
        </h1>

        <p>Sign in to manage challenges, collaborations, and projects.</p>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Choose Role</label>

          <select
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select your role</option>
            <option value="citizen">Citizen</option>
            <option value="university">University</option>
            <option value="industry">Industry</option>
            <option value="government">Government</option>
          </select>

          <button type="submit" className="signin-submit">
            Sign In
            <LogIn size={17} />
          </button>
        </form>
      </div>
    </main>
  );
}

export default SignIn;
