import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Adam",
  lastName: "Trommlitz",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Product Manager",
  avatar: "/images/adam_photo.jpg",
  email: "adamtrommlitz3@gmail.com",
  location: "America/Denver", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

// const newsletter = {
//   display: true,
//   title: <>Subscribe to {person.firstName}'s Newsletter</>,
//   description: (
//     <>
//       I occasionally write about design, technology, and share thoughts on the
//       intersection of creativity and engineering.
//     </>
//   ),
// };

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/atrommlitz",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "www.linkedin.com/in/adamtrommlitz",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Resume",
    icon: "resume",
    link: "/Adam_Resume.pdf",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: "Doing Cool Stuff and Having Fun",
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Once UI</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Hi! I'm Adam, thanks for coming to my website. I'm so glad you're here. I
      built this website to provide a place to share what I've done, what I'm
      working on, and the fun things I like to do! Feel free to connect with me;
      I'd love to say hello!
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Growing up, I've always enjoyed solving complex problems. Whether
        through navigating intricate video game challenges, strategizing in
        chess, playing board games with friends, or working through traditional
        puzzles, I developed an understanding of breaking down complex scenarios
        and finding solutions. Now I'm working as a Product Management Intern @
        Lucid Software helping teams to see and build the future!
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Lucid Software",
        timeframe: "May 2025 - Present",
        role: "Product Management Intern",
        achievements: [
          <>
            Currently working tirelessly to help teams see and build the future!
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Intermountain Health",
        timeframe: "May 2024 - May 2025",
        role: "Data Analyst Intern",
        achievements: [
          <>
            Collaborated with multiple stakeholders to effectively build and
            maintain key dashboards estimated at $800,000 and quickly address
            unstructured problems, saving them 60 minutes daily.
          </>,
          <>
            Secured 3rd place in the Enterprise Tableau Data Visualization
            Competition with a team of three, presenting to an audience of over
            100 people including analysts, directors, and managers using
            storytelling with data principles.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Brigham Young University - Marriott School of Business",
        description: (
          <>
            Masters of Information Systems - Emphasis in Business Intelligence
            and Data Analytics
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "SQL",
        description: (
          <>Advanced SQL through my hands on training in school and work</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Tableau",
        description: (
          <>
            Worked extensivly on building dashboards for Intermountain Health.
            Check out some projects on{" "}
            <a
              href="https://public.tableau.com/app/profile/adam.trommlitz/vizzes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              public.tableau.com/app/profile/adam.trommlitz/vizzes
            </a>
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
