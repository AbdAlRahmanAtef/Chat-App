import React from "react";
import { useState } from "react";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db, auth } from "../firebase";

function SendMessage( {scroll}) {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === '') {
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form className="form" onSubmit={sendMessage}>
      <div className="container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
          type="text"
          placeholder="Message"
        />
        <button type="submit">Send</button>
      </div>
    </form>
  );
}

export default SendMessage;
