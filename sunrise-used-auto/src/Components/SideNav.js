import React from 'react'
import {SideNav_Data} from "./SideNav_Data"

function SideNav() {
  return (
    <div className = "SideNav">
        <ul className="SideNavList">
            {SideNav_Data.map((val, key) => {
                return (
                    <li key = {key} 
                    className = "row"
                    onClick = {() => {
                        window.localStorage.pathname = val.link}}>
                        {" "}
                        <div>{val.icon}</div>{" "}
                        <div>
                            {val.title}
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default SideNav