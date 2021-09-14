import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiCommunityLine } from "react-icons/ri";
import { MdPeopleOutline } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import Searchbar from "../Searchbar";

function LeftContentMenu() {
  return (
    <div className="left-container-main">
      <div className="main-content">
        <Searchbar />
        <ul className="main-menu-list">
          <li>
            <div className="icon">
              <RiCommunityLine className="left-sidebar-icon" size={16} />
            </div>
            Community
          </li>
          <li>
            <div className="icon">
              <AiOutlineHome className="left-sidebar-icon" size={16} />
            </div>
            Rentals
          </li>
          <li>
            <div className="icon">
              <BsBriefcase className="left-sidebar-icon" size={16} />
            </div>
            Job Postings
          </li>
          <li>
            <div className="icon">
              <MdPeopleOutline className="left-sidebar-icon" size={16} />
            </div>
            Friends
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftContentMenu;
