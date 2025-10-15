import React, { useState } from "react";
import ProjectCard from "../mini-Comp/ProjectCard";

const projectsData = [
  {
    img: "/images/DVC1.png",
    title: "DEEP VEGETABLE COMPANY",
    description: "A modern landing page built on MERN.",
    link: "https://dvc2-1.onrender.com",
  },
  {
    img: "/images/RR1.png",
    title: "RESTRO-RESTRO WEBAPP",
    description: "EJS Based multi-page Restaurant management webApp",
    link: "https://restrorestroapp.onrender.com/",
  },
  {
    img: "/images/DVC2.png",
    title: "DEEP VEGETABLE COMPANY",
    description: "EJS Based multi-page Landing page",
    link: "https://dvc-1.onrender.com/",
  },
  {
    img: "/images/OmniFood.png",
    title: "OmniFood Restaurant",
    description: "A full-stack Landing page of OmniFood Restaurant",
    link: "https://omnifoodtask5.netlify.app/",
  },
  {
    img: "/images/Secret.png",
    title: "Secret Sharing Plateform",
    description: "EJS Based Secret Sharing Social plateform with Database",
    link: "https://secret-app-final.onrender.com/",
  }
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  return (
    <section id="projects" data-aos="fade-up" className="py-16 px-4 sm:px-6 lg:px-12 text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-10 ">
         My Projects
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {currentProjects.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 space-x-2 sm:space-x-3">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-3 sm:px-4 py-2 bg-gray-700 text-white text-sm sm:text-base rounded-lg disabled:opacity-40 hover:bg-gray-600"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base rounded-lg ${currentPage === i + 1
              ? "bg-[#ffbd39] black"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-3 sm:px-4 py-2 bg-gray-700 text-white text-sm sm:text-base rounded-lg disabled:opacity-40 hover:bg-gray-600"
        >
          Next
        </button>
      </div>
    </section>
  );
}
