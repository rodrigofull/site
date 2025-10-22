import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  // Array simples com um "projeto" apontando para seu GitHub
  const projects = [
    {
      id: 1,
      name: "Meus Projetos",
      description: "Clique abaixo para ver todos os meus projetos no GitHub.",
      html_url: "https://github.com/rodrigofull" // <- seu GitHub atualizado
    }
  ];

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map(proj => (
        <ProjectCard key={proj.id} {...proj} />
      ))}
    </div>
  );
}
