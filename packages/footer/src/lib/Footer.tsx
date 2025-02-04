
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Facebook</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">Instagram</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">X</a>
      </div>
    </footer>
  );
}
