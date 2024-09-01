import React, {useState} from "react";
import {auth} from "./firebaseConfig";
import {createUserWithEmailAndPassword} from "firebase/auth";
import "./Auth.css";

const BASE_URL = 'https://sih-internal-ps.yellowbush-cadc3844.centralindia.azurecontainerapps.io';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (result) => {
                console.log("Sign Up successful!");
                const data = {
                    email: email,
                    uid: result.user.uid,
                    name: "John Doe",
                }
                await fetch(BASE_URL + '/hospital/create-user/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
            })
            .catch((error) => {
                console.error("Error during Sign Up:", error);
            });
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default SignUp;
