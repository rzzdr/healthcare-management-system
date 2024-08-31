import React, { useState } from 'react';
import Chatbot from './Chatbot'; // Import your Chatbot component
import './Chatbutton.css'; // Maintain your existing styles

function Chatbutton() {
  const [isChatbotVisible, setChatbotVisible] = useState(false); // State to manage chatbot visibility

  const toggleChatbot = () => {
    setChatbotVisible(!isChatbotVisible); // Toggle the chatbot visibility
  };

  return (
    <div className="App">
      <button onClick={toggleChatbot} className="chatbot-button">
        {isChatbotVisible ? 'Hide AI Assistant' : 'AI Assistant'} 
      </button>
      {isChatbotVisible && <Chatbot />} {/* Render the Chatbot if visible */}
    </div>
  );
}

export default Chatbutton;