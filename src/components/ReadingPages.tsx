import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { readings } from "../data/readings";
import { DateText } from "./DateText";
import { StaggerGroup } from "./StaggerGroup";
import { staggerStyle } from "./staggerStyle";

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
          isActive ? "bg-phthalo-green-500" : "bg-neutral-300"
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
    <StaggerGroup as="section" className="w-full mb-12">
      <Link
        to="/"
        className="text-phthalo-green-500 hover:underline block mb-8 w-fit whitespace-nowrap stagger-item"
        style={staggerStyle(0)}
      >
        &larr; Home
      </Link>

      <div className="relative md:grid md:grid-cols-[2.5rem_minmax(0,1fr)] md:gap-6 stagger-item" style={staggerStyle(1)}>
        <aside className="relative z-30 hidden md:block">
          <div
            className="sticky top-1/2 z-30 w-fit -translate-y-1/2"
            onMouseEnter={() => setPopoverOpen(true)}
            onMouseLeave={() => setPopoverOpen(false)}
          >
            <div className="relative flex items-center gap-2">
              <div
                className={`w-6 py-2 px-1.5 rounded-lg flex flex-col gap-0.5 items-center transition-colors duration-200 ${
                  popoverOpen ? "bg-neutral-100" : ""
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
                <div className="relative z-20 w-max max-w-64 rounded-2xl border border-neutral-200 bg-white py-3 px-3 shadow-lg max-h-[60vh] overflow-y-auto">
                  {visible.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => scrollTo(r.id)}
                      className={`block w-full rounded-xl border-0 bg-white px-3 py-2.5 text-left text-sm shadow-none outline-none ring-0 transition-colors duration-200 hover:bg-neutral-100 focus:bg-neutral-100 focus:border-0 focus-visible:border-0 focus:!outline-none focus-visible:!outline-none focus:!ring-0 focus-visible:!ring-0 ${
                        activeId === r.id
                          ? "text-phthalo-green-500 font-medium"
                          : "text-neutral-600"
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
          <StaggerGroup as="div" className="space-y-16">
            {readings.map((r) => (
              <StaggerGroup key={r.id} as="section" id={r.id} className="scroll-mt-24">
                <h3 className="text-xl font-semibold mb-1 stagger-item" style={staggerStyle(0)}>{r.title}</h3>
                <p className="text-neutral-500 text-sm mb-6 stagger-item" style={staggerStyle(1)}>
                  <DateText date={r.date} />
                </p>
                <StaggerGroup as="ul" className="list-disc space-y-4 pl-5 marker:text-neutral-400">
                  {r.items.map((item, i) => (
                    <li key={i} className="stagger-item pl-2" style={staggerStyle(i + 2)}>
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
                </StaggerGroup>
              </StaggerGroup>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </StaggerGroup>
  );
};
