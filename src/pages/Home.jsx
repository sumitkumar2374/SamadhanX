import Hero from "../components/Hero";
import { Users, GraduationCap, Building2, Landmark } from "lucide-react";
import Collaboration from "../components/Collaboration";
import FeaturedChallenges from "../components/FeaturedChallenges";
import ImpactStats from "../components/ImpactStats";

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

function Home() {
  return (
    <>
      {/* Hero Section ko call kiya gya h iska code component mein hero me h  */}
      <Hero />

      {/* Collaboration Section ko call kiya gya h iska code component mein collaboration me h  */}
      <Collaboration />

      {/* Featured Challenges ko call kiya gya h iska code component mein featured-challenges me h  */}
      <FeaturedChallenges />

      {/* Impact Stats ko call kiya gya h iska code component mein impact-stats me h  */}
      <ImpactStats />
    </>
  );
}

export default Home;
