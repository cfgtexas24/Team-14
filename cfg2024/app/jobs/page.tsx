"use client"
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { job_title } from "./actions";

export default function Page() {
    const [jobData, setJobData] = useState<string | null>(null);

    const handleClick = async () => {
        const result = await job_title();

        if (result.success) {
            setJobData(result.data);
            console.log(result.data);
        } else {
            console.error("Error fetching data:", result.error);
        }
    };

    return (
        <div className="flex justify-center">
            <Card className='box-border w-1/2'>
                <CardHeader>
                    <CardTitle>Job Title</CardTitle>
                    <CardDescription>Job Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <CardDescription className='text-color black'>Location</CardDescription>
                </CardContent>
                <CardFooter>
                    <CardDescription className='text-clip overflow-hidden'>Skills</CardDescription>
                </CardFooter>
                <Button onClick={handleClick}>Fetch Jobs</Button>
            </Card>

        </div>
    );
}
