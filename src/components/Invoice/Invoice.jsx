import React, { useState, useEffect } from 'react';

import "./Invoice.css"; 
const BASE_URL = 'https://sih-internal-ps.yellowbush-cadc3844.centralindia.azurecontainerapps.io';
const Invoice = () => {
  const [action, setAction] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [status, setStatus] = useState("");
  const [remarks, setRemarks] = useState("");
  const [items, setItems] = useState([
    { itemName: "", itemPrice: "", quantity: "" },
  ]);
  const [invoices, setInvoices] = useState([]);

  const handleActionChange = (selectedAction) => {
    setAction(selectedAction);
    resetForm();
  };

  const handleBack = () => {
    setAction("");
    resetForm();
  };

  const resetForm = () => {
    setCustomerId("");
    setPaymentMode("");
    setStatus("");
    setRemarks("");
    setItems([{ itemName: "", itemPrice: "", quantity: "" }]);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { itemName: "", itemPrice: "", quantity: "" }]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const invoiceRequest = {
      customer_id: customerId,
      items: items,
      payment_mode: paymentMode,
      status: status,
      remarks: remarks,
    };
    try {
      console.log(localStorage.getItem("token"))
      const response = await fetch(BASE_URL+'/customers/create-invoice/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(invoiceRequest),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
      alert('Invoice added successfully!');

      resetForm();
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add invoice. Please try again.');
    }
  };
  const fetchInvoices = async () => {
    try {
      const response = await fetch('/customers/{invoice_id}/get-invoice/'); // Adjust the endpoint as needed
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setInvoices(data); // Assuming data is an array of invoices
    } catch (error) {
      console.error('Error fetching invoices:', error);
    }
  };

  useEffect(() => {
    if (action === "view") {
      fetchInvoices(); // Fetch invoices when viewing invoices
    }
  }, [action]);


  return (
    <div className="invoice-container">
      <h2>Invoice Management</h2>
      {action === "" && (
        <div className="options">
          <button
            className="option-box"
            onClick={() => handleActionChange("add")}
          >
            Add Invoice
          </button>
          <button
            className="option-box"
            onClick={() => handleActionChange("view")}
          >
            View Invoices
          </button>
          <button
            className="option-box"
            onClick={() => handleActionChange("delete")}
          >
            Delete Invoice
          </button>
        </div>
      )}

      {action === "add" && (
        <div className="action-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Customer ID</label>
              <input
                type="text"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
                placeholder="Enter customer ID"
                required
              />
            </div>
            {items.map((item, index) => (
              <div key={index} className="form-group">
                <label>Item Name</label>
                <input
                  type="text"
                  value={item.itemName}
                  onChange={(e) =>
                    handleItemChange(index, "itemName", e.target.value)
                  }
                  placeholder="Enter item name"
                  required
                />
                <label>Item Price</label>
                <input
                  type="number"
                  value={item.itemPrice}
                  onChange={(e) =>
                    handleItemChange(index, "itemPrice", e.target.value)
                  }
                  placeholder="Enter item price"
                  required
                />
                <label>Quantity</label>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleItemChange(index, "quantity", e.target.value)
                  }
                  placeholder="Enter quantity"
                  required
                />
                <button onClick={() => removeItem(index)}>Remove Item</button>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={addItem}
            >
              Add Another Item
            </button>
            <div className="form-group">
              <label>Payment Mode</label>
              <input
                type="text"
                value={paymentMode}
                onChange={(e) => setPaymentMode(e.target.value)}
                placeholder="Enter payment mode"
                required
              />
            </div>
            <div className="form-group">
              <label>Status</label>
              <input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Enter status"
                required
              />
            </div>
            <div className="form-group">
              <label>Remarks</label>
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Enter any remarks"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Invoice
            </button>
          </form>
          <button className="back-btn" onClick={handleBack}>
            Back
          </button>
        </div>
      )}

      {action === "view" && (
        <div className="view-invoices">
          <h3>View Invoices</h3>
          <p>Here you can view all your invoices.</p>
          {/* Display invoice listing logic goes here */}
          <button className="back-btn" onClick={handleBack}>
            Back
          </button>
        </div>
      )}

      {action === "delete" && (
        <div className="delete-invoice">
          <h3>Delete Invoice</h3>
          <form>
            <div className="form-group">
              <label>Invoice Number</label>
              <input
                type="text"
                placeholder="Enter invoice number to delete"
                required
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Delete Invoice
            </button>
          </form>
          <button className="back-btn" onClick={handleBack}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Invoice;

