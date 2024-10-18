import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Community = () => {
  return (
    <div>
      <Link href={"/community/match"}>
        <Button>Match</Button>
      </Link>

      <Link href={"/community/groups"}>
        <Button>Groups</Button>
      </Link>
    </div>
  );
};

export default Community;
