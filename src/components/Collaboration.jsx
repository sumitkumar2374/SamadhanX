import {
  Users,
  GraduationCap,
  Building2,
  Landmark,
} from "lucide-react";

const partners = [
  {
    icon: Users,
    title: "Citizens",
    text: "Raise real-world challenges from your community.",
  },
  {
    icon: GraduationCap,
    title: "Universities",
    text: "Bring students and faculty expertise to solve problems.",
  },
  {
    icon: Building2,
    title: "Industry",
    text: "Mentor, fund, test, and help scale solutions.",
  },
  {
    icon: Landmark,
    title: "Government",
    text: "Track challenges, projects, and social outcomes.",
  },
];

function Collaboration() {
  return (
    <section className="collaboration">
      <div className="section-heading">
        <span>ONE PLATFORM. MANY CONTRIBUTORS.</span>

        <h2>
          Bringing the right people
          <br />
          <strong>together.</strong>
        </h2>

        <p>
          Every challenge needs the right combination of people,
          knowledge, resources, and collaboration.
        </p>
      </div>

      <div className="partner-grid">
        {partners.map((partner) => {
          const Icon = partner.icon;

          return (
            <div className="partner-card" key={partner.title}>
              <div className="partner-icon">
                <Icon size={22} />
              </div>

              <h3>{partner.title}</h3>

              <p>{partner.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Collaboration; 