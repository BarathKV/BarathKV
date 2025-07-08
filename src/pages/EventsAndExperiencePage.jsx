import EventCard from '../components/EventCard';
import ExperienceCard from '../components/ExprienceCard';  

// ===== EventsAndExperiencePage Component =====
function EventsAndExperiencePage() {
  const events = [
    {
      title: "TechConf 2023",
      organization: "TechWorld Inc.",
      date: "June 2023",
      certificateImage: " https://picsum.photos/300/200?random=6",
      description: "Attended as a speaker discussing the future of frontend development with React and AI integration."
    },
    {
      title: "Hackathon Winner",
      organization: "DevSprint Hackathon",
      date: "April 2023",
      certificateImage: " https://picsum.photos/300/200?random=7",
      description: "Built a real-time collaborative code editor using WebSockets and React."
    }
  ];

  const experiences = [
    {
      company: "InnovateX Solutions",
      role: "Frontend Developer Intern",
      duration: "Jan 2023 - Jun 2023",
      description: "Worked on developing reusable UI components and optimizing performance for large-scale applications."
    },
    {
      company: "CodeCrafters Pvt. Ltd.",
      role: "Junior Developer",
      duration: "Jul 2023 - Present",
      description: "Developing responsive web apps using React, integrating REST APIs, and collaborating with cross-functional teams."
    }
  ];

  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-bold mb-8">Events & Experience</h2>

      {/* Events Section */}
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold">Events Attended</h3>
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}

        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsAndExperiencePage;