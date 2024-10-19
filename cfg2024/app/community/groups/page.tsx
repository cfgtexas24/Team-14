"use client";

import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import culture from "@/assets/culture.webp";
import education from "@/assets/education.png";
import employment from "@/assets/employment.jpg";
import family from "@/assets/family.jpg";
import geographical from "@/assets/geographical.png";
import socioeconomic from "@/assets/socioeconomic.jpg";
import { getCurrentUser } from "./action";
import { User } from "@supabase/supabase-js";
import Chat from "./Chat";

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Match = () => {
  const [conversationID, setConversationID] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log("conversationID changed:", conversationID); // Debugging

    // Fetch the current user
    async function fetchUser() {
      try {
        const { user } = await getCurrentUser();
        setUser(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    fetchUser();
  }, []);

  const handleJoin = (id: string) => {
    console.log("Join button clicked with id:", id); // Debugging

    setConversationID(id);
  };

  const handleClick = async () => {
    const { user, session } = await getCurrentUser();
    console.log("User:", user?.id);
    console.log("Session:", session?.user.id);
  };
  if (!user) {
    return <div>Please log in to join a group chat.</div>;
  }

  return (
    <div >
      <Button onClick={handleClick}>FETCH USERS</Button>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-12 max-w-7xl mx-auto">
        <Tilt options={defaultOptions}>
          <div className="flex items-center justify-center">
            <Card className="w-96">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-2xl">Socioeconomic</CardTitle>
                <CardDescription className="text-center">
                  Low-income/Underprivileged: Individuals or families with
                  limited financial resources and access to basic needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <Image
                  src={socioeconomic}
                  alt="eco"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
              </CardContent>
              <CardContent className="flex flex-col items-center">
                <Button onClick={() => handleJoin("socioeconomic")}>
                  Join
                </Button>
              </CardContent>
            </Card>
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div className="flex items-center justify-center">
            <Card className="w-96">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-2xl">Educational</CardTitle>
                <CardDescription className="text-center">
                  Limited Formal Education: Individuals who did not have the
                  opportunity to complete high school or basic education.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <Image
                  src={education}
                  alt="eco"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
              </CardContent>
              <CardContent className="flex flex-col items-center">
                <Button onClick={() => handleJoin("educational")}>Join</Button>
              </CardContent>
            </Card>
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div className="flex items-center justify-center">
            <Card className="w-96">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-2xl">Employment</CardTitle>
                <CardDescription className="text-center">
                  Unemployed: Individuals without a job who are actively seeking
                  work or facing employment barriers.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <Image
                  src={employment}
                  alt="eco"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
              </CardContent>
              <CardContent className="flex flex-col items-center">
                <Button onClick={() => handleJoin("employment")}>Join</Button>
              </CardContent>
            </Card>
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div className="flex items-center justify-center">
            <Card className="w-96">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-2xl">Family</CardTitle>
                <CardDescription className="text-center">
                  Single-parent Household: Individuals raised by one parent,
                  which may affect financial and emotional support.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <Image
                  src={family}
                  alt="eco"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
              </CardContent>
              <CardContent className="flex flex-col items-center">
                <Button onClick={() => handleJoin("family")}>Join</Button>
              </CardContent>
            </Card>
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div className="flex items-center justify-center">
            <Card className="w-96">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-2xl">Cultural and Ethnic</CardTitle>
                <CardDescription className="text-center">
                  Minority Ethnic Group: Individuals from racial or ethnic
                  groups that are underrepresented or face systemic barriers in
                  the community.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <Image
                  src={culture}
                  alt="eco"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
              </CardContent>
              <CardContent className="flex flex-col items-center">
                <Button onClick={() => handleJoin("cultural_and_ethnic")}>
                  Join
                </Button>
              </CardContent>
            </Card>
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div className="flex items-center justify-center">
            <Card className="w-96">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-2xl">Geographical</CardTitle>
                <CardDescription className="text-center">
                  Disadvantaged Neighborhood: Individuals from areas with high
                  crime rates, limited job opportunities, and poor access to
                  educational and recreational activities.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <Image
                  src={geographical}
                  alt="eco"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
              </CardContent>
              <CardContent className="flex flex-col items-center">
                <Button onClick={() => handleJoin("geographical")}>Join</Button>
              </CardContent>
            </Card>
          </div>
        </Tilt>
      </div>

      {/* <Session
        appId="t3Z7QMmB"
        userId="sample_user_sebastian"
        syncUser={syncUser}
      >
        <Chatbox
          conversationId="sample_group_chat"
          style={{ width: "100%", height: "500px" }}
        ></Chatbox>
      </Session> */}

      {conversationID && <Chat conversationID={conversationID} />}
    </div>
  );
};

export default Match;
