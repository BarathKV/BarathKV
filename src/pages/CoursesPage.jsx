import CourseCard from "../components/CourseCard";

import DS from "../assets/DS.jpg";
import MOOC from "../assets/MOOC.jpg";
import CN from "../assets/CN.jpg";
import ML from "../assets/ML.jpg";
import DAA from "../assets/DAA.jpg";
import OODP from "../assets/OODP.jpg";
import OS from "../assets/OS.jpg";
import Java_OOP from "../assets/Java_OOP.jpg";

// ===== CoursesPage Component =====
function CoursesPage() {
  const courses = [
    {
      title: "Tools for Data Science",
      provider: "Coursera",
      issued: "Jan 2025 - Mar 2025",
      image: DS,
      certificateLink: "https://www.coursera.org/account/accomplishments/verify/R1EL1SYRPPUG"
    },
    {
      title: "Edge Computing - Gold Medal",
      provider: "IITKGP - NPTEL",
      issued: "Jan 2025 - Mar 2025",
      image: MOOC,
      certificateLink: "https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs28/Course/NPTEL25CS28S34330428201307580.pdf"
    },
    {
      title: "Demystifying Networks - Top 1%",
      provider: "IITB - NPTEL",
      issued: "Jul 2024 - Aug 2024",
      image: CN,
      certificateLink: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs69/Course/NPTEL24CS69S33310044802692281.pdf"
    },
    {
      title: "Introduction to Machine Learning",
      provider: "IITKGP - NPTEL",
      issued: "Jul 2024 - Sep 2024",
      image: ML,
      certificateLink: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs81/Course/NPTEL24CS81S43310257502692281.pdf"
    },
    {
      title: "Fundamental Algorithm: Design and Analysis - Top 5%",
      provider: "IITKGP  - NPTEL",
      issued: "Jan 2024 - Feb 2024",
      image: DAA,
      certificateLink: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs28/Course/NPTEL24CS28S34410009830101733.pdf"
    },
    {
      title: "Object-Oriented Design",
      provider: "University of Alberta - Coursera",
      issued: "Feb 2023 - Mar 2023",
      image: OODP,
      certificateLink: "https://www.coursera.org/account/accomplishments/verify/5D2V7J8ZECC3"
    },
    {
      title: "Introduction to Operating System",
      provider: "IITM - NPTEL",
      issued: "Jul 2023 - Sep 2023",
      image:OS,
      certificateLink: "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs101/Course/NPTEL23CS101S2533165210070411.pdf"
    },
    {
      title: "Introduction to Java and Object-Oriented Programming",
      provider: "University of Pennsylvania - Coursera",
      issued: "Jun 2023 - Aug 2023",
      image: Java_OOP,
      certificateLink: "https://www.coursera.org/account/accomplishments/verify/Z9SCNV9QWL5S"
    },
  ];

  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-bold mb-8">Courses & Certifications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </section>
  );
}

export default CoursesPage;