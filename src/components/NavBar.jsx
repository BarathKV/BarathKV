import { useState } from 'react';

function NavBar({ activePage, setActivePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`bg-white shadow-md p-4 sticky top-0 z-50 rounded-b-lg border-b border-gray-200 transition-all`}>
      <div className="container mx-auto flex justify-center items-center">

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {['HOME', 'PROJECTS', 'COURSE', 'ACADEMICS'].map((page) => (
            <li key={page}>
              <button
                onClick={() => setActivePage(page)}
                className={`capitalize hover:text-indigo-600 transition-colors ${
                  activePage === page ? 'text-indigo-600 font-semibold' : ''
                }`}
              >
                {page}
              </button>
            </li>
          ))}
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
          {['HOME', 'PROJECTS', 'COURSE', 'ACADEMICS'].map((page) => (
            <li key={page}>
              <button
                onClick={() => {
                  setActivePage(page);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left capitalize py-2 px-4 rounded-md transition-colors ${
                  activePage === page ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;