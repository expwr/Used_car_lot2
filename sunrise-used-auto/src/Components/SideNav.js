import React from 'react'
import {SideNav_Data} from "./SideNav_Data"

function SideNav() {
  return (
    <div className = "SideNav">
        <ul className="SideNavList">
            {SideNav_Data.map((val, key) => {
                return (
                    <li key={key} 
                    className = "row"
                    id={window.location.pathname === val.link ? "active" : ""}
                    onClick = {() => {
                        window.location.pathname = val.link;
                    }}>
                        <div id='icon'>{val.icon}</div>{" "}<div id='title'>{val.title}</div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default SideNav