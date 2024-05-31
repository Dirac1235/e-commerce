"use server";

import fetcher from "./fetcher";

export async function getOrders() {
  const order = await fetcher.get("/orders");
 
  return order.data;
}
