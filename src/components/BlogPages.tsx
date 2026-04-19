import { Suspense, lazy, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import type { Blog } from "../data/blogs";
import { DateText } from "./DateText";
import { StaggerGroup } from "./StaggerGroup";
import { staggerStyle } from "./staggerStyle";

const BLOG_COMPONENTS = {
  Blog_CET_Placements: lazy(() =>
    import("../blogs/Blog_CET_Placements").then((module) => ({ default: module.Blog_CET_Placements })),
  ),
  Blog_Anything_API: lazy(() =>
    import("../blogs/Blog_Anything_API").then((module) => ({ default: module.Blog_Anything_API })),
  ),
  Blog_Screenshotty: lazy(() =>
    import("../blogs/Blog_Screenshotty").then((module) => ({ default: module.Blog_Screenshotty })),
  ),
  Blog_Hack_CMU_2025: lazy(() =>
    import("../blogs/Blog_Hack_CMU_2025").then((module) => ({ default: module.Blog_Hack_CMU_2025 })),
  ),
} as const;

function PostFallback() {
  return <p className="text-gray-700">Loading post...</p>;
}

export const BlogList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StaggerGroup as="section" className="mb-12">
      <Link
        to="/"
        className="text-phthalo-green-500 hover:underline block mb-6 stagger-item"
        style={staggerStyle(0)}
      >
        &larr; Home
      </Link>
      <h2 className="text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2 stagger-item" style={staggerStyle(1)}>Blog</h2>
      {blogs.map((blog: Blog, index) => (
          <div key={blog.id} className="mb-5 stagger-item" style={staggerStyle(index + 2)}>
          <div className="font-semibold flex items-start justify-between gap-2">
            <Link to={`/blogs/${blog.id}`} className="text-phthalo-green-500 min-w-0">{blog.title}</Link>
            <span className="text-gray-500 font-normal text-sm shrink-0 text-right">
              <DateText date={blog.date} />
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline">{blog.readTime}</span>
            </span>
          </div>
          <div className="text-base text-gray-700">{blog.summary}</div>
          <Link to={`/blogs/${blog.id}`} className="text-phthalo-green-500 text-sm">Read post</Link>
        </div>
      ))}
    </StaggerGroup>
  );
};

export const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const blog = blogs.find((b: Blog) => b.id === id);
  if (!blog) return <div>Blog post not found</div>;
  
  const BlogComponent = blog.component
    ? BLOG_COMPONENTS[blog.component as keyof typeof BLOG_COMPONENTS]
    : undefined;
  return (
    <section className="max-w-3xl mx-auto">
      <Link to="/blogs" className="text-phthalo-green-500 hover:underline block mb-6">&larr; Home / Blog</Link>
      {BlogComponent ? (
        <Suspense fallback={<PostFallback />}>
          <BlogComponent />
        </Suspense>
      ) : (
        <div className="text-xl text-gray-700 mb-6">{blog.content}</div>
      )}
    </section>
  );
}; 
