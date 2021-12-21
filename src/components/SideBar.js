import React from "react";
import logo from "../logo.svg";
import { FaTimes, FaBars, FaUserFriends } from "react-icons/fa";
import { social, links } from "../data";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <a
        href='/'
        className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none'
      >
        <svg class='bi me-2' width='40' height='32'></svg>
        <span class='fs-4'>Sidebar</span>
      </a>
      <div>
        <a className='active' href='#home'>
          Home
        </a>
        <a href='#news'>News</a>
        <a href='#contact'>Contact</a>
        <a href='#about'>About</a>
      </div>
    </div>
  );
};

export default Sidebar;
