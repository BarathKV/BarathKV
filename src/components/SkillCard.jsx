function SkillCard({ title, skills }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]">
      <h3 className="text-2xl font-semibold mb-4 text-black-600">{title}</h3>
      <ul className="list-disc pl-4 space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-lg text-gray-800">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;
