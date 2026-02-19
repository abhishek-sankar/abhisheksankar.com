import { Link } from "react-router-dom";
import { readings } from "../data/readings";

export const ReadingSummary: React.FC = () => {
    // Flatten all items from all readings
    const allItems = readings.flatMap(reading => 
        reading.items.map(item => ({
            ...item,
            readingId: reading.id,
            date: reading.date
        }))
    );
    
    // Get the latest 5 articles
    const latestItems = allItems.slice(0, 5);

    return (
        <section>
            <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
                Reading <Link to="/reading" className="text-phthalo-green-500 text-sm font-normal ml-1 cursor-pointer">View all →</Link>
            </h2>
            <div className="space-y-3">
                {latestItems.map((item, index) => (
                    <div key={index} className="flex flex-col mb-2">
                        <div className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <a 
                                href={item.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-phthalo-green-500 hover:underline text-base"
                            >
                                {item.title}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}; 