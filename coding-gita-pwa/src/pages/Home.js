import React from 'react';

function Home() {
  return (
    <div className="mobile-page-container">
      <section className="today-class-section">
        <div className="section-header">
          <h2>Today's Class</h2>
          <button className="schedule-btn">
            <i className="far fa-calendar-alt"></i>
            <span>Weekly Schedule</span>
          </button>
        </div>
        
        <div className="class-status-card">
          <h3>Classes not Scheduled yet!</h3>
          <p>No classes have been scheduled yet. You can see your upcoming class as soon as it gets scheduled.</p>
        </div>
        
        <button className="view-all-btn">
          <span>View All Classes</span>
          <i className="fas fa-chevron-right"></i>
        </button>
      </section>
      
      <section className="quick-access-grid">
        <div className="quick-access-item">
          <div className="icon-container">
            <i className="fas fa-book"></i>
          </div>
          <span>My Batches</span>
        </div>
        
        <div className="quick-access-item">
          <div className="icon-container">
            <i className="fas fa-history"></i>
          </div>
          <span>Recent Learning</span>
        </div>
        
        <div className="quick-access-item">
          <div className="icon-container">
            <i className="fas fa-download"></i>
          </div>
          <span>My Downloads</span>
        </div>
        
        <div className="quick-access-item">
          <div className="icon-container">
            <i className="fas fa-question-circle"></i>
          </div>
          <span>My Doubts</span>
        </div>
      </section>
      
      <section className="motivational-quote">
        <p>From Code to Career — Achieve Full-Stack Mastery & Secure Your Future with CodingGita</p>
        <div className="quote-source">
          <i className="fas fa-heart"></i>
          <span>From CodingGita</span>   
        </div>
      </section>
    </div>
  );
}

export default Home;