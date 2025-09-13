import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  edunet,
  weatherpedia,
  portfolio,
  crud,
  md,
  NEWSApi,
  mathwork,
  MovieTrailer,
  eduskill,
  Php,
  typescript,
  mysql,
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

export const services = [
  { title: "HTML 5", icon: html },
  { title: "CSS 3", icon: css },
  { title: "JavaScript", icon: javascript },
  { title: "React JS", icon: reactjs },
  { title: "Php", icon: Php },
];

export const technologies = [
  { name: "Tailwind CSS", icon: tailwind },
  { name: "typescript", icon: typescript },
  { name: "mysql", icon: mysql },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Web development Intern",
    company_name: "Lotech IT institute",
    icon: eduskill,
    iconBg: "#161329",
    date: "April 2022 - sept 2022",
    points: [
      "Acquired hands-on knowledge of Front end web development, delving into HTML, CSS, and Java script.",
      "also gaining a solid foundation frame work like React js, covering topics like Tailwind, material UI, and Bootstrap.",
    ],
  },
  {
    title: "Teacher",
    company_name: "The wind of Knowledge Academy",
    icon: mathwork,
    iconBg: "#161329",
    date: "April 2024 - march 2025",
    points: [
      "Taught Mathematics to Senior Secondary student",
      "Taught Computer to junior and Senior Secondary student",
      "Taught Mathematics to Basic 5 student.",
    ],
  },
  {
    title: "Assistance Technician | Bartender ",
    company_name: "Eastern Garden Chinese Resturant",
    icon: edunet,
    iconBg: "#161329",
    date: "June 2014 - July 2016",
    points: [
      "apply weekly maintenace to indoor AC and Appliances.",
      "Took customer order during Bartending shift.",
      "Record or procure regular supply liquor to the Bar.",
    ],
  },
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "Material UI", color: "green-text-gradient" },
      { name: "Framer motion", color: "pink-text-gradient" },
      { name: "Weather API by openweathermap", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Static Portfolio Website",
    description:
      "A front end portfolio website that that uses typescript for type safety and html, CSS and JS for structure, functionality and styling. client/visitors can also drop a message in the contact me section.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
      { name: "typescript", color: "pink-text-grvcadient" },
    ],
    image: portfolio,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Northwestern Medicine clone",
    description:
      "A clone single webpage Medical website with adaptive web screen for mobile and tablets.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS ", color: "green-text-gradient" },
      { name: "Java Script", color: "pink-text-gradient" },
    ],
    image: md,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "C.R.U.D project",
    description:
      "A mini project that show the use of Create, read, update and delete using react js",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "Material UI", color: "green-text-gradient" },
      { name: "zod", color: "pink-text-gradient" },
      { name: "React-Hook-Form", color: "pink-text-gradient" },
    ],
    image: crud,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "MovieTrailer",
    description:
      "Movie API that enable youTube Trailer of latest and trending movie and Search capabilities",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "Material UI", color: "green-text-gradient" },
      { name: "zod", color: "pink-text-gradient" },
      { name: "React-Hook-Form", color: "pink-text-gradient" },
    ],
    image: MovieTrailer,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "NEWS GEO",
    description:
      "NEWS article website, show Popular and latest trending articles.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
      { name: "NEW API by geoNEWS", color: "yellow-text-gradient" },
    ],

    image: NEWSApi,
    source_code_link:
      "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
