function ProjectCard({ name, html_url, description }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{name}</h3>
      <p>{description}</p>
      <a href={html_url} target="_blank" className="text-blue-500">Ver no GitHub</a>
    </div>
  );
}

export default ProjectCard;
