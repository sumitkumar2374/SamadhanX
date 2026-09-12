import {
  FileText,
  Sparkles,
  GraduationCap,
  Handshake,
  Rocket,
  HeartHandshake,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Report a Challenge",
    description:
      "Citizens, communities, and organizations submit real-world challenges with relevant details.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "AI Analysis",
    description:
      "The platform analyzes the challenge and suggests its domain, priority, and relevant tags.",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Find the Right University",
    description:
      "Validated challenges are matched with universities based on expertise and capabilities.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Collaborate",
    description:
      "Students, faculty, industries, startups, and organizations collaborate on the challenge.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Build & Deploy",
    description:
      "Teams develop, test, and validate practical solutions for the identified problem.",
  },
  {
    icon: HeartHandshake,
    number: "06",
    title: "Create Impact",
    description:
      "Successful solutions can be deployed and their social impact can be tracked.",
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="section-heading">
        <span>HOW IT WORKS</span>

        <h2>
          From a challenge
          <br />
          to <strong>real-world impact.</strong>
        </h2>

        <p>
          MadTechX brings the right people and organizations together
          to turn meaningful challenges into practical solutions.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div className="step-card" key={step.number}>
              <div className="step-top">
                <div className="step-icon">
                  <Icon size={21} />
                </div>

                <span>{step.number}</span>
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HowItWorks;