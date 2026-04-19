import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import { DateText } from "./DateText";
import { StaggerGroup } from "./StaggerGroup";
import { staggerStyle } from "./staggerStyle";

export const ProfileSummary: React.FC = () => {
  return (
    <StaggerGroup as="section" className="mb-12">
      <h2 className="text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2 stagger-item" style={staggerStyle(0)}>
        Projects <Link to="/projects" className="text-phthalo-green-500 text-sm font-normal ml-1 cursor-pointer">View all →</Link>
      </h2>

      {projects.slice(0, 3).map((project: Project, index) => (
        <div className="mb-5 stagger-item" key={project.id} style={staggerStyle(index + 1)}>
          <div className="font-semibold flex flex-col sm:flex-row sm:items-start sm:gap-2">
            <p>{project.title}</p>
            <DateText date={project.date} className="text-gray-500 font-normal text-sm" />
          </div>
          <div className="text-base text-gray-700">{project.description}</div>
          <div className="text-sm mt-1">
            {project.links.map((link: { label: string; url: string }) => (
              link.url.startsWith("/") ? (
                <Link to={link.url} className="text-phthalo-green-500 mr-3" key={link.url}>
                  {link.label}
                </Link>
              ) : (
                <a href={link.url} target="_blank" rel="noreferrer" className="text-phthalo-green-500 mr-3" key={link.url}>
                  {link.label}
                </a>
              )
            ))}
          </div>
        </div>
      ))}
    
    </StaggerGroup>
  );
};
