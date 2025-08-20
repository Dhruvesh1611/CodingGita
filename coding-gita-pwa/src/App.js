import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import "./App.css";
import "./style/layout.css";
import "./style/card.css";
import "./style/profile.css";
import "./style/course.css";
import "./style/nav.css";
import "./style/mobile.css";

// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Admin from "./pages/Admin";
import Progress from "./pages/Progress";

// Temporary Notifications Page (you can replace later)
function Notifications() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Notifications</h2>
      <p>No new notifications yet 🚀</p>
    </div>
  );
}

function AppLayout({ children, darkMode, setDarkMode, sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  // toggle sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  // toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // get current active page name from URL
  const activePage =
    location.pathname === "/" ? "home" : location.pathname.replace("/", "");

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Mobile Header */}
      <header className="mobile-header">
        <div className="header-content">
          {activePage === "home" ? (
            <>
              <button className="menu-button" onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
              </button>
              <div className="header-title">
                <span>CodingGita</span>
                <i className="fas fa-chevron-right"></i>
              </div>
            </>
          ) : (
            <>
              <button className="back-button" onClick={() => navigate("/")}>
                <i className="fas fa-arrow-left"></i>
              </button>
              <div className="header-title">
                <span>
                  {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
                </span>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Sidebar Menu */}
      <div className={`sidebar-menu ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="user-profile">
            <div className="profile-image">
              <img src="/icons/logo1.png" alt="Profile" />
            </div>
            <div className="profile-name">
              <span>dhruvesh shyara</span>
              <button className="edit-button">
                <i className="fas fa-pencil-alt"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="sidebar-content">
          <div className="menu-item goal-item">
            <div className="menu-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="menu-text">
              <span>CodingGita</span>
              <span className="sub-text">Change your goal</span>
            </div>
            <i className="fas fa-chevron-right"></i>
          </div>

          <div className="menu-item">
            <div className="menu-icon">
              <i className="fas fa-moon"></i>
            </div>
            <span>Dark Mode</span>
            <div className="toggle-switch" onClick={toggleDarkMode}>
              <div className={`toggle-slider ${darkMode ? "active" : ""}`}></div>
            </div>
          </div>

          <div className="menu-item">
            <div className="menu-icon">
              <i className="fas fa-info-circle"></i>
            </div>
            <span>About Us</span>
            <i className="fas fa-chevron-right"></i>
          </div>

          <div className="menu-item">
            <div className="menu-icon">
              <i className="fas fa-phone"></i>
            </div>
            <span>Contact Us</span>
          </div>

          <div className="menu-item">
            <div className="menu-icon">
              <i className="fas fa-building"></i>
            </div>
            <span>Centres</span>
          </div>

          <div className="menu-item">
            <div className="menu-icon">
              <i className="fas fa-download"></i>
            </div>
            <span>My Downloads</span>
          </div>

          <div className="menu-item logout">
            <div className="menu-icon">
              <i className="fas fa-sign-out-alt"></i>
            </div>
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Overlay for sidebar */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* Main Content */}
      <main className="app-main">{children}</main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <Link to="/" className={`nav-item ${activePage === "home" ? "active" : ""}`}>
          <i className="fas fa-layer-group"></i>
          <span>Dashboard</span>
        </Link>
        <Link to="/courses" className={`nav-item ${activePage === "courses" ? "active" : ""}`}>
          <i className=" fas fa-book"></i>
          <span>Study</span>
        </Link>
        <Link to="/progress" className={`nav-item ${activePage === "progress" ? "active" : ""}`}>
          <i className="fas fa-chart-line"></i>
          <span>Progress</span>
        </Link>
        <Link to="/notifications" className={`nav-item ${activePage === "notifications" ? "active" : ""}`}>
          <i className="fas fa-bell"></i>
          <span>Notifications</span>
        </Link>
      </nav>
    </div>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <AppLayout
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/notifications" element={<Notifications />} />
          
          {/* Admin route (hidden from students, but still works) */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
