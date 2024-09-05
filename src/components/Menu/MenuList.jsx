import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdDocument, IoMdHome, IoMdLogIn, IoMdPeople, IoMdStats, IoMdTime } from "react-icons/io";
import "./MenuList.css";

import { auth } from "../Sign-In/firebaseConfig";


const NavigationLinkList = [{
    title: "Dashboard",
    icon: <IoMdHome />,
    url: "/",
    visible: true,
}, {
    title: "Sign In",
    url: "/signin",
    icon: <IoMdLogIn />,
    visible: true,
}, {
    title: "Invoice",
    url: "/invoice",
    icon: <IoMdDocument />,
    visible: true,
}, {
    title: "Customer",
    url: "/customer",
    icon: <IoMdPeople />,
    visible: true,
}, {
    title: "Book Test/Appointment",
    url: "/booking",
    icon: <IoMdTime />,
    visible: true,
},
    // {
    //     title: "Chatbot",
    //     url : "/chatbot",
    //     icon: <IoMdStats/>,
    //     isDisabled: false,
    // }

];



const MenuList = () => {


    const user = auth.currentUser;



    return (
        <ul className="menu--list">
            {/* <li className="menu--list-item active">
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
            </li> */}

            {
                NavigationLinkList.map((item, index) => (
                    {
                        ...item.visible ? (
                            <li key={index} className="menu--list-item">
                                <NavLink to={item.url}
                                    className={({ isActive }) => isActive ? "active" : ""}>
                                    {item.icon}
                                    {item.title}
                                </NavLink>
                            </li>
                        ) : null
                    }
                ))
            }


            {
                true ? (
                    <li className="menu--list-item">
                        <Link to={"/logout"}><IoMdLogIn />Log Out</Link>
                    </li>
                ) : null
            }

        </ul>
    )
}
export default MenuList
