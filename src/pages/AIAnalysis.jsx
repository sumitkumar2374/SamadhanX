import { useLocation, useNavigate } from "react-router-dom";
import {
  Sparkles,
  CheckCircle2,
  MapPin,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

function AIAnalysis() {
  const location = useLocation();
  const navigate = useNavigate();
  const challenge = location.state;
  const priority =
    challenge?.description?.length > 150
      ? "High"
      : challenge?.description?.length > 60
        ? "Medium"
        : "Low";

  const tags = {
    Education: [
      "Digital Learning",
      "Rural Education",
      "Students",
      "Technology Access",
    ],
    Agriculture: [
      "Smart Farming",
      "Rural Development",
      "Farmers",
      "Technology",
    ],
    Healthcare: [
      "Healthcare Access",
      "Public Health",
      "Community",
      "Technology",
    ],
    Environment: [
      "Sustainability",
      "Waste Management",
      "Environment",
      "Community",
    ],
    Water: [
      "Water Access",
      "Water Management",
      "Rural Development",
      "Sustainability",
    ],
    Energy: [
      "Renewable Energy",
      "Energy Access",
      "Sustainability",
      "Technology",
    ],
    "Urban Development": [
      "Smart Cities",
      "Infrastructure",
      "Urban Planning",
      "Technology",
    ],
  }[challenge?.domain] || [
    "Community Development",
    "Technology",
    "Social Impact",
  ];
  return (
    <main className="ai-analysis-page">
      <div className="ai-header">
        <span>AI-ASSISTED ANALYSIS</span>

        <h1>
          Understanding your
          <br />
          <strong>challenge.</strong>
        </h1>

        <p>
          Our AI-assisted system analyzes the submitted challenge and identifies
          its domain, priority, and potential collaboration opportunities.
        </p>
      </div>

      <div className="analysis-card">
        <div className="analysis-top">
          <div className="analysis-icon">
            <Sparkles size={22} />
          </div>

          <div>
            <span>ANALYSIS COMPLETE</span>
            <h2>Challenge Analysis</h2>
            <p>{challenge?.title}</p>
          </div>

          <CheckCircle2 className="success-icon" size={24} />
        </div>
        <div className="submitted-description">
          <span>PROBLEM DESCRIPTION</span>
          <p>{challenge?.description}</p>
        </div>

        <div className="analysis-grid">
          <div className="analysis-item">
            <span>DOMAIN</span>
            <h3>{challenge?.domain}</h3>
          </div>

          <div className="analysis-item">
            <span>PRIORITY</span>
            <h3 className="priority-high">{priority}</h3>
          </div>

          <div className="analysis-item">
            <span>LOCATION</span>
            <h3>
              <MapPin size={16} />
              {challenge?.location}
            </h3>
          </div>
        </div>

        <div className="analysis-section">
          <span>IDENTIFIED TAGS</span>

          <div className="tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="analysis-section">
          <span>RECOMMENDED COLLABORATION</span>

          <div className="recommendation">
            <div className="recommendation-icon">
              <GraduationCap size={21} />
            </div>

            <div>
              <h3>
                {challenge?.domain === "Education"
                  ? "University Partnership"
                  : "Industry & University Collaboration"}
              </h3>

              <p>
                {challenge?.domain === "Education"
                  ? "Universities with expertise in education and digital technologies may be suitable for this challenge."
                  : "Universities and industry partners with relevant expertise may collaborate on this challenge."}
              </p>
            </div>
          </div>
        </div>

        <button
          className="analysis-btn"
          onClick={() =>
            navigate("/recommended-universities", {
              state: challenge,
            })
          }
        >
          View Recommended Universities
          <ArrowRight size={17} />
        </button>
      </div>
    </main>
  );
}

export default AIAnalysis;
