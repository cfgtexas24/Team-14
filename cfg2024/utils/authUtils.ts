import { createClient } from '@/utils/supabase/client';

export async function getUser() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function isUserLoggedIn() {
  const user = await getUser();
  return !!user;
}