"use server";

import { createClient } from "@/utils/supabase/server";
export async function getCurrentUser() {
  const supabase = createClient();

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    console.error("Error fetching session:", error);
  }

  const user = session?.user ?? null;

  console.log("Action fetched user:", user); // Debugging

  return { user, session };
}
