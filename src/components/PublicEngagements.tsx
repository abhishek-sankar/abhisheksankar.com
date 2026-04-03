import { Link } from "react-router-dom";
import { engagements } from "../data/engagements";
import type { Engagement } from "../data/engagements";
import { DateText } from "./DateText";

export const PublicEngagements: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2">
        Volunteering / Engagements <Link to="/engagements" className="text-phthalo-green-500 text-sm font-normal ml-1 cursor-pointer">View all →</Link>
      </h2>

      {engagements.slice(0, 3).map((engagement: Engagement) => (
        <div className="mb-5" key={engagement.id}>
          <div className="font-semibold flex flex-col sm:flex-row sm:items-start sm:gap-2">
            <p>{engagement.title}</p>
            <DateText date={engagement.date} className="text-gray-500 dark:text-gray-400 font-normal text-sm" />
          </div>
          {engagement.description ? <div className="text-base text-gray-700 dark:text-gray-300">{engagement.description}</div> : null}
          {engagement.links && (
            <div className="text-sm mt-1">
              {engagement.links.map((link: { label: string; url: string }) => (
                <a href={link.url} target="_blank" rel="noreferrer" className="text-phthalo-green-500 mr-3" key={link.url}>{link.label}</a>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};
