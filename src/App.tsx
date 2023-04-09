import React, { useState } from "react";
import "./App.css";
import { ChatContainer } from "./components/ChatContainer/ChatContainer";
import { UserLogin } from "./components/UserLogin/UserLogin";

function App() {
  const [name, setName] = useState<string | null>(localStorage.getItem("name"));
  return (
    <div className="App">
      {name ? (
        <ChatContainer name={name} onLogout={() => setName("")} />
      ) : (
        <UserLogin login={(name) => setName(name)} />
      )}
    </div>
  );
}

export default App;
