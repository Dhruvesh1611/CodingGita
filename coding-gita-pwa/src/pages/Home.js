import React from 'react';

function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to Coding Gita</h1>
      <div className="card-list">
        <div className="card">
          <h2>JavaScript Basics</h2>
          <p>Learn variables, loops, and functions step-by-step.</p>
        </div>
        <div className="card">
          <h2>React Fundamentals</h2>
          <p>Build modern UIs with components and hooks.</p>
        </div>
        <div className="card">
          <h2>Node.js Backend</h2>
          <p>Create APIs and connect with databases.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;