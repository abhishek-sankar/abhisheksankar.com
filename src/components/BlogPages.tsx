import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import type { Blog } from "../data/blogs";
import * as BlogComponents from "./blogs";
import { useEffect } from "react";
import { DateText } from "./DateText";

export const BlogList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mb-12">
      <Link to="/" className="text-phthalo-green-500 hover:underline block mb-6">&larr; Home</Link>
      <h2 className="text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2">Blog</h2>
      {blogs.map((blog: Blog) => (
        <div key={blog.id} className="mb-5">
          <div className="font-semibold flex items-start justify-between gap-2">
            <Link to={`/blogs/${blog.id}`} className="text-phthalo-green-500 min-w-0">{blog.title}</Link>
            <span className="text-gray-400 font-normal text-sm shrink-0 text-right">
              <DateText date={blog.date} />
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline">{blog.readTime}</span>
            </span>
          </div>
          <div className="text-base text-gray-700 dark:text-gray-300">{blog.summary}</div>
          <Link to={`/blogs/${blog.id}`} className="text-phthalo-green-500 text-sm">Read post</Link>
        </div>
      ))}
    </section>
  );
};

export const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const blog = blogs.find((b: Blog) => b.id === id);
  if (!blog) return <div>Blog post not found</div>;
  
  const BlogComponent = blog.component && (BlogComponents as any)[blog.component];
  return (
    <section className="max-w-3xl mx-auto">
      <Link to="/blogs" className="text-phthalo-green-500 hover:underline block mb-6">&larr; Home / Blog</Link>
      {BlogComponent ? <BlogComponent /> : <div className="text-xl text-gray-700 dark:text-gray-300 mb-6">{blog.content}</div>}
    </section>
  );
}; 