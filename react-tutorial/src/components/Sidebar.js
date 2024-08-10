import React from 'react'
import { SidebatData } from './SidebarData'
import SidebarIcon from "./SiderbarIcon" 

function Sidebar() {
  return (
    <div className='Sidebar'>
      {/* <SidebarIcon/> */}
      <ul className="SidebarList">
      {SidebatData.map((value,key) => {
        //return HTML要素を書く
        return(
            <li key={key} 
            id ={window.location.pathname == value.link ? "active" : ""} className='row' onClick={()=> {
                window.location.pathname = value.link;
            }}>
                <div id = "icon">{value.icon}</div>
                <div id = "title">{value.title}</div>
            </li>
        )
      })}
      </ul>
    </div>
  );
}

export default Sidebar;