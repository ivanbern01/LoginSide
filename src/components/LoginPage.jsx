import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="login-page">
      {/* Left Section */}
      <div className="left">
        <Header />
        <div className="destination">
          <p className="title">Please select your destination</p>
          <button
            className="button faculty"
            onClick={() => handleNavigation('/faculty')}
          >
            Faculty Login
          </button>
          <button
            className="button student"
            onClick={() => handleNavigation('/student')}
          >
            Student Login
          </button>
          <p className="disclaimer">
            By using this service, you agree to the CvSU Online Services{' '}
            <a href="#" className="link">Terms of Use</a> and{' '}
            <a href="#" className="link">Privacy Statement</a>.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="right">
        <h2 className="section-title">WELCOME, CVSUeño</h2>
        <div className="section">
          <h3 className="section-header">MANDATE</h3>
          <p>
            Section 2 of Republic Act No. 8468 states: "The University shall primarily provide advanced instruction and
            professional training in agriculture, science and technology, education, and other related fields, undertake
            research and extension services, and provide progressive leadership in these areas."
          </p>
        </div>
        <div className="section">
          <h3 className="section-header">MISSION</h3>
          <p>
            Cavite State University shall provide excellent, equitable, and relevant educational opportunities in the arts,
            sciences, and technology through quality instruction and responsive research and development activities.
          </p>
        </div>
        <div className="section">
          <h3 className="section-header">VISION</h3>
          <p>
            The premier university in historic Cavite globally recognized for excellence in character development,
            academics, research, innovation, and sustainable community engagement.
          </p>
        </div>
        {/* Marquee Effect */}
        <div className="marquee">
          <p>Truth • Excellence • Service</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
