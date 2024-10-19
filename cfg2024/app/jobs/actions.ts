"use server"
import { createClient } from '@/utils/supabase/server';

export async function job_title() {
    const supabase = createClient();
    console.log("Fetching jobs");

    const { data: insertedData, error } = await supabase.from("Job").select("title");
    if (error) {
        console.error(error);
        return { success: false, error };
    }
    return { success: true, data: insertedData };
}
