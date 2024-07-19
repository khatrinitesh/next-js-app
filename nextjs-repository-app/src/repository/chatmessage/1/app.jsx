import React from "react";

const CustomApp = () => {
  return (
    <>
     <ChatMsg msg="hi there" isSentByCurrentUser={true}/>
     <ChatMsg msg="Hello! How can I help you?" isSentByCurrentUser={false}/>
    </>
  )
};

export default CustomApp;

const ChatMsg = ({ msg, isSentByCurrentUser }) => {
  return (
    <>
      <div
        className={
          isSentByCurrentUser ? "flex justify-end" : "flex justify-start"
        }
      >
        <div
          className={
            isSentByCurrentUser
              ? "bg-blue-500 text-white rounded-lg p-2 max-w-xs"
              : "bg-gray-200 text-gray-700 rounded-lg p-2 max-w-xs"
          }
        >
          <p>{msg}</p>
        </div>
      </div>
    </>
  );
};
