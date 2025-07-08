
// ===== CourseCard Component =====
function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      <div className="grid md:grid-cols-2">
        <div className="flex items-center justify-center p-6 bg-gray-50">
          <img src={course.image} alt={course.title} className="rounded-lg max-h-64 shadow-md" />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
          <p className="text-gray-600 mb-1">Provided by {course.provider}</p>
          <p className="text-gray-500 text-sm mb-3">Issued {course.issued}</p>
          <a href={course.certificateLink} className="text-indigo-600 hover:underline inline-flex items-center mt-auto">
            View Certificate
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;