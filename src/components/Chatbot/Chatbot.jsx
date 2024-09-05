import React, { useEffect, useRef, useState } from 'react';
import { marked, use } from 'marked';
import './Chatbot.css';
import AutoCompeteId from '../includes/AutoCompeteId';

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
    const [messages, setMessages] = useState([{
        text: 'Hello! Please enter your Customer ID to get started.',
        user: false,
    }]);
    const [input, setInput] = useState('');
    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const [idInput, setIdInput] = useState('');
    const [userid, setUserid] = useState('');
    const [error, setError] = useState('');

    const chatBox = useRef(null);

    // const userUid = auth?.currentUser?.uid;
    // console.log(userUid);


    const handelStartMessage = (e) => {
        e.preventDefault();
        console.log(idInput.length);
        if (idInput.trim() && idInput.length === 36) {
            setMessages([...messages, { text: idInput, user: true }]);
            setDisabled(true);
            setUserid(idInput);
        }
    }


    useEffect(() => {
        async function fetchUserSummary() {
            try {
                setLoading(true);
                const response = await api.get(`/customers/${userid}/get-ai-summary/`);
                console.log(response.data);
                setSummary(response.data.answer);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: response.data.answer, user: false },
                    { text: 'How can I help you today?', user: false },
                ]);

            } catch (error) {
                console.error(error);
            }

            setLoading(false);
        }

        fetchUserSummary();
    }, [userid]);
    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (input.trim()) {
            
            setMessages([...messages, { text: input.replace(/\n/g, '<br>'), user: true }]);


            setInput('');

            try {
                setLoading(true);
                const response = await api.post(`/customers/${userid}/get-ai-message/`, {
                    question: input,
                    summary: summary,
                });
                console.log(response.data);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: response.data.answer, user: false },
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
                        <div dangerouslySetInnerHTML={{ __html: marked(msg.text) }} />
                    </div>
                ))}

                {loading && (
                    <div className="message bot-message">
                        <div>Loading...</div>
                    </div>
                )}
            </div>


            {
                disabled ? (
                    <form onSubmit={handleSendMessage} className="chatbot-input-form">
                        {/* <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message..."
                    /> */}
                        <textarea
                            value={input}
                            className='chatbot-textarea'
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                        />
                        <button type="submit">Send</button>
                    </form>
                ) : (
                    <form onSubmit={handelStartMessage} className="chatbot-input-form">
                        <AutoCompeteId setSelectedId={setIdInput} label="" placeholder="Search for Customer ID" />
                        <button type="submit">Start</button>
                    </form>
                )
            }

        </div>
    );
};

export default Chatbot;