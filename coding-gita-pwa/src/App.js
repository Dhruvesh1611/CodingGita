import React, { useState } from "react";
import "./App.css";

// Import pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";

function App() {
  const [activePage, setActivePage] = useState('home');

  // Render the active page component
  const renderPage = () => {
    switch (activePage) {
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
      <header className="app-header">Coding Gita</header>

      {/* Main Content */}
      <main className="app-main">
        {renderPage()}
      </main>

      {/* Bottom Navigation */}
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
    </div>
  );
}

export default App;
