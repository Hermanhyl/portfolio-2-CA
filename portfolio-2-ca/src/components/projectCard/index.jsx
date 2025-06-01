import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 shadow-md hover:shadow-lg transition">
      <img
        src={project.images[0]}
        alt={project.title}
        className="rounded-xl mb-4 object-cover h-48 w-full"
      />
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400">{project.description}</p>
      <Link to={`/project/${project.id}`}>
        <button className="mt-4 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-md text-white">
          View Project
        </button>
      </Link>
    </div>
  );
}

export default ProjectCard;