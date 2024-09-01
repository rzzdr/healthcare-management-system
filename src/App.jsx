import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Container/Main";
import Header from "./components/Header/Header";
import Content from "./components/Container/Content";
import CardList from "./components/Card/CardList";
import Chatbutton from "./components/Chatbot/Chatbutton";
import Booking from "./components/Booking/Booking"
import Invoice from "./components/Invoice/Invoice";
import Customer from "./components/CustomerInfo/Customer";
import HospitalOnboardingForm from "./components/Hospital/HospitalOnboardingForm";
import Logout from "./components/Logout/Logout";
import SignIn from"./components/Sign-In/SignIn"


const App=()=>{
  return(
    <Router>
    <div className="app">
      <Sidebar/>
      <Main>
        <Header/>
        <Content>
          <Routes>
            <Route path="/" element={<CardList />} />
            <Route path="/invoice" element={<Invoice />} />
            {""}
            <Route path="/customer" element={<Customer />} />
            <Route path="/booking" element={<Booking/>}/>
            <Route path="/hospitalonboardingform" element={<HospitalOnboardingForm/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            
          </Routes>
          <Chatbutton/>

        </Content>
        
      </Main>
      <Routes><Route path="/logout" element={<Logout/>}/></Routes>
    </div>
    </Router>
  )
}
export default App
