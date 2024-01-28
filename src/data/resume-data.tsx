import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Quentin Tran",
  initials: "QT",
  location: "Mexico City, Mexico",
  locationLink: "https://maps.app.goo.gl/mo5WU7fDbAQNortKA",
  about:
    "Entrepreneur focused on growing products in a scalable and collaborative way.",
  summary:
    "As a COO, I have successfully grown our company in an efficient and collaborative way. I have a deep understanding of how to deliver value to our customers. I am always looking for new and creative ways to grow our company. I am also interested in software development and micro-SaaS on my own time.",
  avatarUrl: "https://avatars.githubusercontent.com/u/95506733?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "qt2111@columbia.edu",
    tel: "+13477761439",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/quent-dev",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/quentin-tran-67466554/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Columbia University",
      degree: "Master of Science in Financial Engineering",
      start: "2012",
      end: "2013",
    },
    {
      school: "Ecole Polytechnique",
      degree: "Diplome d'Ingenieur",
      start: "2009",
      end: "2013",
    },
  ],
  work: [
    {
      company: "Sarelly Sarelly",
      link: "https://sarellysarelly.com/",
      badges: ["Operations", "Finance", "Remote"],
      title: "CFO → Chief Operating Officer",
      logo: ParabolLogo,
      start: "2022",
      end: "Present",
      description:
        "Preseed Fundraising preparation (valuation , pitch deck), successfully launched a new product category, achieved 65% revenue growth YoY while improving margins.",
    },
    {
      company: "Natixis CIB Americas",
      link: "https://clevertech.biz",
      badges: ["Finance", "Business Development"],
      title: "Intern → Business Manager of IB department",
      logo: ClevertechLogo,
      start: "2013",
      end: "2021",
      description:
        "Forecasting revenues and resources for quarterly business reviews and budget exercises for all the IB business lines. Review and tracking of commercial activity and KPIs.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
  projects: [
    {
      title: "Calculator",
      techStack: [
        "Side Project",
        "JavaScript"
      ],
      description: "A small calculator that can perform basic arithmetic operations using OOP principles",
      logo: ConsultlyLogo,
      link: {
        label: "calculator",
        href: "https://github.com/quent-dev/100devs-calculator",
      },
    },
    {
      title: "CV page",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description:
        "Website for showcasing my skills and projects. Built with Next.js and Typescript using Bartosz Jarocki template",
      logo: MonitoLogo,
      link: {
        label: "cv page",
        href: "",
      },
    },
    // {
    //   title: "Jarocki.me",
    //   techStack: ["Side Project", "Next.js", "MDX"],
    //   description:
    //     "My personal website and blog. Built with Next.js and Notion API",
    //   logo: JarockiMeLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://jarocki.me/",
    //   },
    // },
    // {
    //   title: "Minimal",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Minimalist calendars, habit trackers and planners generator",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/",
    //   },
    // },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",

    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Howdy is a place for you to join communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
