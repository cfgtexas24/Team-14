import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/utils/supabase/server";

async function getUsers() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("User")
    .select("id, firstName, lastName");

  if (error) {
    console.error(error);
    return { success: false, error, data: [] };
  }

  return { success: true, users: data };
}

export default async function userList() {
  const { success, users } = await getUsers();
  console.log(users)
  
  if (!success) {
      return <div>Error loading users</div>;
  }

  return (
      <div className="flex flex-col items-center space-y-4">
        {users.map((user) => (
          <Card key={user.id} className='box-border w-1/2'>
              <CardHeader>
                  <CardTitle>{user.firstName} {user.lastName}</CardTitle>
              </CardHeader>
          </Card>
        ))}
      </div>
  );
}
