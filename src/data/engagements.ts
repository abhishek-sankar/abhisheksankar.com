export interface Engagement {
  id: string;
  title: string;
  date: string;
  description: string | null;
  links?: { label: string; url: string }[];
}

export const engagements: Engagement[] = [

  {
    id: "student-convention-2020",
    title: "Student Representative, IEEE Computer Society Kerala Chapter",
    date: "Jan 2020 - Dec 2020",
    description: null,
    links: [
      { label: "Team", url: "https://www.instagram.com/p/B_99lLbJKKV/" },
      { label: "Charter", url: "" },
      { label: "AKCSSC", url: "https://youtu.be/bcTANuecMc0" }
    ]
  },
  {
    id: "ieee-rem-schilar",
    title: "IEEE Richard E. Merwin Student Scholar",
    date: "Sep 2020",
    description: "Awarded the IEEE Richard E. Merwin Student Scholar, one of 16 students globally in 2020, for academic excellence and leadership in the field of computer science.",
    links: [
      { label: "Announcement", url: "https://www.computer.org/volunteering/awards/scholarships/merwin/merwin-winners#pageContent_9" }
    ]
  },
  {
    id: "ieee-cs-chair",
    title: "Chair, IEEE Student Branch, CET",
    date: "Feb 2020 - Jan 2021",
    description: null,
    links: [
      { label: "Team", url: "https://ieee.cet.ac.in/execom2020" },
      { label: "Charter", url: "" }
    ]
  },
  {
    id: "ieee-workshop",
    title: "Talk on Competitive coding for IEEE Xtreme 14.0",
    date: "Dec 2020",
    description: "Gave a talk at MEC, Cochin, on Competitive coding for IEEE Xtreme 14.0",
    links: [
      { label: "YouTube", url: "https://youtu.be/cow5QDOIQPU" }
    ]
  }
];

