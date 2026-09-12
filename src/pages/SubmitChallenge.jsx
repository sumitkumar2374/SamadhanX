function SubmitChallenge() {
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
          Share a real-world challenge from your community and
          help us connect it with the right people and resources.
        </p>
      </div>

      <form className="challenge-form">
        <div className="form-group">
          <label>Challenge Title</label>
          <input
            type="text"
            placeholder="e.g. Lack of digital learning facilities"
          />
        </div>

        <div className="form-group">
          <label>Problem Description</label>
          <textarea
            rows="5"
            placeholder="Describe the problem in detail..."
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Domain</label>

            <select>
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
            />
          </div>
        </div>

        <div className="form-group">
          <label>Additional Information</label>

          <textarea
            rows="3"
            placeholder="Any additional details that may help..."
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