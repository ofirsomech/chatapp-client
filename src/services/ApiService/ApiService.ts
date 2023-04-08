import axios, { AxiosResponse } from "axios";
import { Chat } from "../../components/ChatContainer/models/Chat";

export interface Message {
  _id: string;
  name: string;
  message: string;
  timestamp: Date;
}

const API_URL = "http://localhost:4000";

export const getMessages = async (): Promise<Message[]> => {
  const response: AxiosResponse<Message[]> = await axios.get(`${API_URL}/chat`);
  return response.data;
};

export const createMessage = async (chat: Chat): Promise<Message> => {
  const response: AxiosResponse<Message> = await axios.post(
    `${API_URL}/chat`,
    chat
  );
  return response.data;
};
