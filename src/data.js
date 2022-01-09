import React from "react";
import logo from "./images/logo.png";
import Survey from "./images/Survey.png";
import ShareVideo from "./images/ShareVideo.png";
import DoctorAppointment from "./images/DoctorAppointment.png";
import Bicycle from "./images/Bicycle.svg";
import ShoppingBag from "./images/ShoppingBag.svg";
import Hospital from "./images/Hospital.svg";
import {
  HouseFill,
  PersonLinesFill,
  CodeSquare,
  Globe,
  Linkedin,
  Github,
  FileEarmarkPersonFill,
  Files,
} from "react-bootstrap-icons";
const ICON_SIZE = 32;
export const links = [
  {
    id: 1,
    url: "#home",
    text: "Home",
    icon: <HouseFill size={ICON_SIZE} />,
  },
  {
    id: 2,
    url: "#about",
    text: "About",
    icon: <PersonLinesFill size={ICON_SIZE} />,
  },
  {
    id: 3,
    url: "#skills",
    text: "Skills",
    icon: <CodeSquare size={ICON_SIZE} />,
  },
  {
    id: 4,
    url: "#projects",
    text: "Projects",
    icon: <Files size={ICON_SIZE} />,
  },
  {
    id: 5,
    url: "#contact",
    text: "Contact",
    icon: <Globe size={ICON_SIZE} />,
  },
];

export const socials = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/giangnguyen13/",
    icon: <Linkedin size={75} />,
  },
  {
    id: 2,
    url: "https://github.com/giangnguyen13",
    icon: <Github size={75} color='black' />,
  },
  {
    id: 3,
    url: "https://drive.google.com/file/d/1cEim-bkQz3ODZHfeyyYIe4p6bSEOSvKt/view",
    icon: <FileEarmarkPersonFill size={75} color='black' />,
  },
];

