import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Handshake, Send, ArrowLeft, CheckCircle2 } from "lucide-react";

function CollaborationRequest() {
  const location = useLocation();
  const navigate = useNavigate();
  const challenge = location.state;

  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="collaboration-request">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={16} />
        Back
      </button>

      <div className="request-header">
        <div className="request-icon">
          <Handshake size={24} />
        </div>

        <span>COLLABORATION REQUEST</span>

        <h1>
          Let's work together
          <br />
          <strong>to solve this challenge.</strong>
        </h1>

        <p>
          Send a collaboration request to contribute your expertise, resources,
          or mentorship.
        </p>
      </div>

      <div className="request-card">
        <div className="request-challenge">
          <span>SELECTED CHALLENGE</span>
          <h2>{challenge?.title || "Challenge"}</h2>
          <p>
            {challenge?.category || "General"} • {challenge?.location}
          </p>
        </div>

        {submitted ? (
          <div className="request-success">
            <CheckCircle2 size={45} />

            <h2>Request Sent Successfully!</h2>

            <p>
              Your collaboration request has been submitted. The project team
              can now review your request.
            </p>

            <button
              className="request-btn"
              onClick={() => navigate("/challenges")}
            >
              Back to Challenges
              <ArrowLeft size={16} />
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Your message</label>

            <textarea
              rows="5"
              placeholder="Explain how you can contribute..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit" className="request-btn">
              Send Collaboration Request
              <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </main>
  );
}

export default CollaborationRequest;
