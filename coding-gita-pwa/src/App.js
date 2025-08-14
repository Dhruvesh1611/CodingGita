import React, { useState } from "react";
import "./App.css";
import "./style/layout.css";
import "./style/card.css";
import "./style/profile.css";
import "./style/course.css";
import "./style/nav.css";

// Import pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";

function App() {
  const [activePage, setActivePage] = useState('');

  // Render the active page component
  const renderPage = () => {
    if (!activePage) {
      return <Home onSelect={setActivePage} />;
    }
    switch (activePage) {
      case 'admin':
        return <Admin />;
      case 'home':
        return <Home />;
      case 'courses':
        return <Courses />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/icons/logo1.png" alt="Logo" style={{ height: 40, marginRight: 16 }} />
          <span style={{ fontWeight: 700, fontSize: '2rem', letterSpacing: 1 }}>Coding Gita</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        {renderPage()}
      </main>

      {/* Bottom Navigation: only show after selection */}
      {activePage && (
        <nav className="bottom-nav">
          <button 
            className={activePage === 'home' ? "nav-item active" : "nav-item"}
            onClick={() => setActivePage('home')}
          >
            <span>🏠</span>
            <p>Home</p>
          </button>
          <button 
            className={activePage === 'courses' ? "nav-item active" : "nav-item"}
            onClick={() => setActivePage('courses')}
          >
            <span>📚</span>
            <p>Courses</p>
          </button>
          <button 
            className={activePage === 'profile' ? "nav-item active" : "nav-item"}
            onClick={() => setActivePage('profile')}
          >
            <span>👤</span>
            <p>Profile</p>
          </button>
        </nav>
      )}
    </div>
  );
}

export default App;
