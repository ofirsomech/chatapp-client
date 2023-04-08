import * as React from "react";
import "./InputText.css";
import { useState } from "react";

type Props = {
  addMessage(message: string): void;
};

export function InputText(props: Props) {
  const [message, setMessage] = useState("");

  function addMessage() {
    props.addMessage(message);
    setMessage("");
  }

  function handleKeyDown(event: any) {
    if (event.key === "Enter") {
      addMessage();
    }
  }

  return (
    <div className="text-container">
      <textarea
        className="textarea"
        rows={3}
        placeholder="Write your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      ></textarea>
      <button
        className="button"
        onClick={() => addMessage()}
      >
        Send
      </button>
    </div>
  );
}
