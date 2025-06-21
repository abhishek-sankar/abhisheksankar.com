import { Link, useParams } from "react-router-dom";
import { readings } from "../data/readings";
import type { Reading } from "../data/readings";

export const ReadingList = () => (
  <section className="mb-12">
    <Link to="/" className="text-phthalo-green-500 hover:underline block mb-6">&larr; Home</Link>
    <h2 className="text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2">Reading Lists</h2>
    {readings.map((reading: Reading) => (
      <div key={reading.id} className="mb-5">
        <div className="font-semibold">
          <Link to={`/reading/${reading.id}`} className="text-phthalo-green-500">{reading.title}</Link>
          <span className="text-gray-400 font-normal text-sm ml-2">{reading.date}</span>
        </div>
        <div className="text-base text-gray-700 dark:text-gray-300">
          {reading.items.length} articles
        </div>
        <Link to={`/reading/${reading.id}`} className="text-phthalo-green-500 text-sm">View reading list</Link>
      </div>
    ))}
  </section>
);

export const ReadingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const reading = readings.find((r: Reading) => r.id === id);
  if (!reading) return <div>Reading list not found</div>;
  
  return (
    <section className="max-w-3xl mx-auto">
      <Link to="/reading" className="text-phthalo-green-500 hover:underline block mb-6">&larr; Home / Reading</Link>
      <h1 className="text-4xl font-bold mb-2">{reading.title}</h1>
      <p className="text-lg text-gray-500 mb-6">{reading.date}</p>
      <div className="space-y-3">
        {reading.items.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-gray-400 mt-1">•</span>
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-phthalo-green-500 hover:underline"
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}; 