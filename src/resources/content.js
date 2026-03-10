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
    link: "https://www.linkedin.com/in/adamtrommlitz",
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
  headline: "Welcome to my Website!",
  featured: {
    display: false,
    title: (
      <>
        Recent project: <strong className="ml-4">Canvas Tags</strong>
      </>
    ),
    href: "/work/canvas-tags",
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
        and finding solutions. Now I'm using those skills as an Associate
        Product Manager @ Lucid Software helping teams to see and build the
        future!
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
        role: "Associate Product Manager",
        achievements: [
          <>
            Partnered with cross-functional teams to support product roadmap
            development, conduct market research, and analyze customer feedback
            to drive data-informed decisions for product improvements.
          </>,
          <>
            Built and presented a feature proposal to improve the canvas tagging
            experience based on user research using NotebookLM, competitor
            analysis, and customer journey maps, driving the product roadmap for
            Q3 2025.
          </>,
          <>
            Led team to 1st place in a company-wide hackathon, outperforming 67
            teams, competing against VPs, directors, and managers.
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
        company: "Sandbox",
        timeframe: "April 2025 - Present",
        role: "Product Manager",
        achievements: [
          <>
            Working with two engineers to develop and launch a startup while
            leading product strategy, user research, and web development using
            AI tools as part of a year-long venture-building experience.
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
      {
        company: "Brigham Young University",
        timeframe: "July 2021 - April 2024",
        role: "Teacher and Training Supervisor",
        achievements: [
          <>
            Developed training meetings and instructional tools to build
            teaching, conflict resolution, and time management skills, leading
            to a 10% improvement in student-teacher evaluations while managing a
            team of 7.
          </>,
          <>
            Implemented a system to organize students in conferencing calls,
            resulting in a 50% reduction in student wait time.
          </>,
          <>
            Achieved an average survey rating of 4.9/5.0 based on communication,
            leadership, and employee satisfaction.
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
        title: "Languages",
        description: (
          <>
            SQL (Advanced), Python (Proficient), HTML/CSS (Proficient), R
            (Proficient)
          </>
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
        title: "Systems/Applications",
        description: (
          <>
            MySQL, PostgreSQL, Pandas, Sklearn, Informatica, AWS (EC2, Elastic
            Beanstalk, RDS, S3), Azure (SQL Database, Key Vault, Compute),
            Linux, Databricks,{" "}
            <a
              href="https://public.tableau.com/app/profile/adam.trommlitz/vizzes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Tableau
            </a>
            , Docker, Snowflake, DBT, Airflow, MongoDB{" "}
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
      {
        title: "Certifications",
        description: (
          <>Professional Scrum Master™ I (PSM I), Databricks Data Analyst</>
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
  volunteer: {
    display: true, // set to false to hide this section
    title: "Volunteering",
    experiences: [
      {
        organization: "BYU Association of Information Systems",
        timeframe: "November 2024 - Present",
        role: "VP of Corporate Sponsorship",
        achievements: [
          <>
            Coordinate with company sponsors including some of the largest
            consulting firms to help provide activities, information sessions,
            and networking opportunities for information systems students.
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
        organization: "BYUSA - Student Leadership Center",
        timeframe: "May 2024 - May 2025",
        role: "Team Lead",
        achievements: [
          <>
            Researched and spearheaded a campus-wide initiative to improve
            campus engagement, leading a team of eight to develop and implement
            strategic enhancements, with results presented to the university
            president for consideration.
          </>,
          <>
            Reviewed and analyzed new and existing campus policies to identify
            and raise critical concerns and awareness, effectively advocating on
            behalf of the student body.
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
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing About My Life and My Learnings",
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
  // Personal photos from various adventures and experiences
  images: [
    {
      src: "/images/gallery/IMG_0166.JPG",
      alt: "Scenic landscape photography",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_0177.JPG",
      alt: "Outdoor adventure photography",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_1119.JPG",
      alt: "Nature photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_3745.jpg",
      alt: "Landscape photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_1107.JPG",
      alt: "Outdoor landscape photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_1097.JPG",
      alt: "Nature scene photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_0886.JPG",
      alt: "Scenic view photography",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_0865.JPG",
      alt: "Landscape vista photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_0678.JPG",
      alt: "Outdoor scene photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_0576.JPG",
      alt: "Nature landscape photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_0541.JPG",
      alt: "Scenic outdoor photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_0172.JPG",
      alt: "Portrait photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_0290.JPG",
      alt: "Urban photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_0317.JPG",
      alt: "Street photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_4265.JPG",
      alt: "Cityscape photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_5304.JPG",
      alt: "Architecture photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_5306.JPG",
      alt: "Urban exploration photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_4045.jpg",
      alt: "Portrait photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_0682.jpg",
      alt: "Portrait photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_8582.JPG",
      alt: "Portrait photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_1246.jpg",
      alt: "Landscape photography",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
