import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Container/Main";
import Header from "./components/Header/Header";
import Content from "./components/Container/Content";
import CardList from "./components/Card/CardList";
import Chatbutton from "./components/Chatbot/Chatbutton";
import Invoice from "./components/Invoice/Invoice";
import Customer from "./components/CustomerInfo/Customer";
import Booking from "./components/Booking/Booking";
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
          </Routes>
          <Chatbutton/>

        </Content>

      </Main>
    </div>
    </Router>
  )
}
export default App
