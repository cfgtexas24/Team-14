"use client";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

export function MainNavLinks() {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {/* Candidate Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="text-[#344966] bg-white hover:bg-white text-2xl font-bold">
                  Candidate
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <Link href="/jobs" className="text-[#344966] text-lg">Jobs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/community" className="text-[#344966] text-lg">Community</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/book-meetings" className="text-[#344966] text-lg">Book Meetings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resources" className="text-[#344966] text-lg">Resources</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Employee Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="text-[#344966] bg-white hover:bg-white text-2xl font-bold">
                  Employee
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <Link href="/jobs/create" className="text-[#344966] text-lg">Post a Job</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/users" className="text-[#344966] text-lg">Users</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/metrics" className="text-[#344966] text-lg">Metrics</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login and Logout Buttons */}
            <Link href="/login" className="text-[#344966] bg-white  hover:bg-white text-2xl font-bold">
              Login
            </Link>
            <Link href="/" className="text-[#344966] bg-white hover:bg-white text-2xl font-bold">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainNavLinks;
