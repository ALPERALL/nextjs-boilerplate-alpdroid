"use client";

import { useState } from "react";
import { sendMessage } from "./api";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: "user" }]);

    const response = await sendMessage(input);
    setMessages([...messages, { text: input, sender: "user" }, { text: response, sender: "bot" }]);

    setInput("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>AlpDroid Chat</h1>
      <div style={{ border: "1px solid #ccc", padding: "10px", minHeight: "300px" }}>
        {messages.map((msg, index) => (
          <p key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
            <strong>{msg.sender === "user" ? "Sen: " : "AlpDroid: "}</strong> {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Mesajınızı yazın..."
        style={{ width: "100%", padding: "10px", marginTop: "10px" }}
      />
      <button onClick={handleSend} style={{ width: "100%", padding: "10px", marginTop: "5px" }}>
        Gönder
      </button>
    </div>
  );
}
