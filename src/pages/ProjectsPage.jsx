import ProjectCardDetail from "../components/ProjectCardDetail";

// ===== ProjectsPage Component =====
function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A full-stack dashboard for managing products, orders, and analytics with real-time updates.",
      image: " https://picsum.photos/600/400?random=1",
      link: "#",
      frameworks: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Fitness Tracker",
      description: "An app that tracks workouts, calories burned, and progress over time with personalized recommendations.",
      image: " https://picsum.photos/600/400?random=2",
      link: "#",
      frameworks: ["Vue.js", "Firebase", "TailwindCSS"]
    },
    {
      title: "Weather App",
      description: "Real-time weather information based on location with forecasts and alerts.",
      image: " https://picsum.photos/600/400?random=3",
      link: "#",
      frameworks: ["HTML5", "CSS3", "JavaScript"]
    }
  ];

  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectCardDetail key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;