import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Container/Main";
import Header from "./components/Header/Header";
import Content from "./components/Container/Content";
import CardList from "./components/Card/CardList";
import Chatbot from "./components/Chatbot/Chatbot"
import Booking from "./components/Booking/Booking"
import Invoice from "./components/Invoice/Invoice";
import Customer from "./components/CustomerInfo/Customer";
import HospitalOnboardingForm from "./components/Hospital/HospitalOnboardingForm";
import Logout from "./components/Logout/Logout";
import SignIn from "./components/Sign-In/SignIn"
import SignUp from "./components/Sign-In/SignUp"
import { Link } from "react-router-dom";
import { useMatch } from 'react-router-dom';
import { auth } from "./components/Sign-In/firebaseConfig";
import ProtectedRoute from "./utils/ProtectedRoute";
import { Navigate } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <ChatBotButton />
                <Main>
                    <Header />
                    <Content>
                        <Routes>
                            <Route path="/" element={
                                
                                <ProtectedRoute>
                                    <CardList />
                                </ProtectedRoute>
                            } />
                            <Route path="/invoice" element={
                                
                                <ProtectedRoute>
                                    <Invoice />
                                </ProtectedRoute>
                                } />
                            <Route path="/customer" element={
                                    
                                    <ProtectedRoute>
                                        <Customer />
                                    </ProtectedRoute>
                            } />
                            <Route path="/booking" element={
                                    
                                    <ProtectedRoute>
                                        <Booking />
                                    </ProtectedRoute>
                                } />
                            <Route path="/hospitalonboardingform" element={
                                        
                                        <ProtectedRoute>
                                            <HospitalOnboardingForm />
                                        </ProtectedRoute>
                            } />
                            <Route path="/signin" element={<SignIn />} />
                            <Route path="/chatbot" element={
                                    
                                    <ProtectedRoute>
                                        <Chatbot />
                                    </ProtectedRoute>
                                } />
                            <Route path="/signup" element={<SignUp />} />

                        </Routes>


                    </Content>

                </Main>
                <Routes><Route path="/logout" element={<Logout />} /></Routes>
            </div>
        </Router>
    )
}


function ChatBotButton() {

    const match = useMatch("/chatbot");

    const isLoggedIn = auth?.currentUser;

    console.log(isLoggedIn);

    if (match || !isLoggedIn) {
        return null;
    }

    return (
        <Link to="/chatbot" className="chatbot-button" title="Start Chatbot">
            <svg width="50" height="50" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19.5" cy="19.5" r="19.5" fill="#F3C5C5" />
                <path d="M16.9357 13.6926C17.4658 12.1415 19.609 12.0945 20.2374 13.5517L20.2906 13.6935L21.0059 15.7853C21.1698 16.265 21.4347 16.704 21.7827 17.0727C22.1308 17.4413 22.5538 17.7311 23.0233 17.9223L23.2156 17.9941L25.3074 18.7085C26.8586 19.2386 26.9056 21.3818 25.4493 22.0102L25.3074 22.0634L23.2156 22.7787C22.7357 22.9425 22.2966 23.2074 21.9277 23.5554C21.5589 23.9034 21.2691 24.3265 21.0777 24.7961L21.0059 24.9875L20.2915 27.0802C19.7615 28.6314 17.6182 28.6783 16.9907 27.2221L16.9357 27.0802L16.2213 24.9884C16.0575 24.5085 15.7927 24.0694 15.4446 23.7005C15.0966 23.3317 14.6735 23.0419 14.204 22.8505L14.0125 22.7787L11.9207 22.0643C10.3687 21.5343 10.3217 19.391 11.7789 18.7635L11.9207 18.7085L14.0125 17.9941C14.4922 17.8302 14.9312 17.5653 15.2999 17.2173C15.6685 16.8693 15.9583 16.4463 16.1495 15.9768L16.2213 15.7853L16.9357 13.6926ZM18.6136 14.2652L17.8992 16.357C17.6496 17.0885 17.2435 17.7568 16.7093 18.3154C16.1751 18.874 15.5255 19.3094 14.8058 19.5913L14.5842 19.672L12.4924 20.3864L14.5842 21.1008C15.3157 21.3504 15.984 21.7565 16.5426 22.2907C17.1012 22.825 17.5366 23.4746 17.8185 24.1942L17.8992 24.4158L18.6136 26.5076L19.328 24.4158C19.5776 23.6843 19.9837 23.016 20.5179 22.4574C21.0522 21.8988 21.7018 21.4634 22.4214 21.1815L22.643 21.1017L24.7348 20.3864L22.643 19.672C21.9115 19.4224 21.2432 19.0163 20.6846 18.4821C20.126 17.9479 19.6906 17.2983 19.4087 16.5786L19.3289 16.357L18.6136 14.2652ZM25.7045 10.6364C25.8703 10.6364 26.0328 10.6829 26.1735 10.7707C26.3143 10.8584 26.4275 10.9839 26.5005 11.1328L26.543 11.2365L26.8533 12.1459L27.7635 12.4561C27.9297 12.5126 28.0754 12.6171 28.1821 12.7564C28.2888 12.8958 28.3518 13.0636 28.363 13.2388C28.3742 13.4139 28.3331 13.5885 28.245 13.7403C28.1569 13.8921 28.0258 14.0143 27.8681 14.0915L27.7635 14.134L26.8541 14.4442L26.5439 15.3545C26.4874 15.5207 26.3828 15.6663 26.2434 15.7729C26.104 15.8795 25.9361 15.9424 25.7609 15.9535C25.5858 15.9646 25.4113 15.9234 25.2596 15.8353C25.1078 15.7471 24.9857 15.6159 24.9086 15.4582L24.866 15.3545L24.5558 14.4451L23.6455 14.1349C23.4793 14.0784 23.3337 13.9739 23.2269 13.8346C23.1202 13.6952 23.0573 13.5274 23.0461 13.3522C23.0349 13.1771 23.0759 13.0025 23.164 12.8507C23.2521 12.6989 23.3833 12.5767 23.5409 12.4996L23.6455 12.457L24.5549 12.1468L24.8651 11.2365C24.9249 11.0614 25.038 10.9093 25.1885 10.8017C25.339 10.6941 25.5195 10.6363 25.7045 10.6364Z" fill="black" />
            </svg>
        </Link>
    )
}



export default App
