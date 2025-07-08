
// ===== NavBar Component =====
function NavBar({ activePage, setActivePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-indigo-600">John Doe</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {['HOME', 'PROJECTS', 'COURSE', 'ACADEMICS', 'EVENTS AND EXPERIENCE'].map((page) => (
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

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4 space-y-2">
          {['HOME', 'PROJECTS', 'COURSE', 'ACADEMICS', 'EVENTS AND EXPERIENCE'].map((page) => (
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