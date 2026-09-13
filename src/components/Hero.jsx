function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <span className="hero-badge">Smart Innovation Platform</span>

        <h1>
          Turn Real-World Challenges
          <br />
          Into <span>Real Solutions.</span>
        </h1>

        <p>
          SamadhanX connects citizens, universities, students, industries, and
          government to collaboratively solve meaningful societal challenges.
        </p>

        <div className="hero-actions">
          <button
            className="primary-btn"
            onClick={() => (window.location.href = "/submit")}
          >
            Report a Challenge
          </button>

          <button
            className="secondary-btn"
            onClick={() => (window.location.href = "/challenges")}
          >
            Explore Challenges
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-card">
          <div className="visual-icon">✦</div>

          <h3>From Challenge</h3>

          <div className="visual-arrow">↓</div>

          <h3>To Collaboration</h3>

          <div className="visual-arrow">↓</div>

          <h3>To Impact</h3>
        </div>
      </div>
    </main>
  );
}

export default Hero;
