import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import "./Auth.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google Sign-In successful!", result);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during Google Sign-In:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Sign In successful!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during Sign In:", error);
      });
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
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
          Log In
        </button>
      </form>
      <p className="redirect">
        Don't have an account?{" "}
        <span onClick={() => navigate("/signup")} className="link">
          Create an account
        </span>
      </p>
      <div className="divider">OR</div>
      <button className="btn btn-google" onClick={handleGoogleSignIn}>
        Sign In with Google
      </button>
    </div>
  );
};

export default SignIn;
