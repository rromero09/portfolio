import profile from "./profile.png";

export const navigation = {
  name: "Rafael Romero",
  links: [
    { title: "About", link: "#about" },
    { title: "Projects", link: "#projects" },
    { title: "Contact", link: "#contact" },
    { title: "Links", link: "/links" },
  ],
};

export const work = {
  title: "What I Do",
  cards: [
    {
      title: "Web Developer | NEIU Student Media Board",
      description:
        "Worked on a full-stack Express.js server with form handling and validation. Designed a MongoDB database for CRUD operations",
      icons: null,
    },
    {
      title: "Software & Analytics Contributor | The Bakehouse Chicago",
      description:
        "Created an inventory system in Notion with custom dashboards. Used Square API to do reporting  analytics n Python, increasing revenue and reducing waste. Contributed IT support and helped scale operations from 1 to 4 stores.",
      icons: null,
    },
  ],
};

export const intro = {
  title: "Hey, I'm Rafael",
  description:
    "A recent Computer Science graduate passionate about backend development, data platforms, and AI-powered software solutions. I love solving real-world problems through code and continuous learning.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/1p1Gbc3IDJi6_GsUBQZhGah8LLjheXvXu/edit?usp=sharing&ouid=101833502615017375700&rtpof=true&sd=true",
      isPrimary: false,
    },
  ],
};

export const about = {
  title: "Who I Am",
  description: [
    "I'm a Computer Science new graduate with a focus on backend development and data infrastructure solutions.",
    "My passion lies in backend development, data infrastructure, and building cloud-native applications. I've worked with Spring Boot, FastAPI, Docker, AWS and got recently into AI wrappers such as LangChain and LangGraph.",
    "Outside tech, I keep myself together through beach volleyball, hikes, and exploring new tools that make life (and work) more efficient.",
  ],
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Inventory Management System",
      description:
        "A lightweight inventory tracking system for The Bakehouse Chicago using Notion + automation to track missing items, reduce waste, and streamline operations.",
      link: "https://github.com/rromero09",
    },
    {
      title: "Schedule Assistant API",
      description:
        "An email notification system that sends schedules to employees. Built with FastAPI, Docker and deployed with AWS EC2, it automates schedule management and improves team communication.",
      link: "https://github.com/rromero09/scheduler",
    },
    {
      title: "Hack Fest 2024 - 2nd Place",
      description:
        "Created a ride-booking assistant for non-English speakers using text-to-speech, React.js, and a Translate API. Recognized for accessibility innovation.",
      link: "https://github.com/rromero09",
    },
  ],
};

export const contact = {
  title: "Get in touch",
  description:
    "Feel free to reach out directly by email at rafael.rromero97@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:rafael.rromero97@gmail.com",
      isPrimary: true,
    },
  ],
};

export const SEO = {
  title:
    "Rafael Romero | Software Developer | Java | Python | Spring Boot | Data Science",
  description:
    "Computer Science graduate specializing in backend development (Spring Boot, FastAPI), data infrastructure, cloud-native tools, and automation. Passionate about solving real-world problems with software.",
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: "@rafaelrarr",
  description: "Software Developer | Backend Engineer | AI & Data Enthusiast",
  cards: [
    {
      title: "My LinkedIn",
      link: "https://linkedin.com/in/rafaelrr",
    },
    {
      title: "My GitHub",
      link: "https://github.com/rromero09/",
    },
    {
      title: "Schedule Assistant ",
      link: "https://github.com/rromero09/scheduler",
    },
  ],
};
