import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import SubmitChallenge from "./pages/SubmitChallenge";
import AIAnalysis from "./pages/AIAnalysis";
import RecommendedUniversities from "./pages/RecommendedUniversities";
import ChallengeExplorer from "./pages/ChallengeExplorer";
import UniversityDashboard from "./pages/UniversityDashboard";
import IndustryCollaboration from "./pages/IndustryCollaboration";
import GovernmentDashboard from "./pages/GovernmentDashboard";
import ProjectTracking from "./pages/ProjectTracking";
import ChallengeDetails from "./pages/ChallengeDetails";
import CollaborationRequest from "./pages/CollaborationRequest";
import Notifications from "./pages/Notifications";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/submit" element={<SubmitChallenge />} />
        <Route path="/ai-analysis" element={<AIAnalysis />} />
        <Route
          path="/recommended-universities"
          element={<RecommendedUniversities />}
        />
        <Route path="/challenges" element={<ChallengeExplorer />} />
        <Route path="/university-dashboard" element={<UniversityDashboard />} />
        <Route path="/collaborate" element={<IndustryCollaboration />} />
        <Route path="/government-dashboard" element={<GovernmentDashboard />} />
        <Route path="/project-tracking" element={<ProjectTracking />} />
        <Route path="/challenge-details" element={<ChallengeDetails />} />
        <Route
          path="/collaboration-request"
          element={<CollaborationRequest />}
        />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
