import { useState } from "react";
import { useRouter } from "next/router";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Profile() {
  const saveChanges = () => {

  }

  return (
    <div>
      <div className="px-4 space-y-6 md:px-6">
        <header className="space-y-1.5">
          <div className="flex items-center space-x-4">
            
          </div>
        </header>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter your first name" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter your last name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div>
                <Label htmlFor="phone">Contact Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone" type="tel" />
              </div>
              <div>
                <Label htmlFor="address">Home Address</Label>
                <Input id="address" placeholder="Enter your home address" type="address" />
              </div>
              <div>
                <Label htmlFor="gender">Gender</Label>
                <select id="gender" name="gender" className="border rounded-md p-2 w-full">
                  <option value="" disabled selected>Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <Label htmlFor="disability">Do you have disabilities?</Label>
                <select id="disability" name="disability" className="border rounded-md p-2 w-full">
                  <option value="" disabled selected>Do you have a disability?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="I do not want to disclose">I do not want to disclose</option>
                </select>
              </div>
              <div>
                <Label htmlFor="workauth">Work Authorization</Label>
                <select id="workauth" name="workauth" className="border rounded-md p-2 w-full">
                  <option value="" disabled selected>Select your work authorization</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                <Input id="linkedin" placeholder="Enter your LinkedIn profile URL" type="url" />
              </div>
              <div>
                <Label htmlFor="roles">Roles of Interest</Label>
                <select id="roles" name="roles" className="border rounded-md p-2 w-full">
                  <option value="" disabled selected>Select your role of interest</option>
                  <option value="business">Business</option>
                  <option value="software_engineering">Software Engineering</option>
                  <option value="hardware_engineering">Hardware Engineering</option>
                  <option value="finance">Finance</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>
              <div>
                <Label htmlFor="resume">Upload Resume</Label>
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf, .doc, .docx" // Acceptable file types
                
                />
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Button onClick={ saveChanges } size="lg">Save Change</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
