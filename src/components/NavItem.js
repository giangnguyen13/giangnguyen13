import React from "react";
const NavItem = ({ icon, displayText, url, isActive }) => {
  return (
    <li className='nav-item'>
      <a href={url} className={`nav-link ${isActive && "active"}`}>
        {icon}
        <span className='link-text'>{displayText}</span>
      </a>
    </li>
  );
};

export default NavItem;
