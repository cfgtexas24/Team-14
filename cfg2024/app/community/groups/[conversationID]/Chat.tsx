// app/chat/[conversationID]/Chat.tsx

"use client";

import React, { useState, useEffect, useCallback } from "react";
import Talk from "talkjs";
import { Session as TalkSession, Chatbox } from "@talkjs/react"; 
import { getCurrentUser } from "./action"; // Adjust the path as necessary
import { User } from "@supabase/supabase-js";

interface ChatProps {
  conversationID: string;
}

export default function Chat({ conversationID }: ChatProps) {
  const [user, setUser] = useState<User | null>(null);
  const [talkReady, setTalkReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchCurrentUser() {
      try {
        const { user } = await getCurrentUser();
        if (isMounted) {
          setUser(user);
          await Talk.ready; // Wait for TalkJS to be ready
          setTalkReady(true);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Error fetching current user:", error);
        }
      }
    }

    fetchCurrentUser();

    return () => {
      isMounted = false; // Cleanup: set isMounted to false if component unmounts
    };
  }, []);

  const syncUser = useCallback(() => {
    if (!user) return null;

    return new Talk.User({
      id: user.id,
      name: user.email?.split("@")[0] || user.id, 
      email: user.email,
      photoUrl: "https://talkjs.com/new-web/avatar-1.jpg",
      welcomeMessage: "Hi there! Ready to chat?",
    });
  }, [user]);

  const syncConversation = useCallback(
    (session: Talk.Session) => {
      if (!user) return null;

      const conversation = session.getOrCreateConversation(conversationID);

      conversation.setParticipant(session.me);
      // In a real application, add other participants programmatically here if needed

      return conversation;
    },
    [user, conversationID]
  );

  if (!user || !talkReady) {
    return <div>Loading...</div>;
  }

  return (
    <div className="chat-container">
      <TalkSession
        appId={process.env.NEXT_PUBLIC_TALKJS_APP_ID!}
        syncUser={syncUser}
      >
        <Chatbox
          syncConversation={syncConversation}
          style={{ width: "100%", height: "500px" }}
        />
      </TalkSession>
    </div>
  );
}
