// ===== Footer Component =====
function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-16 py-8">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com/BarathKV" className="text-indigo-600 underline">LinkedIn</a>
          <a href="https://www.linkedin.com/in/barath-k-v-6a1159336/" className="text-indigo-600 underline">GitHub</a>
          <a href="mailto:kvbarath2004@gmail.com" className="text-indigo-600 underline">Email</a>
          <a href="https://leetcode.com/u/ZKhZFANbgs/" className="text-indigo-600 underline">LeetCode</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;