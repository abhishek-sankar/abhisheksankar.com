import { Link, useParams } from "react-router-dom";
import { engagements } from "../data/engagements";
import type { Engagement } from "../data/engagements";

export const PublicEngagements: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2">
        Volunteering / Engagements <Link to="/engagements" className="text-phthalo-green-500 text-sm font-normal ml-1 cursor-pointer">View all →</Link>
      </h2>

      {engagements.slice(0, 3).map((engagement: Engagement) => (
        <div className="mb-5" key={engagement.id}>
          <div className="font-semibold flex flex-row justify-start">
            <p>{engagement.title}</p>
            <span className="text-gray-400 font-normal text-sm ml-2">{engagement.date}</span>
          </div>
          {engagement.description ? <div className="text-base text-gray-700 dark:text-gray-300">{engagement.description}</div> : null}
          {engagement.links && (
            <div className="text-sm mt-1">
              {engagement.links.map((link: { label: string; url: string }) => (
                <a href={link.url} target="_blank" className="text-phthalo-green-500 mr-3" key={link.url}>{link.label}</a>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export const EngagementList = () => (
  <section className="mb-12">
    <Link to="/" className="text-phthalo-green-500 hover:underline block mb-6">&larr; Home</Link>
    <h2 className="text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2">Volunteering / Engagements</h2>
    {engagements.map((engagement: Engagement) => (
      <div className="mb-5" key={engagement.id}>
        <div className="font-semibold flex flex-row justify-start">
          <p>{engagement.title}</p>
          <span className="text-gray-400 font-normal text-sm ml-2">{engagement.date}</span>
        </div>
        {engagement.description ? <div className="text-base text-gray-700 dark:text-gray-300">{engagement.description}</div> : null}
        {engagement.links && (
          <div className="text-sm mt-1">
            {engagement.links.map((link: { label: string; url: string }) => (
              <a href={link.url} target="_blank" className="text-phthalo-green-500 mr-3" key={link.url}>{link.label}</a>
            ))}
          </div>
        )}
      </div>
    ))}
  </section>
);

export const EngagementDetail = () => {
  const { id } = useParams<{ id: string }>();
  const engagement = engagements.find((e: Engagement) => e.id === id);
  if (!engagement) return <div>Engagement not found</div>;
  return (
    <section className="max-w-3xl mx-auto">
      <Link to="/engagements" className="text-phthalo-green-500 hover:underline block mb-6">&larr; Engagements</Link>
      <h1 className="text-4xl font-bold mb-2">{engagement.title}</h1>
      <p className="text-lg text-gray-500 mb-6">{engagement.date}</p>
      {engagement.description && <div className="text-xl text-gray-700 dark:text-gray-300 mb-6">{engagement.description}</div>}
      {engagement.links && (
        <div className="text-base text-gray-700 dark:text-gray-300 underline">
          {engagement.links.map((link, idx) => (
            <span key={link.url}>
              <a href={link.url} target="_blank" className="text-phthalo-green-500">{link.label}</a>
              {idx < engagement.links!.length - 1 && <span> &bull; </span>}
            </span>
          ))}
        </div>
      )}
    </section>
  );
};
