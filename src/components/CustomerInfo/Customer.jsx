import React, {useState} from "react";
import CustomerOnboardingForm from "./CustomerOnboardingForm";
import CustomerInfo from "./CustomerInfo";
import "./Customer.css";

const CustomerOptions = () => {
    const [activeSection, setActiveSection] = useState("form");

    const handleButtonClick = (section) => {
        setActiveSection(section);
    };

    const customer = {
        name: "John Doe",
        address: "123 Main St",
        phone: "555-555-5555",
        email: "john.doe@example.com",
        city: "Anytown",
        past_medical_history: "None",
        date_of_birth: "1980-01-01",
        blood_group: "O+",
        gender: "Male",
        old_diseases: "None",
        whatsapp_number: "555-555-5555",
        weight: "70 kg",
        height: "175 cm",
        allergies: "None",
        created_at: "2024-08-31T12:00:00Z",
        last_updated_at: "2024-08-31T12:00:00Z",
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
                {activeSection === "form" && <CustomerOnboardingForm/>}
                {activeSection === "info" && <CustomerInfo customer={customer}/>}
            </div>
        </div>
    );
};

export default CustomerOptions;

