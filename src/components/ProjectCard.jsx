// ===== ProjectCard Component =====
function ProjectCard({ project }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={project.image} alt={project.title} className="rounded-lg h-40 w-full object-cover" />
        <div className="flex flex-col justify-center">
          <h4 className="font-semibold text-lg">{project.title}</h4>
          <p className="text-sm text-gray-600 mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.frameworks.map((tech, i) => (
              <span key={i} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProjectCard;