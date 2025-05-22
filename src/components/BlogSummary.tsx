import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import type { Blog } from "../data/blogs";

export const BlogSummary: React.FC = () => {
    return (
        <section>
            <h2 className="text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2">
                Blog <Link to="/blogs" className="text-phthalo-green-500 text-sm font-normal ml-1 cursor-pointer">View all →</Link>
            </h2>
            {blogs.slice(0, 3).map((blog: Blog) => (
                <div key={blog.id} className="mb-4">
                    <div className="font-semibold">
                        <Link to={`/blogs/${blog.id}`} className="text-phthalo-green-500">{blog.title}</Link>
                        <span className="text-gray-400 font-normal text-sm ml-2">{blog.date} • {blog.readTime}</span>
                    </div>
                    <div className="text-base text-gray-700 dark:text-gray-300">{blog.summary}</div>
                    <Link to={`/blogs/${blog.id}`} className="text-phthalo-green-500 text-sm">Read post</Link>
                </div>
            ))}
        </section>
    );
};
