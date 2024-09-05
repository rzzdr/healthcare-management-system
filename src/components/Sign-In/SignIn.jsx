<<<<<<< HEAD
import React, {useState} from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {auth} from "./firebaseConfig";
import {GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup,} from "firebase/auth";
=======
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
>>>>>>> 61a3dfab2ecc42d52d806b8876a50d9dfaf93c67
import "./Auth.css";
import googleLogo from "./google.png";

const BASE_URL =
  "https://sih-internal-ps.yellowbush-cadc3844.centralindia.azurecontainerapps.io";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        console.log("Google Sign-In successful!");
        const response = await fetch(
          `${BASE_URL}/hospital/get-user/${result.user.uid}`
        );
        const userData = await response.json();
        console.log("User data from backend:", userData);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during Google Sign-In:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        console.log("Sign In successful!");
        const response = await fetch(
          `${BASE_URL}/hospital/get-user/${result.user.uid}`
        );
        const userData = await response.json();
        console.log("User data from backend:", userData);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during Sign In:", error);
      });
  };

  return (
    <div className="auth-page">
      <div className="auth-image"></div>
      <div className="auth-content">
        <div className="auth-container">
          <h2>
            Welcome
            <div className="headingtext">Enter your details.</div>
          </h2>
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
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </form>
          <div className="divider">OR</div>
          <div className="google-sign-in">
            <img
              src={googleLogo}
              alt="Sign In with Google"
              className="google-logo"
              onClick={handleGoogleSignIn}
            />
          </div>
          <p className="redirect">
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")} className="link">
              <Link to="/signup">Create an account</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