export const techLabels = {
  html: {
    id: 1,
    source: "https://img.shields.io/badge/-HTML5-E34F26",
    badge:
      "https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=flat-square",
    description: "HTML logo with HTML as text and orange background",
  },
  jquery: {
    id: 2,
    source: "https://img.shields.io/badge/-jQuery-0769AD",
    badge:
      "https://img.shields.io/badge/-jQuery-0769AD?logo=jquery&logoColor=white&style=flat-square",
    description: "jQuery logo with jQuery as text and blue background",
  },
  js: {
    id: 3,
    source: "https://img.shields.io/badge/-JavaScript-F7DF1E",
    badge:
      "https://img.shields.io/badge/-JavaScript-000000?logo=javascript&logoColor=F7DF1E&style=flat-square",
    description: "JavaScript logo with JavaScript as text and black background",
  },
  laravel: {
    id: 4,
    source: "https://img.shields.io/badge/-Laravel-FF2D20",
    badge:
      "https://img.shields.io/badge/-Laravel-FF2D20?logo=laravel&logoColor=white&style=flat-square",
    description: "Laravel logo in red background with text",
  },
  mssql: {
    id: 5,
    source: "https://img.shields.io/badge/-MSSQL%20Server-CC2927",
    badge:
      "https://img.shields.io/badge/-MS%20SQL%20Server-e7e7e7?logo=microsoft-sql-server&logoColor=CC2927&style=flat-square",
    description: "Microsoft SQL Server logo in gray background with text",
  },
  reactjs: {
    id: 6,
    source: "https://img.shields.io/badge/-React-61DAFB",
    badge:
      "https://img.shields.io/badge/-React-282c34?logo=react&logoColor=61dafb&style=flat-square",
    description: "React logo in black background with text",
  },
  expressjs: {
    id: 7,
    source: "https://img.shields.io/badge/-ExpressJS-000000",
    badge:
      "https://img.shields.io/badge/-ExpressJS-000000?logo=express&logoColor=white&style=flat-square",
    description: "ExpressJS logo in red background with text",
  },
  nodejs: {
    id: 8,
    source: "https://img.shields.io/badge/-NodeJS-339933",
    badge:
      "https://img.shields.io/badge/-Nodejs-339933?logo=node.js&logoColor=white&style=flat-square",
    description: "Nodejs text in green background",
  },
  mongodb: {
    id: 9,
    source: "https://img.shields.io/badge/-MongoDB-47A248",
    badge:
      "https://img.shields.io/badge/-MongoDB-e6e6e6?logo=mongoDB&logoColor=47A248&style=flat-square",
    description: "MongoDB logo in gray background with text",
  },
  git: {
    id: 10,
    source: "https://img.shields.io/badge/-Git-F05032",
    description: "Git logo in orange background with text",
    badge:
      "https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white&style=flat-square",
  },
  github: {
    id: 11,
    source: "https://img.shields.io/badge/-GitHub-181717",
    description: "GitHub logo in black background with text",
    badge:
      "https://img.shields.io/badge/-GitHub-181717?logo=github&style=flat-square",
  },
  gitlab: {
    id: 12,
    source: "https://img.shields.io/badge/-GitLab-FCA121",
    description: "GitLab logo in purple background with text",
    badge:
      "https://img.shields.io/badge/-GitLab-9B51E0?logo=gitlab&style=flat-square",
  },
  csharp: {
    id: 13,
    source:
      "https://img.shields.io/badge/-239120?logo=c-sharp&style=flat-square",
    badge:
      "https://img.shields.io/badge/-68217A?logo=c-sharp&style=flat-square",
    description: "C# logo in dark purple background",
  },
  java: {
    id: 14,
    source: "https://img.shields.io/badge/-Java-007396",
    description: "Java logo with blue background",
    badge:
      "https://img.shields.io/badge/-Java-007396?logo=java&logoColor=red&style=flat-square",
  },
  php: {
    id: 15,
    source: "https://img.shields.io/badge/-PHP-777BB4",
    description: "PHP logo with purple background and text",
    badge:
      "https://img.shields.io/badge/-PHP-777BB4?logo=php&logoColor=white&style=flat-square",
  },
  css: {
    id: 16,
    source: "https://img.shields.io/badge/-CSS3-1572B6",
    description: "CSS3 logo in blue background and text",
    badge:
      "https://img.shields.io/badge/-CSS-1572B6?logo=css3&logoColor=white&style=flat-square",
  },
  sass: {
    id: 17,
    source: "https://img.shields.io/badge/-SASS-CC6699",
    description: "SASS logo with pink background",
    badge:
      "https://img.shields.io/badge/-SASS-CC6699?logo=sass&logoColor=white&style=flat-square",
  },
  vscode: {
    id: 18,
    source: "https://img.shields.io/badge/-Visual%20Studio%20Code-007ACC",
    description: "Visual Studio Code logo",
    badge: "badge_source",
  },
  visualstudio: {
    id: 19,
    source: "https://img.shields.io/badge/-Visual%20Studio-5C2D91",
    description: "Visual Studio logo",
    badge: "badge_source",
  },
  androidstudio: {
    id: 20,
    badge: "badge_source",
    source: "https://img.shields.io/badge/-Android%20Studio-3DDC84",
    description: "Android Studio logo",
  },
  eclipse: {
    id: 21,
    badge: "badge_source",
    source: "https://img.shields.io/badge/-Eclipse%20IDE-2C2255",
    description: "Eclipse Logo",
  },
  bootstrap: {
    id: 22,
    badge:
      "https://img.shields.io/badge/-Bootstrap-7952b3?logo=bootstrap&logoColor=white&style=flat-square",
    source: "https://img.shields.io/badge/-Bootstrap-7952B3",
    description: "Bootstrap Logo with text",
  },
  aws: {
    id: 23,
    badge:
      "https://img.shields.io/badge/-Amazon%20Web%20Services-232F3E?logo=amazon-aws&color=232f3e&style=flat-square&labelColor=e26308",
    source: "https://img.shields.io/badge/-AWS-E26308",
    description: "Amazon Web Services Logo with text",
  },
  azure: {
    id: 24,
    badge:
      "https://img.shields.io/badge/-Microsoft%20Azure-0078D4?logo=microsoft%20azure&logoColor=white&style=flat-square",
    source: "https://img.shields.io/badge/-Microsoft%20Azure-0078D7",
    description: "Microsoft Azure Logo with text",
  },
  python: {
    id: 25,
    badge:
      "https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white&style=flat-square",
    source: "https://img.shields.io/badge/-Python-3776AB",
    description: "Python Logo with text",
  },
  mysql: {
    id: 26,
    badge:
      "https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&color=232f3e&style=flat-square",
    source: "https://img.shields.io/badge/-MySQL-4479A1",
    description: "MySQL Logo with text",
  },
  s3storage: {
    id: 27,
    badge:
      "https://img.shields.io/badge/-S3%20Storage-569A31?logo=Amazon%20S3&color=882f22&style=flat-square",
    source: "https://img.shields.io/badge/-S3%20Storage-569A31",
    description: "Amazon S3 Storage Services logo",
  },
  paypal: {
    id: 28,
    badge:
      "https://img.shields.io/badge/-PayPal-00457C?logo=PayPal&color=e7aa19&style=flat-square",
    source: "https://img.shields.io/badge/-PayPal-00457C",
    description: "Paypal logo",
  },
  stripe: {
    id: 29,
    badge:
      "https://img.shields.io/badge/-Stripe-008CDD?logo=Stripe&color=e7e7e7&style=flat-square&logoColor=6772e5",
    source: "https://img.shields.io/badge/-Stripe-008CDD",
    description: "Stripe logo",
  },
  dynamodb: {
    id: 30,
    badge:
      "https://img.shields.io/badge/-DynamoDB-4053d6?logo=Amazon%20DynamoDB&color=e7e7e7&style=flat-square&logoColor=206eb5",
    source: "https://img.shields.io/badge/-DynamoDB-4053D6",
    description: "DynamoDB logo",
  },
  sklearn: {
    id: 31,
    badge:
      "https://img.shields.io/badge/-scikit--learn-F7931E?logo=scikit-learn&color=e7e7e7&style=flat-square&labelColor=3499cd",
    source: "https://img.shields.io/badge/-SK--Learn-F7931E",
    description: "Scikit-learn library logo",
  },
  numpy: {
    id: 32,
    badge:
      "https://img.shields.io/badge/-Numpy-013243?logo=numpy&color=e7e7e7&style=flat-square&labelColor=3499cd",
    source: "https://img.shields.io/badge/-Numpy-013243",
    description: "Numpy library logo",
  },
  docker: {
    id: 33,
    badge:
      "https://img.shields.io/badge/-Docker-2496ED?logo=docker&color=e7e7e7&style=flat-square",
    source: "https://img.shields.io/badge/-Docker-2496ED",
    description: "Docker logo",
  },
  dotnet: {
    id: 34,
    badge: "https://img.shields.io/badge/-.NET-512BD4?style=flat-square",
    source: "https://img.shields.io/badge/-.NET-512BD4",
    description: "Docker logo",
  },
  android: {
    id: 35,
    badge:
      "https://img.shields.io/badge/-Android-3DDC84?logo=Android&color=e7e7e7&style=flat-square&labelColor=4e2acd",
    source: "https://img.shields.io/badge/-Android-3DDC84",
    description: "Android logo",
  },
  pandas: {
    id: 36,
    badge: "https://img.shields.io/badge/-Pandas-130654?style=flat-square",
    source: "https://img.shields.io/badge/-Pandas-130654",
    description: "Pandas library text",
  },
  matplotlib: {
    id: 37,
    badge: "https://img.shields.io/badge/-Matplotlib-11557c?style=flat-square",
    source: "https://img.shields.io/badge/-Matplotlib-11557C",
    description: "Matplotlib library text",
  },
  awsec2: {
    id: 38,
    badge: "https://img.shields.io/badge/-AWS%20EC2-f58735?style=flat-square",
    source: "https://img.shields.io/badge/-AWS%20EC2-F58735",
    description: "Amazon Elastic Computing Service text",
  },
  redux: {
    id: 39,
    badge:
      "https://img.shields.io/badge/-Redux-764ABC?logo=redux&?style=flat-square",
    source: "https://img.shields.io/badge/-Redux-764ABC?logo=redux",
    description: "Redux Service text",
  },
  nextjs: {
    id: 40,
    badge:
      "https://img.shields.io/badge/-NextJS-000000?logo=next.js&?style=flat-square",
    source: "https://img.shields.io/badge/-NextJS-000000",
    description: "NextJS text",
  },
  jwt: {
    id: 41,
    badge:
      "https://img.shields.io/badge/-JWT-000000?logo=JSON%20Web%20Tokens&style=flat-square",
    source: "https://img.shields.io/badge/-JWT-D63AFF",
    description: "JSON web token, using for authenticate users text",
  },
  ejs: {
    id: 42,
    badge: "https://img.shields.io/badge/-EJS-BF225A?style=flat-square",
    source: "https://img.shields.io/badge/-EJS-BF225A",
    description: "EJS, javascript template engine text",
  },
  c45: {
    id: 43,
    badge: "badge_source",
    source: "https://img.shields.io/badge/-C4.5-F3F3F3",
    description: "C4.5 algorithm for decision tree text",
  },
  jest: {
    id: 44,
    badge: "https://img.shields.io/badge/-Jest-C21325?logo=jest&color=15C213",
    source: "https://img.shields.io/badge/-Jest-15C213",
    description: "Testing framework for React application tree text",
  },
  heroku: {
    id: 45,
    badge:
      "https://img.shields.io/badge/-Heroku-430098?logo=heroku&style=flat-square",
    source: "https://img.shields.io/badge/-Heroku-79589F",
    description: "Site hosting application tree text",
  },
  sqlite: {
    id: 46,
    badge:
      "https://img.shields.io/badge/-SQLite-003B57?logo=sqlite&style=flat-square",
    source: "https://img.shields.io/badge/-SQLite-44A2D4",
    description: "SQLite db for simple storage text",
  },
  materialdesign: {
    id: 47,
    badge:
      "https://img.shields.io/badge/-Material--Design-757575?logo=material%20design&style=flat-square&logoColor=fff",
    source: "https://img.shields.io/badge/-Material%20Design-757575",
    description: "Material Design from Google db for simple storage text",
  },
  firebase: {
    id: 48,
    badge:
      "https://img.shields.io/badge/-Firebase-039BE5?logo=firebase&style=flat-square",
    source: "https://img.shields.io/badge/-Firebase-FFCA28",
    description: "Firebase from Google db for simple storage text",
  },
  slack: {
    id: 49,
    badge:
      "https://img.shields.io/badge/-Slack-4A154B?logo=slack&style=flat-square",
    source: "https://img.shields.io/badge/-Slack-4A154B",
    description: "Firebase from Google db for simple storage text",
  },
};

