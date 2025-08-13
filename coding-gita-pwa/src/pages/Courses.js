import React from 'react';

function Courses() {
  return (
    <div className="page-container">
      <h1>Courses</h1>
      <div className="card-list">
        <div className="card">
          <h2>JavaScript Fundamentals</h2>
          <p>Master the basics of JavaScript programming</p>
          <button className="course-btn">Start Learning</button>
        </div>
        <div className="card">
          <h2>React for Beginners</h2>
          <p>Learn to build interactive UIs with React</p>
          <button className="course-btn">Start Learning</button>
        </div>
        <div className="card">
          <h2>Advanced CSS Techniques</h2>
          <p>Take your styling skills to the next level</p>
          <button className="course-btn">Start Learning</button>
        </div>
        <div className="card">
          <h2>Node.js API Development</h2>
          <p>Build robust backend services with Node.js</p>
          <button className="course-btn">Start Learning</button>
        </div>
      </div>
    </div>
  );
}

export default Courses;