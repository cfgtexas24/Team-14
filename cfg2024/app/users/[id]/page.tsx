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
import Link from 'next/link';

type User = {
  id: string;  // Added id field
  email: string;
  role: string;
  first_name: string;
  last_name: string;
  address?: string;
  gender?: string;
  disability?: string;
  work_auth?: string;
  linkedin?: string;
};

async function getUser(id: number) {
    const supabase = createClient();
  
    const { data, error } = await supabase
      .from("custom_users")
      .select("id, first_name, last_name, email, role, address, gender, disability, work_auth, linkedin")
      .eq("id", id)
      .single();
  
    if (error) {
      console.error(error);
      return { success: false, error, user: null };
    }
  
    return { success: true, user: data as User};
  }


interface PageParams {
    id: number;
}

export default async function Page({ params }: { params: PageParams }) {
    const id = params.id;
    const { success, user } = await getUser(id);

    if (!success || !user) {
        return <div>Error loading User</div>;
    }
    return (
      <div className="flex flex-col items-center space-y-4">
          <Card className='box-border h-full w-full max-w-2xl'>
              <CardHeader>
                  <CardTitle className='text-5xl'>{user.first_name} {user.last_name}</CardTitle>
                  <CardDescription className='text-4xl'>{user.role}</CardDescription>
              </CardHeader>
              <CardContent className='text-3xl'>
                  <p>Email: {user.email}</p>
                  {user.address && <p>Address: {user.address}</p>}
                  {user.gender && <p>Gender: {user.gender}</p>}
                  {user.disability && <p>Disability: {user.disability}</p>}
                  {user.work_auth && <p>Work Authorization: {user.work_auth}</p>}
              </CardContent>
              <CardFooter>
                  {user.linkedin && (
                      <CardDescription className='text-clip overflow-hidden text-xl'>
                          LinkedIn: <a href={user.linkedin} target="_blank" rel="noopener noreferrer">{user.linkedin}</a>
                      </CardDescription>
                  )}
              </CardFooter>
              <div className='flex justify-end p-4'>
                  <Link href={`/profile`}>
                      <Button className='px-8 py-6 text-2xl'>Edit Profile</Button>
                  </Link>
              </div>
          </Card>
      </div>
  );
}