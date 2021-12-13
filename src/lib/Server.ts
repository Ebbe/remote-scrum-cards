import Peer from "peerjs";
import { IMessageHandler } from "./IMessageHandler";

export default class Server implements IMessageHandler {
  peer: Peer;
  connections: Peer.DataConnection[] = [];

  constructor(peer: Peer) {
    this.peer = peer;
    this.peer.on("connection", (connection) => {
      this.addConnection(connection);
    });
  }

  private sendToAll(message: Object) {
    this.connections.forEach((connection) => {
      connection.send(message);
    });
  }

  setMyName(name: string): void {
    this.sendToAll({ myNameIs: name });
  }

  addConnection(connection: Peer.DataConnection): void {
    this.connections.push(connection);
    console.debug("new connection", connection);
    connection.on("data", (data) => {
      console.debug("Got data:", data);
    });
  }
}
