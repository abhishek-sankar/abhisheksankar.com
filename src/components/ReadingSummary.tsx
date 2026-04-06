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
                Reading <Link to="/reading" className="text-blue-600 dark:text-blue-400 text-sm font-normal ml-1 cursor-pointer">View all →</Link>
            </h2>
            <ul className="list-none space-y-3 m-0 p-0">
                {latestItems.map((item) => (
                    <li key={item.url}>
                        <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline text-base"
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}; 
