import Peer from "peerjs";
import { useEffect } from "react";

async function tryToServe(id: string): Promise<Peer> {
  return new Promise((resolve, reject) => {
    const peer = new Peer(`remote-scrum-cards-${id}`);
    peer.on("open", function (id) {
      console.log("My peer ID is: " + id);
      resolve(peer);
    });
    peer.on("connection", (d) => {
      console.debug("new connection", d);
    });
    peer.on("error", (e) => {
      reject();
    });
  });
}

async function tryToJoin(id: string): Promise<Peer> {
  return new Promise((resolve, reject) => {
    const peer = new Peer();
    peer.on("open", function (id) {
      console.log("My peer ID is: " + id);
      var conn = peer.connect(`remote-scrum-cards-${id}`);
      conn.on("open", () => {
        console.debug("Opened connection");
      });
      conn.on("error", (e) => {
        console.debug("error", e);
      });
      resolve(peer);
    });
  });
}

export default function Room({ id }: { id: string }) {
  useEffect(() => {
    async function connect() {
      return await tryToServe(id).catch(() => tryToJoin(id));
    }
    connect();
  }, [id]);
  return <>I rum {id}</>;
}
