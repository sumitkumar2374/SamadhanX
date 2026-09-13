import { MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
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
  {
    category: "Agriculture",
    title: "Smart Solutions for Small Farmers",
    location: "Rural Jharkhand",
    status: "Open",
  },
];

function ChallengeExplorer() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredChallenges =
    selectedCategory === "All"
      ? challenges
      : challenges.filter(
          (challenge) => challenge.category === selectedCategory,
        );

  const navigate = useNavigate();
  return (
    <main className="explorer-page">
      <div className="explorer-header">
        <span>CHALLENGE EXPLORER</span>

        <h1>
          Discover problems
          <br />
          <strong>worth solving.</strong>
        </h1>

        <p>
          Explore real-world challenges submitted by communities and
          organizations across different domains.
        </p>
      </div>

      <div className="explorer-filters">
        {["All", "Education", "Agriculture", "Healthcare", "Environment"].map(
          (category) => (
            <button
              key={category}
              className={`filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ),
        )}
      </div>

      <div className="explorer-grid">
        {filteredChallenges.map((challenge) => (
          <div className="explorer-card" key={challenge.title}>
            <div className="explorer-top">
              <span className="category">{challenge.category}</span>

              <span className="status">{challenge.status}</span>
            </div>

            <h2>{challenge.title}</h2>

            <p className="explorer-location">
              <MapPin size={15} />
              {challenge.location}
            </p>

            <button
              className="explorer-btn"
              onClick={() =>
                navigate("/challenge-details", {
                  state: challenge,
                })
              }
            >
              View Challenge
              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ChallengeExplorer;
