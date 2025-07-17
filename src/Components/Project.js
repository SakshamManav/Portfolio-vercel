import React from "react";
import "./Project.css";

const projects = [
  {
    link: "/instagram-project",
    title: "Instagram Clone",
    description:
      "Built an Instagram Clone using the MERN stack with real-time messaging, authentication, and post-sharing.",
  },
  {
    link: "/bgremover-project",
    title: "Background Remover",
    description:
      "Created a background remover tool with a sleek UI. Users can upload images and remove backgrounds seamlessly.",
  },
  {
    link: "/fee-management-project",
    title: "Fee Management System",
    description:
      "A simple and efficient system to manage student records, fees records, track payment history.",
  },
];

const Project = () => {
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <a
            href={project.link}
            key={index}
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <i
              className="fa-solid fa-hand-pointer"
              style={{ fontSize: "20px" }}
            ></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
