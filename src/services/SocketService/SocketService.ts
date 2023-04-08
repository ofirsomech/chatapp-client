import { io, Socket } from "socket.io-client";

export class SocketService {
  private static instance: SocketService;
  private readonly socket: Socket;

  private constructor() {
    this.socket = io("http://127.0.0.1:4000");
  }

  public static getInstance(): SocketService {
    if (!SocketService.instance) {
      SocketService.instance = new SocketService();
    }
    console.log(SocketService.instance);
    return SocketService.instance;
  }

  public getSocket(): Socket {
    return this.socket;
  }
}
