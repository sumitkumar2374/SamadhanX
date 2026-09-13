import { useLocation, useNavigate } from "react-router-dom";
import { MapPin, ArrowLeft, Users, Sparkles } from "lucide-react";

function ChallengeDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const challenge = location.state;

  if (!challenge) {
    return (
      <main className="challenge-details">
        <h2>Challenge not found</h2>
        <button onClick={() => navigate("/challenges")}>
          Back to Challenges
        </button>
      </main>
    );
  }

  return (
    <main className="challenge-details">
      <button className="back-btn" onClick={() => navigate("/challenges")}>
        <ArrowLeft size={16} />
        Back to Challenges
      </button>

      <div className="details-header">
        <span>{challenge.category}</span>

        <h1>{challenge.title}</h1>

        <p className="details-location">
          <MapPin size={16} />
          {challenge.location}
        </p>
      </div>

      <div className="details-grid">
        <section className="details-card">
          <span>PROBLEM DESCRIPTION</span>
          <h2>Understanding the challenge</h2>
          <p>{challenge.description}</p>
        </section>

        <section className="details-card">
          <span>COLLABORATION</span>
          <div className="collaboration-detail">
            <Users size={20} />
            <div>
              <h3>Looking for collaborators</h3>
              <p>
                Universities, students, faculty, and industry partners can
                contribute to solving this challenge.
              </p>
            </div>
          </div>
        </section>
      </div>

      <button
        className="details-action"
        onClick={() =>
          navigate("/collaboration-request", {
            state: challenge,
          })
        }
      >
        <Sparkles size={17} />
        Start Collaboration
      </button>
    </main>
  );
}

export default ChallengeDetails;
