import React, { useEffect, useState } from "react";
import "./CustomerInfo.css";
import { auth } from "../Sign-In/firebaseConfig.js";

const BASE_URL =
  "https://sih-internal-ps.yellowbush-cadc3844.centralindia.azurecontainerapps.io";

const CustomerInfo = ({ customers }) => {

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const idToken = await auth.currentUser?.getIdToken();
        const response = await fetch(`${BASE_URL}/customers/get-customers/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch customer data");
        }
        const data = await response.json();
        setCustomers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <p>Loading customer data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!customers || customers.length === 0) {
    return <p>No customer data available.</p>;
  }

  return (
    <div className="customer-info">
      <h2>Customer Information</h2>
      {customers.map((customer, index) => (
        <div key={index} className="customer-details">
          <h3>Customer {index + 1}</h3>
          <div className="info-item">
            <strong>Name:</strong> {customer.name}
          </div>
          <div className="info-item">
            <strong>Address:</strong> {customer.address}
          </div>
          <div className="info-item">
            <strong>Phone:</strong> {customer.phone}
          </div>
          <div className="info-item">
            <strong>Email:</strong> {customer.email}
          </div>
          <div className="info-item">
            <strong>City:</strong> {customer.city}
          </div>
          <div className="info-item">
            <strong>AI Message:</strong> {customer.al_message}
          </div>
          <div className="info-item">
            <strong>Created At:</strong>{" "}
            {new Date(customer.created_at).toLocaleString()}
          </div>
          <div className="info-item">
            <strong>Last Updated At:</strong>{" "}
            {new Date(customer.last_updated_at).toLocaleString()}
          </div>
          {customer.past_medical_history && (
            <div className="info-item">
              <strong>Past Medical History:</strong>{" "}
              {customer.past_medical_history}
            </div>
          )}
          {customer.date_of_birth && (
            <div className="info-item">
              <strong>Date of Birth:</strong> {customer.date_of_birth}
            </div>
          )}
          {customer.blood_group && (
            <div className="info-item">
              <strong>Blood Group:</strong> {customer.blood_group}
            </div>
          )}
          {customer.gender && (
            <div className="info-item">
              <strong>Gender:</strong> {customer.gender}
            </div>
          )}
          {customer.old_diseases && (
            <div className="info-item">
              <strong>Old Diseases:</strong> {customer.old_diseases}
            </div>
          )}
          {customer.whatsapp_number && (
            <div className="info-item">
              <strong>WhatsApp Number:</strong> {customer.whatsapp_number}
            </div>
          )}
          {customer.weight && (
            <div className="info-item">
              <strong>Weight:</strong> {customer.weight}
            </div>
          )}
          {customer.height && (
            <div className="info-item">
              <strong>Height:</strong> {customer.height}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomerInfo;
