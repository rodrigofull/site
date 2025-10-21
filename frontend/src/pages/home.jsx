import { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews([
      { id: 1, title: "Nova atualização do React", description: "React lança nova versão com melhorias de performance.", url: "#" },
      { id: 2, title: "Automação com n8n", description: "Como n8n está facilitando a automação de workflows.", url: "#" },
      { id: 3, title: "GitHub lança recursos para Devs", description: "Novas funcionalidades para integração de projetos open-source.", url: "#" },
    ]);
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {news.map(item => (
        <NewsCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Home;
