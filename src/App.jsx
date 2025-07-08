import { useState, createContext, useContext } from 'react';

// Theme Context
const ThemeContext = createContext();

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // 🔧 Customize your main color here
  const primaryColor = '#6366F1'; // Indigo-500
  const darkPrimaryColor = '#4F46E5'; // Indigo-600

  const theme = {
    primary: darkMode ? darkPrimaryColor : primaryColor,
    background: darkMode ? 'bg-gray-900' : 'bg-gray-50',
    text: darkMode ? 'text-white' : 'text-gray-800',
    cardBg: darkMode ? 'bg-gray-800' : 'bg-white',
    border: darkMode ? 'border-gray-700' : 'border-gray-200',
    darkMode,
    toggleDarkMode: () => setDarkMode(!darkMode),
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`min-h-screen ${theme.background} ${theme.text} transition-colors duration-300`}>
        <NavBar />
        <main className="container mx-auto px-4 py-8">
          <HomePage />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

// ===== Theme-aware Components =====

function NavBar() {
  const theme = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`${theme.cardBg} shadow-md p-4 sticky top-0 z-50 rounded-b-lg border-b ${theme.border} transition-all`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold" style={{ color: theme.primary }}>
          John Doe
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {['HOME', 'PROJECTS', 'COURSE', 'ACADEMICS', 'EVENTS AND EXPERIENCE'].map((page) => (
            <li key={page}>
              <button
                onClick={() => alert(`Navigate to ${page}`)}
                className={`capitalize hover:text-indigo-600 transition-colors`}
                style={{ color: page === 'HOME' ? theme.primary : '' }}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={theme.toggleDarkMode}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none"
        >
          {theme.darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.5 5.5 0 01-8.9 2.75A5.5 5.5 0 0112 3zm0 11a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
              <path d="M12 10v4M10 12h4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className={`md:hidden mt-2 p-4 rounded-lg shadow-lg space-y-2 ${theme.cardBg}`}>
          {['HOME', 'PROJECTS', 'COURSE', 'ACADEMICS', 'EVENTS AND EXPERIENCE'].map((page) => (
            <li key={page}>
              <button
                onClick={() => {
                  alert(`Navigate to ${page}`);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left capitalize py-2 px-4 rounded-md transition-colors ${
                  page === 'HOME' ? 'font-semibold' : ''
                }`}
                style={{ color: page === 'HOME' ? theme.primary : '' }}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

function Footer() {
  const theme = useContext(ThemeContext);

  return (
    <footer className={`mt-16 py-8 border-t ${theme.border} ${theme.cardBg} transition-colors`}>
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-indigo-600 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  const theme = useContext(ThemeContext);

  const personalInfo = {
    name: "John Doe",
    role: "Full Stack Developer",
    bio: "I'm a passionate developer building modern web apps with React, Node.js, and cloud tech.",
    image: "https://picsum.photos/400/400 ",
  };

  return (
    <section className="space-y-12">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">{personalInfo.name}</h2>
          <p className="text-xl" style={{ color: theme.primary }}>
            {personalInfo.role}
          </p>
          <p className="text-lg leading-relaxed">{personalInfo.bio}</p>
        </div>
        <div className="flex justify-center">
          <img
            src={personalInfo.image}
            alt="Profile"
            className="rounded-xl shadow-lg w-64 h-64 object-cover border-4"
            style={{ borderColor: theme.primary }}
          />
        </div>
      </div>

      {/* Featured Projects Preview */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Featured Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            project={{
              title: "E-Commerce Dashboard",
              description: "A full-stack dashboard for managing products, orders, and analytics.",
              image: "https://picsum.photos/600/400?random=1",
              frameworks: ["React", "Node.js", "MongoDB"],
            }}
          />
          <ProjectCard
            project={{
              title: "Fitness Tracker",
              description: "Tracks workouts, calories burned, and progress over time.",
              image: " https://picsum.photos/600/400?random=2",
              frameworks: ["Vue.js", "Firebase", "TailwindCSS"],
            }}
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const theme = useContext(ThemeContext);

  return (
    <div className={`p-6 rounded-xl shadow-sm hover:shadow-md border ${theme.cardBg} ${theme.border} transition-shadow`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={project.image} alt={project.title} className="rounded-lg h-40 w-full object-cover" />
        <div className="flex flex-col justify-center">
          <h4 className="font-semibold text-lg">{project.title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.frameworks.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full"
                style={{ backgroundColor: theme.primary + '22', color: theme.primary }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}