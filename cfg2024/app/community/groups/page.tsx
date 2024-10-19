"use client";

import React from "react";
import { Session, Chatbox } from "@talkjs/react";
import Talk from "talkjs";
import { useCallback } from "react";
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
import cardImage from "@/assets/job-searching.png";

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

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <div>
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
                  src={cardImage}
                  alt="eco"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
              </CardContent>
              <CardContent className="flex flex-col items-center">
                <Button>Join</Button>
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
                  src={cardImage}
                  alt="eco"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
              </CardContent>
              <CardContent className="flex flex-col items-center">
                <Button>Join</Button>
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
                  src={cardImage}
                  alt="eco"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
              </CardContent>
              <CardContent className="flex flex-col items-center">
                <Button>Join</Button>
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
                  src={cardImage}
                  alt="eco"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
              </CardContent>
              <CardContent className="flex flex-col items-center">
                <Button>Join</Button>
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
                  src={cardImage}
                  alt="eco"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
              </CardContent>
              <CardContent className="flex flex-col items-center">
                <Button>Join</Button>
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
                  src={cardImage}
                  alt="eco"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
              </CardContent>
              <CardContent className="flex flex-col items-center">
                <Button>Join</Button>
              </CardContent>
            </Card>
          </div>
        </Tilt>
      </div>

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
