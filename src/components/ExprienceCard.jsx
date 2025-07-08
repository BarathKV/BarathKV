// ===== ExperienceCard Component =====
function ExperienceCard({ experience }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-100">
      <h4 className="text-xl font-semibold">{experience.company}</h4>
      <p className="text-indigo-600">{experience.role}</p>
      <p className="text-gray-500 text-sm mb-3">{experience.duration}</p>
      <p className="text-gray-600">{experience.description}</p>
    </div>
  );
}

export default ExperienceCard;