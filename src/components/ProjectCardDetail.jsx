// ===== ProjectCardDetail Component (for ProjectsPage) =====
function ProjectCardDetail({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      <div className="grid md:grid-cols-2 h-full">
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.frameworks.map((tech, i) => (
                <span key={i} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">{tech}</span>
              ))}
            </div>
          </div>
          <a href={project.link} className="text-indigo-600 hover:underline inline-flex items-center">
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        <div className="flex items-center justify-center p-6 bg-gray-50">
          <img src={project.image} alt={project.title} className="m-8 rounded-lg max-w-full max-h-full object-contain shadow-md" />
        </div>
      </div>
    </div>
  );
}


export default ProjectCardDetail;