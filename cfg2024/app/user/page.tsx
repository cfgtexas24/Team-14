import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/utils/supabase/server";

type User = {
  id: string;  // Added id field
  email: string;
  role: string;
};

async function getUsers() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("custom_users")
    .select("id, email, role");  // Added id to the selection

  if (error) {
    console.error(error);
    return { success: false, error, users: [] as User[] };  // Changed data to users
  }

  return { success: true, users: data as User[] };
}

export default async function UserList() {  // Changed function name to PascalCase
  const { success, users, error } = await getUsers();
  console.log(users);
  
  if (!success) {
      return <div>Error loading users: {error?.message}</div>;  // Added error message
  }

  return (
      <div className="flex flex-col items-center space-y-4">
        {users.map((user) => (
          <Card key={user.id} className='box-border w-1/2'>
              <CardHeader>
                  <CardTitle>{user.email} - {user.role}</CardTitle>
              </CardHeader>
          </Card>
        ))}
      </div>
  );
}