import React, { useEffect } from "react";
import "./Logout.css"
import { auth } from "../Sign-In/firebaseConfig";

const Logout = () => {

    const handelLogout = () => {
        auth.signOut().then(() => {
            console.log("Logged Out");
        }
        ).catch((error) => {
            console.log(error.message);
        }
        )

    }

    useEffect(() => {
        handelLogout();
    }, [])

    return (
        <div className="logout" onClick={handelLogout}>
            <h1 className="h1">You Are Logged Out!!</h1>
        </div>
    )
}
export default Logout