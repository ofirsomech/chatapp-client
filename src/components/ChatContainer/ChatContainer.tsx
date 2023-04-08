import "./ChatContainer.css";
import * as React from "react";

import { useEffect, useState } from "react";
import { UserLogin } from "../UserLogin/UserLogin";
import ChatBoxReceiver from "../ChatBoxReceiver/ChatBoxReceiver";
import ChatBoxSender from "../ChatBoxSender/ChatBoxSender";
import { InputText } from "../InputText/InputText";
import { Socket } from "socket.io-client";
import { formatDate } from "../../utilis/dates";
import { Chat } from "./models/Chat";

type Props = {
  socketIo: Socket;
};

export function ChatContainer(props: Props) {
  const [chats, setChats] = useState<Chat[]>([]);
  const [name, setName] = useState(localStorage.getItem("name"));
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));

  useEffect(() => {
    props.socketIo.on("messages", (messages: Chat[]) => {
      setChats(messages);
    });
    props.socketIo.on("chat", (senderCharts: any) => {
      setChats(senderCharts);
    });
  }, []);

  const sendChatToSocket = (chat: any) => {
    props.socketIo.emit("chat", chat);
    props.socketIo.emit("messages", chats); // Emit the "messages" event to all clients
  };

  const addMessage = (message: any) => {
    const newChat = { message, name: localStorage.getItem("name"), avatar };
    // @ts-ignore
    setChats([...chats, newChat]);
    sendChatToSocket(newChat);
  };

  function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("avatar");
    setName("");
  }

  const ChatsList: any = () => {
    return chats.map((chat: Chat, index) => {
      const formatDateString = formatDate(chat.createdAt!);

      if (chat.name === name)
        return (
          <ChatBoxSender
            key={index}
            avatar={chat.avatar}
            message={chat.message}
            name={chat.name}
            timestamps={formatDateString}
          />
        );
      return (
        <ChatBoxReceiver
          key={index}
          avatar={chat.avatar}
          message={chat.message}
          name={chat.name}
          timestamps={formatDateString}
        />
      );
    });
  };

  // @ts-ignore
  return name ? (
    <div>
      <div className="chat-container">
        <h4>Username: {name}</h4>
        <p className="p-logout" onClick={() => logout()}>
          Log out
        </p>
      </div>
      <ChatsList />
      <InputText addMessage={addMessage} />
    </div>
  ) : (
    <UserLogin setName={setName} />
  );
}
