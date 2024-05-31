"use client";
import { useCart } from "@app/client/data/state";
import { BsCartPlus } from "react-icons/bs";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  addToWishList,
  getWishList,
  removeFromWishList,
} from "@app/client/data/wishHandler";

function WishList() {
  // const wishListData = useCart((state) => state.wishListProducts);
  const [wishListData, setWishListData] = useState([]);
  useEffect(() => {
    const fetchWishListData = async () => {
      try {
        const data = await getWishList();
        console.log("Fetched wish list:", data);
        setWishListData(data);
      } catch (error) {
        console.error("Error fetching wish list data:", error);
      }
    };

    fetchWishListData();
  }, []);

  const [color, setColor] = useState(false);
  // const removeFromWishList = useCart((state) => state.removeFromWishList);
  const removeWishList = () => removeFromWishList();
  const total = wishListData.length;
  const addToCart = useCart((state) => state.addToCart);

  function setCart(product) {
    setColor((prev) => !prev);
    addToCart(product);
  }

  return (
    <div className="container h-full ">
      <h1 className="text-5xl w-full m-5 p-4 border-b border-b-slate-500 ">
        Wishlist
      </h1>
      <div className="h-screen">
        {total > 0 ? (
          <div> you have {total} items in your wish list</div>
        ) : (
          <div className="text-lg p-4 m-5">
            You have no items in your wish list
          </div>
        )}
        <div>
          {wishListData.map((product) => (
            <div
              key={product.id}
              className="flex flex-row justify-between  w-full items-center  m-5 bg-inherit border-b border-gray-200 "
            >
              <Image
                width="1000"
                height="1000"
                className=" min-w-24 w-24 max-h-24 "
                src={`/${product.image}`}
                alt={product.image}
              />
              <div className="flex flex-col justify-center  items-start    leading-normal">
                <h5 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {product.name}
                </h5>
                <p className=" font-sm w-24 text-gray-400 dark:text-gray-400">
                  {product.description}
                </p>
              </div>
              <p className=" font-sans font-semibold text-lg  text-gray-700 dark:text-gray-400">
                ${product.price}
              </p>
              <BsCartPlus
                size={24}
                color={color ? "red" : undefined}
                onClick={() => setCart(product)}
              />
              <button
                className="mr-16 text-xl "
                onClick={() => removeWishList(product.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default WishList;
