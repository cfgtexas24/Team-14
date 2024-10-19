"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { signOut } from "@/app/login/actions";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export function MainNavLinks() {
  const [isCandidateOpen, setIsCandidateOpen] = useState(false);
  const [isEmployeeOpen, setIsEmployeeOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase.auth]);

  const handleSignOut = async () => {
    await signOut();
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    router.push('/login');
  };

  console.log("Is logged in:", isLoggedIn); // Debug log

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex space-x-8">
            {/* Candidate Dropdown */}
            <DropdownMenu
              open={isCandidateOpen}
              onOpenChange={setIsCandidateOpen}
            >
              <DropdownMenuTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    onMouseEnter={() => setIsCandidateOpen(true)}
                    onMouseLeave={() => setIsCandidateOpen(false)}
                    className="text-[#344966] hover:text-white bg-white text-2xl font-bold"
                  >
                    Candidate
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                onMouseEnter={() => setIsCandidateOpen(true)}
                onMouseLeave={() => setIsCandidateOpen(false)}
              >
                <DropdownMenuItem>
                  <Link href="/jobs" className="text-[#344966] text-lg">
                    Jobs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/community" className="text-[#344966] text-lg">
                    Community
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/bookings" className="text-[#344966] text-lg">
                    Book Meetings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resources" className="text-[#344966] text-lg">
                    Resources
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
  
            {/* Employee Dropdown */}
            <DropdownMenu
              open={isEmployeeOpen}
              onOpenChange={setIsEmployeeOpen}
            >
              <DropdownMenuTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    onMouseEnter={() => setIsEmployeeOpen(true)}
                    onMouseLeave={() => setIsEmployeeOpen(false)}
                    className="text-[#344966] hover:text-white bg-white text-2xl font-bold"
                  >
                    Employee
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                onMouseEnter={() => setIsEmployeeOpen(true)}
                onMouseLeave={() => setIsEmployeeOpen(false)}
              >
                <DropdownMenuItem>
                  <Link href="/jobs/create" className="text-[#344966] text-lg">
                    Post a Job
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/users" className="text-[#344966] text-lg">
                    Users
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/metrics" className="text-[#344966] text-lg">
                    Metrics
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex ml-8 space-x-8">
            {isLoggedIn ? (
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  onClick={handleSignOut}
                  className="hover:text-[#344966] text-white hover:bg-white text-2xl font-bold"
                >
                  Logout
                </Button>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href="/login">
                  <Button className="text-2xl font-bold" variant={"default"}>
                    Login
                  </Button>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainNavLinks;