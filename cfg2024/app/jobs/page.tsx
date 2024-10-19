import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { createClient } from '@/utils/supabase/server';

interface JobPostingData {
  id?: number;
  title: string;
  description: string;
  salary: number;
  recruiter: string;
  skills: string[]; // Changed from OptionType[] to string[]
  qualification: string; // Changed from qualifications: OptionType
  company: string;
}

async function getJobs() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("Job")
    .select("id, title, description, salary, recruiter, skills, qualification, company");

  if (error) {
    console.error(error);
    return { success: false, error, jobs: [] };
  }

  return { success: true, jobs: data as JobPostingData[] };
}

export default async function Page() {
    const { success, jobs } = await getJobs();
    console.log(jobs)
    
    if (!success) {
        return <div>Error loading jobs</div>;
    }

    return (
        <div className="flex flex-col items-center space-y-4">
          {jobs.map((job: JobPostingData) => (
            <Card key={job.id} className='box-border w-1/2'>
                <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.company}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{job.description}</p>
                </CardContent>
                <CardFooter>
                    <CardDescription className='text-clip overflow-hidden'>
                          Skills: {job.skills} 
                          <br></br>
                          Qualification: {job.qualification}
                    </CardDescription>
                </CardFooter>
            </Card>
          ))}
        </div>
    );
}