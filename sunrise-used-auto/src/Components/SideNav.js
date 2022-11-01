import React from 'react'
import {SideNav_Data} from "./SideNav_Data"
import Sunrise from './Sunrise.png'

function SideNav() {
  return (
    <div className = "SideNav">
        <img src={Sunrise} className='SideNavImg' alt=''/>
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