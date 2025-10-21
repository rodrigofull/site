import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Videos from './pages/Videos';
import file from './assets/file.png';

function App() {
  return (
    <Router>
      <Navbar />

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Minha imagem no React</h1>
        <img src={file} alt="Minha imagem" width="200" />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Router>
  );
}

export default App;
