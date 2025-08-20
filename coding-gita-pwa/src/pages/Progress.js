import React from 'react';

function Progress() {
  // Sample data for progress metrics
  const githubData = {
    contributions: 127,
    streak: 15,
    lastWeek: [4, 7, 2, 5, 8, 3, 6]
  };

  const leetcodeData = {
    solved: 142,
    easy: 72,
    medium: 58,
    hard: 12,
    ranking: 45892
  };

  const testMarks = [
    { name: 'Physics Test 1', score: 85, total: 100 },
    { name: 'Chemistry Test 2', score: 92, total: 100 },
    { name: 'Biology Test 1', score: 78, total: 100 },
    { name: 'Physics Test 2', score: 88, total: 100 }
  ];

  const vivaMarks = [
    { name: 'Physics Viva', score: 18, total: 20 },
    { name: 'Chemistry Viva', score: 19, total: 20 },
    { name: 'Biology Viva', score: 17, total: 20 }
  ];

  // Calculate percentages for visualization
  const calculatePercentage = (score, total) => (score / total) * 100;

  return (
    <div className="mobile-page-container progress-page">
      <section className="progress-section">
        <h2>Your Progress Dashboard</h2>
        <p className="progress-subtitle">Track your performance across platforms</p>
      </section>

      {/* GitHub Activity */}
      <section className="progress-card">
        <div className="progress-card-header">
          <i className="fab fa-github"></i>
          <h3>GitHub Activity</h3>
        </div>
        <div className="progress-stats">
          <div className="stat-item">
            <span className="stat-value">{githubData.contributions}</span>
            <span className="stat-label">Contributions</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{githubData.streak}</span>
            <span className="stat-label">Day Streak</span>
          </div>
        </div>
        <div className="activity-graph">
          <div className="graph-label">Last 7 Days</div>
          <div className="bar-graph">
            {githubData.lastWeek.map((day, index) => (
              <div key={index} className="bar-container">
                <div 
                  className="bar" 
                  style={{ height: `${day * 10}px` }}
                ></div>
                <span className="day-label">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LeetCode Stats */}
      <section className="progress-card">
        <div className="progress-card-header">
          <i className="fas fa-code"></i>
          <h3>LeetCode Stats</h3>
        </div>
        <div className="progress-stats">
          <div className="stat-item">
            <span className="stat-value">{leetcodeData.solved}</span>
            <span className="stat-label">Problems Solved</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">#{leetcodeData.ranking}</span>
            <span className="stat-label">Global Ranking</span>
          </div>
        </div>
        <div className="difficulty-breakdown">
          <div className="difficulty-item">
            <span className="difficulty-label">Easy</span>
            <div className="progress-bar-container">
              <div className="progress-bar easy" style={{ width: `${(leetcodeData.easy / leetcodeData.solved) * 100}%` }}></div>
            </div>
            <span className="difficulty-count">{leetcodeData.easy}</span>
          </div>
          <div className="difficulty-item">
            <span className="difficulty-label">Medium</span>
            <div className="progress-bar-container">
              <div className="progress-bar medium" style={{ width: `${(leetcodeData.medium / leetcodeData.solved) * 100}%` }}></div>
            </div>
            <span className="difficulty-count">{leetcodeData.medium}</span>
          </div>
          <div className="difficulty-item">
            <span className="difficulty-label">Hard</span>
            <div className="progress-bar-container">
              <div className="progress-bar hard" style={{ width: `${(leetcodeData.hard / leetcodeData.solved) * 100}%` }}></div>
            </div>
            <span className="difficulty-count">{leetcodeData.hard}</span>
          </div>
        </div>
      </section>

      {/* Test Marks */}
      <section className="progress-card">
        <div className="progress-card-header">
          <i className="fas fa-clipboard-check"></i>
          <h3>Test Performance</h3>
        </div>
        <div className="marks-list">
          {testMarks.map((test, index) => (
            <div key={index} className="mark-item">
              <div className="mark-info">
                <span className="mark-name">{test.name}</span>
                <span className="mark-score">{test.score}/{test.total}</span>
              </div>
              <div className="mark-progress-container">
                <div 
                  className="mark-progress" 
                  style={{ width: `${calculatePercentage(test.score, test.total)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Viva Marks */}
      <section className="progress-card">
        <div className="progress-card-header">
          <i className="fas fa-microphone"></i>
          <h3>Viva Performance</h3>
        </div>
        <div className="marks-list">
          {vivaMarks.map((viva, index) => (
            <div key={index} className="mark-item">
              <div className="mark-info">
                <span className="mark-name">{viva.name}</span>
                <span className="mark-score">{viva.score}/{viva.total}</span>
              </div>
              <div className="mark-progress-container">
                <div 
                  className="mark-progress viva" 
                  style={{ width: `${calculatePercentage(viva.score, viva.total)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Progress;