import profileImage from "../assets/profile.jpg";

import ExperienceCard from "../components/ExprienceCard";
import EventCard from "../components/EventCard";

import SIH from "../assets/SIH.jpg";

// ===== HomePage Component =====
function HomePage() {
  const personalInfo = {
    name: "Barath Kamalakkannan Vani",
    role: "Software Developer",
    bio: `Final year Computer Science and Engineering (Core) student at SRMIST with foundational
          knowledge in Data Structures and Algorithms Analysis; Database Systems (both SQL and
          NoSQL) and Object-Oriented Programming. Gained further practical knowledge by working in
          applications using python, Spring Boot, React.js, Node.js, and Express.js in various hackathons
          with multiple team members in a short span of preparation time.`,
  };

  const experiences = [
    {
      company: "AptSkills",
      role: "IT Intern",
      duration: "Jan 2025 - Apr 2025",
      description:
        "Worked on a python module “Data Extraction from RTF to Json” development team. Contributed in performing unit tests and documenting the module for client.",
      frameworks: ["Python", "pytest"],
    },
  ];

  const events = [
    {
      title: "Smart India Hackathon 2024",
      organization: "AICTE",
      date: "Dec 2024",
      certificateImage: SIH,
      description: `Member of one of the Finalist Teams which is top 2% of the 54000 participating teams.\n
      Involved in devising a software adapter for legacy systems for security measures.\n
      Worked on the Key Management and Cryptography engine of the adapter`,
    },
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
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full shadow-lg w-64 h-64 object-cover border-4 border-indigo-200"
          />
        </div>
      </div>

      {/* Social Section
      <div className="flex justify-center space-x-6">
        <a href="mailto:example@example.com" className="flex items-center text-indigo-600 hover:text-indigo-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
            <path d="M4 4h16v16H4z" />
            <path d="M22 6l-10 7L2 6" />
          </svg>
          <span className="ml-2">Email</span>
        </a>
        <a href="tel:+1234567890" className="flex items-center text-indigo-600 hover:text-indigo-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone">
            <path d="M22 16.92V22a2 2 0 0 1-2.18 2A19.88 19.88 0 0 1 2 4.18 2 2 0 0 1 4 2h5.08a2 2 0 0 1 2 1.72l1.2 5.36a2 2 0 0 1-.45 1.72L9.61 12.39a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 1.72-.45l5.36 1.2a2 2 0 0 1 1.72 2z" />
          </svg>
          <span className="ml-2">Phone</span>
        </a>
        <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
            <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <span className="ml-2">LinkedIn</span>
        </a>
        <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
            <path d="M9 19c-5 1-5-2-7-2m14 4v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.5c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.61V22" />
          </svg>
          <span className="ml-2">GitHub</span>
        </a>
        <a href="https://leetcode.com/example" target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-code">
            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
          </svg>
          <span className="ml-2">LeetCode</span>
        </a>
      </div> */}

      {/* Experience Section */}
      <div className="flex flex-col md:flex-row md:gap-6">
        {/* Experience Section */}
        <div className="md:w-1/2 flex flex-col">
          <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col">
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            <div className="flex-1">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className="md:w-1/2 flex flex-col">
          <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col">
            <h3 className="text-2xl font-semibold mb-6">Event</h3>
            <div className="flex-1 space-y-6">
              {events.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
