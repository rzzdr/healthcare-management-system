import React, { useState, useEffect } from "react";
import CustomerOnboardingForm from "./CustomerOnboardingForm";
import CustomerInfo from "./CustomerInfo";
import "./Customer.css";

const CustomerOptions = () => {
  const [activeSection, setActiveSection] = useState("form");
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {

    const fetchCustomerData = async () => {
      try {
        const response = await fetch("/customers/12345");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCustomer(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomerData();
  }, []);

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
        {activeSection === "info" && <CustomerInfo customer={customer} />}
      </div>
    </div>
  );
};

export default CustomerOptions;
