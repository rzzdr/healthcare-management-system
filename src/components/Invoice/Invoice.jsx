import React, { useEffect, useState } from "react";

import { auth } from "../Sign-In/firebaseConfig.js";
import AutoCompeteId from "../includes/AutoCompeteId.jsx";
import "./Invoice.css";

const BASE_URL =
  "https://sih-internal-ps.yellowbush-cadc3844.centralindia.azurecontainerapps.io";
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


  useEffect(() => {
    console.log(customerId);
  }, [customerId]);


 

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
    setItems([{ itemName: "", itemPrice: 0, quantity: 1 }]);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    if (field === "itemPrice") {
      newItems[index][field] = parseFloat(value);
    } else if (field === "quantity") {
      newItems[index][field] = parseInt(value, 10);
    } else {
      newItems[index][field] = value;
    }
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { itemName: "", itemPrice: 0, quantity: 1 }]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validatedItems = items.map((item) => ({
      ...item,
      itemPrice: isNaN(item.itemPrice) ? 0 : item.itemPrice,
      quantity: isNaN(item.quantity) ? 0 : item.quantity,
    }));

    const invoiceRequest = {
      customer_map_id: customerId,
      items: items,
      payment_mode: paymentMode,
      status: status,
      remarks: remarks,
    };
    try {
      console.log(JSON.stringify(invoiceRequest));
      const idToken = await auth.currentUser?.getIdToken();
      const response = await fetch(BASE_URL + "/customers/create-invoice/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(invoiceRequest),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
      alert("Invoice added successfully!");

      resetForm();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add invoice. Please try again.");
    }
  };
  const fetchInvoices = async () => {
    try {
      const idToken = await auth.currentUser?.getIdToken();
      console.log("ID Token:", idToken);
      const response = await fetch(
        `${BASE_URL}/hospital/get-invoices/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${idToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setInvoices(data);
      console.log("Fetched Invoices:", data);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to fetch invoices. Please try again.");
    }
  };
  useEffect(() => {
    if (action === "view") {
      fetchInvoices();
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
        </div>
      )}

      {action === "add" && (
        <div className="action-form">
          <form onSubmit={handleSubmit}>
            {/* <div className="form-group"> */}
              {/* <label>Customer ID</label> */}
              {/* <input
                type="text"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
                placeholder="Enter customer ID"
                required
                list="users"
              /> */}

<div className="auto-compete-group">
                <AutoCompeteId setSelectedId={setCustomerId} label="Customer ID" placeholder="Search for Customer ID" />
              </div>
              {/* <datalist id="users">
                {filteredUserList.map((user) => (
                  <option key={user.customer_mapping_id} value={user.customer_mapping_id} />
                ))}
              </datalist>  */}
            {/* </div> */}

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
              <label>Discharge Summary</label>
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Enter Discharge Summary"
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
          {invoices.length > 0 ? (
            <ul>
              {invoices.map((invoice) => (
                <li key={invoice.id}>
                  <p>Customer Name: {invoice.customer_name}</p>
                  <p>Total Amount: {invoice.total_amount}</p>
                  <p>Status: {invoice.status}</p>
                  <p>Payment Mode: {invoice.payment_mode}</p>
                  {/* Display other details as needed */}
                </li>
              ))}
            </ul>
          ) : (
            <p>No invoices available</p>
          )}
          {/* Display invoice listing logic goes here */}
          <button className="back-btn" onClick={handleBack}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Invoice;
