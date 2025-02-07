import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  useEffect(() => {
    // Find the specific project based on 'id'
    const foundProject = projects.find((project) => project.id === id);
    setProject(foundProject);
  }, [id, projects]);

  console.log(project);

  return (
    <div className="min-h-screen bg-bg text-text p-2 md:p-6">
      <div className="flex gap-5 flex-col">
        <div className="flex justify-self-start" >
          {/* <FaArrowLeft /> */}
          <Link to={`/`}  className="flex items-center gap-2">
          <div className="border border-white p-2 rounded-full ">

         
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            </div>
            <h3 className="font-semibold" >Back</h3>
          </Link>
        </div>
        <div className="max-w-5xl ">
          <div className="space-y-4">
            <img src={project?.img} alt="project-img" />
            <h2 className="font-semibold text-2xl" >{project?.name}</h2>
            <div className="space-x-2">

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
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="title text-2xl">Challenges I Faced </h2>
                <p>{project?.challenges}</p>
              </div>
              <div className="space-y-2">
                <h2 className="title text-2xl">Potential Improvements</h2>
                <p>{project?.improvements}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
