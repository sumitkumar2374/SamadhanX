import {
  GraduationCap,
  Users,
  ClipboardList,
  Clock,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    title: "Improving Digital Learning Access",
    domain: "Education",
    team: "Team Alpha",
    progress: 72,
    status: "In Progress",
  },
  {
    title: "Smart Waste Management",
    domain: "Environment",
    team: "Team Green",
    progress: 48,
    status: "In Progress",
  },
  {
    title: "Healthcare Access for Rural Communities",
    domain: "Healthcare",
    team: "Team Care",
    progress: 85,
    status: "Validation",
  },
];

function UniversityDashboard() {
  return (
    <main className="university-dashboard">
      <div className="dashboard-header">
        <div>
          <span>UNIVERSITY DASHBOARD</span>

          <h1>
            Turn expertise into
            <br />
            <strong>real solutions.</strong>
          </h1>

          <p>
            Manage assigned challenges, student teams, and
            ongoing solution projects.
          </p>
        </div>

        <div className="university-profile">
          <GraduationCap size={24} />
          <div>
            <strong>Birla Institute of Technology</strong>
            <span>Mesra, Ranchi</span>
          </div>
        </div>
      </div>

      <div className="dashboard-stats">
        <div className="dashboard-stat">
          <ClipboardList size={21} />
          <div>
            <h3>24</h3>
            <p>Assigned Challenges</p>
          </div>
        </div>

        <div className="dashboard-stat">
          <Users size={21} />
          <div>
            <h3>12</h3>
            <p>Active Teams</p>
          </div>
        </div>

        <div className="dashboard-stat">
          <Clock size={21} />
          <div>
            <h3>8</h3>
            <p>Projects In Progress</p>
          </div>
        </div>
      </div>

      <section className="projects-section">
        <div className="projects-heading">
          <div>
            <span>ACTIVE PROJECTS</span>
            <h2>Solutions in progress.</h2>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-top">
                <span>{project.domain}</span>
                <small>{project.status}</small>
              </div>

              <h3>{project.title}</h3>

              <p>
                <Users size={15} />
                {project.team}
              </p>

              <div className="progress-info">
                <span>Project Progress</span>
                <strong>{project.progress}%</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>

              <button className="project-btn">
                View Project
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default UniversityDashboard;