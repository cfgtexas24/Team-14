"use server";

import { createClient } from "@/utils/supabase/server"; // Supabase client setup

const supabase = createClient();

// Function to create a like
export async function createLike(userId: string, matchedUserId: string) {
  if (!userId) {
    throw new Error("User ID is required to create a like.");
  }

  const { data, error } = await supabase
    .from("likes")
    .insert([{ user_id: userId, matched_user_id: matchedUserId }]);

  if (error) {
    console.error("Error creating like:", error);
    throw new Error("Failed to create like. No user ID");
  }

  return data; // Return the newly created like data
}
