"use server";

import { redirect } from "next/navigation";

export async function LoginAction(prev: any, formData: FormData) {
  let data = {};
  try {
    data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
  } catch (error) {
    return { msg: "Prueba" };
  }

  if (data) {
    console.log({ data });
    redirect("/shopUcsm");
  }

  return { msg: "Prueba" };
}
