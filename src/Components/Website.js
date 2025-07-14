import React from "react";
import "./website.css";

export default function Website() {
  return (
    <div className="websites">
      <h1>My Websites</h1>

      <div className="website-cards">
        {/* LiveTheHealthyLife Card */}
        <div className="website-card">
          <div className="card-header">
            <img
              src="https://livethehealthylife.in/wp-content/uploads/2025/06/cropped-og-image-300x256.png"
              alt="LiveTheHealthyLife Logo"
              width="40"
              height="40"
              style={{ borderRadius: "6px" }}
            />
            <h2 style={{ color: "#FF9AA2" }}>LiveTheHealthyLife</h2>
          </div>
          <p>
            A health and wellness blog where I publish AI-assisted articles on
            fitness, nutrition, mental health, and lifestyle. Built using
            WordPress and completely managed by me — from content creation and
            SEO to design and analytics.
          </p>
          <ul>
            <li>AI-assisted blog content writing</li>
            <li>Managed on WordPress</li>
            <li>SEO-focused content strategy</li>
            <li>Mobile-friendly design</li>
          </ul>
          <p>
            🔗{" "}
            <a
              href="https://livethehealthylife.in"
              target="_blank"
              rel="noreferrer"
            >
              Visit LiveTheHealthyLife.in
            </a>
          </p>
        </div>

        {/* NeoToolsKit Card */}
        <div className="website-card">
          <div className="card-header">
            <img
              src="https://neotoolskit.com/wp-content/uploads/2025/06/cropped-cropped-ChatGPT_Image_Jun_9__2025__04_50_00_PM-removebg-preview-1-53x49.png"
              alt="NeoToolsKit Logo"
              width="40"
              height="40"
              style={{ borderRadius: "6px" }}
            />
            <h2 style={{ color: "#A0E7E5" }}>NeoToolsKit.com</h2>
          </div>
          <p>
            <strong>NeoToolsKit.com</strong> is also my website where I write blogs
            about the latest AI tools, productivity hacks, and prompt guides to
            help users improve their workflow.
          </p>
          <ul>
            <li>Managed on WordPress</li>
            <li>File converters and productivity tools</li>
            <li>Blogs on AI tools, productivity hacks & prompt guides</li>
            <li>Regular tool additions based on trends</li>
          </ul>
          <p>
            🔗{" "}
            <a
              href="https://neotoolskit.com"
              target="_blank"
              rel="noreferrer"
            >
              Visit NeoToolsKit.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
