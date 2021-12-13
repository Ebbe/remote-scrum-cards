import Peer from "peerjs";
import { IMessageHandler } from "./IMessageHandler";

export default class Client implements IMessageHandler {
  connection: Peer.DataConnection;

  constructor(connection: Peer.DataConnection) {
    this.connection = connection;

    this.connection.on("data", (data) => {
      console.debug("Got data:", data);
    });
  }
  addConnection(): void {}

  setMyName(name: string): void {
    this.connection.send({ myNameIs: name });
  }
}
