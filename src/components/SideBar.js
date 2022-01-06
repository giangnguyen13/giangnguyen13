import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import ArrowIcon from "./ArrowIcon";
import { links } from "../data";

const Sidebar = ({ activeSection }) => {
  const EXPAND_STATE = "expand";
  const [isExpanded, setIsExpanded] = useState(EXPAND_STATE);
  const [isHover, setIsHover] = useState(EXPAND_STATE);
  const openNavbar = () => {
    if (window.innerWidth > 600) {
      let main = document.getElementById("introduction");
      main.style.marginLeft = "17rem";
      main.style.transition = "margin 600ms ease";
      let navbar = document.getElementsByClassName("navbar")[0];
      navbar.style.width = "17rem";
      navbar.style.transition = "width 600ms ease";
    }
  };

  const closeNavbar = () => {
    if (window.innerWidth > 600) {
      let main = document.getElementById("introduction");
      main.style.marginLeft = "5rem";
      main.style.transition = "margin 600ms ease";
      let navbar = document.getElementsByClassName("navbar")[0];
      navbar.style.width = "5rem";
      navbar.style.transition = "width 600ms ease";
    }
  };

  const toggleExpand = () => {
    if (isExpanded === EXPAND_STATE) {
      setIsExpanded("");
      closeNavbar();
    } else {
      setIsExpanded(EXPAND_STATE);
      openNavbar();
    }
  };

  useEffect(() => {
    function handleResize() {
      let main = document.getElementById("introduction");
      let navbar = document.getElementsByClassName("navbar")[0];
      if (window.innerWidth > 600) {
        main.style.marginLeft = isExpanded ? "17rem" : "5rem";
        main.style.transition = "margin 600ms ease";
        // to avoid weird animation on first time load or after the style being removed
        navbar.style.width = isExpanded ? "17rem" : "5rem";
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
        width: window.innerWidth > 600 ? "17rem" : "-webkit-fill-available",
        transition: "width 600ms ease 0s",
      }}
    >
      <ul
        className={`navbar-nav ${isExpanded}`}
        // onMouseEnter={() => {
        //   // When navbar is close, but the mouse is moved over
        //   //
        //   if (isExpanded !== EXPAND_STATE) {
        //     setIsHover(EXPAND_STATE);
        //     openNavbar();
        //   }
        // }}
        // onMouseLeave={() => {
        //   let navbar = document.getElementsByClassName("navbar")[0];
        //   if (navbar.classList.contains(EXPAND_STATE)) {
        //   }
        // }}
      >
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
        <li className='logo'>
          <span
            //href='#'
            className={`nav-link ${isExpanded}`}
            onClick={toggleExpand}
          >
            <span className='link-text logo-text'>&nbsp;(｡･∀･)ﾉﾞ</span>
            <ArrowIcon />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
