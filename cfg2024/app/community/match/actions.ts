"use server";

import { createClient } from "@/utils/supabase/server"; // Supabase client setup

const supabase = createClient();

// Function to create a like
export async function createLike(likerId: string, likedId: string) {
  if (!likerId || !likedId) {
    throw new Error("Both liker_id and liked_id are required to create a like.");
  }

  const { data, error } = await supabase
    .from("likes")
    .insert([{ liker_id: likerId, liked_id: likedId }]); // Insert liker_id and liked_id

  if (error) {
    console.error("Error creating like:", error);
    throw new Error("Failed to create like.");
  }

  return data;
}
