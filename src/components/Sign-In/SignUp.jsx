import React, {useState} from "react";
import {auth} from "./firebaseConfig";
import {createUserWithEmailAndPassword} from "firebase/auth";
import "./Auth.css";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (result) => {
                console.log("Sign Up successful!");
                console.log(await result.user.getIdToken())
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
