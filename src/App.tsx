import React from "react";
import "./App.css";
import { ChatContainer } from "./components/ChatContainer/ChatContainer";
import { SocketService } from "./services/SocketService/SocketService";

function App() {
  const socketService = SocketService.getInstance();

  return (
    <div className="App">
      <ChatContainer socketIo={socketService.getSocket()} />
    </div>
  );
}

export default App;
