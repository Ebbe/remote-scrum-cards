import Peer from "peerjs";
import { useEffect, useState } from "react";
import Client from "../lib/Client";
import { IMessageHandler } from "../lib/IMessageHandler";
import Server from "../lib/Server";

const config: Peer.PeerJSOption = {};

async function tryToServe(id: string): Promise<IMessageHandler> {
  return new Promise((resolve, reject) => {
    const peer = new Peer(`remote-scrum-cards-${id}`, config);
    peer.on("open", function (id) {
      console.log("My peer ID is: " + id);
      resolve(new Server(peer));
    });
    peer.on("error", (e) => {
      reject();
    });
  });
}

async function tryToJoin(id: string): Promise<IMessageHandler> {
  return new Promise((resolve, reject) => {
    const peer = new Peer(undefined, config);
    peer.on("open", function (_id) {
      console.log("My peer ID is now: " + _id);
      var conn = peer.connect(`remote-scrum-cards-${id}`);
      conn.on("open", () => {
        console.debug("Opened connection");
        resolve(new Client(conn));
      });
      conn.on("error", (e) => {
        console.debug("error", e);
        reject();
      });
    });
  });
}

const setName = (name: string, connection?: IMessageHandler) => {
  if (!connection) return;

  connection.setMyName(name);
};

export default function Room({ id }: { id: string }) {
  const [connectionHandler, setConnectionHandler] = useState<
    IMessageHandler | undefined
  >(undefined);

  useEffect(() => {
    if (connectionHandler) return;
    async function connect() {
      setConnectionHandler(await tryToServe(id).catch(() => tryToJoin(id)));
    }
    connect();
  }, [connectionHandler, id]);

  return (
    <>
      I rum {id}
      <br />
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value, connectionHandler)}
      />
    </>
  );
}
