import React, { useState } from 'react';
import { marked } from 'marked';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      setInput('');

      // Simulate bot response (Replace this with your backend call)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: `You said: ${input}`, user: false },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.user ? 'message user-message' : 'message bot-message'}>
            <div dangerouslySetInnerHTML={{ __html: marked(msg.text) }} />
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="chatbot-input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Customer ID"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;