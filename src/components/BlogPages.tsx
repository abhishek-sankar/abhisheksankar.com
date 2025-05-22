import { blogs } from "../data/blogs";
import type { Blog } from "../data/blogs";
import { Link, useParams } from "react-router-dom";
import * as BlogComponents from "./blogs";

export const BlogList = () => (
  <section className="mb-12">
    <Link to="/" className="text-gray-500 hover:underline block mb-6">&larr; Home</Link>
    <h2 className="text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2">Blog</h2>
    {blogs.map((blog: Blog) => (
      <div key={blog.id} className="mb-5">
        <div className="font-semibold">
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          <span className="text-gray-400 font-normal text-sm ml-2">{blog.date} • {blog.readTime}</span>
        </div>
        <div className="text-base text-gray-700 dark:text-gray-300">{blog.summary}</div>
        <Link to={`/blogs/${blog.id}`} className="text-indigo-500 text-sm">Read post</Link>
      </div>
    ))}
  </section>
);

export const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find((b: Blog) => b.id === id);
  if (!blog) return <div>Blog post not found</div>;
  const BlogComponent = blog.component && (BlogComponents as any)[blog.component];
  return (
    <section className="max-w-3xl mx-auto px-4 py-8">
      {BlogComponent ? <BlogComponent /> : <div className="text-xl text-gray-700 dark:text-gray-300 mb-6">{blog.content}</div>}
    </section>
  );
}; 