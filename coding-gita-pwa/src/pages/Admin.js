import React from 'react';

function Admin() {
  return (
    <div className="page-container">
      <h1>Admin Dashboard</h1>
      <div className="card-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginTop: '32px' }}>
        <div className="card" style={{ minWidth: 220, flex: 1 }}>
          <h2>Portfolio</h2>
          <p>Manage and review user portfolios.</p>
        </div>
        <div className="card" style={{ minWidth: 220, flex: 1 }}>
          <h2>Resume</h2>
          <p>Access and update resumes for users.</p>
        </div>
        <div className="card" style={{ minWidth: 220, flex: 1 }}>
          <h2>Fees</h2>
          <p>View and manage fee details and payments.</p>
        </div>
        <div className="card" style={{ minWidth: 220, flex: 1 }}>
          <h2>Internship</h2>
          <p>Track internship opportunities and progress.</p>
        </div>
        <div className="card" style={{ minWidth: 220, flex: 1 }}>
          <h2>Features</h2>
          <p>Explore and enable new platform features.</p>
        </div>
      </div>
    </div>
  );
}

export default Admin;
