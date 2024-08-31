import React from "react";
import {IoLogOutOutline,IoNotifications,IoSearch} from "react-icons/io5";
import "./Header.css"
const Header=()=>{
    return(
        <div className="header">
            <h2 className="header-title">Dashboard</h2>

            <div className="search-box">
                <input type="text" placeholder="Search..." />
                <IoSearch className="search--icon"/>
            </div>

            <div className="user-box">
                <IoNotifications className="user--icon"/>
                <IoLogOutOutline className="user--icon"/>
            </div>
        </div>
    )
}
export default Header