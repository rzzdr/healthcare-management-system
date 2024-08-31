import React from "react";
import {IoIosArrowBack, IoIosArrowForward} from"react-icons/io";
import "./Sidebar.css";
import MenuList from "../Menu/MenuList";
import { useState } from "react";
const Sidebar=()=>{
    const [isOpen, setIsOpen]= useState();

    const toggle=()=>setIsOpen(!isOpen);
  return(
    <div className="sidebar-container">
        <div className="sidebar-toggle" onClick={toggle}>{isOpen?<IoIosArrowBack/>:<IoIosArrowForward/>}</div>
        <div className={isOpen? "sidebar open":"sidebar"}>
            <div className="sidebar--logo"> Z K</div>
            <MenuList/>
        </div>
    </div>
  )
}
export default Sidebar