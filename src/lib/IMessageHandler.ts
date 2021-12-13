import Peer from "peerjs";

export interface IMessageHandler {
  addConnection(connection: Peer.DataConnection): void;
  setMyName(name: string): void;
}
