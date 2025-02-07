import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <div id="projects" className="text-center flex flex-col gap-6 justify-center items-center p-2 md:min-h-[500px] lg:min-h-[600px]">
      <h2 className="title">Projects</h2>
      <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative text-left space-y-2 overflow-hidden py-2"
          >
            <div className="absolute w-16 h-14 bg-gray-400 blur-2xl bottom-0 right-0 "></div>

            <img
              className="h-[200px] w-full object-cover"
              src={project?.img}
              alt="project image"
            />
            <h2 className="font-semibold text-xl md:text-2xl">
              {project?.name}
            </h2>
            <p>Technology used</p>
            <div className="space-x-2">
              <Link
                to={`/post/${project?.id}`}
                className="px-2 py-1 border border-gray-400 bg-gray-50/10 cursor-pointer"
              >
                Details
              </Link>

              {/* Link to external Live URL */}
              <a
                href={project?.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 border border-gray-400 bg-gray-50/10 cursor-pointer"
              >
                Live
              </a>

              {/* Link to external Client Repo URL */}
              <a
                href={project?.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 border border-gray-400 bg-gray-50/10 cursor-pointer"
              >
                Client Repo
              </a>

              {/* <button className="px-2 py-1 border border-gray-400 bg-gray-50/10 cursor-pointer" >Live</button>
              <button className="px-2 py-1 border border-gray-400 bg-gray-50/10 cursor-pointer" >Client Repo</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
