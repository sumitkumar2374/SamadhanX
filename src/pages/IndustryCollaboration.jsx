import {
  Building2,
  Users,
  Handshake,
  Rocket,
  ArrowRight,
} from "lucide-react";

const opportunities = [
  {
    icon: Handshake,
    title: "Mentorship",
    text: "Guide university teams with industry knowledge and practical expertise.",
  },
  {
    icon: Rocket,
    title: "Funding & Support",
    text: "Support promising solutions through funding, resources, and technology.",
  },
  {
    icon: Users,
    title: "Technical Collaboration",
    text: "Work directly with students, faculty, and multidisciplinary teams.",
  },
];

const projects = [
  {
    title: "Digital Learning Platform",
    domain: "Education",
    university: "Birla Institute of Technology, Mesra",
    status: "Seeking Mentor",
  },
  {
    title: "Smart Waste Management",
    domain: "Environment",
    university: "NIT Jamshedpur",
    status: "Seeking Industry Partner",
  },
  {
    title: "Rural Healthcare Access",
    domain: "Healthcare",
    university: "Central University of Jharkhand",
    status: "Open for Collaboration",
  },
];

function IndustryCollaboration() {
  return (
    <main className="industry-page">
      <div className="industry-header">
        <span>INDUSTRY COLLABORATION</span>

        <h1>
          Turn expertise into
          <br />
          <strong>real impact.</strong>
        </h1>

        <p>
          Connect with university teams and support solutions
          that address meaningful societal challenges.
        </p>
      </div>

      <section className="opportunities-section">
        <span>WAYS TO COLLABORATE</span>

        <div className="opportunities-grid">
          {opportunities.map((item) => {
            const Icon = item.icon;

            return (
              <div className="opportunity-card" key={item.title}>
                <div className="opportunity-icon">
                  <Icon size={22} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="industry-projects">
        <div className="industry-projects-heading">
          <div>
            <span>PROJECTS SEEKING COLLABORATION</span>
            <h2>Find a project worth supporting.</h2>
          </div>
        </div>

        <div className="industry-project-grid">
          {projects.map((project) => (
            <div className="industry-project-card" key={project.title}>
              <div className="industry-project-top">
                <span>{project.domain}</span>
                <small>{project.status}</small>
              </div>

              <h3>{project.title}</h3>

              <p>
                <Building2 size={15} />
                {project.university}
              </p>

              <button className="industry-btn">
                Explore Project
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default IndustryCollaboration;