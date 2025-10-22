import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">TechNews</h1>

      {/* Menu Desktop */}
      <div className="hidden md:flex space-x-12 text-lg font-medium">
        <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
        <a
          href="https://github.com/rodrigofull"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          Projetos
        </a>
        <a
          href="https://www.youtube.com/c/FATOSFANT%C3%81STICOS"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          Vídeos
        </a>
      </div>

      {/* Menu Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {/* ícone hambúrguer */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Mobile */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center py-4 space-y-4 md:hidden">
          <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
          <a
            href="https://github.com/rodrigofull"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            Projetos
          </a>
          <a
            href="https://www.youtube.com/c/FATOSFANT%C3%81STICOS"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            Vídeos
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

