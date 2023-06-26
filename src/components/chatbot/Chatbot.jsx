import { useState } from "react";

function Chatbot() {
  const [text, setText] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!text) return;

    setChat([...chat, { text, user: "User" }]);
    const currentMessages = []
    setText("");

    try {
      const response = await fetch("http://localhost:3001/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Error connecting to the server.");
      }

      const data = await response.json();

      setChat(state => [...state, { text: data.reply, user: "Chatbot" }]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="chatbot-container">
      <h5>Hoai-An's Chatbot</h5>
      <h6>powered by OpenAI</h6>
      <div className="chatbot-window">
        {chat.map((message, i) => (
          <p key={i}>
            <strong>{message.user}: </strong>
            {message.text}
          </p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatbot