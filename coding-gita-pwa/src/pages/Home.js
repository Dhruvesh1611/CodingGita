import React from "react";
import { FaCalendarAlt, FaBook, FaRedo, FaDownload, FaQuestionCircle } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Home.css";

function Home() {
  // Example progress (can be dynamic later)
  const dailyProgress = 65; 

  return (
    <div className="mobile-page-container">
      
      {/* ===== Daily Progress Section ===== */}
      <section className="daily-progress-section">
        <h2>Daily Progress</h2>
        <div className="progress-circle">
          <CircularProgressbar
            value={dailyProgress}
            text={`${dailyProgress}%`}
            styles={buildStyles({
              pathColor: "#6366f1",
              textColor: "#111",
              trailColor: "#eee",
              strokeLinecap: "round",
            })}
          />
        </div>
        <p className="progress-message">You completed {dailyProgress}% of today’s tasks 🎯</p>
      </section>

      {/* ===== Quote Section ===== */}
      <section className="quote-section">
        <blockquote>
          "Consistency beats talent — keep coding daily 🚀"
        </blockquote>
        <p className="quote-author">– CodingGita</p>
      </section>

      {/* ===== Today’s Class Section ===== */}
      <section className="today-class-section">
        <div className="section-header">
          <h2>Today's Class</h2>
          <button className="schedule-btn">
            <FaCalendarAlt />
            <span>Weekly Schedule</span>
          </button>
        </div>
        
        <div className="class-status-card">
          <h3>Classes not Scheduled yet!</h3>
          <p>No classes have been scheduled yet. You can see your upcoming class as soon as it gets scheduled.</p>
        </div>
      </section>

      {/* ===== Quick Access Cards ===== */}
      <section className="quick-access-section">
        <div className="card"><FaBook /> <span>My Batches</span></div>
        <div className="card"><FaRedo /> <span>Recent Learning</span></div>
        <div className="card"><FaDownload /> <span>My Downloads</span></div>
        <div className="card"><FaQuestionCircle /> <span>My Doubts</span></div>
      </section>

    </div>
  );
}

export default Home;
