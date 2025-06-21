import { Link } from "react-router-dom";
import { readings } from "../data/readings";
import type { Reading } from "../data/readings";

export const ReadingSummary: React.FC = () => {
    return (
        <section>
            <h2 className="text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2">
                Reading <Link to="/reading" className="text-phthalo-green-500 text-sm font-normal ml-1 cursor-pointer">View all →</Link>
            </h2>
            {readings.slice(0, 3).map((reading: Reading) => (
                <div key={reading.id} className="mb-4">
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
}; 