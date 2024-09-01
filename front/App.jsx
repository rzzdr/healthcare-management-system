import React from "react";
import {Link} from "react-router-dom";

import "./App.css"
const App=()=>{
  return(
    <div className="app">
      <div className="sign-in">
        <button>
          <Link to={"/"}>Sign In</Link>
        </button>
      </div>

      <div className="content">
        <div className="text-section">
          <h1>Welcome,</h1>
          <br />
          <h2>Unleash the Power of Z K for Smarter Healthcre Management System!!</h2>
          <br/>
          <h3>Sign In to Continue</h3>
        </div>
        <div className="image"></div>
      </div>
    </div>
  )
}
export default App