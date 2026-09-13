import { useNavigate } from "react-router-dom";
const challenges = [
  {
    category: "Education",
    title: "Improving Digital Learning Access in Rural Areas",
    location: "Rural Jharkhand",
    status: "Open",
  },
  {
    category: "Environment",
    title: "Smart Waste Management for Local Communities",
    location: "Ranchi, Jharkhand",
    status: "Open",
  },
  {
    category: "Healthcare",
    title: "Making Basic Healthcare More Accessible",
    location: "Remote Communities",
    status: "In Review",
  },
];

function FeaturedChallenges() {
  const navigate = useNavigate();
  return (
    <section className="featured-challenges">
      <div className="challenge-heading">
        <div>
          <span>EXPLORE REAL PROBLEMS</span>

          <h2>
            Challenges waiting
            <br />
            for <strong>solutions.</strong>
          </h2>
        </div>

        <button
          className="view-all-btn"
          onClick={() => navigate("/challenges")}
        >
          View All Challenges →
        </button>
      </div>

      <div className="challenge-grid">
        {challenges.map((challenge) => (
          <div className="challenge-card" key={challenge.title}>
            <div className="challenge-top">
              <span className="category">{challenge.category}</span>

              <span className="status">{challenge.status}</span>
            </div>

            <h3>{challenge.title}</h3>

            <p>📍 {challenge.location}</p>

            <button
              className="challenge-btn"
              onClick={() =>
                navigate("/challenge-details", { state: challenge })
              }
            >
              View Challenge →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedChallenges;
