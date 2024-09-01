import React from "react";

import "./CustomerInfo.css";

const CustomerInfo = ({ customer }) => {
 

  return (
    <div className="customer-info">
      <h2>Customer Information</h2>
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
        <strong>All Message:</strong> {customer.al_message}
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
          <strong>Past Medical History:</strong> {customer.past_medical_history}
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
  );
};

export default CustomerInfo;
