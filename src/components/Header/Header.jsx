import React from "react";
import {IoLogOutOutline, IoNotifications, IoSearch} from "react-icons/io5";
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <h2 className="header-title">Z K</h2>

            <div className="user-box">
                <IoNotifications className="user--icon"/>
                <IoLogOutOutline className="user--icon"/>
            </div>
        </div>
    )
}
export default Header