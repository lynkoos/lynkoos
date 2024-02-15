import React, { useState } from 'react';
import './style.css';
import { FaPaperclip, FaCamera, FaMapMarkerAlt, FaFile, FaImage, FaVideo, FaPhone, FaUserFriends } from 'react-icons/fa';

function SendMessage() {
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Mensaje enviado:', message);
        setMessage('');
    };

    return (
        <div className="conversation-container">
            <div className="users-container">
                <div className="user">Usuario 1</div>
                <div className="user">Usuario 2</div>
                <div className="user">Usuario 3</div>
                <div className="user">Usuario 4</div>
                <div className="user">Usuario 5</div>
                <div className="user">Usuario 6</div>
                <div className="user">Usuario 7</div>
                <div className="user">Usuario 8</div>
                <div className="user">Usuario 9</div>
                <div className="user">Usuario 10</div>
            </div>
            <div className="chat-container">
                <div className="chat">
                    <div className="message">Mensaje del usuario 1</div>
                    <div className="message">Mensaje del usuario 2</div>
                    <div className="message">Mensaje del usuario 1</div>
                    <div className="message">Mensaje del usuario 3</div>
                    <div className="message">Mensaje del usuario 4</div>
                    <div className="message">Mensaje del usuario 5</div>
                    <div className="message">Mensaje del usuario 6</div>
                    <div className="message">Mensaje del usuario 7</div>
                    <div className="message">Mensaje del usuario 8</div>
                    <div className="message">Mensaje del usuario 9</div>
                    <div className="message">Mensaje del usuario 10</div>
                </div>
                <div className="icons-container">
                    <FaPaperclip />
                    <FaCamera />
                    <FaMapMarkerAlt />
                    <FaFile />
                    <FaImage />
                    <FaVideo />
                    <FaPhone />
                    <FaUserFriends />
                </div>
            </div>
        </div>
    );
}

export default SendMessage;
