function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">TechNews</h1>
      <div className="space-x-8">
        {/* Link interno para Home */}
        <a href="/" className="px-4 hover:text-blue-400">Home</a>

        {/* Link externo para GitHub */}
        <a
          href="https://github.com/rodrigofull"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          Projetos
        </a>

        {/* Link externo para YouTube */}
        <a
          href="https://www.youtube.com/c/FATOSFANT%C3%81STICOS"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          Vídeos
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
