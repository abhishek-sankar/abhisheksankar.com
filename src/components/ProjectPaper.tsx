import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { projects } from "../data/projects";

type PaperMeta = {
  markdownPath: string;
  sourceTexPath: string;
  originalPdfPath: string;
};

const PAPER_META_BY_PROJECT_ID: Record<string, PaperMeta> = {
  "persona-drift": {
    markdownPath: "/Papers/ANLP___Project_Report/web.md",
    sourceTexPath: "/Papers/ANLP___Project_Report/latex/acl_latex.tex",
    originalPdfPath: "/ANLP___Project_Report.pdf",
  },
  "i-in-attention": {
    markdownPath: "/Papers/Gen_AI_Project_Proposal/web.md",
    sourceTexPath: "/Papers/Gen_AI_Project_Proposal/main.tex",
    originalPdfPath: "/Gen_AI_Project_Proposal.pdf",
  },
  "projexion": {
    markdownPath: "/Papers/IDL_Project_Report/web.md",
    sourceTexPath: "/Papers/IDL_Project_Report/final_report.tex",
    originalPdfPath: "/IDL_Project_Report.pdf",
  },
};

export const ProjectPaper = () => {
  const { id } = useParams<{ id: string }>();
  const [markdown, setMarkdown] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const project = useMemo(() => projects.find((p) => p.id === id), [id]);
  const paperMeta = useMemo(() => (id ? PAPER_META_BY_PROJECT_ID[id] : undefined), [id]);
  const markdownBasePath = useMemo(() => {
    if (!paperMeta) {
      return "/";
    }

    const lastSlashIdx = paperMeta.markdownPath.lastIndexOf("/");
    return lastSlashIdx >= 0 ? `${paperMeta.markdownPath.slice(0, lastSlashIdx + 1)}` : "/";
  }, [paperMeta]);

  const resolvePaperAssetPath = (rawPath?: string) => {
    if (!rawPath) {
      return "";
    }

    if (
      rawPath.startsWith("http://") ||
      rawPath.startsWith("https://") ||
      rawPath.startsWith("/") ||
      rawPath.startsWith("data:")
    ) {
      return rawPath;
    }

    return `${markdownBasePath}${rawPath.replace(/^\.\//, "")}`;
  };

  useEffect(() => {
    if (!paperMeta) {
      setIsLoading(false);
      return;
    }

    let isCancelled = false;
    setIsLoading(true);
    setError("");

    fetch(paperMeta.markdownPath)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Could not load paper content (${res.status}).`);
        }
        return res.text();
      })
      .then((text) => {
        if (!isCancelled) {
          setMarkdown(text);
          setIsLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (!isCancelled) {
          setError(err instanceof Error ? err.message : "Could not load paper content.");
          setIsLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [paperMeta]);

  if (!project) {
    return <div>Project not found</div>;
  }

  if (!paperMeta) {
    return (
      <section className="max-w-3xl mx-auto">
        <Link to="/projects" className="text-phthalo-green-500 hover:underline block mb-6">
          &larr; Projects
        </Link>
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-700 dark:text-gray-300">Paper view is not available for this project yet.</p>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto">
      <Link to="/projects" className="text-phthalo-green-500 hover:underline block mb-6">
        &larr; Projects
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <a href={paperMeta.sourceTexPath} className="text-phthalo-green-500" target="_blank" rel="noreferrer">
            Source .tex
          </a>
          <span> • </span>
          <a href={paperMeta.originalPdfPath} className="text-phthalo-green-500" target="_blank" rel="noreferrer">
            Original PDF
          </a>
        </div>
      </div>

      {isLoading ? <p className="text-gray-700 dark:text-gray-300">Loading paper...</p> : null}
      {error ? <p className="text-red-600 dark:text-red-400">{error}</p> : null}

      {!isLoading && !error ? (
        <article className="paper-content text-gray-800 dark:text-gray-200">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              h1: ({ children }) => <h1 className="paper-h1">{children}</h1>,
              h2: ({ children }) => <h2 className="paper-h2">{children}</h2>,
              h3: ({ children }) => <h3 className="paper-h3">{children}</h3>,
              p: ({ children }) => <p className="paper-p">{children}</p>,
              ul: ({ children }) => <ul className="paper-list">{children}</ul>,
              ol: ({ children }) => <ol className="paper-list list-decimal">{children}</ol>,
              li: ({ children }) => <li className="paper-li">{children}</li>,
              a: ({ href, children, ...props }) => (
                <a
                  href={resolvePaperAssetPath(href)}
                  {...props}
                  className="text-phthalo-green-500 underline"
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={href?.startsWith("http") ? "noreferrer" : undefined}
                >
                  {children}
                </a>
              ),
              img: ({ src, alt, ...props }) => <img src={resolvePaperAssetPath(src)} alt={alt ?? ""} {...props} />,
            }}
          >
            {markdown}
          </ReactMarkdown>
        </article>
      ) : null}
    </section>
  );
};
