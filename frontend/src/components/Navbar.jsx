import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">TechNews</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/projects" className="hover:text-blue-400">Projetos</Link>
        <Link to="/videos" className="hover:text-blue-400">Vídeos</Link>
      </div>
    </nav>
  );
}

export default Navbar;
