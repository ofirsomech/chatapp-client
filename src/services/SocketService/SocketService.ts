import { io, Socket } from "socket.io-client";
import { Chat } from "../../models/Chat";

const API_URL = process.env.REACT_APP_API_URL;

class SocketService {
  private static instance: SocketService;
  private socket: Socket | undefined;

  private constructor() {}

  public static getInstance(): SocketService {
    if (!SocketService.instance) {
      SocketService.instance = new SocketService();
    }
    return SocketService.instance;
  }

  public getSocket(): Socket | undefined {
    return this.socket;
  }

  public connect(name: string, setChats: any, setUsers: any) {
    if (API_URL) {
      if (this.socket) {
        this.socket.connect();
      } else {
        this.socket = io(API_URL);
      }
      this.socket.on("messages", (messages: Chat[]) => {
        setChats(messages);
      });
      this.socket.on("activeUsers", (users: any[]) => {
        setUsers(users.filter((u) => u !== name));
      });
      this.socket.emit("join", name);
    }
  }

  public disconnect() {
    this.socket?.removeAllListeners();
    return this.socket?.disconnect();
  }
}

export default SocketService.getInstance();
