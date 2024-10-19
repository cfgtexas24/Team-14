"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function MainNavLinks() {
  return (
    <NavigationMenu>
      {/* Add space-x-4 to create horizontal space between items */}
      <NavigationMenuList className="space-x-4">
        <NavigationMenuItem>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link href="/jobs" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-[#344966] hover:bg-[#344966] hover:text-white rounded-xl"
                )}
              >
                <div className="text-2xl font-bold">Jobs</div>
              </NavigationMenuLink>
            </Link>
          </motion.div>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link href="/jobs/create" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-[#344966] hover:bg-[#344966] hover:text-white rounded-xl"
                )}
              >
                <div className="text-2xl font-bold">Post a Job</div>
              </NavigationMenuLink>
            </Link>
          </motion.div>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link href="/community" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-[#344966] hover:bg-[#344966] hover:text-white rounded-xl"
                )}
              >
                <div className="text-2xl font-bold">Community</div>
              </NavigationMenuLink>
            </Link>
          </motion.div>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/users" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Users
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link href="/login" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-[#344966] hover:bg-[#344966] hover:text-white rounded-xl"
                )}
              >
                <div className="text-2xl font-bold">Login</div>
              </NavigationMenuLink>
            </Link>
          </motion.div>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link href="/start" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-[#344966] hover:bg-[#344966] hover:text-white rounded-xl",
                  "border: 2px"
                )}
              >
                <div className="text-2xl font-bold ">Logout</div>
              </NavigationMenuLink>
            </Link>
          </motion.div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MainNavLinks;
