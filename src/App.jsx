import { useState } from "react";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import AcademicsPage from "./pages/AcademicsPage";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  const [activePage, setActivePage] = useState("HOME");
  return (
    <div className="bg-gray-50 text-gray-800 transition-colors duration-300">
      {/* <NavBar /> */}
      <NavBar activePage={activePage} setActivePage={setActivePage} />
      <main className="ml-8 mx-auto px-4 py-8">
        {activePage === "HOME" && <HomePage />}
        {activePage === "PROJECTS" && <ProjectsPage />}
        {activePage === "ACADEMICS" && <AcademicsPage />}
        {activePage === "COURSE" && <CoursesPage />}
      </main>
      <Footer />
    </div>
  );
}
