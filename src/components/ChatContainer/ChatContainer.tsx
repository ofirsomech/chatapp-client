import "./ChatContainer.css";
import * as React from "react";
import { useState } from "react";
import { Chat } from "../../models/Chat";
import { formatDate } from "../../utilis/dates";
import { InputText } from "../InputText/InputText";
import { UserLogin } from "../UserLogin/UserLogin";
import { UsersList } from "../UsersList/UsersList";
import ChatBoxSender from "../ChatBoxSender/ChatBoxSender";
import ChatBoxReceiver from "../ChatBoxReceiver/ChatBoxReceiver";
import socketIo from "../../services/SocketService/SocketService";
import { createMessage } from "../../services/ApiService/ApiService";

type Props = {};

export function ChatContainer(props: Props) {
  const [chats, setChats] = useState<Chat[]>([]);
  const [name, setName] = useState(localStorage.getItem("name"));
  const [users, setUsers] = useState([]);

  const sendMessage = async (chat: any) => {
    await createMessage(chat);
  };

  const addMessage = async (message: any) => {
    const newChat = { message, name: localStorage.getItem("name") };
    // @ts-ignore
    setChats([...chats, newChat]);
    await sendMessage(newChat);
  };

  function logout() {
    socketIo.disconnect();
    localStorage.removeItem("name");
    setName("");
  }

  function login(name: string) {
    socketIo.connect(name, setChats, setUsers);
    setName(name);
  }

  const ChatsList: any = () => {
    return chats.map((chat: Chat, index) => {
      const formatDateString = formatDate(chat.createdAt!);

      if (chat.name === name)
        return (
          <ChatBoxSender
            key={index}
            message={chat.message}
            name={chat.name}
            timestamps={formatDateString}
          />
        );
      return (
        <ChatBoxReceiver
          key={index}
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
      <UsersList users={users} />
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
    <UserLogin login={login} />
  );
}
