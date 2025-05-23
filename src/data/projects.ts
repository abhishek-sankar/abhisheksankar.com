export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  links: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    id: "gumbo",
    title: "Gumbo",
    date: "April 30, 2025",
    description: "A project from CMU's Hack a Startup competition with my team from MSAII, building a platform to create structured datasets from the internet. Finalist in the competition and continuing development through AI Venture Studio.",
    links: [
      { label: "Website", url: "https://gumbodata.com" },
      { label: "Deck", url: "https://docs.google.com/presentation/d/1GnXg0lus0it-m9svAB0SsdIZbfhdA0w38t3gpuBAj48/edit" },
      { label: "Announcement & Details", url: "https://pittsburghstartupnews.substack.com/p/want-a-free-list-of-2000-venture" }
    ]
  },
  {
    id: "shadowgram",
    title: "ShadowGram",
    date: "April 21, 2025",
    description: "A social media platform inspired by a tweet, and my submission for CMU's Deepmind AI Agents Hackathon, where it won the replicate.com prize.",
    links: [
      { label: "Website", url: "https://cmudsc.abhisheksankar.com/" },
      { label: "Demo", url: "https://www.youtube.com/watch?v=SlBdFZolMbM" },
      { label: "Deck", url: "https://www.figma.com/slides/n73xhMmL7IpX7dZmJDH5H2/AI-Agents-Hackathon?node-id=1-447&t=Q5GIeNCUFkzkyRIk-1" },
      { label: "Code", url: "https://github.com/abhishek-sankar/ai-shadow-social-feed" }
    ]
  },
  {
    id: "pittsburgh2peers",
    title: "Pittsburgh2Peers",
    date: "August 15, 2024",
    description: "A web app helping Pittsburgh students share rides, coordinate moves, and build community. Launched with 1,000+ visits and 150+ completed requests in its first two weeks.",
    links: [
      { label: "Website", url: "https://pittsburgh2peers.vercel.app/" },
      { label: "Code", url: "https://github.com/abhishek-sankar/Pittsburgh2Peers" }
    ]
  },
  {
    id: "trusana",
    title: "Trusana",
    date: "March 20, 2023",
    description: "Zero to one behavioural health platform reducing the time to a consult from 2 weeks to as low as 2 hours.",
    links: [
      { label: "Website", url: "https://trusana.com" }
    ]
  }
]; 