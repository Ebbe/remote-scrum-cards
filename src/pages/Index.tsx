import React, { useState } from "react";

export default function Index() {
  const [roomId, setRoomId] = useState<string>("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = `?room=${roomId}`;
  }

  return (
    <>
      Start
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="roomId"
          onChange={(e) => setRoomId(e.target.value)}
        />
      </form>
    </>
  );
}
