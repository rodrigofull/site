import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/github')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map(proj => (
        <ProjectCard key={proj.id} {...proj} />
      ))}
    </div>
  );
}

export default Projects;
