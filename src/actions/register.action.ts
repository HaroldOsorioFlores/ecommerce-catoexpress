"use server";

import { redirect } from "next/navigation";

export async function RegisterAction(prev: any, formData: FormData) {
  let data = {};
  try {
    data = {
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirm-password"),
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
