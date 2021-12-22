import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";
import {
  HouseFill,
  PersonLinesFill,
  FileTextFill,
  CodeSquare,
  Mailbox2,
} from "react-bootstrap-icons";
const ICON_SIZE = 32;
export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: <HouseFill size={ICON_SIZE} />,
  },
  {
    id: 2,
    url: "/about",
    text: "About",
    icon: <PersonLinesFill size={ICON_SIZE} />,
  },
  {
    id: 3,
    url: "/projects",
    text: "Projects",
    icon: <FileTextFill size={ICON_SIZE} />,
  },
  {
    id: 4,
    url: "/skills",
    text: "Skills",
    icon: <CodeSquare size={ICON_SIZE} />,
  },
  {
    id: 5,
    url: "/contact",
    text: "Contact",
    icon: <Mailbox2 size={ICON_SIZE} />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: "https://www.twitter.com",
    icon: <FaSketch />,
  },
];
