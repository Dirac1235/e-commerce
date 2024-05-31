// "use client";
// const storage = window != null ? window.localStorage : localStorage;

// export async function getcartList() {
//   const cartList = storage.getItem("cartList");
//   if (cartList) return cartList;
//   else return [];
// }
// export async function addToCartList(data) {
//   let value = [];
//   if (storage.hasOwnProperty("cartList"))
//     value = JSON.parse(storage.getItem("cartList"));
//   if (!value.find((product) => product.id == data.id)) value.push(data);

//   storage.setItem("cartList", JSON.stringify(value));
// }

// export async function removeFromCartList(id) {
//   let cartList = [];
//   const cartListCookie = storage.getItem("cartList");

//   if (cartListCookie) {
//     cartList = JSON.parse(cartListCookie);
//   }
//   cartList.filter((data) => data.id != id);
//   cookieStore.setItem("cartList", JSON.stringify(cartList));
// }
// // export async function reloadCart(cart) {
// //   console.log(cart);
// //   storage.setItem("cartList", cart);
// // }
