import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  Users,
  Building2,
} from "lucide-react";

const milestones = [
  {
    title: "Challenge Validation",
    description: "Problem reviewed and validated by the university.",
    status: "Completed",
  },
  {
    title: "Team Formation",
    description: "Students and faculty members joined the project team.",
    status: "Completed",
  },
  {
    title: "Prototype Development",
    description: "The team is building and testing the proposed solution.",
    status: "In Progress",
  },
  {
    title: "Industry Validation",
    description: "Industry partners review the solution and provide feedback.",
    status: "Upcoming",
  },
  {
    title: "Deployment",
    description: "Validated solution is prepared for real-world deployment.",
    status: "Upcoming",
  },
];

function ProjectTracking() {
  return (
    <main className="project-tracking">
      <div className="tracking-header">
        <span>PROJECT TRACKING</span>

        <h1>
          From idea to
          <br />
          <strong>real-world impact.</strong>
        </h1>

        <p>
          Track project milestones, team collaboration, and solution
          development from validation to deployment.
        </p>
      </div>

      <div className="project-overview">
        <div>
          <span>PROJECT</span>
          <h2>Improving Digital Learning Access</h2>
          <p>Education • Rural Jharkhand</p>
        </div>

        <div className="project-progress">
          <span>OVERALL PROGRESS</span>
          <strong>72%</strong>

          <div className="tracking-progress-bar">
            <div
              className="tracking-progress-fill"
              style={{ width: "72%" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="tracking-info">
        <div>
          <Users size={20} />
          <span>Team Alpha</span>
        </div>

        <div>
          <Building2 size={20} />
          <span>Industry Partner</span>
        </div>

        <div>
          <Clock3 size={20} />
          <span>3 Months Timeline</span>
        </div>
      </div>

      <section className="milestones-section">
        <span>PROJECT MILESTONES</span>

        <div className="milestones-list">
          {milestones.map((milestone) => (
            <div className="milestone" key={milestone.title}>
              <div className="milestone-icon">
                {milestone.status === "Completed" ? (
                  <CheckCircle2 size={20} />
                ) : (
                  <Clock3 size={20} />
                )}
              </div>

              <div className="milestone-content">
                <div className="milestone-top">
                  <h3>{milestone.title}</h3>
                  <span>{milestone.status}</span>
                </div>

                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectTracking;