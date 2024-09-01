import React from "react";
import {Link} from "react-router-dom";
import {IoMdDocument, IoMdHome, IoMdLogIn, IoMdPeople, IoMdStats, IoMdTime} from "react-icons/io";
import "./MenuList.css";

const MenuList = () => {
    return (
        <ul className="menu--list">
            <li className="menu--list-item active">
                <Link to={"/"}><IoMdHome/>DASHBOARD</Link>
            </li>
            <li className="menu--list-item">
                <Link to={"/signin"}><IoMdLogIn/>SIGN IN</Link>
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
                <Link to={"/logout"}><IoMdLogIn/>LOG OUT</Link>
            </li>
        </ul>
    )
}
export default MenuList
