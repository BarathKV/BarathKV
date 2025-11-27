import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import AcademicsPage from "./pages/AcademicsPage";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-50 text-gray-800 transition-colors duration-300">
        <NavBar />
        <main className="mx-auto px-4 py-8">
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="BarathKV/" element={<HomePage />} />
            <Route path="BarathKV/projects" element={<ProjectsPage />} />
            <Route path="BarathKV/courses" element={<CoursesPage />} />
            <Route path="BarathKV/academics" element={<AcademicsPage />} />
            <Route path="BarathKV/*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
