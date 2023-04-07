import React from "react";
import "./App.css";
import ChatBoxReceiver from "./components/ChatBoxReceiver/ChatBoxReceiver";
import ChatBoxSender from "./components/ChatBoxSender/ChatBoxSender";
import { InputText } from "./components/InputText/InputText";

function App() {
  function addMessage(message: string) {
    console.log(message);
  }

  return (
    <div className="App">
      <h1>Super Chat</h1>
      <ChatBoxReceiver
        avatar={
          "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
        }
        user="Ofir"
        message="Hello"
      />
      <ChatBoxSender
        avatar={"https://cdn-icons-png.flaticon.com/512/5556/5556468.png"}
        user="Avi"
        message="Hii"
      />
      <InputText addMessage={(message: string) => addMessage(message)} />
    </div>
  );
}

export default App;
