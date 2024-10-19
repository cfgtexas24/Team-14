"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  gender?: string;
  disability?: string;
  workAuth?: string;
  linkedin?: string;
  roles?: string;
  resume?: File | null;
}

export default function Profile() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    disability: "",
    workAuth: "",
    linkedin: "",
    roles: "",
    resume: null,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    return newErrors;
  };

  const saveChanges = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Handle saving the data (e.g., send to API)
    console.log("Data saved:", formData);
    // Clear errors if saving is successful
    setErrors({});
  };

  return (
    <div>
      <div className="px-4 space-y-6 md:px-6">
        <header className="space-y-1.5">
          <h2 className="text-lg font-semibold">Personal Information</h2>
        </header>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName">
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
            </div>
            <div>
              <Label htmlFor="lastName">
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
            </div>
            <div>
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="phone">
                Contact Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Enter your phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>
            <div>
              <Label htmlFor="address">Home Address</Label>
              <Input
                id="address"
                name="address"
                placeholder="Enter your home address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <select
                id="gender"
                name="gender"
                className="border rounded-md p-2 w-full"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="" disabled>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <Label htmlFor="disability">Do you have disabilities?</Label>
              <select
                id="disability"
                name="disability"
                className="border rounded-md p-2 w-full"
                value={formData.disability}
                onChange={handleChange}
              >
                <option value="" disabled>Do you have a disability?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="I do not want to disclose">I do not want to disclose</option>
              </select>
            </div>
            <div>
              <Label htmlFor="workauth">Work Authorization</Label>
              <select
                id="workauth"
                name="workAuth"
                className="border rounded-md p-2 w-full"
                value={formData.workAuth}
                onChange={handleChange}
              >
                <option value="" disabled>Select your work authorization</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input
                id="linkedin"
                name="linkedin"
                placeholder="Enter your LinkedIn profile URL"
                type="url"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="roles">Roles of Interest</Label>
              <select
                id="roles"
                name="roles"
                className="border rounded-md p-2 w-full"
                value={formData.roles}
                onChange={handleChange}
              >
                <option value="" disabled>Select your role of interest</option>
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
                accept=".pdf, .doc, .docx"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="mt-8">
            <Button onClick={saveChanges} size="lg">Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
