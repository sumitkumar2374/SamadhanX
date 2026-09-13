import { GraduationCap, MapPin, ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";

const universityData = {
  Education: [
    {
      name: "Central University of Jharkhand",
      location: "Ranchi, Jharkhand",
      expertise: "Education & Research",
    },
    {
      name: "Birla Institute of Technology, Mesra",
      location: "Ranchi, Jharkhand",
      expertise: "Computer Science & Digital Technology",
    },
  ],

  Agriculture: [
    {
      name: "Birsa Agricultural University",
      location: "Ranchi, Jharkhand",
      expertise: "Agriculture & Rural Development",
    },
    {
      name: "Birla Institute of Technology, Mesra",
      location: "Ranchi, Jharkhand",
      expertise: "Technology & Engineering",
    },
  ],

  Healthcare: [
    {
      name: "AIIMS Deoghar",
      location: "Deoghar, Jharkhand",
      expertise: "Healthcare & Medical Research",
    },
    {
      name: "Birla Institute of Technology, Mesra",
      location: "Ranchi, Jharkhand",
      expertise: "Technology & Engineering",
    },
  ],

  Environment: [
    {
      name: "National Institute of Technology, Jamshedpur",
      location: "Jamshedpur, Jharkhand",
      expertise: "Technology & Environmental Engineering",
    },
    {
      name: "Birla Institute of Technology, Mesra",
      location: "Ranchi, Jharkhand",
      expertise: "Technology & Sustainability",
    },
  ],
};

function RecommendedUniversities() {
  const location = useLocation();
  const challenge = location.state;

  const universities =
    universityData[challenge?.domain] || universityData.Education;
  return (
    <main className="universities-page">
      <div className="universities-header">
        <span>RECOMMENDED UNIVERSITIES</span>

        <h1>
          Find the right
          <br />
          <strong>expertise.</strong>
        </h1>

        <p>
          Based on your {challenge?.domain || "submitted"} challenge, these
          universities may be suitable for collaboration and solution
          development.
        </p>
      </div>

      <div className="universities-grid">
        {universities.map((university) => (
          <div className="university-card" key={university.name}>
            <div className="university-icon">
              <GraduationCap size={22} />
            </div>

            <h2>{university.name}</h2>

            <p className="university-location">
              <MapPin size={15} />
              {university.location}
            </p>

            <p className="university-expertise">{university.expertise}</p>

            <button className="university-btn">
              View University
              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default RecommendedUniversities;
