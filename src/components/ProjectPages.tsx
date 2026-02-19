import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import { useEffect } from "react";
import { DateText } from "./DateText";

export const ProjectList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mb-12">
      <Link to="/" className="text-phthalo-green-500 hover:underline block mb-6">&larr; Home</Link>
      <h2 className="text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2">Projects</h2>
      {projects.map((project: Project) => (
        <div className="mb-5" key={project.id}>
          <div className="font-semibold flex flex-col sm:flex-row sm:items-start sm:gap-2">
            <p>{project.title}</p>
            <DateText date={project.date} className="text-gray-400 font-normal text-sm" />
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
};

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projects.find((p: Project) => p.id === id);
  if (!project) return <div>Project not found</div>;
  return (
    <section className="max-w-3xl mx-auto">
      <Link to="/projects" className="text-phthalo-green-500 hover:underline block mb-6">&larr; Projects</Link>
      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <p className="text-lg text-gray-500 mb-6">
        <DateText date={project.date} />
      </p>
      <div className="text-xl text-gray-700 dark:text-gray-300 mb-6">{project.description}</div>
      <div className="text-base text-gray-700 dark:text-gray-300 underline">
        {project.links.map((link, idx) => (
          <span key={link.url}>
            <a href={link.url} className="text-phthalo-green-500">{link.label}</a>
            {idx < project.links.length - 1 && <span> &bull; </span>}
          </span>
        ))}
      </div>
    </section>
  );
}; 