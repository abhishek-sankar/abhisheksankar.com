import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { readings } from "../data/readings";
import { DateText } from "./DateText";

function ScrollspyLine({
  isActive,
  onClick,
  label,
}: {
  isActive: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      className="w-3 py-1 flex items-center justify-center cursor-pointer"
      aria-label={label}
    >
      <span
        className={`block h-px w-full rounded-full transition-colors duration-200 ease-out ${
          isActive ? "bg-phthalo-green-500" : "bg-neutral-300 dark:bg-neutral-600"
        }`}
      />
    </div>
  );
}

export const ReadingList = () => {
  const [activeId, setActiveId] = useState<string>(readings[0]?.id ?? "");
  const [popoverOpen, setPopoverOpen] = useState(false);

  const getPopoverLabel = (title: string) => {
    const match = title.match(/^([A-Za-z]+)\s+(\d{4})$/);
    if (!match) return title;
    const [, month, year] = match;
    return `${month.slice(0, 3)} ${year}`;
  };

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const viewportMid = scrollY + window.innerHeight / 2;

        for (let i = readings.length - 1; i >= 0; i--) {
          const el = document.getElementById(readings[i].id);
          if (el && el.offsetTop <= viewportMid) {
            setActiveId(readings[i].id);
            break;
          }
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  const activeIdx = readings.findIndex((r) => r.id === activeId);
  const safeIdx = Math.max(0, activeIdx);
  const start = Math.max(0, safeIdx - 2);
  const end = Math.min(readings.length - 1, safeIdx + 2);
  const visible = readings.slice(start, end + 1);

  return (
    <section className="w-full mb-12">
      <div className="relative md:grid md:grid-cols-[2.5rem_minmax(0,1fr)] md:gap-6">
        <aside className="hidden md:block">
          <div
            className="sticky top-1/2 -translate-y-1/2 w-fit"
            onMouseEnter={() => setPopoverOpen(true)}
            onMouseLeave={() => setPopoverOpen(false)}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-6 py-2 px-1.5 rounded-lg flex flex-col gap-0.5 items-center transition-colors duration-200 ${
                  popoverOpen ? "bg-neutral-100 dark:bg-neutral-800" : ""
                }`}
              >
                {readings.map((r) => (
                  <ScrollspyLine
                    key={r.id}
                    isActive={activeId === r.id}
                    onClick={() => scrollTo(r.id)}
                    label={r.title}
                  />
                ))}
              </div>

              {popoverOpen && (
                <div className="w-max max-w-64 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-lg py-3 px-3 max-h-[60vh] overflow-y-auto">
                  {visible.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => scrollTo(r.id)}
                      className={`block w-full text-left py-2.5 px-3 text-sm transition-colors duration-200 rounded-xl !bg-transparent hover:!bg-neutral-100 dark:hover:!bg-neutral-800 !border-0 hover:!border-0 focus:!border-0 focus-visible:!border-0 !outline-none focus:!outline-none focus-visible:!outline-none !ring-0 focus:!ring-0 focus-visible:!ring-0 !shadow-none ${
                        activeId === r.id
                          ? "text-phthalo-green-500 font-medium"
                          : "text-neutral-600 dark:text-neutral-400"
                      }`}
                    >
                      {getPopoverLabel(r.title)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </aside>

        <div className="w-full">
        <Link to="/" className="text-phthalo-green-500 hover:underline block mb-8 w-fit whitespace-nowrap">
          &larr; Home
        </Link>
        <div className="space-y-16">
          {readings.map((r) => (
            <section key={r.id} id={r.id} className="scroll-mt-24">
              <h3 className="text-xl font-semibold mb-1">{r.title}</h3>
              <p className="text-neutral-500 text-sm mb-6">
                <DateText date={r.date} />
              </p>
              <ul className="space-y-4">
                {r.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-neutral-400 mt-1">•</span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-phthalo-green-500 hover:underline"
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
    </section>
  );
};
