import React, {useEffect, useRef, useState} from 'react';
import {marked} from 'marked';
import './Chatbot.css';

// import axios from 'axios';
import api from '../../utils/api';
import { auth } from '../Sign-In/firebaseConfig';

// const api = axios.create({
//     baseURL: 'https://sih-internal-ps.yellowbush-cadc3844.centralindia.azurecontainerapps.io',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// api.interceptors.request.use(async (config) => {
//     const token = await auth?.currentUser?.getIdToken();
//     console.log(token);
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;

// }
// );




const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(true);

    const chatBox  = useRef(null);

    const userUid = auth?.currentUser?.uid;
    console.log(userUid);

    useEffect(() => {
        async function fetchUserSummary() {
            try {
                setLoading(true);
                const response = await api.get(`/customers/${"1cf8140a-8e64-43c3-af30-874ccac4984c"}/get-ai-summary/`);
                console.log(response.data);
                setSummary(response.data.answer);
                setMessages((prevMessages) => [
                    {text: response.data.answer, user: false},
                    {text: 'How can I help you today?', user: false},
                ]);

            } catch (error) {
                console.error(error);
            }

            setLoading(false);
        }

        fetchUserSummary();
    }, [userUid]);
  const handleSendMessage = async (e) => {
        e.preventDefault();
        if (input.trim()) {
            setMessages([...messages, {text: input, user: true}]);


            setInput('');

            try {
                setLoading(true);
                const response = await api.post('/customers/${"1cf8140a-8e64-43c3-af30-874ccac4984c"}/get-ai-message/', {
                    question: input,
                    summary: summary,
                });
                console.log(response.data);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {text: response.data.answer, user: false},
                ]);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);

            // Simulate bot response (Replace this with your backend call)
            // setTimeout(() => {
            //     setMessages((prevMessages) => [
            //         ...prevMessages,
            //         {text: `You said: ${input}`, user: false},
            //     ]);
            // }, 1000);
        }
    };

    useEffect(() => {
        chatBox.current.scrollTop = chatBox.current.scrollHeight;
    }, [messages]);

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">

            </div>
            <div className="chatbot-messages" ref={chatBox}>
                {messages.map((msg, index) => (
                    <div key={index} className={msg.user ? 'message user-message' : 'message bot-message'}>
                        <div dangerouslySetInnerHTML={{__html: marked(msg.text)}}/>
                    </div>
                ))}

                {loading && (
                    <div className="message bot-message">
                        <div>Loading...</div>
                    </div>
                )}
            </div>
            <form onSubmit={handleSendMessage} className="chatbot-input-form">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chatbot;