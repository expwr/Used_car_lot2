import React from "react";
import { Link } from "react-router-dom";
import { SideNav_Data } from "./SideNav_Data";
import "../App.css";
import { IconContext } from "react-icons";
import Sunrise from './Sunrise.png'

function Navbar() {;
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
        <nav className={"nav-menu"}>
          <ul className="nav-menu-items">
          <img src={Sunrise} alt="" className="Logo"/>
            {SideNav_Data.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icons}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;