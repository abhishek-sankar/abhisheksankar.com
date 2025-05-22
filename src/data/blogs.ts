export interface Blog {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  component: string;
}

export const blogs: Blog[] = [
  {
    id: "hack-a-startup",
    title: "The Anything API",
    date: "Oct 8, 2024",
    readTime: "15 min read",
    summary: 'What if you could call an endpoint and get ANY data in structured form?',
    content: `Full blog post content goes here...`,
    component: 'Blog_Anything_API'
  },
  {
    id: "cet-placements",
    title: "You got into CET, how do you get out?",
    date: "May 21, 2021",
    readTime: "12 min read",
    summary: 'There are not too many points in a person\'s college time where one gets the heebie-jeebies so bad that they feel - what is the right word here? It\'s a mix of fear? Pressure? Panic? I could go on, but you see my point. In a nutshell, it\'s cluelessness and a huge question mark hanging in front of them, asking, "Are you even remotely prepared for this"',
    content: `Full blog post content goes here...`,
    component: 'Blog_CET_Placements'
  }
]; 