import React from 'react';

function Profile() {
  return (
    <div className="page-container">
      <h1>Profile</h1>
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">👤</div>
          <h2>User Name</h2>
          <p>user@example.com</p>
        </div>
        
        <div className="profile-stats">
          <div className="stat-item">
            <h3>5</h3>
            <p>Courses</p>
          </div>
          <div className="stat-item">
            <h3>12</h3>
            <p>Completed</p>
          </div>
          <div className="stat-item">
            <h3>85%</h3>
            <p>Progress</p>
          </div>
        </div>
        
        <div className="profile-actions">
          <button className="profile-btn">Edit Profile</button>
          <button className="profile-btn">Settings</button>
          <button className="profile-btn logout">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;