export const projects = [
  // Brew4You
  {
    id: 1,
    img: logo,
    imgText: "Brew4You application logo",
    title: "Brew4You",
    description:
      "Brew4You is an ideal software product for either small or medium-sized coffee shops. Its potential benefits directly to business owners in the management process, and helps them build a strong online business to attract more customers. Currently, the Brew4You project is focused on developing a web application as well as a mobile application.",
    url: "https://brew4you.herokuapp.com/",
    techs: [
      techLabels.html,
      techLabels.sass,
      techLabels.bootstrap,
      techLabels.reactjs,
      techLabels.nextjs,
      techLabels.jest,
      techLabels.mongodb,
      techLabels.stripe,
    ],
  },
  // SRS
  {
    id: 3,
    img: "https://partnersinprojectgreen.com/app/uploads/2019/11/Unity_Health_Logo_CIRCULAR-newDec2019.jpg",
    imgText: "Unity Health Toronto logo",
    title: "Students Registration System",
    description:
      "A web application that simplifies the registration process of Unity Health Toronto for students with a new notification email system and an internal administration application which helps manage student records and provide real-time communications",
    url: null, //"https://students.unityhealth.to/",
    techs: [
      techLabels.html,
      techLabels.sass,
      techLabels.js,
      techLabels.jquery,
      techLabels.laravel,
      techLabels.mssql,
      techLabels.gitlab,
    ],
  },
  // TBTA
  {
    id: 5,
    img: Bicycle,
    imgText: "A man with bicycle",
    title: "Toronto Bicycle Theft Analyst",
    description:
      "A model using logistic regression and decision trees that consumes the data from the Toronto Police department to predict the possibility of recovering stolen bikes. The model is exported as an API and can be used via HTTP/REST.",
    url: null,
    techs: [
      techLabels.python,
      techLabels.numpy,
      techLabels.matplotlib,
      techLabels.sklearn,
      techLabels.pandas,
      techLabels.heroku,
    ],
  },
  // Movie Share
  {
    id: 6,
    img: ShareVideo,
    imgText: "Camera",
    title: "Movie Share",
    description:
      "An API application allows users can share their favorite movies with people who have the same interest. Users can create, share, and add comments on their opinion about the movies",
    url: null,
    techs: [
      techLabels.dotnet,
      techLabels.awsec2,
      techLabels.s3storage,
      techLabels.dynamodb,
      techLabels.docker,
    ],
  },
  // Appointment Reserver
  {
    id: 8,
    img: DoctorAppointment,
    imgText: "Mobile with 3 vertical dots in middle of the screen",
    title: "Appointment Reserver",
    description:
      "A simple Android application allows patients to search and reserve an appointment with the doctor. Works on all devices with Android Marshmallow",
    url: null,
    techs: [techLabels.android, techLabels.sqlite, techLabels.materialdesign],
  },
  // Proshop
  {
    id: 2,
    img: ShoppingBag,
    imgText: "A shopping bag",
    title: "Proshop",
    description:
      "simple e-commerce website with basic integration that shows the shop products and allow user to shop and pay for the items they selected. The application also comes with administration side to let owner updates the change on their need.",
    url: null, //"http://giang-proshop.herokuapp.com/",
    techs: [
      techLabels.html,
      techLabels.css,
      techLabels.reactjs,
      techLabels.redux,
      techLabels.expressjs,
      techLabels.mongodb,
      techLabels.paypal,
    ],
  },
  // AFIB
  {
    id: 4,
    img: Survey,
    imgText: "A document with 3 horizontal lines",
    title: "AFIB Forms",
    description:
      "A web-based application survey designed for iPad devices to allow physicians to record patient information through a set of surveys upon entrance to the hospital.",
    url: null,
    techs: [
      techLabels.html,
      techLabels.css,
      techLabels.jquery,
      techLabels.laravel,
      techLabels.mssql,
      techLabels.gitlab,
    ],
  },
  // DN
  {
    id: 7,
    img: Hospital,
    imgText: "Hospital Icon",
    title: "Distance Nurse",
    description:
      "An application let patients to report their health status to the nurse. The saved data will be used to predict the potential disease via a decision tree model.",
    url: null,
    techs: [
      techLabels.ejs,
      techLabels.expressjs,
      techLabels.mongodb,
      techLabels.c45,
    ],
  },
];

