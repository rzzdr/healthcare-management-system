import React from "react";
import {Link} from "react-router-dom";
import { IoMdHome,IoMdDocument,IoMdPeople,IoMdTime,IoMdStats,IoMdLogIn } from "react-icons/io";
import "./MenuList.css";
const MenuList=()=>{
  return(
    <ul className="menu--list">
      <li className="menu--list-item active">
        <Link to={"/"}><IoMdHome/>DASHBOARD</Link>
      </li>
      <li className="menu--list-item">
        <Link to={"/invoice"}><IoMdDocument/>INVOICE</Link>
      </li>
      <li className="menu--list-item">
        <Link to={"/customer"}><IoMdPeople/>CUSTOMER</Link>
      </li>
      <li className="menu--list-item">
        <Link to={"/booking"}><IoMdTime/>BOOK TEST/APPOINTMENT</Link>
      </li>
      <li className="menu--list-item">
        <Link to={"/"}><IoMdStats/>REPORTS</Link>
      </li>
      <li className="menu--list-item">
        <Link to={"/"}><IoMdLogIn/>LOG OUT</Link>
      </li>
    </ul>
  )
}
export default MenuList
