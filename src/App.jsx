import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import AcademicsPage from "./pages/AcademicsPage";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-800 transition-colors duration-300">
      <NavBar />
      <main className="ml-8 mx-auto px-4 py-8">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
