import React from 'react';
import { Link } from 'react-scroll';

export default function InstagramProject() {
  return (
    <div style={{
      color: "white",
      padding: "2rem",
      maxWidth: "800px",
      margin: "auto",
      textAlign: "left"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center", color: "#FEC89A" }}>
        Instagram Clone Project
      </h1>

      <p style={{ lineHeight: "1.6" }}>
        This project is a clone of Instagram built using the <strong>MERN stack</strong> (MongoDB, Express, React, and Node.js).
        It includes user authentication, real-time posts with Socket.io, likes, and user profile management.
        As it was one of my first projects, it's not perfect — I built it mainly to learn and get hands-on experience.
      </p>

      <h3 style={{ marginTop: "1.5rem", color: "#FEC89A" }}> Features</h3>
      <ul style={{ marginTop: "1rem", marginBottom: "1rem", paddingLeft: "1.2rem", lineHeight: "1.6" }}>
        <li>User registration & login with JWT</li>
        <li>Upload and view posts</li>
        <li>Like and comment system</li>
        <li>Protected routes and profile pages</li>
        <li>Real-time chatting using Socket.io</li>
      </ul>

      <h2 style={{ marginTop: "2rem", textAlign: "center" }}> Demo Video</h2>
      <div style={{ marginTop: "1rem" }}>
        <video width="100%" controls>
          <source src="/videos/insta-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h3 style={{ marginTop: "2rem", color: "#FEC89A" }}>Backend Functionality</h3>
      <ul style={{ paddingLeft: "1.2rem", lineHeight: "1.6" }}>
        <li>
          <strong>Authentication:</strong> Handled using <code>JWT (JSON Web Token)</code> for secure login/signup.
          Passwords are hashed using <code>bcrypt</code> before being stored.
        </li>
        <li>
          <strong>Database:</strong> <code>MongoDB</code> is used with <code>Mongoose</code> to store:
          <ul style={{ paddingLeft: "1.2rem" }}>
            <li><strong>Users:</strong> username, email, hashed password, profile info</li>
            <li><strong>Posts:</strong> image URL, caption, user ID, timestamp</li>
            <li><strong>Likes:</strong> stored as an array of user IDs</li>
            <li><strong>Chat:</strong> chat messages saved with user IDs.</li>
          </ul>
        </li>
        <li>
          <strong>File Storage:</strong> Images are uploaded and stored using <code>Firebase Storage</code>.
        </li>
        <li>
          <strong>Real-time Features:</strong> <code>Socket.io</code> is used for implementing one-to-one real-time chat.
        </li>
        <li>
          <strong>API:</strong> RESTful APIs built with <code>Express.js</code> handle CRUD operations for users and posts.
        </li>
      </ul>
      <h3 >Deployed Link: <a href='https://instagram-clone-mocha-zeta.vercel.app/' target='_blank' rel='noreferrer' style={{color:'yellow'}}>Click here</a> Backend can take sometime(upto 1 minute) to load.</h3>
      <h3 >Github Repository Link: <a href='https://github.com/SakshamManav/Instagram-Clone' target='_blank' rel='noreferrer' style={{color:'yellow'}}>Click here</a> </h3>

      <h2 style={{textAlign:"center", color:"pink"}}>"It took me more than three months to create it and I write it's code completely by myself that's why it's functionality and styling is not that good as at that time i was just a beginner."</h2>
    </div>
  );
}
