import "./ChatContainer.css";
import * as React from "react";
import { useEffect, useState } from "react";
import { Chat } from "../../models/Chat";
import { formatDate } from "../../utilis/dates";
import { InputText } from "../InputText/InputText";
import { UsersList } from "../UsersList/UsersList";
import ChatBoxSender from "../ChatBoxSender/ChatBoxSender";
import ChatBoxReceiver from "../ChatBoxReceiver/ChatBoxReceiver";
import socketIo from "../../services/SocketService/SocketService";
import { createMessage } from "../../services/ApiService/ApiService";

type Props = { name: string; onLogout: () => void };

export function ChatContainer(props: Props) {
  const { name, onLogout } = props;
  const [chats, setChats] = useState<Chat[]>([]);
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    login(name)
  }, [])

  const sendMessage = async (chat: Chat) => {
    await createMessage(chat);
  };

  const addMessage = async (message: string) => {
    const newChat:Chat = { message, name };
    await sendMessage(newChat);
  };

  function logout() {
    socketIo.disconnect();
    localStorage.removeItem("name");
    onLogout();
  }

  function login(name: string) {
    socketIo.connect(name, setChats, setUsers);
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
  return <div>
    <UsersList users={users} />
    <div className="chat-container">
      <h4>Username: {name}</h4>
      <p className="p-logout"  onClick={() => logout()}>
        Log out
      </p>
    </div>
    <ChatsList />
    <InputText addMessage={addMessage} />
  </div>
}
