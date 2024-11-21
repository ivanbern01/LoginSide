import React from 'react';
import Header from './Header';
import './css/StudentPage.css';

const StudentPage = () => {
  return (
    <div className="student-page">
      {/* Left Section */}
      <div className="left">
        <Header />
      </div>

      {/* Right Section */}
      <div className="right">
        <h2 className="section-title">Student Login</h2>
        <div className="login-form">
          <form>
            <div className="form-group">
              <label htmlFor="studentID">Student ID</label>
              <input
                type="text"
                id="studentID"
                name="studentID"
                placeholder="Enter your student ID"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
