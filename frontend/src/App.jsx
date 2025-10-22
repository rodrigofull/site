import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Videos from './pages/Videos';
import file from './assets/file.png';
import './index.css';
import './App.css';
function App() {
  return (
    <Router>
      {/* Seção fixa no topo */}
      <div className="fixed top-0 left 20 w-full h-64 z-50">
        {/* Background da seção fixa */}
        <div
          className="w-full h-full bg-cover bg-center relative"
          style={{ backgroundImage: "url('/assets/topo.jpg')" }}
        >
          {/* Navbar sobre a imagem */}
          <div className="border-b border-gray-700">
            <Navbar />
          </div>

          {/* Título e imagem centralizados */}
          <div className="flex flex-col items-center justify-center h-full text-white">
            <h1 style={{
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  padding: '1rem',
  borderRadius: '8px',
  maxWidth: '600px',
  margin: '0 auto'
}}>
              Notícias do mundo da tecnologia e serviços
            </h1>
            <img src={file} alt="Minha imagem" width="150" />
          </div>
        </div>
      </div>

      {/* Conteúdo abaixo da seção fixa */}
      <div className="pt-64 bg-gray-100 min-h-screen p-8">
        
<p style={{
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  padding: '1rem',
  borderRadius: '8px',
  maxWidth: '600px',
  margin: '0 auto'
}}>
          No TechNews você encontra as últimas novidades do mundo da tecnologia, análises de tendências, tutoriais e conteúdos exclusivos para desenvolvedores e entusiastas de tecnologia. 
          Além de manter você atualizado, também oferecemos serviços de desenvolvimento fullstack e automação com n8n, ajudando empresas e profissionais a otimizar processos, criar soluções personalizadas e acelerar seus projetos digitais.
          <br /><br />
          Explore nossas notícias, descubra projetos inovadores e conte com a nossa expertise para levar sua tecnologia ao próximo nível.
          <br /><br />
          <strong>Confira nossos projetos no GitHub e nosso canal no YouTube para ficar por dentro de tudo que estamos criando!</strong>
        </p>
      </div>

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Router>
  );
}

export default App;

