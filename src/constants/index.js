import {
    ecc,
    backend,
    creator,
    usjp,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    figma,
    tools,
    frontend,
    back,
    database,
    carrent,
    jobit,
    tripguide,
    expressjs,
    mysql,
    visualcode,
    github,
    jira,
    python,
    c
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
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
      title: "University of Sri Jayawardanapura",
      subtitle: "BSc (Hons) in Information Communication Technology",
      duration: "2021-2026",
      description:
        "I am doing a Bachelor's degree in Information Communication Technology (BICT) at the Faculty of Technology, University of Sri Jayewardenepura. My studies have given me knowledge in areas like software development, multimedia, and networking. I enjoy using technology to solve problems and always try to learn new things in the growing field of ICT.",
      icon: usjp,
    },
    {
      title: "Eheliyagoda National College",
      subtitle: "Advanced Level - (Bio-System Technology)",
      duration: "2018-2020",
      description:
        "I studied at Eheliyagoda National College for my secondary education, where I built a strong academic base and improved my thinking, problem-solving, and communication skills. This time helped shape my learning journey and prepared me for my Bachelor’s degree in Information and Communication Technology.",
      icon: ecc,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "ExpressJs",
      icon: expressjs,
    },
    
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "VS Code",
      icon: visualcode,
    },
    {
      name: "GitHub",
      icon: github,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Jira",
      icon: jira,
    },
    
  ];
  
  const experiences = [
    {
      title: "Frontend",
      company_name: "Starbucks",
      icon: frontend,
      iconBg: "#383E56",
      technologies: [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "JavaScript", icon: javascript },
        { name: "React", icon: reactjs },
      ],
    },
    {
      title: "Backend",
      company_name: "Tesla",
      icon: back,
      iconBg: "#E6DEDD",
      technologies: [
        { name: "NodeJs", icon: nodejs },
        { name: "ExpressJs", icon: expressjs },
        { name: "Python", icon: python },
        { name: "C#", icon: c }
      ],
    },
    {
      title: "Database",
      company_name: "Shopify",
      icon: database,
      iconBg: "#383E56",
      technologies: [
        { name: "MySql", icon: mysql },
        { name: "MongoDb", icon: mongodb },
      ],
    },
    {
      title: "Tools",
      company_name: "Meta",
      icon: tools,
      iconBg: "#E6DEDD",
      technologies: [
        { name: "VS Code", icon: visualcode },
        { name: "Git Hub", icon: github },
        { name: "Figma", icon: figma },
        { name: "Jira", icon: jira }
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
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
      source_code_link: "https://github.com/",
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
      source_code_link: "https://github.com/",
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
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };