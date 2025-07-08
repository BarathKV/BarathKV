// ===== Footer Component =====
function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-16 py-8">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-gray-500 hover:text-indigo-600">LinkedIn</a>
          <a href="#" className="text-gray-500 hover:text-indigo-600">GitHub</a>
          <a href="#" className="text-gray-500 hover:text-indigo-600">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;