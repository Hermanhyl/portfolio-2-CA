import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 shadow-md hover:shadow-lg transition flex flex-col">
      <div className="w-full aspect-video mb-4 overflow-hidden rounded-xl bg-gray-700">
        <img
          src={project.images[0]}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

      <div className="flex gap-2">
        <Link to={`/project/${project.id}`}>
          <button className="px-3 py-1 text-sm bg-emerald-500 hover:bg-emerald-600 rounded-md text-white">
            View Project
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
