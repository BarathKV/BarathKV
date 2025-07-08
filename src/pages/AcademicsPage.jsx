import SemesterDropDown from "../components/SemesterDropDown";

// ===== AcademicsPage Component =====
function AcademicsPage() {
  const academics = {
    college: {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "SRM Institute of Science and Technology",
      cgpa: "9.55",
      semesters: [
        {
          name: "Semester 1",
          gpa: "9.5",
          courses: [
            "Communicative English",
            "Calculus And Linear Algebra",
            "Semiconductor Physics And Computational Methods",
            "Introduction To Computational Biology",
            "Programming For Problem Solving",
            "Engineering Graphics And Design",
            "Professional Skills And Practices"
          ]
        },
        {
          name: "Semester 2",
          gpa: "8.739",
          courses: [
            "German",
            "Advanced Calculus And Complex Analysis",
            "Chemistry",
            "Electrical And Electronics Engineering",
            "Philosophy Of Engineering",
            "Object Oriented Design And Programming",
            "Environmental Science",
            "General Aptitude",
            "Basic Civil And Mechanical Workshop",
            "National Service Scheme"
          ]
        },
        {
          name: "Semester 3",
          gpa: "9.826",
          courses: [
            "Transforms And Boundary Value Problems",
            "Data Structures And Algorithms",
            "Operating Systems",
            "Computer Organization And Architecture",
            "Advanced Programming Practice",
            "Design Thinking And Methodology",
            "Professional Ethics",
            "Verbal Reasoning"
          ]
        },
        {
          name: "Semester 4",
          gpa: "9.650",
          courses: [
            "Probability And Queueing Theory",
            "Design And Analysis Of Algorithms",
            "Database Management Systems",
            "Artificial Intelligence",
            "Internet Of Things",
            "Social Engineering",
            "Critical And Creative Thinking Skills",
            "Universal Human Values - Ii: Understanding Harmony And Ethical Human Conduct"
          ]
        },
        {
          name: "Semester 5",
          gpa: "9.48",
          courses: [
            "Discrete Mathematics",
            "Formal Language And Automata",
            "Computer Networks",
            "Full Stack Web Development",
            "Short Range Wireless Communication",
            "Indian Art Form",
            "Machine Learning",
            "Community Connect"
          ]
        },
        {
          name: "Semester 6",
          gpa: "10.0",
          courses: [
            "Software Engineering and Project Management",
            "Compiler Design",
            "Data SCience",
            "Data Mining and Analytics",
            "Natural Language Processing",
            "TQM and Reliability Engineering",
            "Indian Traditional Knowledge",
            "Massive Open Online Course (MOOC) - Edge Computing"
          ]
        }
      ]
    },
    grade12: {
      board: "CBSE",
      percentage: "85.6%"
    },
    grade10: {
      board: "CBSE",
      percentage: "86.8%"
    }
  };

  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-bold mb-8">Academic Journey</h2>

      {/* College Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-xl font-semibold mb-4">{academics.college.degree}</h3>
        <h2 className="text-l mb-4">at {academics.college.institution}</h2>
        <p className="mb-4">Current CGPA: <span className=" text-indigo-600 font-semibold">{academics.college.cgpa}</span></p>
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