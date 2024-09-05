import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { IoDocument } from "react-icons/io5";
import { IoMdCheckmark, IoMdPeople, IoMdStats } from "react-icons/io";

const Card = () => {
  return (
    <div className="card-container">
      <h1 className="heading">
        ZK 
        <div className="heading_text">Your All-in-One Hub for Healthcare: 
            <br />
            Book, Manage, Heal!</div>
      </h1>

      <div className="card">
        <Link to="/invoice" className="card--link">
          <div className="card--header">
            <div className="card--icon">
              <IoDocument />
            </div>
            <div className="card--body">
              <h2 className="invoice">INVOICE</h2>
              <div className="growth">
                <p>Total Invoices</p>
                <span>1K+</span>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/customer" className="card--link">
          <div className="card--header-1">
            <div className="card--icon">
              <IoMdPeople />
            </div>
            <div className="card--body">
              <h2 className="customer">CUSTOMER</h2>
              <div className="growth">
                <p>Total Customers</p>
                <span>1K+</span>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/booking" className="card--link">
          <div className="card--header-2">
            <div className="card--icon">
              <IoMdCheckmark />
            </div>
            <div className="card--body">
              <h2 className="booking">BOOKING</h2>
              <div className="growth">
                <p>Total Bookings</p>
                <span>1K+</span>
              </div>
            </div>
          </div>
        </Link>

        <div className="card--header-3">
          <div className="card--icon">
            <IoMdStats />
          </div>
          <div className="card--body">
            <h2 className="booking">REPORTS</h2>
            <div className="growth">
              <p>Total Reports</p>
              <span>1K+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
