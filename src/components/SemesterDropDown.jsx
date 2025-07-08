
// ===== SemesterDropDown Component =====
function SemesterDropDown({ semester }) {
  return (
    <details className="border border-gray-200 rounded-lg p-4 group">
      <summary className="cursor-pointer flex justify-between items-center font-medium list-none">
        <span>{semester.name}</span>
        <span>CGPA: {semester.gpa}</span>
        <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </summary>
      <div className="mt-4 pl-4">
        <h4 className="font-medium mb-2">Courses Taken:</h4>
        <ul className="list-disc list-inside space-y-1">
          {semester.courses.map((course, idx) => (
            <li key={idx}>{course}</li>
          ))}
        </ul>
      </div>
    </details>
  );
}

export default SemesterDropDown;