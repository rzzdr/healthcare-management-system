import { useState } from 'react'
import './Booking.css'

function Booking() {
  const [values, setValues]=useState({
    firstname: '',
    lastname: '',
    contact: '',
    gender: '',
    appointment: '',
    booktest: '',
    time: '',
    amount: ''
  });

  const handlechanges= (e)=>{
    setValues({...values, [e.target.name]:[e.target.value]})

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(values);
  }

  return (
    <div className='conatiner'>
      <h1>BOOK TEST/APPOINTMENT</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstname'>First Name*</label>
        <input type='text' placeholder='Enter First Name' name='firstname'
        onChange={(e)=>handlechanges(e)} req="true"/>

        <label htmlFor='lastname'>Last Name*</label>
        <input type='text' placeholder='Enter Last Name' name='lastname'
        onChange={(e)=>handlechanges(e)}/>

        <label htmlFor='contact'>Contact Number</label>
        <input type='text' placeholder='Enter Contact Number' name='contact'
        onChange={(e)=>handlechanges(e)} req="true"/>

        <label htmlFor='gender'>Gender</label>
        <input type='radio' name='gender' onChange={(e)=>handlechanges(e)}/> Male
        <input type='radio' name='gender' onChange={(e)=>handlechanges(e)}/> Female
        <input type='radio' name='gender' onChange={(e)=>handlechanges(e)}/> Other

        <label htmlFor='appointment'>Appointment</label>
        <input type='text' placeholder='Enter Appointment' name='appointment' onChange={(e)=>handlechanges(e)}/>

        <label htmlFor='booktest'>Test Name</label>
        <input type='text' placeholder='Enter the Test Name' name='booktest' onChange={(e)=>handlechanges(e)}/>

        <label htmlFor='time'>Select Time</label>
        <input type='time' placeholder='Enter your preferred time' name='time' onChange={(e)=>handlechanges(e)}/>

        <label htmlFor='amount'>Amount Paid(INR)</label>
        <input type='text' placeholder='Enter Amount Paid' name='amount' onChange={(e)=>handlechanges(e)} req="true"/>

        <button type='button'>Submit</button>
      </form>
    </div>
  )
}

export default Booking