export const skills = [
  {
    title: "Frontend",
    skills: [
      techLabels.html,
      techLabels.css,
      techLabels.sass,
      techLabels.bootstrap,
      techLabels.materialdesign,
      techLabels.jquery,
      techLabels.js,
      techLabels.reactjs,
      techLabels.redux,
    ],
  },
  {
    title: "Backend",
    skills: [
      techLabels.nodejs,
      techLabels.expressjs,
      techLabels.nextjs,
      techLabels.laravel,
      techLabels.php,
      techLabels.dotnet,
      techLabels.csharp,
      techLabels.java,
      techLabels.python,
      techLabels.firebase,
    ],
  },
  {
    title: "Database",
    skills: [
      techLabels.mssql,
      techLabels.mysql,
      techLabels.sqlite,
      techLabels.mongodb,
      techLabels.dynamodb,
    ],
  },
  {
    title: "Cloud technologies",
    skills: [techLabels.aws, techLabels.azure, techLabels.heroku],
  },
  {
    title: "Other Technologies",
    skills: [
      techLabels.git,
      techLabels.github,
      techLabels.gitlab,
      techLabels.docker,
      techLabels.s3storage,
      techLabels.paypal,
      techLabels.stripe,
      techLabels.sklearn,
      techLabels.numpy,
      techLabels.pandas,
      techLabels.matplotlib,
      techLabels.jest,
      techLabels.slack,
    ],
  },
];
