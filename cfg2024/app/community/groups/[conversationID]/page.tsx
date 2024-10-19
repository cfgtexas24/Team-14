// app/chat/[conversationID]/page.tsx

"use client";

import React from "react";
import { useParams } from "next/navigation";
import Chat from "./Chat"; // Adjust the path if necessary

const ChatPage = () => {
  const params = useParams();
  const { conversationID } = params;

  if (!conversationID) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Chat Room: {conversationID}</h1>
      <Chat conversationID={conversationID as string} />
    </div>
  );
};

export default ChatPage;
