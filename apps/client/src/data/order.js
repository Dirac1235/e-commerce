"use server"
import axios from 'axios';
import { cookies } from 'next/headers';


const server_host = 'http://localhost:8000'; // Define your server host

export async function makeOrder(data) {
  console.log("data from handler", data)
  const cookieStore = cookies();
  try {
    const accessToken = cookieStore.get('accessToken')?.value;
    console.log(accessToken);
    const author = `Bearer ${accessToken}`;
    const res = await axios.post(
      `${server_host}/orders/`,
      data,
      {
        headers: {
          Authorization: author
        }
      }
    );
    
    return res.data;
  } catch (error) {
    console.log({ error });
    const data = error.response?.data;
    return { error: data || "Unknown error" };
  }
}
