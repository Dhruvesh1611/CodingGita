import React from 'react';

function Home({ onSelect }) {
  return (
    <div className="page-container">
      <h1>Welcome to Coding Gita</h1>
      <div className="card-list" style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', marginTop: '32px' }}>
        <div className="card" style={{ alignItems: 'center', textAlign: 'center', width: '100%', maxWidth: 400 }}>
          <h2>Admin</h2>
          <p>Login as admin to manage courses, users, and site settings.</p>
          <button className="course-btn" onClick={() => onSelect('admin')}>Admin Login</button>
        </div>
        <div className="card" style={{ alignItems: 'center', textAlign: 'center', width: '100%', maxWidth: 400 }}>
          <h2>User</h2>
          <p>Login as user to access courses, track progress, and more.</p>
          <button className="course-btn" onClick={() => onSelect('home')}>User Login</button>
        </div>
      </div>
    </div>
  );
}

export default Home;