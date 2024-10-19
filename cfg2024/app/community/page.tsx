"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleArrowRight, Files, Settings } from "lucide-react";
import { Tilt } from "react-tilt";
import Image from "next/image";
import socioeconomic from "@/assets/socioeconomic.jpg";
import Link from "next/link";

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

const About1 = () => {
  return (
    <section className="mt-20 mx-auto flex max-w-6xl items-center justify-center px-4 lg:px-8 ">
      <div className="container flex flex-col gap-12">
        <div className="flex flex-col gap-7">
          <h1 className=" font-semibold text-4xl">
            Bringing the power of software to everyone
          </h1>
          <p className="max-w-xl text-lg">
            Stacker makes it easy to build customer portals, CRMs, internal
            tools, and other business applications for your team. In minutes,
            not months.
          </p>
        </div>
        <div className="grid gap-2 grid-cols-2">
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
                  <Link href={"/community/match"}>
                    <Button>Find a Match</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </Tilt>
          <div className="flex  rounded-2xl ">
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
                    <Link href={"/community/groups"}>
                      <Button>Join Groups</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </Tilt>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-20">
          <div className="max-w-xl">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              We make creating software ridiculously easy
            </h2>
            <p className="text-muted-foreground">
              We aim to help empower 1,000,000 teams to create their own
              software. Here is how we plan on doing it.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <Files className="size-5" />
              </div>
              <h3 className="mb-3 mt-2 text-lg font-semibold">
                Being radically open
              </h3>
              <p className="text-muted-foreground">
                We believe there’s no room for big egos and there’s always time
                to help each other. We strive to give and receive feedback,
                ideas, perspectives
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <CircleArrowRight className="size-5" />
              </div>
              <h3 className="mb-3 mt-2 text-lg font-semibold">
                Moving the needle
              </h3>
              <p className="text-muted-foreground">
                Boldly, bravely and with clear aims. We seek out the big
                opportunities and double down on the most important things to
                work on.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <Settings className="size-5" />
              </div>
              <h3 className="mb-3 mt-2 text-lg font-semibold">
                Optimizing for empowerment
              </h3>
              <p className="text-muted-foreground">
                We believe that everyone should be empowered to do whatever they
                think is in the company&apos;s best interests.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-10 text-sm font-medium text-muted-foreground">
              JOIN OUR TEAM
            </p>
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              We&apos;re changing how software is made
            </h2>
          </div>
          <div>
            <img
              src="https://www.shadcnblocks.com/images/block/placeholder.svg"
              alt="placeholder"
              className="mb-6 max-h-36 w-full rounded-xl object-cover"
            />
            <p className="text-muted-foreground">
              And we&apos;re looking for the right people to help us do it. If
              you&apos;re passionate about making change in the world, this
              might be the place for you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
