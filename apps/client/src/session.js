"use server"

import { cookies } from "next/headers";
// import fetcher from "./data/fetcher";

export async function getSession() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  
  
  return accessToken
}