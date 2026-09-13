import {
  Landmark,
  ClipboardList,
  GraduationCap,
  Building2,
  Rocket,
} from "lucide-react";

const domainData = [
  { name: "Education", count: 320 },
  { name: "Agriculture", count: 245 },
  { name: "Healthcare", count: 210 },
  { name: "Environment", count: 185 },
];

function GovernmentDashboard() {
  return (
    <main className="government-dashboard">
      <div className="government-header">
        <div>
          <span>GOVERNMENT DASHBOARD</span>

          <h1>
            Monitor challenges.
            <br />
            <strong>Measure impact.</strong>
          </h1>

          <p>
            Track challenges, institutional participation, projects,
            and collaboration across the innovation ecosystem.
          </p>
        </div>

        <div className="government-icon">
          <Landmark size={30} />
        </div>
      </div>

      <div className="government-stats">
        <div className="government-stat">
          <ClipboardList size={21} />
          <h3>1,250+</h3>
          <p>Total Challenges</p>
        </div>

        <div className="government-stat">
          <GraduationCap size={21} />
          <h3>85+</h3>
          <p>Universities</p>
        </div>

        <div className="government-stat">
          <Building2 size={21} />
          <h3>120+</h3>
          <p>Industry Partners</p>
        </div>

        <div className="government-stat">
          <Rocket size={21} />
          <h3>340+</h3>
          <p>Active Projects</p>
        </div>
      </div>

      <section className="domain-section">
        <span>CHALLENGES BY DOMAIN</span>

        <h2>Where are problems coming from?</h2>

        <div className="domain-grid">
          {domainData.map((domain) => (
            <div className="domain-card" key={domain.name}>
              <div>
                <h3>{domain.name}</h3>
                <p>Submitted challenges</p>
              </div>

              <strong>{domain.count}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default GovernmentDashboard;