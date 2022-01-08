import React from "react";
import logo from "./images/logo.jpg";
import {
  HouseFill,
  PersonLinesFill,
  CodeSquare,
  Globe,
  Linkedin,
  Github,
  FileEarmarkPersonFill,
} from "react-bootstrap-icons";
const ICON_SIZE = 32;
export const links = [
  {
    id: 1,
    url: "#introduction",
    text: "Home",
    icon: <HouseFill size={ICON_SIZE} />,
  },
  {
    id: 2,
    url: "#home",
    text: "About",
    icon: <PersonLinesFill size={ICON_SIZE} />,
  },
  {
    id: 3,
    url: "#projects",
    text: "Projects",
    icon: <CodeSquare size={ICON_SIZE} />,
  },
  {
    id: 4,
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

export const projects = [
  {
    id: 1,
    img: logo,
    imgText: "Brew4You application logo",
    title: "Brew4You",
    description:
      "Brew4You is an ideal software product for either small or medium-sized coffee shops. Its potential benefits directly to business owners in the management process, and helps them build a strong online business to attract more customers. Currently, the Brew4You project is focused on developing a web application as well as a mobile application. Used ReactJS, TypeScript, MongoDB, ExpressJS/NextJS , NodeJS, HTML, CSS, Stripe",
    url: "https://brew4you.herokuapp.com/",
  },
  {
    id: 2,
    img: "https://asia.olympus-imaging.com/content/000107506.jpg",
    imgText: "Brew4You application logo",
    title: "Proshop",
    description:
      "simple e-commerce website with basic integration that shows the shop products and allow user to shop and pay for the items they selected. The application also comes with administration side to let owner updates the change on their need. Used ReactJS, MongoDB, ExpressJS, NodeJS, HTML, CSS, PayPal API",
    url: "http://giang-proshop.herokuapp.com/",
  },
  {
    id: 3,
    img: "https://partnersinprojectgreen.com/app/uploads/2019/11/Unity_Health_Logo_CIRCULAR-newDec2019.jpg",
    imgText: "Unity Health Toronto logo",
    title: "Students Registration System",
    description:
      "A web application that simplifies the registration process of Unity Health Toronto for students with a new notification email system and an internal administration application which helps manage student records and provide real-time communications. Used Laravel, MSSQL Server, HTML, CSS, jQuery",
    url: "https://students.unityhealth.to/",
  },
  {
    id: 4,
    img: "https://partnersinprojectgreen.com/app/uploads/2019/11/Unity_Health_Logo_CIRCULAR-newDec2019.jpg",
    imgText: "Unity Health Toronto logo",
    title: "AFIB Forms",
    description:
      "A web-based application survey designed for iPad devices to allow physicians to record patient information through a set of surveys upon entrance to the hospital. Used Laravel, MSSQL Server, HTML, CSS, jQuery",
    url: null,
  },
  {
    id: 5,
    img: "https://partnersinprojectgreen.com/app/uploads/2019/11/Unity_Health_Logo_CIRCULAR-newDec2019.jpg",
    imgText: "Unity Health Toronto logo",
    title: "Toronto Bicycle Theft Analyst",
    description:
      "A model using logistic regression and decision trees that consumes the data from the Toronto Police department to predict the possibility of recovering stolen bikes. The model is exported as an API and can be used via HTTP/REST. Used Panda, Numpy, Matplotlib, sklearn, seaborn, joblib, Flask, Python",
    url: null,
  },
  {
    id: 6,
    img: "https://partnersinprojectgreen.com/app/uploads/2019/11/Unity_Health_Logo_CIRCULAR-newDec2019.jpg",
    imgText: "Unity Health Toronto logo",
    title: "Movie Share",
    description:
      "An online forum where users can share their favorite movies with people who have the same interest. Users can create, share, and comment on their opinion about the movies. Used S3, DynamoDB, ASP.NET, AWS ECS, Docker, Bootstrap",
    url: null,
  },
];
