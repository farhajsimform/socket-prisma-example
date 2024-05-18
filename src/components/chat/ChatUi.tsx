

import React from 'react';


const ChatUI = () => {
    return (
        <div className="chat-container">
            <div className="chat-message">
                <div className="avatar left">
                    <img src="https://i.pravatar.cc/150?img=32" alt="User 1" />
                </div>
                <div className="message left">
                    <div className="message-content">Hello <span role="img" aria-label="wave">👋</span></div>
                </div>
            </div>
            <div className="chat-message">
                <div className="avatar right">
                    <img src="https://i.pravatar.cc/150?img=32" alt="User 2" />
                </div>
                <div className="message right">
                    <div className="message-content">Hey!</div>
                </div>
            </div>

            <div className="chat-message">
                <div className="avatar left">
                    <img src="https://i.pravatar.cc/150?img=32" alt="User 1" />
                </div>
                <div className="message left">
                    <div className="message-content">Great! It's been a while... <span role="img" aria-label="smile">😯</span></div>
                </div>
            </div>
            <div className="chat-message">
                <div className="avatar right">
                    <img src="https://i.pravatar.cc/150?img=32" alt="User 2" />
                </div>
                <div className="message right">
                    <div className="message-content">Indeed.... We're gonna have to fix that. <span role="img" aria-label="taco">🌮</span><span role="img" aria-label="beer">🍻</span></div>
                </div>
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Text message" />
                <button type="submit">➤</button>
            </div>
        </div>
    );
};

export default ChatUI;
