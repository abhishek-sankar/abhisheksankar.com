import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

export const ProjectList = () => (
  <section className="mb-12">
    <Link to="/" className="text-phthalo-green-500 hover:underline block mb-6">&larr; Home</Link>
    <h2 className="text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2">Projects</h2>
    {projects.map((project: Project) => (
      <div className="mb-5" key={project.id}>
        <div className="font-semibold flex flex-row justify-start">
          <p>{project.title}</p>
          <span className="text-gray-400 font-normal text-sm ml-2">{project.date}</span>
        </div>
        <div className="text-base text-gray-700 dark:text-gray-300">{project.description}</div>
        <div className="text-sm mt-1">
          {project.links.map((link: { label: string; url: string }) => (
            <a href={link.url} className="text-phthalo-green-500 mr-3" key={link.url}>{link.label}</a>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p: Project) => p.id === id);
  if (!project) return <div>Project not found</div>;
  return (
    <section className="max-w-3xl mx-auto">
      <Link to="/projects" className="text-phthalo-green-500 hover:underline block mb-6">&larr; Projects</Link>
      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <p className="text-lg text-gray-500 mb-6">{project.date}</p>
      <div className="text-xl text-gray-700 dark:text-gray-300 mb-6">{project.description}</div>
      <div className="text-base text-gray-700 dark:text-gray-300 underline">
        {project.links.map((link, idx) => (
          <span key={link.url}>
            <a href="#" className="text-phthalo-green-500">{link.label}</a>
            {idx < project.links.length - 1 && <span> &bull; </span>}
          </span>
        ))}
      </div>
    </section>
  );
}; 