import SemesterDropDown from "../components/SemesterDropDown";

// ===== AcademicsPage Component =====
function AcademicsPage() {
  const academics = {
    college: {
      degree: "B.Tech Computer Science",
      institution: "XYZ University",
      cgpa: "8.9",
      semesters: [
        {
          name: "Semester 1",
          gpa: "9.1",
          courses: ["Programming Basics", "Mathematics I", "Physics"]
        },
        {
          name: "Semester 2",
          gpa: "8.7",
          courses: ["Data Structures", "Mathematics II", "Chemistry"]
        },
        {
          name: "Semester 3",
          gpa: "9.0",
          courses: ["Algorithms", "Operating Systems", "Database Systems"]
        }
      ]
    },
    grade12: {
      board: "CBSE",
      percentage: "92%"
    },
    grade10: {
      board: "CBSE",
      percentage: "95%"
    }
  };

  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-bold mb-8">Academic Journey</h2>

      {/* College Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-xl font-semibold mb-4">{academics.college.degree} at {academics.college.institution}</h3>
        <p className="mb-4">Current CGPA: <span className="font-medium">{academics.college.cgpa}</span></p>
        <div className="space-y-4">
          {academics.college.semesters.map((semester, index) => (
            <SemesterDropDown key={index} semester={semester} />
          ))}
        </div>
      </div>

      {/* Grade 12 and 10 */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-semibold mb-2">Grade 12</h3>
          <p className="text-gray-600">Board: {academics.grade12.board}</p>
          <p className="text-indigo-600 font-bold text-2xl mt-2">{academics.grade12.percentage}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-semibold mb-2">Grade 10</h3>
          <p className="text-gray-600">Board: {academics.grade10.board}</p>
          <p className="text-indigo-600 font-bold text-2xl mt-2">{academics.grade10.percentage}</p>
        </div>
      </div>
    </section>
  );
}

export default AcademicsPage;