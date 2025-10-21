function NewsCard({ title, description, url }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={url} className="text-blue-500 hover:underline">
        Ler mais
      </a>
    </div>
  );
}

export default NewsCard;
