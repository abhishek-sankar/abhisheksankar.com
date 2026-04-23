export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  links: { label: string; url: string; external?: boolean }[];
}

export const projects: Project[] = [
  {
    id: "recursive-language-models-reading-group",
    title: "Recursive Language Models",
    date: "April 2026",
    description: "Slides from my talk on recursive language models for CMU MLD's reading group.",
    links: [
      { label: "[Slides]", url: "/Recursive%20Language%20Models.pdf", external: true }
    ]
  },
  {
    id: "i-in-attention",
    title: "There is an I in Attention",
    date: "Jan 2026",
    description: "Addressed parameter redundancy in multi-head self-attention via canonical parameterization (I-Attention), reducing 2r² parameters per attention head while maintaining expressive capability and improving training convergence.",
    links: [
      { label: "Read more", url: "/projects/i-in-attention/paper" },
      { label: "Code pending release", url: "/" }
    ]
  },
  {
    id: "persona-drift",
    title: "Minimizing Persona Drift in Open Source LLMs",
    date: "December 2025",
    description: "Geometric and agentic approaches (Persona Vectors and Identity-Grounded Recursive Critique) to maintain LLM identity consistency over multi-turn interactions without fine-tuning.",
    links: [
      { label: "Read more", url: "/projects/persona-drift/paper" },
      { label: "Code", url: "https://github.com/abhishek-sankar/persona-drift-project" }
    ]
  },
  {
    id: "pittsburgh-cmu-rag",
    title: "Grounded QA for Pittsburgh and CMU",
    date: "November 2025",
    description: "Built a hybrid retrieval-augmented generation system for Pittsburgh and Carnegie Mellon, combining FAISS, BM25, and fusion-based reranking to improve factual local question answering.",
    links: [
      { label: "Read more", url: "/projects/pittsburgh-cmu-rag/paper" },
      { label: "Code", url: "mailto:abhisheksankar@cmu.edu?subject=Request%20for%20Code%20(Pittsburgh%20and%20CMU%20RAG%20project)&body=Hi%20Abhishek%2C%0A%0AI%27d%20like%20to%20request%20access%20to%20the%20code%20for%20your%20Pittsburgh%20and%20CMU%20Grounded%20QA%20project.%0A%0ABest%2C%0A%0AP.S.%20Requesting%20by%20email%20to%20comply%20with%20AIV%20rules%20at%20CMU." }
    ]
  },
  {
    id: "projexion",
    title: "ProjeXion: Precision 3-D Modeling from 2-D Inputs",
    date: "April 2025",
    description: "Extended MVSNet architecture for 3D reconstruction from 2D images. Introduced a self-attention-based fusion module and Cauchy loss to improve multi-view feature aggregation and outlier robustness.",
    links: [
      { label: "Read the ProjeXion: Precision 3-D Modeling from 2-D Inputs paper", url: "/projects/projexion/paper" },
      { label: "Code", url: "https://github.com/nikitachaudharicodes/ProjeXion" }
    ]
  },
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
      { label: "Demo", url: "https://youtube.com/shorts/Tl9UwKWmSZ8" },
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
