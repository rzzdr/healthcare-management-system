import React, { useState, useEffect } from "react";
import CustomerOnboardingForm from "./CustomerOnboardingForm";
import CustomerInfo from "./CustomerInfo";
import "./Customer.css";

const CustomerOptions = () => {
  const [activeSection, setActiveSection] = useState("form");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="customer-options-container">
      <div className="button-container">
        <button
          className={`toggle-button ${
            activeSection === "form" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("form")}
        >
          Customer Onboarding Form
        </button>
        <button
          className={`toggle-button ${
            activeSection === "info" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("info")}
        >
          Customer Info
        </button>
      </div>
      <div className="content-container">
        {activeSection === "form" && <CustomerOnboardingForm />}
        {activeSection === "info" && <CustomerInfo />}
      </div>
    </div>
  );
};

export default CustomerOptions;
