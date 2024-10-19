"use client";

import React from "react";
import { Session, Chatbox } from "@talkjs/react";
import Talk from "talkjs";
import { useCallback } from "react";
import { ThreeDCard } from "@/components/GroupsThreeDCard";

const Match = () => {
  const syncUser = useCallback(
    () =>
      new Talk.User({
        id: "nina",
        name: "Nina",
        email: "nina@example.com",
        photoUrl: "https://talkjs.com/new-web/avatar-7.jpg",
        welcomeMessage: "Hi!",
      }),
    []
  );

  return (
    <div>
      <ThreeDCard />

      <Session
        appId="t3Z7QMmB"
        userId="sample_user_sebastian"
        syncUser={syncUser}
      >
        <Chatbox
          conversationId="sample_group_chat"
          style={{ width: "100%", height: "500px" }}
        ></Chatbox>
      </Session>
    </div>
  );
};

export default Match;
