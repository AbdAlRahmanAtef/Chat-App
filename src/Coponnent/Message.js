import React from "react";
import { auth } from "./../firebase";

function Message({ message }) {
  const messageClass =
    message.uid === auth.currentUser.uid ? "message send" : " message recived";
  return (
    <div className="messages">
      <div className="container">
        <div className={`${messageClass}`}>
          <p className="name">{message.name}</p>
          <p className="message-content">{message.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
