import {useEffect, useState} from 'react'
import './Booking.css'
import {auth} from "../Sign-In/firebaseConfig.js";

const BASE_URL = 'https://sih-internal-ps.yellowbush-cadc3844.centralindia.azurecontainerapps.io';

function Booking() {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        contact: '',
        gender: '',
        appointment: '',
        booktest: '',
        time: '',
        amount: ''
    });
    const [bookingInfo, setBookingInfo] = useState(null);
    const handlechanges = (e) => {
        if (e.target.type === 'radio') {
            setValues({...values, [e.target.name]: e.target.value});
        } else {
            setValues({...values, [e.target.name]: e.target.value});
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const requestData = {
            customer_map_id: "", // Replace with actual customer ID
            time_slot: values.time,
            date: new Date().toISOString(), // Current date and time
            remarks: "", // Add remarks if needed
            status: "Pending", // Set default status
            name: `${values.firstname} ${values.lastname}`,
            amount: parseFloat(values.amount),
            payment_mode: "Cash" // Replace with actual payment mode if needed
        };

        try {
            const idToken = await auth.currentUser?.getIdToken();
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
            const response = await fetch(`${BASE_URL}/customers/get-customers/`, {
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
        <div className='conatiner'>
            <h1>BOOK TEST/APPOINTMENT</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstname'>First Name*</label>
                <input type='text' placeholder='Enter First Name' name='firstname'
                       onChange={(e) => handlechanges(e)} required/>

                <label htmlFor='lastname'>Last Name*</label>
                <input type='text' placeholder='Enter Last Name' name='lastname'
                       onChange={(e) => handlechanges(e)}/>

                <label htmlFor='contact'>Contact Number</label>
                <input type='text' placeholder='Enter Contact Number' name='contact'
                       onChange={(e) => handlechanges(e)} required/>

                <label htmlFor='gender'>Gender</label>
                <input type='radio' name='gender' onChange={(e) => handlechanges(e)}/> Male
                <input type='radio' name='gender' onChange={(e) => handlechanges(e)}/> Female
                <input type='radio' name='gender' onChange={(e) => handlechanges(e)}/> Other

                <label htmlFor='appointment'>Appointment</label>
                <input type='text' placeholder='Enter Appointment' name='appointment'
                       onChange={(e) => handlechanges(e)}/>

                <label htmlFor='booktest'>Test Name</label>
                <input type='text' placeholder='Enter the Test Name' name='booktest'
                       onChange={(e) => handlechanges(e)}/>

                <label htmlFor='time'>Select Time</label>
                <input type='time' placeholder='Enter your preferred time' name='time'
                       onChange={(e) => handlechanges(e)}/>

                <label htmlFor='amount'>Amount Paid(INR)</label>
                <input type='text' placeholder='Enter Amount Paid' name='amount' onChange={(e) => handlechanges(e)}
                       required/>

                <button type='button'>Submit</button>
            </form>
            {bookingInfo && (
                <div className='booking-info'>
                    <h2>Booking Information</h2>
                    <p><strong>Name:</strong> {bookingInfo.name}</p>
                    <p><strong>Date:</strong> {new Date(bookingInfo.date).toLocaleString()}</p>
                    <p><strong>Time Slot:</strong> {bookingInfo.time_slot}</p>
                    <p><strong>Status:</strong> {bookingInfo.status}</p>
                    <p><strong>Amount Paid:</strong> ₹{bookingInfo.amount}</p>
                    <p><strong>Payment Mode:</strong> {bookingInfo.payment_mode}</p>
                    {/* Add more fields as needed */}
                </div>
            )}
        </div>
    )
}

export default Booking
