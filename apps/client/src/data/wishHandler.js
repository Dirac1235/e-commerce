"use server";
import { cookies } from "next/headers";

const cookieStore = cookies();

export async function getWishList() {
  const wishListCookie = await cookieStore.get("wishList");
    let wishList = [];

    if (wishListCookie && wishListCookie.value) {
      wishList = JSON.parse(wishListCookie.value);
      cookieStore.delete("wishList");
    }
  return wishList;
}

export async function addToWishList(data) {
  try {
    const wishListCookie = await cookieStore.get("wishList");
    let wishList = [];

    if (wishListCookie && wishListCookie.value) {
      wishList = JSON.parse(wishListCookie.value);
      cookieStore.delete("wishList");
    }

    const itemIndex = wishList.findIndex((item) => item.id === data.id);

    if (itemIndex === -1) {
      wishList.push(data);
    } else {
      wishList.splice(itemIndex, 1);
    }

    cookieStore.set({
      name: "wishList",
      value: JSON.stringify(wishList),
    });
  } catch (error) {
    console.error("Error managing wish list:", error);
  }
}

export async function removeFromWishList(id) {
  const wishListCookie =  cookieStore.get("wishList");
  let wishList = [];
  if (wishListCookie && wishListCookie.value) {
    wishList = JSON.parse(wishListCookie.value);
    cookieStore.delete("wishList");
  }

  wishList?.filter((data) => data.id != id);
  cookieStore.set({
    name: "wishList",
    value: JSON.stringify(wishList),
  });
}


