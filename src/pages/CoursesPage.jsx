import CourseCard from "../components/CourseCard";

// ===== CoursesPage Component =====
function CoursesPage() {
  const courses = [
    {
      title: "Advanced React Development",
      provider: "Udemy",
      issued: "2023",
      image: " https://picsum.photos/300/200?random=4",
      certificateLink: "#"
    },
    {
      title: "Cloud Computing Fundamentals",
      provider: "Coursera",
      issued: "2022",
      image: " https://picsum.photos/300/200?random=5",
      certificateLink: "#"
    }
  ];

  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-bold mb-8">Courses & Certifications</h2>
      <div className="space-y-12">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </section>
  );
}

export default CoursesPage;