import axios, { AxiosResponse } from "axios";
import { Chat } from "../../models/Chat";

export interface Message {
  _id: string;
  name: string;
  message: string;
  timestamp: Date;
}

const API_URL = process.env.REACT_APP_API_URL;

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
