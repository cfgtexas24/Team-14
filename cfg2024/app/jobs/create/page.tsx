'use client';

import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface JobPostingFormData {
  title: string;
  description: string;
  salary: number;
  recruiter: string;
  skills: string;
  qualifications: string;
  location: string;
  company: string;
}

export default function JobPostingForm(): JSX.Element {
  const { register, control, handleSubmit, formState: { errors } } = useForm<JobPostingFormData>();

  const onSubmit: SubmitHandler<JobPostingFormData> = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Job Posting</CardTitle>
        <CardDescription>Fill in the details for the new job posting.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Job Title</Label>
            <Input id="title" {...register("title", { required: "Title is required" })} />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" {...register("description", { required: "Description is required" })} />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="salary">Salary</Label>
            <Input 
              id="salary" 
              type="number" 
              {...register("salary", { 
                required: "Salary is required",
                valueAsNumber: true 
              })} 
            />
            {errors.salary && <p className="text-red-500 text-sm">{errors.salary.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="recruiter">Recruiter</Label>
            <Input id="recruiter" {...register("recruiter", { required: "Recruiter is required" })} />
            {errors.recruiter && <p className="text-red-500 text-sm">{errors.recruiter.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="skills">Skills (comma-separated)</Label>
            <Input id="skills" {...register("skills", { required: "Skills are required" })} />
            {errors.skills && <p className="text-red-500 text-sm">{errors.skills.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="qualifications">Qualifications</Label>
            <Controller
              name="qualifications"
              control={control}
              rules={{ required: "Qualification is required" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select qualification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high_school_ged">High School/GED</SelectItem>
                    <SelectItem value="associates_degree">Associate's Degree</SelectItem>
                    <SelectItem value="bachelors_degree">Bachelor's Degree</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.qualifications && <p className="text-red-500 text-sm">{errors.qualifications.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" {...register("location", { required: "Location is required" })} />
            {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" {...register("company", { required: "Company is required" })} />
            {errors.company && <p className="text-red-500 text-sm">{errors.company.message}</p>}
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>Submit Job Posting</Button>
      </CardFooter>
    </Card>
  );
};