import React from "react";
import "./HospitalInfo.css";

const HospitalInfo = ({hospital}) => {
    return (
        <div className="hospital-info">
            <h2>Hospital Information</h2>
            <div className="info-item">
                <strong>Name:</strong> {hospital.name}
            </div>
            <div className="info-item">
                <strong>Address:</strong> {hospital.address}
            </div>
            <div className="info-item">
                <strong>Phone:</strong> {hospital.phone}
            </div>
            <div className="info-item">
                <strong>Email:</strong> {hospital.email}
            </div>
            <div className="info-item">
                <strong>City:</strong> {hospital.city}
            </div>
            {hospital.website && (
                <div className="info-item">
                    <strong>Website:</strong>{" "}
                    <a href={hospital.website} target="_blank" rel="noopener noreferrer">
                        {hospital.website}
                    </a>
                </div>
            )}
            {hospital.logo && (
                <div className="info-item">
                    <strong>Logo:</strong>{" "}
                    <img
                        src={hospital.logo}
                        alt={`${hospital.name} Logo`}
                        className="hospital-logo"
                    />
                </div>
            )}
            {hospital.description && (
                <div className="info-item">
                    <strong>Description:</strong> {hospital.description}
                </div>
            )}
        </div>
    );
};

export default HospitalInfo;
