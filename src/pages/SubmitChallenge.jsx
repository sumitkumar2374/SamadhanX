import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SubmitChallenge() {
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState({
    title: "",
    description: "",
    domain: "",
    location: "",
    additionalInfo: "",
    photo: null,
    video: null,
    document: null,
  });
  return (
    <main className="submit-page">
      <div className="submit-header">
        <span>REPORT A CHALLENGE</span>

        <h1>
          Tell us about a
          <br />
          <strong>problem worth solving.</strong>
        </h1>

        <p>
          Share a real-world challenge from your community and help us connect
          it with the right people and resources.
        </p>
      </div>

      <form
        className="challenge-form"
        onSubmit={(e) => {
          e.preventDefault();

          navigate("/ai-analysis", {
            state: challenge,
          });
        }}
      >
        <div className="form-group">
          <label>Challenge Title</label>
          <input
            type="text"
            placeholder="e.g. Lack of digital learning facilities"
            value={challenge.title}
            onChange={(e) =>
              setChallenge({
                ...challenge,
                title: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Problem Description</label>
          <textarea
            rows="5"
            placeholder="Describe the problem in detail..."
            value={challenge.description}
            onChange={(e) =>
              setChallenge({
                ...challenge,
                description: e.target.value,
              })
            }
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Domain</label>

            <select
              value={challenge.domain}
              onChange={(e) =>
                setChallenge({
                  ...challenge,
                  domain: e.target.value,
                })
              }
            >
              <option>Select a domain</option>
              <option>Education</option>
              <option>Agriculture</option>
              <option>Healthcare</option>
              <option>Environment</option>
              <option>Water</option>
              <option>Energy</option>
              <option>Urban Development</option>
            </select>
          </div>

          <div className="form-group">
            <label>Location</label>

            <input
              type="text"
              placeholder="e.g. Ranchi, Jharkhand"
              value={challenge.location}
              onChange={(e) =>
                setChallenge({
                  ...challenge,
                  location: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="form-group">
          <label>Upload Photo</label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setChallenge({
                ...challenge,
                photo: e.target.files[0],
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Upload Video</label>

          <input
            type="file"
            accept="video/*"
            onChange={(e) =>
              setChallenge({
                ...challenge,
                video: e.target.files[0],
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Upload Supporting Document</label>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) =>
              setChallenge({
                ...challenge,
                document: e.target.files[0],
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Additional Information</label>

          <textarea
            rows="3"
            placeholder="Any additional details that may help..."
            value={challenge.additionalInfo}
            onChange={(e) =>
              setChallenge({
                ...challenge,
                additionalInfo: e.target.value,
              })
            }
          ></textarea>
        </div>

        <button type="submit" className="submit-challenge-btn">
          Continue to AI Analysis →
        </button>
      </form>
    </main>
  );
}

export default SubmitChallenge;
