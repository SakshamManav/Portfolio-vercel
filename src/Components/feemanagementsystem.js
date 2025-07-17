import React from 'react';

export default function FeeManagementSystem() {
  return (
    <div style={{
      color: "white",
      padding: "2rem",
      maxWidth: "800px",
      margin: "auto",
      textAlign: "left"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center", color: "#FEC89A" }}>
        Fee Management System
      </h1>

      <p style={{ lineHeight: "1.6" }}>
        This project is a Fee Management System where admin can add new students, update fee status, and track fee history.
        I used <strong>Node.js, Express.js, MySQL</strong> for backend and <strong>React</strong> for frontend.
      </p>

      <h3 style={{ marginTop: "1.5rem", color: "#FEC89A" }}> Features</h3>
      <ul style={{ paddingLeft: "1.2rem", lineHeight: "1.6" }}>
        <li>Student Registration</li>
        <li>Fee Status Update (Paid/Unpaid)</li>
        <li>Admin Dashboard</li>
        <li>Track Student Payment History</li>
      </ul>

      <h2 style={{ marginTop: "2rem", textAlign: "center" }}> Demo Video</h2>
      <div style={{ marginTop: "1rem" }}>
        <video width="100%" controls>
          <source src="/videos/fee-video.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h3 style={{ marginTop: "2rem", color: "#FEC89A" }}>Tech Stack</h3>
      <ul style={{ paddingLeft: "1.2rem", lineHeight: "1.6" }}>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MySQL</li>
        <li><strong>Frontend:</strong> React.js</li>
        <li><strong>Auth:</strong> JWT-based admin login</li>
      </ul>

      <h3>Github Repository Link: <a href='https://github.com/SakshamManav/Fee-Management-System' target='_blank' rel='noreferrer' style={{ color: 'yellow' }}>Click here</a></h3>

      <h2 style={{ textAlign: "center", color: "pink" }}>"I created this tool to manage student fee data more effectively and it’s a good representation of my full stack knowledge."</h2>
    </div>
  );
}
