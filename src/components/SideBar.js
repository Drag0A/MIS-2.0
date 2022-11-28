import { useState } from 'react';
import '../styles/sidebar.css';
import { NavLink } from "react-router-dom";
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { navData } from "../lib/navData";

export default function SideBar() {
  const [open, setopen] = useState(false)
  const toggleOpen = () => {
    setopen(!open)
  }
  return (
    <div className={open ? "sidenav" : "sidenavClosed"}>
      <button className="menuBtn" onClick={toggleOpen}>
        {open ? <AiOutlineDoubleLeft size={20} /> : <AiOutlineDoubleRight size={20} />}
      </button>
      {navData.map(item => {
        return <NavLink key={item.id} className="sideitem" to={item.link}>
          {item.icon}
          <span className="linkText">{item.text}</span>
        </NavLink>
      })}
    </div>
  )
}