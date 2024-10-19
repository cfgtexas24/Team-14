"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error(error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    role: formData.get("role") as string,
    role: formData.get("role") as string,
  };
  console.log(data);
  console.log(data);
  const { error } = await supabase.auth.signUp(data);

  if (error) {
<<<<<<< HEAD
    console.log(error);
=======
    console.log(error)
>>>>>>> e61d9d61a6d2dd301dfdff44f05592feea96aa7d
    redirect("/error");
  }

  revalidatePath("/", "layout");
  if (data.role == 'candidate') {
    redirect("/profile");
  } else {
    redirect("/");
  }
  if (data.role == 'candidate') {
    redirect("/profile");
  } else {
    redirect("/");
  }
}
