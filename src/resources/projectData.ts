export interface ProjectData {
  images: string[];
  team: {
    name: string;
    role: string;
    avatar: string;
    linkedIn: string;
  }[];
}

export const projectData: Record<string, ProjectData> = {
  "salus-ai": {
    images: ["/images/work/Salus_AI.png"],
    team: [
      {
        name: "Adam Trommlitz",
        role: "AI Product Manager",
        avatar: "/images/adam_photo.jpg",
        linkedIn: "https://www.linkedin.com/in/adamtrommlitz/",
      },
    ],
  },
  "is-talent-portfolio": {
    images: ["/images/work/IS_Talent_Portfiolio.png"],
    team: [
      {
        name: "Adam Trommlitz",
        role: "Product Manager",
        avatar: "/images/adam_photo.jpg",
        linkedIn: "https://www.linkedin.com/in/adamtrommlitz/",
      },
    ],
  },
  sandbox_hackathon: {
    images: ["/images/work/Promigo.png"],
    team: [
      {
        name: "Adam Trommlitz",
        role: "Product Manager",
        avatar: "/images/adam_photo.jpg",
        linkedIn: "https://www.linkedin.com/in/adamtrommlitz/",
      },
    ],
  },
  "canvas-tags": {
    images: ["/images/work/Canvas_Tags.png"],
    team: [
      {
        name: "Adam Trommlitz",
        role: "Product Manager",
        avatar: "/images/adam_photo.jpg",
        linkedIn: "https://www.linkedin.com/in/adamtrommlitz/",
      },
    ],
  },
  intermountain_analytics: {
    images: ["/images/work/intermountain_health_design.png"],
    team: [
      {
        name: "Adam Trommlitz",
        role: "Product Manager",
        avatar: "/images/adam_photo.jpg",
        linkedIn: "https://www.linkedin.com/in/adamtrommlitz/",
      },
    ],
  },
  MTC: {
    images: ["/images/work/MTC.jpeg"],
    team: [
      {
        name: "Adam Trommlitz",
        role: "Teacher and Training Supervisor",
        avatar: "/images/adam_photo.jpg",
        linkedIn: "https://www.linkedin.com/in/adamtrommlitz/",
      },
    ],
  },
};
