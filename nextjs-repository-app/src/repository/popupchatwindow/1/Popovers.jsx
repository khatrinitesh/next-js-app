import React, { useState } from "react";

const PopupChat = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };
  return (
    <>
      <div className="fixed bottom-0 right-0 m-4">
        {!isOpen && (
          <button
            onClick={toggleChat}
            className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg focus:outline-none"
          >
            Open Chat
          </button>
        )}
        {isOpen && (
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Chat Window</h3>
              <button
                onClick={toggleChat}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                Close
              </button>
            </div>
            <div className="h-32 overflow-y-auto">
              {/* Display chat messages */}
              {messages.map((message, index) => (
                <div key={index} className="bg-blue-500 text-white rounded-lg p-2 mb-2">
                  {message}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={message}
                onChange={handleMessageChange}
              />
              <button
                onClick={handleSendMessage}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md focus:outline-none"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PopupChat;
