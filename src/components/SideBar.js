import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import ArrowIcon from "./ArrowIcon";
import { links } from "../data";

const Sidebar = ({ activeSection }) => {
  const [isExpanded, setIsExpanded] = useState("expand");
  const openNavbar = () => {
    if (window.innerWidth > 600) {
      let main = document.getElementById("container");
      main.style.marginLeft = "17rem";
      main.style.transition = "margin 600ms ease";
      let navbar = document.getElementsByClassName("navbar")[0];
      navbar.style.width = "16rem";
      navbar.style.transition = "width 600ms ease";
    }
  };

  const closeNavbar = () => {
    if (window.innerWidth > 600) {
      let main = document.getElementById("container");
      main.style.marginLeft = "5rem";
      main.style.transition = "margin 600ms ease";
      let navbar = document.getElementsByClassName("navbar")[0];
      navbar.style.width = "5rem";
      navbar.style.transition = "width 600ms ease";
    }
  };

  const toggleExpand = () => {
    if (isExpanded === "expand") {
      setIsExpanded("");
      closeNavbar();
    } else {
      setIsExpanded("expand");
      openNavbar();
    }
  };

  useEffect(() => {
    function handleResize() {
      let main = document.getElementById("container");
      let navbar = document.getElementsByClassName("navbar")[0];
      if (window.innerWidth > 600) {
        main.style.marginLeft = isExpanded ? "17rem" : "5rem";
        main.style.transition = "margin 600ms ease";
        // to avoid weird animation on first time load or after the style being removed
        navbar.style.width = isExpanded ? "16rem" : "5rem";
        navbar.style.transition = "width 600ms ease";
      } else {
        main.style.margin = "0";
        main.style.transition = "margin 600ms ease";
        navbar.removeAttribute("style");
      }
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <nav
      className={`navbar ${isExpanded}`}
      style={{
        // fix issue on mobile when first load
        width: window.innerWidth > 600 ? "16rem" : "-webkit-fill-available",
        transition: "width 600ms ease 0s",
      }}
    >
      <ul className={`navbar-nav ${isExpanded}`}>
        <li className='logo'>
          <span
            //href='#'
            className={`nav-link ${isExpanded}`}
            onClick={toggleExpand}
          >
            <span className='link-text logo-text'>(｡･∀･)ﾉﾞ</span>
            <ArrowIcon />
          </span>
        </li>
        {links.map((link) => {
          return (
            <NavItem
              key={link.id}
              icon={link.icon}
              url={link.url}
              displayText={link.text}
              isActive={link.url.includes(activeSection)}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
