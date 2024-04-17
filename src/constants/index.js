import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  Matic,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Defy,
  Prwire360,
  kube,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web3.0",
    icon: web,
  },
  {
    title: "ML/Dev Ops Automation ",
    icon: mobile,
  },
  {
    title: "AI SaaS Developer",
    icon: backend,
  },
  {
    title: "Project Manager",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },

];

const experiences = [
  {
    title: "Data Analyst",
    company_name: "Defy Insurance Agency",
    icon: Defy,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developed customized CRM using python and integrated CRM with Oddo and Zoho platforms. Created pipelines to automate the complete process from lead generation to lead closing. ",
      "Data scraping using python (BS4, Selenium and Scarpy) on static and dynamic websites to scrap and transform quality data for B2B leads.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",

    ],
  },
  {
    title: "Software Engineer",
    company_name: "Matic Academy",
    icon: Matic,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js, Nextjs tailwindcss, HTML5.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Contributed to various phases of Agile methodology, including requirement analysis, SRS, and software testing (both white-box and black-box)",],
  },
  {
    title: "Project Cordinator",
    company_name: "Prwir360",
    icon: Prwire360,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using Typescript, Nextjs, tailwindcss, HTML5.",
      "Collaborating with cross-functional teams including designers, product managers and With developer.",
      "Managed the content team and was responsible for website content development.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
    name: "Hafsa Ahmad",
    designation: "CTO",
    company: "Tensor labs",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does.",
    name: "Wajahat Nabeel",
    designation: "COO",
    company: "Swiftbull",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After he optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Vartika Sharma ",
    designation: "Manager",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Ex-calibur112/e-commerce-next-js",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Excalibur6/Job-Search-App",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Excalibur6/Travel-App-front-end",
  },
];

export { services, technologies, experiences, testimonials, projects };
