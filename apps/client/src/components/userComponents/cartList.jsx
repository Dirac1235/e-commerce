"use client";
import { useCart } from "@app/client/data/state";
import Image from "next/image";

function CheckOutList() {
  const cartData = useCart((state) => state.cartProducts);
  
  return (
    <>
      <p className="text-3xl font-medium">Order Summary</p>
      <p className="text-gray-500 border-b p-1 border-black py-3">
        Check your items.
      </p>
      <div className="mt-8 space-y-3   bg-inherit px-2 py-4 sm:px-6">
        {cartData.map((product) => (
          <div
            key={product.id}
            className="flex  flex-col justify-around items-center m-5 bg-inherit shadow-md p-2 border-b border-gray-200   md:flex-row md:max-w-xl  sm:flex-row sm:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex flex-row ">
              <Image
                width="1000"
                height="1000"
                className="object-cover w-full  max-w-32 rounded-t-lg max-h-32 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg sm:h-auto sm:w-48 sm:rounded-none sm:rounded-s-lg "
                src={`/${product.image}`}
                alt={product.image}
              />
              <div className="flex flex-col justify-center items-center p-4 leading-normal">
                <h5 className="mb-1 text-2xl font-bold tracking-tight text-slate-700 dark:text-white">
                  {product.name}
                </h5>
                <p className="mb-3 font-normal w-24 text-gray-400 dark:text-gray-400">
                  {product.description}
                </p>
              </div>
            </div>

            <div className=" ml-2 mr-10 flex flex-row justify-between items-center">
              <p className="text-lg    font-semibold">{product.amount}</p>
            </div>
            <p className=" font-sans font-semibold text-lg  text-gray-700 dark:text-gray-400">
              ${product.price}
            </p>
            <button
              className="mx-5 text-xl"
              onClick={() => removefromCart(product.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
export default CheckOutList;
