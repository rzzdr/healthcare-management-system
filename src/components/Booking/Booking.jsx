import {useEffect, useState} from 'react'
import './Booking.css'
import {auth} from "../Sign-In/firebaseConfig.js";
import AutoCompeteId from '../includes/AutoCompeteId.jsx';

const BASE_URL = 'https://sih-internal-ps.yellowbush-cadc3844.centralindia.azurecontainerapps.io';

function Booking() {
    const [values, setValues] = useState({
      customer_map_id: "",
      date: "",
      time: "",
      remarks: "",
      booktest: "",
      amount: "",
      payment_mode: "",
    });
    const [bookingInfo, setBookingInfo] = useState(null);
    const handleChanges = (e) => {
        if (e.target.type === 'radio') {
            setValues({...values, [e.target.name]: e.target.value});
        } else {
            setValues({...values, [e.target.name]: e.target.value});
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const requestData = {
          customer_map_id: values.customer_map_id, // Replace with actual customer ID
            time_slot: values.time,
          date: new Date().toISOString(), // Current date and time
          remarks: values.remarks,
          name: values.booktest,
          amount: parseFloat(values.amount),
          payment_mode: values.payment_mode,
            status: "hello"// Replace with actual payment mode if needed
        };

        try {
            const idToken = await auth.currentUser?.getIdToken();
            console.log(requestData)
            const response = await fetch(BASE_URL + '/customers/create-appointment/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${idToken}`
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Booking successful:', result);
            // Handle success (e.g., show a success message or redirect)
        } catch (error) {
            console.error('Error during booking:', error);
            // Handle error (e.g., show an error message)
        }
    }
    const fetchBookingInfo = async () => {
        try {
            const idToken = await auth.currentUser?.getIdToken();
            const response = await fetch(`${BASE_URL}/hospital/get-appointments/`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${idToken}`
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setBookingInfo(data); // Store fetched data in state
        } catch (error) {
            console.error('Error fetching booking info:', error);
            // Handle error (e.g., show an error message)
        }
    };
    useEffect(() => {
        fetchBookingInfo();
    }, []);

    return (
      <div className="conatiner">
        <h1>BOOK TEST/APPOINTMENT</h1>
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="customer_map_id">Customer ID*</label>
          <input
            type="text"
            placeholder="Enter Customer ID"
            name="customer_map_id"
            onChange={(e) => handleChanges(e)}
            required
          /> */}

          <AutoCompeteId setSelectedId={(id) => setValues({...values, customer_map_id: id})} label="Customer ID" placeholder="Search for Customer ID" />

          <label htmlFor="date">Date*</label>
          <input
            type="date"
            name="date"
            onChange={(e) => handleChanges(e)}
            required
          />

          <label htmlFor="time">Time*</label>
          <input
            type="time"
            name="time"
            onChange={(e) => handleChanges(e)}
            required
          />

          <label htmlFor="remarks">Remarks</label>
          <input
            type="text"
            placeholder="Enter Remarks"
            name="remarks"
            onChange={(e) => handleChanges(e)}
          />

          <label htmlFor="booktest">Test Name</label>
          <input
            type="text"
            placeholder="Enter Test Name"
            name="booktest"
            onChange={(e) => handleChanges(e)}
          />

          <label htmlFor="amount">Amount Paid (INR)*</label>
          <input
            type="text"
            placeholder="Enter Amount Paid"
            name="amount"
            onChange={(e) => handleChanges(e)}
            required
          />

          <label htmlFor="payment_mode">Payment Mode</label>
          <select name="payment_mode" onChange={(e) => handleChanges(e)}>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
            <option value="Online">Online</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default Booking
