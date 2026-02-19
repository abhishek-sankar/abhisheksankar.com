import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { readings } from "../data/readings";

export const ReadingList = () => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = readings.map((r) => document.getElementById(r.id));
      const scrollPosition = window.scrollY + 150; // Offset for sticky header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, // Offset
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 mb-12 relative">
      {/* Back button above sidebar */}
      <div className="w-full md:w-16 shrink-0 relative z-20">
        <Link to="/" className="text-phthalo-green-500 hover:underline inline-block mb-8 whitespace-nowrap">&larr; Home</Link>
        
        {/* Sticky Sidebar */}
        <div className="sticky top-10 flex group w-fit">
          {/* Icon Column */}
          <div className="flex-shrink-0 w-8 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex flex-col gap-2 py-3 px-1.5 mt-0.5 h-fit border border-gray-200 dark:border-neutral-700 relative z-20 cursor-pointer">
            {readings.map((reading, idx) => (
              <div 
                key={`line-${reading.id}`} 
                className={`h-0.5 rounded-full w-full transition-colors duration-200 ${
                  activeId === reading.id || (activeId === "" && idx === 0) 
                    ? "bg-phthalo-green-500" 
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>

          {/* Text Column Popover */}
          <div className="absolute left-full ml-3 top-0 transition-all duration-300 opacity-0 -translate-x-2 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-x-0 z-10">
            <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 shadow-xl rounded-xl p-2 flex flex-col gap-1 w-48 max-h-[60vh] overflow-y-auto no-scrollbar">
              {readings.map((reading, idx) => {
                const isActive = activeId === reading.id || (activeId === "" && idx === 0);
                return (
                  <button
                    key={`nav-${reading.id}`}
                    onClick={() => scrollToSection(reading.id)}
                    className={`text-left transition-colors duration-200 leading-snug whitespace-nowrap px-3 py-2 rounded-lg text-sm ${
                      isActive
                        ? "bg-neutral-100 dark:bg-neutral-800 text-phthalo-green-500 font-medium"
                        : "bg-neutral-50 dark:bg-neutral-800/50 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    }`}
                  >
                    {reading.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 md:mt-14">
        <div className="space-y-16">
          {readings.map((reading) => (
            <section key={`content-${reading.id}`} id={reading.id} className="scroll-mt-32">
              <h3 className="text-xl font-semibold mb-1">{reading.title}</h3>
              <div className="text-gray-400 text-sm mb-6">{reading.date}</div>
              <ul className="space-y-4">
                {reading.items.map((item, idx) => (
                  <li key={`item-${reading.id}-${idx}`} className="flex items-start gap-3">
                    <span className="text-gray-300 mt-1">•</span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-phthalo-green-500 hover:underline text-base leading-relaxed"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
 