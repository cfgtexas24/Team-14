// Chat.tsx

"use client";

import React, { useEffect, useState } from "react";
import { Session as TalkSession, Chatbox } from "@talkjs/react";
import Talk from "talkjs";
import { getCurrentUser } from "./action";
import { User as SupabaseUser } from "@supabase/supabase-js";

interface ChatProps {
  conversationID: string;
}

export default function Chat({ conversationID }: ChatProps) {
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    console.log("Chat component mounted with conversationID:", conversationID);
    async function fetchUser() {
      try {
        const { user } = await getCurrentUser();
        console.log("Chat component fetched user:", user);
        setUser(user);
      } catch (error) {
        console.error("Error fetching user in Chat component:", error);
      }
    }

    fetchUser();
  }, []);

  if (!user || !user.id) {
    console.error("User or User ID is missing:", user);
    return <div>Loading chat...</div>;
  }

  console.log("User loaded in Chat component:", user);
  console.log("User ID:", user.id);

  const me = new Talk.User({
    id: user.id?.toString(), // Ensure it's a string
    name: user.user_metadata?.full_name || user.email,
    email: user.email,
  });

  const conversationBuilder = (conversation: Talk.ConversationBuilder) => {
    console.log("Building conversation with ID:", conversationID);
    conversation.setParticipant(me);
    conversation.setId(conversationID);
    conversation.setAttributes({
      subject: conversationID,
    });
  };

  console.log("Rendering Chatbox component");

  return (
    <div className="mt-8">
      <TalkSession appId={process.env.APP_ID!} me={me}>
        <Chatbox
          conversationBuilder={conversationBuilder}
          className="w-full h-[500px]"
        />
      </TalkSession>
    </div>
  );
}
