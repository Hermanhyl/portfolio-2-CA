import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../../data/projects/projects";


function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="p-8 text-center text-red-500">Project not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <p className="text-gray-300 text-lg mb-6">{project.description}</p>

      <div className="space-y-4 mb-8">
        {project.images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Screenshot ${index + 1}`}
            className="rounded-xl w-full object-cover"
          />
        ))}
      </div>

      <div className="mt-6 mb-8">
        <p className="text-white text-xl font-medium mb-2">
          <strong>Technologies Used:</strong>
        </p>
        <ul className="list-disc list-inside text-lg text-gray-300">
          {project.technologies && (
            <div className="mt-6 mb-8">
              <ul className="list-disc list-inside text-lg text-gray-300">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
        </ul>
      </div>

      <div className="flex gap-4">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white"
        >
          Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md text-white"
        >
          GitHub Repo
        </a>
        <button
          onClick={() => navigate("/")}
          className="ml-auto bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md text-white"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default ProjectDetail;