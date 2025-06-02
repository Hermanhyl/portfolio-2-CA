import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-950 border-b border-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <Link to="/" className="text-2xl font-bold tracking-widest text-white">
          <span className="text-cyan-400">/</span>
          <span className="hover:text-cyan-400 transition">PORTFOLIO</span>
        </Link>

        {/* Navigation (expand as needed) */}
        <nav className="hidden md:flex space-x-10 text-sm uppercase tracking-wider">
          <Link
            to="/"
            className="text-gray-300 text-lg font-medium hover:text-cyan-400 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 text-lg font-medium hover:text-cyan-400 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 text-lg font-medium hover:text-cyan-400 transition duration-200"
          >
            Contact
          </Link>
          {/* Add more links here later, like About, Contact, etc. */}
        </nav>
      </div>
    </header>
  );
}

export default Header;