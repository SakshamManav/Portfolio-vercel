import React, { useState } from "react";
import "./About.css";

export default function About() {
  const [skillOpen, setSkillOpen] = useState(true);
  const [experienceOpen, setExpereienceOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);

  return (
    <>
      <div className="abt-contnr" id="about">
        <div class="about-container">
          <div class="about-content">
            <div class="img-container">
              <img class="about-img" src="images/uwp3536740.jpeg" alt="" />
            </div>
            <div class="my-content">
              <h1
                style={{
                  textDecoration: "none",
                  color: "#ffd8b8",
                  fontFamily: "cursive",
                }}
              >
                About Me
              </h1>
              <div className="aboutme-cover">
                <p>
                  Hi, I’m Saksham Manav, a passionate and curious Web Developer
                  , currently pursuing my engineering degree at Teerthanker
                  Mahaveer University. I specialize in Full-Stack Web
                  Development using technologies like HTML, CSS, JavaScript,
                  React, Node.js, Express, and MongoDB. I enjoy building
                  intuitive user interfaces and robust backend systems that
                  deliver real value. Alongside web development,
                </p>
                <p>
                  {" "}
                  I’m also exploring the world of Data Science and Machine
                  Learning. I'm learning tools like Python, NumPy, Pandas,
                  Matplotlib and Scikit-learn to build intelligent applications
                  powered by data.{" "}
                </p>
                <p>
                  I’m also actively sharpening my problem-solving skills with
                  Data Structures and Algorithms in C++. I'm always excited to
                  learn, experiment, and collaborate on new projects. Let’s
                  build something impactful together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="about-btn-container">
          <div className="skills-container">
            <button
              className="skills"
              onClick={() => {
                if (!skillOpen) {
                  setExpereienceOpen(false);
                  setEducationOpen(false);
                  setSkillOpen(true);
                } else {
                  setSkillOpen(false);
                }
              }}
            >
              {" "}
              Skills {skillOpen ? <i class="fa-solid fa-angle-down"></i> : ""}
            </button>
            {skillOpen && (
              <div className="skills-expand">
                <span style={{ color: "#e34c26" }}>
                  HTML <i class="fa-brands fa-html5"></i>
                </span>
                <span style={{ color: "#2965f1" }}>
                  CSS <i class="fa-brands fa-css3-alt"></i>
                </span>
                <span style={{ color: "#f7df1e" }}>
                  JavaScript <i class="fa-brands fa-js"></i>
                </span>
                <span style={{ color: "#61dafb" }}>
                  React <i class="fa-brands fa-react"></i>
                </span>
                <span>
                  {" "}
                  Next.js
                  <img
                    src="images/nextjs.png"
                    alt="Next.js"
                    style={{ height: "18px", verticalAlign: "middle" }}
                  />{" "}
                </span>
                <span style={{ color: "#7952b3" }}>
                  Bootstrap <i class="fa-brands fa-bootstrap"></i>
                </span>
                <span style={{ color: "#38bdf8" }}>Tailwind CSS</span>
                <span style={{ color: "#3c873a" }}>
                  Node.js <i class="fa-brands fa-node-js"></i>
                </span>
                <span style={{ color: "#f53659" }}>Express</span>
                <span style={{ color: "#00599c" }}>C++</span>
                <span style={{ color: "#f7df1e" }}>
                  JavaScript <i class="fa-brands fa-js"></i>
                </span>
                <span style={{ color: "#4db33d" }}>
                  MongoDB <i class="fa-brands fa-envira"></i>
                </span>
                <span style={{ color: "#00758f" }}>MySQL</span>
                <span style={{ color: "#f1502f" }}>
                  Git <i class="fa-brands fa-git-alt"></i>
                </span>
                <span style={{ color: "#4078c0" }}>
                  GitHub <i class="fa-brands fa-github"></i>
                </span>
                <span style={{ color: "#00599c" }}>
                  Pandas{" "}
                  <img
                    src="images/pandas.png"
                    alt="pandas"
                    style={{ height: "18px", verticalAlign: "middle" }}
                  />{" "}
                </span>
                <span style={{ color: "#3d7cb3ff" }}>
                  NumPy{" "}
                  <img
                    src="images/numpy.png"
                    alt="numpy"
                    style={{ height: "18px", verticalAlign: "middle" }}
                  />{" "}
                </span>
                <span style={{ color: "#ddeaf4ff" }}>
                  Matplotlib{" "}
                  <img
                    src="images/matplotlib.png"
                    alt="pandas"
                    style={{ height: "18px", verticalAlign: "middle" }}
                  />{" "}
                </span>
                <span style={{ color: "#d0cd15ff" }}>
                  Scikit-learn
                  <img
                    src="images/sklearn.png"
                    alt="matplotlib"
                    style={{ height: "25px", verticalAlign: "middle" }}
                  />{" "}
                </span>
              </div>
            )}
          </div>
          <div class="about-btns">
            <div className="about-container-2">
              <button
                class="experience"
                style={{ color: experienceOpen ? "#ffd8b8" : "pink" }}
                onClick={() => {
                  if(!experienceOpen){
                  setSkillOpen(false);
                  setEducationOpen(false);
                  setExpereienceOpen(true);
                  }
                  else{
                    setExpereienceOpen(false)
                  }
                }}
              >
                Experience{" "}
                {experienceOpen ? <i class="fa-solid fa-angle-down"></i> : ""}
              </button>
              {experienceOpen && (
                <div class="experience-expand">
                  <span>Created an Instagram Clone using the MERN stack.</span>
                  <span>
                    Participated in hackathons — didn't win, but gained valuable
                    experience.
                  </span>
                  <span>
                    Built Chrome extensions like a weather extension and fun
                    mini-game extensions.
                  </span>
                </div>
              )}
            </div>
            <div className="about-container-2">
              <button
                class="education"
                style={{ color: educationOpen ? "#ffd8b8" : "pink" }}
                onClick={() => {
                  if(!educationOpen){
                    setSkillOpen(false);
                  setEducationOpen(true);
                  setExpereienceOpen(false);
                  }
                  else{
                    setEducationOpen(false)
                  }
                  
                }}
              >
                Education{" "}
                {educationOpen ? <i class="fa-solid fa-angle-down"></i> : ""}
              </button>
              {educationOpen && (
                <div class="education-expand">
                  <span>
                    Xth from Vasundhara Inter College(VIC) in UP Board
                  </span>
                  <span>
                    XIIth from Vasundhara Inter College(VIC) in UP Board
                  </span>
                  <span>
                    Graduation from Teerthanker Mahaveer University(TMU)
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
