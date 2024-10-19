import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/server';


export interface JobPostingData {
  id?: number;
  title: string;
  description: string;
  salary: number;
  recruiter: string;
  skills: string[]; // Changed from OptionType[] to string[]
  qualification: string; // Changed from OptionType: string
  company: string;
}

async function getJob(id: number) {
    const supabase = createClient();
  
    const { data, error } = await supabase
      .from("Job")
      .select("title, description, salary, recruiter, skills, qualification, company")
      .eq("id", id);
  
    if (error) {
      console.error(error);
      return { success: false, error, job: [] };
    }
  
    return { success: true, job: data as JobPostingData[]};
  }


interface PageParams {
    id: number;
}

export default async function Page({ params }: { params: PageParams }) {
    const id = params.id;
    const { success, job } = await getJob(id);

    if (!success) {
        return <div>Error loading jobs</div>;
    }
    return (
        <div className="flex flex-col items-center space-y-4">
          {job.map((job: JobPostingData) => (
            <Card key={job.id} className='box-border h-full w-full'>
                <CardHeader>
                    <CardTitle className='text-5xl'>{job.title}</CardTitle>
                    <CardDescription className='text-4xl'>{job.company}</CardDescription>
                </CardHeader>
                <CardContent className='text-3xl'>
                    <p>{job.description}</p>
                </CardContent>
                <CardFooter>
                    <CardDescription className='text-clip overflow-hidden text-xl'>
                        Salary: {"$"+job.salary.toLocaleString()}<br />
                        Skills: {Array.isArray(job.skills) ? job.skills.join(', ') : job.skills}<br></br>
                        Qualification: {job.qualification.replace('_',' ')}
                    </CardDescription>
                </CardFooter>
                <div className='flex justify-end'>
                    <a href={`/jobs/${id}/apply`}>
                    <Button className='px-8 py-6 text-2xl'>Apply</Button>
                    </a>
                </div>
            </Card>
          ))}
        </div>

    );
}