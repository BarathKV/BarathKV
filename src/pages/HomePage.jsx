import ProjectCard from "../components/ProjectCard";

// ===== HomePage Component =====
function HomePage() {
  const personalInfo = {
    name: "John Doe",
    role: "Full Stack Developer",
    bio: "I am a passionate developer with expertise in building modern web applications using React, Node.js, and cloud technologies.",
    image: "https://picsum.photos/400/400 "
  };

  const featuredProjects = [
    {
      title: "E-Commerce Dashboard",
      description: "A full-stack dashboard for managing products, orders, and analytics with real-time updates.",
      image: "https://picsum.photos/600/400?random=1",
      frameworks: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Fitness Tracker",
      description: "An app that tracks workouts, calories burned, and progress over time with personalized recommendations.",
      image: " https://picsum.photos/600/400?random=2",
      frameworks: ["Vue.js", "Firebase", "TailwindCSS"]
    }
  ];

  return (
    <section className="space-y-12">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">{personalInfo.name}</h2>
          <p className="text-xl text-indigo-600">{personalInfo.role}</p>
          <p className="text-lg leading-relaxed">{personalInfo.bio}</p>
        </div>
        <div className="flex justify-center">
          <img src={personalInfo.image} alt="Profile" className="rounded-xl shadow-lg w-64 h-64 object-cover border-4 border-indigo-200" />
        </div>
      </div>

      {/* Featured Projects Preview */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Featured Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePage;