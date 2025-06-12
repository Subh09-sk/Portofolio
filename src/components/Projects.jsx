import React from "react";

const projects = [
  {
    title: "Todo App",
    description: "A full-stack task management app built using Java Spring Boot and React.",
    tech: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
    github: "https://github.com/yourprofile/todo-app",
    demo: "https://your-todo-app-demo.com",
  },
  {
    title: "E-Commerce Website",
    description: "A responsive e-commerce platform with user authentication and payment gateway integration.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourprofile/ecommerce",
    demo: "https://your-ecommerce-demo.com",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my projects, skills, and contact details.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourprofile/portfolio",
    demo: "https://yourportfolio.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white text-center px-6">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="space-y-10 max-w-3xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <div className="flex justify-center gap-2 mt-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-500 text-white px-3 py-1 text-sm rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
