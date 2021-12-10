import { useEffect, useState } from "react";
import "./App.css";
import Index from "./pages/Index";
import Loading from "./pages/Loading";
import Room from "./pages/Room";

function App() {
  const [room, setRoom] = useState<string | null | undefined>(undefined);
  // new URLSearchParams(window.location.search).get("room"));
  useEffect(() => {
    setRoom(new URLSearchParams(window.location.search).get("room"));
  }, []);

  const mainComponent =
    room === null ? (
      <Index />
    ) : room === undefined ? (
      <Loading />
    ) : (
      <Room id={room} />
    );

  return <div className="App">{mainComponent}</div>;
}

export default App;
