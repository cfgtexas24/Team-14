// app/chat/[conversationID]/Chat.tsx

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Session as TalkSession, Chatbox } from "@talkjs/react";
import { getCurrentUser } from "./action"; // Adjust the path as necessary
import { User } from "@supabase/supabase-js";

interface ChatProps {
  conversationID: string;
}

interface TalkUser {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
}

export default function Chat({ conversationID }: ChatProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        const { user } = await getCurrentUser();
        // console.log("Fetched user:", user);
        // console.log("Fetched userId:", user?.id);

        setUser(user);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    }

    fetchCurrentUser();
  }, []);

  const syncUser = useCallback(() => {
    if (!user) return null;

    return new Talk.User({
      id: user.id,
      name: user.email.split("@")[0], // Get the username from email
      email: user.email,
      photoUrl: "https://talkjs.com/new-web/avatar-1.jpg", // Customize as needed
      welcomeMessage: "Hi there! Ready to chat?",
    });
  }, [user]);

  const syncConversation = useCallback(
    (session: Talk.Session) => {
      if (!user) return null;

      const conversation = session.getOrCreateConversation(conversationID);
      conversation.setParticipant(session.me); // Add the current user as a participant

      // In a real application, you would add other participants programmatically here
      // Example:
      // const participant = new Talk.User({
      //   id: 'some_other_user',
      //   name: 'Other User',
      //   email: 'other_user@example.com',
      // });
      // conversation.setParticipant(participant);

      return conversation;
    },
    [user, conversationID]
  );

  if (!user?.id) {
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
