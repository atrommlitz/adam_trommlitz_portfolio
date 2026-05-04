const person = {
  firstName: "Adam",
  lastName: "Trommlitz",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Product Manager",
  avatar: "/images/adam_photo_2025.jpg",
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
            development, conduct market research, A/B testing, and analyze
            customer feedback to drive data-informed decisions for product
            improvements.
          </>,
          <>
            Built and presented a feature proposal to improve the canvas tagging
            experience based on user research using NotebookLM, competitor
            analysis, and customer journey maps, driving the product roadmap for
            Q2 2026.
          </>,
          <>
            Led team to 1st place in company hackathon, beating 67 teams,
            competing against VPs, directors, and managers.
          </>,
        ],
        images: [],
      },
      {
        company: "salus.ai (Sandbox)",
        timeframe: "April 2025 - April 2026",
        role: "AI Product Manager",
        achievements: [
          <>
            Worked with an engineer to launch Salus.ai, an AI platform to
            streamline operations for admissions coordinators in skilled nursing
            facilities, saving four hours weekly from reviewing lengthy
            documentation and manual data entry.
          </>,
          <>
            Led product strategy, user research, and prototyping efforts to
            validate our hypothesis and build a solution.
          </>,
        ],
        images: [],
      },
      {
        company: "Intermountain Health",
        timeframe: "Apr 2024 - May 2025",
        role: "Data Analyst / Scrum Master",
        achievements: [
          <>
            Collaborated with multiple stakeholders to effectively build and
            maintain key dashboards estimated at $800,000 and quickly address
            unstructured problems, saving them 60 minutes daily.
          </>,
          <>
            Secured 3rd place in the Enterprise Tableau Data Visualization
            Competition with a team of three, presenting to an audience of over
            100 people, including analysts, directors, and managers, using
            storytelling with data principles.
          </>,
          <>
            Automated Excel tracking spreadsheet using SQL and a Tableau
            Dashboard, saving managers 60 minutes weekly.
          </>,
        ],
        images: [],
      },
      {
        company: "Brigham Young University",
        timeframe: "Jul 2021 - Apr 2024",
        role: "Training Supervisor",
        achievements: [
          <>
            Developed training meetings and instructional tools to build
            teaching, conflict resolution, and time management skills, leading
            to a 10% improvement in student-teacher evaluations while managing a
            team of 7.
          </>,
          <>
            Achieved an average survey rating of 4.9/5.0 based on
            communication, leadership, and employee satisfaction.
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
            Master's of Information Systems Management – Emphasis in Business
            Analytics | GPA: 3.92/4.00 | Expected April 2026. Marriott School
            Dean's List (Top 5%). Relevant courses: Product Management, Data
            Analytics and Engineering, Organizational Behavior, AI and Agentic
            Systems.
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
            SQL (Advanced), Python (Proficient), Javascript (Proficient), R
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
            Beanstalk, RDS, S3, Bedrock), Azure (SQL Database, Key Vault,
            Compute), Linux, Databricks,{" "}
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
        organization: "BYUSA - Student Advisory Council",
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
      alt: "Snowshoeing at Tibble Fork",
      orientation: "horizontal",
      description: "Snowshoeing at Tibble Fork",
    },
    {
      src: "/images/gallery/IMG_0177.JPG",
      alt: "Snowshoeing in the Wasatch Mountains",
      orientation: "horizontal",
      description: "Snowshoeing in the Wasatch Mountains",
    },
    {
      src: "/images/gallery/IMG_1119.JPG",
      alt: "Hiking in Muir Woods",
      orientation: "vertical",
      description: "Hiking in Muir Woods",
    },
    {
      src: "/images/gallery/IMG_3745.jpg",
      alt: "Hiking in Kolob Canyon, Zion National Park",
      orientation: "vertical",
      description: "Hiking in Kolob Canyon, Zion National Park",
    },
    {
      src: "/images/gallery/IMG_1107.JPG",
      alt: "Going down the S-curve in San Francisco",
      orientation: "vertical",
      description: "Going down the S-curve in San Francisco",
    },
    {
      src: "/images/gallery/IMG_1097.JPG",
      alt: "Rock climbing with friends",
      orientation: "vertical",
      description: "Rock climbing with friends",
    },
    {
      src: "/images/gallery/IMG_0886.JPG",
      alt: "Visiting Bryce Canyon hoodoos",
      orientation: "horizontal",
      description: "Visiting Bryce Canyon hoodoos",
    },
    {
      src: "/images/gallery/IMG_0865.JPG",
      alt: "Buffalo steak at Hell's Backbone Bar and Grill",
      orientation: "vertical",
      description: "Buffalo steak at Hell's Backbone Bar and Grill",
    },
    {
      src: "/images/gallery/IMG_0678.JPG",
      alt: "Backpacking in the Uintas",
      orientation: "vertical",
      description: "Backpacking in the Uintas",
    },
    {
      src: "/images/gallery/IMG_0576.JPG",
      alt: "Hiking at Stuart Falls",
      orientation: "vertical",
      description: "Hiking at Stuart Falls",
    },
    {
      src: "/images/gallery/IMG_0541.JPG",
      alt: "Golfing in Payson",
      orientation: "vertical",
      description: "Golfing in Payson",
    },
    {
      src: "/images/gallery/IMG_0172.JPG",
      alt: "Lower Calf Creek Falls",
      orientation: "vertical",
      description: "Lower Calf Creek Falls",
    },
    {
      src: "/images/gallery/IMG_0290.JPG",
      alt: "Hell's Backbone",
      orientation: "vertical",
      description: "Hell's Backbone",
    },
    {
      src: "/images/gallery/IMG_0317.JPG",
      alt: "Bryce Canyon hike",
      orientation: "vertical",
      description: "Bryce Canyon hike",
    },
    {
      src: "/images/gallery/IMG_4265.JPG",
      alt: "Kings Peak River",
      orientation: "vertical",
      description: "Kings Peak River",
    },
    {
      src: "/images/gallery/IMG_5304.JPG",
      alt: "Kings Peak Valley",
      orientation: "vertical",
      description: "Kings Peak Valley",
    },
    {
      src: "/images/gallery/IMG_5306.JPG",
      alt: "King's Peak hiking with friends",
      orientation: "vertical",
      description: "King's Peak hiking with friends",
    },
    {
      src: "/images/gallery/IMG_4045.jpg",
      alt: "Angel's Landing",
      orientation: "vertical",
      description: "Angel's Landing",
    },
    {
      src: "/images/gallery/IMG_0682.jpg",
      alt: "Backpacking in the Windows at a lake",
      orientation: "vertical",
      description: "Backpacking in the Windows at a lake",
    },
    {
      src: "/images/gallery/IMG_8582.JPG",
      alt: "Stargazing in Escalante — a certified dark sky park",
      orientation: "vertical",
      description: "Stargazing in Escalante — a certified dark sky park",
    },
    {
      src: "/images/gallery/IMG_1246.jpg",
      alt: "Rappelling in Spanish Fork",
      orientation: "horizontal",
      description: "Rappelling in Spanish Fork",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
