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
  devsnest,
  alsol,
  threejs,
  Amazon,
  ChatGPT,
  Deliveroo,
  Medium,
  TikTik,
  YouTube,
  suraj,
  rakesh,
  amit,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Bootcamp Student",
    company_name: "Devsnest",
    icon: devsnest,
    iconBg: "#383E56",
    date: "Jun 2022 - Oct 2022",
    points: [
      "Participated in an online free bootcamp called Devsnest to learn DSA basics using Python, frontend, and backend using MERN stack",
      "Completed weekly coding assignments and projects in a team with peers",
      "Learned the following topics in DSA - Time and space complexities,Arrays, linked-lists, stacks, and queues,binary-trees, heaps",
      "Learned the following topics in Frontend - HTML, CSS, JavaScript basics, React framework, Redux Toolkit, React Router, TailwindCSS, Styled Components",
      "Learned the following topics in Backend - MongoDB and Mongoose for database management, Express framework for building APIs, JWT authentication and authorization, Deploying MERN stack apps to Heroku and Netlify",
    ],
  },
  {
    title: "Junior React Native Developer",
    company_name: "Alsol Technology Solutions Pvt Ltd",
    icon: alsol,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Developing and maintaining mobile applications using React-Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Shuvam proved me wrong.",
    name: "Rakesh Basu",
    designation: "Friend",
    company: "Shuvam",
    image: rakesh,
  },
  {
    testimonial:
      "As a junior React Native developer, Shuvam demonstrated a strong work ethic, attention to detail, and a willingness to learn and grow. Their contributions to our team were invaluable and I have no doubt they will continue to excel in their career",
    name: "Suraj Jeswara",
    designation: "CEO",
    company: "Alsol Technology Solution Pvt Ltd",
    image: suraj,
  },
  {
    testimonial:
      "Highly motivated and diligent student with exceptional academic performance and a positive attitude towards learning",
    name: "Amit Majumder",
    designation: "HOD",
    company: "Future Institute of Technology",
    image: amit,
  },
];

const projects = [
  {
    name: "Amazon Clone",
    description:
      "A full-stack e-commerce web application that allows users to buy products. The app uses Next.js for server-side rendering and client-side routing, Firebase for authentication, and data storage. It also integrates Stripe for payments and Redux Toolkit for state management.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Amazon,
    source_code_link: "https://github.com/GamerQuanTuM/Amazon-Clone",
  },
  {
    name: "ChatGPT",
    description:
      "A chatbot mobile application built using React Native, which communicates with OpenAI's GPT-3 through an Express backend API. The app allows users to chat with the bot and stores the chat history in MongoDB. The app uses React Navigation for navigation, axios for API requests, and several other libraries for UI elements.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: ChatGPT,
    source_code_link: "https://github.com/GamerQuanTuM/ChatGPT-Mobile-App",
  },
  {
    name: "Deliveroo Clone",
    description:
      "A food delivery app clone built using React Native, Expo, and SanityCMS for the backend and storage. The app features a user interface that resembles the Deliveroo app and allows users to browse restaurants and menu items, place orders, and track delivery status.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "reduxtoolkit",
        color: "pink-text-gradient",
      },
    ],
    image: Deliveroo,
    source_code_link: "https://github.com/GamerQuanTuM/Deliveroo-Clone",
  },
  {
    name: "TikTik",
    description:
      "Tiktik is a TikTok clone app that allows users to log in using their Google account and create, like, and search for videos. The app includes a video creation feature that allows users to publish their videos, as well as a video discovery feature that lets users search for videos by category and filter their search results by criteria.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "zustand",
        color: "pink-text-gradient",
      },
    ],
    image: TikTik,
    source_code_link: "https://github.com/GamerQuanTuM/TikTik",
  },
  {
    name: "Medium Clone",
    description:
      "In this project, I created a Medium clone using Next.js and SanityCMS for backend and storage. The clone allows users to view articles and posts, as well as create and publish their own articles. The clone also allows users to interact with articles and posts by commenting on them.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Medium,
    source_code_link: "https://github.com/GamerQuanTuM/medium-clone",
  },
  {
    name: "YouTube Clone",
    description:
      "In this project, I created a YouTube clone, which allows users to login using email and Google accounts. Upon opening the app, users can browse all videos and click on a specific video to watch it, like, and comment on the video, as well as subscribe to the channel. Additionally, the app suggests other videos to the user based on the video they are currently watching.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: YouTube,
    source_code_link: "https://github.com/GamerQuanTuM/YouTube-Frontend",
  },
];

export { services, technologies, experiences, testimonials, projects };
