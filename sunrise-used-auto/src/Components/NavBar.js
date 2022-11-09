import React from "react";
import { NavLink} from "react-router-dom";
import { SideNav_Data } from "./SideNav_Data";
import "../App.css";
import { IconContext } from "react-icons";
import Sunrise from './Sunrise.png'
import Fade from "react-bootstrap/Fade"

function Navbar() {;
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="fade-in-left">
        <nav className={"nav-menu"}>
          <ul className="nav-menu-items" id={NavLink ? "active" : ""}>
          <img src={Sunrise} alt="" className="Logo"/>
            {SideNav_Data.map((item, index) => {
              return (
                <li key={index} className={item.cName} >
                  <NavLink to={item.path}>
                    {item.icons}
                    <span >{item.title}</span>
                  </NavLink>
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