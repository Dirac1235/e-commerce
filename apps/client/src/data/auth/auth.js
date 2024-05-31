"use server";
import axios from "axios";
import { cookies } from "next/headers";
const server_host = "http://localhost:8000";

export async function login(formData) {
  const cookieStore = cookies();
  try {
    const res = await axios.post(server_host + "/auth/login", formData);
    const data = res.data;
    console.log(data);
    if (data.user && data.token) {
      cookieStore.set({
        name: "accessToken",
        value: data.token,
        secure: process.env.NODE_ENV === "production",
      });
    }
    return { user: data.user };
  } catch (error) {
    console.log({ error });
    const data = error.response?.data;
    return { error: data || "Unknown error" };
  }
}

export async function register(formData) {
  const cookieStore = cookies();
  try {
    const res = await axios.post(server_host + "/auth/register", formData);
    console.log({ res });
    const data = res.data;
    if (data.user && data.jwt) {
      cookieStore.set({
        name: "accessToken",
        value: data.jwt,
        secure: process.env.NODE_ENV === "production",
      });
    }
    return { user: data.user };
  } catch (error) {
    console.log({ error });
    const data = error.response?.data;
    return { error: data || "Unknown error" };
  }
}

export async function deleteAuthentication() {
  const cookieStore = cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("wishList");
  cookieStore.delete("cartList");


}
