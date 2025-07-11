import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`bg-white shadow-md p-4 sticky top-0 z-50 rounded-b-lg border-b border-gray-200 transition-all`}>
      <div className="container mx-auto flex justify-center items-center">

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/home" className="capitalize hover:text-indigo-600 transition-colors">Home</Link></li>
          <li><Link to="/projects" className="capitalize hover:text-indigo-600 transition-colors">Projects</Link></li>
          <li><Link to="/courses" className="capitalize hover:text-indigo-600 transition-colors">Courses</Link></li>
          <li><Link to="/academics" className="capitalize hover:text-indigo-600 transition-colors">Academics</Link></li>
        </ul>

      </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className={`md:hidden mt-2 p-4 rounded-lg shadow-lg space-y-2 bg-white`}>
          <li><Link to="/home" className="block py-2 px-4 capitalize" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/projects" className="block py-2 px-4 capitalize" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/courses" className="block py-2 px-4 capitalize" onClick={() => setIsMenuOpen(false)}>Courses</Link></li>
          <li><Link to="/academics" className="block py-2 px-4 capitalize" onClick={() => setIsMenuOpen(false)}>Academics</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;