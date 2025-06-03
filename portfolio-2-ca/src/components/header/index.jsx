import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-950 border-b border-gray-800 shadow-md">
      <div className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-widest text-white">
          <span className="text-cyan-400">/</span>
          <span className="hover:text-cyan-400 transition">PORTFOLIO</span>
        </Link>

        <nav className="hidden md:flex space-x-10 text-sm  uppercase tracking-wider">
          <Link
            to="/"
            className="text-gray-300 text-lg font-bold hover:text-cyan-400 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 text-lg font-bold hover:text-cyan-400 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 text-lg font-bold hover:text-cyan-400 transition duration-200"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
