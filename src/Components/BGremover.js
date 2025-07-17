import React from 'react';

export default function BgRemoverProject() {
  return (
    <div style={{
      color: "white",
      padding: "2rem",
      maxWidth: "800px",
      margin: "auto",
      textAlign: "left"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center", color: "#FEC89A" }}>
        Background Remover Tool
      </h1>

      <p style={{ lineHeight: "1.6" }}>
        This is a simple web application that removes the background from images using AI.
        I built the frontend using <strong>HTML, CSS, JavaScript, and React</strong>. The actual background removal API code was generated using AI.
        The tool lets users upload an image and get the background-removed version in seconds.
      </p>

      <h3 style={{ marginTop: "1.5rem", color: "#FEC89A" }}> Features</h3>
      <ul style={{ paddingLeft: "1.2rem", lineHeight: "1.6" }}>
        <li>Upload and preview image</li>
        <li>Remove background using AI-generated API</li>
        <li>Download the processed image</li>
        <li>Responsive UI</li>
      </ul>

      <h2 style={{ marginTop: "2rem", textAlign: "center" }}> Demo Video</h2>
      <div style={{ marginTop: "1rem" }}>
        <video width="100%" controls>
          <source src="/videos/bgremover.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h3 style={{ marginTop: "2rem", color: "#FEC89A" }}>Project Details</h3>
      <ul style={{ paddingLeft: "1.2rem", lineHeight: "1.6" }}>
        <li><strong>Frontend:</strong> React.js</li>
        <li><strong>API:</strong> Background removal logic generated using AI</li>
        <li><strong>Usage:</strong> Accepts image, sends it to API, and returns transparent PNG</li>
      </ul>

      <h3>Github Repository Link: <a href='https://github.com/SakshamManav/Background-Remover' target='_blank' rel='noreferrer' style={{ color: 'yellow' }}>Click here</a> </h3>

      <h2 style={{ textAlign: "center", color: "pink" }}>"This tool helped me learn how to use third-party APIs with React and build clean UI using minimal code."</h2>
    </div>
  );
}
