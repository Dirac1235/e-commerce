"use client"
import { useGlobalState } from "@app/client/data/globalState";
import Image from "next/image";


function Search() {
  const products = useGlobalState((state) => state.products)
  const searchQuery = useGlobalState((state) => state.searchQuery)
  const newProducts = products.filter((product) => product.name.startsWith(searchQuery))
  return (
    <div className="grid grid-row-6">
      <div className="col-span-1 h-screen">first</div>
      <div className="col-start-2 col-span-5">
        {newProducts.map((product) => (
          <div
            key={product.id}
            className="flex  flex-col justify-between items-center m-5 bg-white border-b border-gray-200   md:flex-row md:max-w-xl  sm:flex-row sm:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className=" ">
              <Image
                width="1000"
                height="1000"
                className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg sm:h-auto sm:w-48 sm:rounded-none sm:rounded-s-lg "
                src={`/${product.image}`}
                alt={product.image}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-1 text-2xl font-bold tracking-tight text-slate-700 dark:text-white">
                  {product.name}
                </h5>
                <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
                  {product.description}
                </p>
              </div>
            </div>

            <div className=" ml-2 mr-10 flex flex-row justify-between items-center">
              <button
                className="mr-3 text-gray-400 text-md"
                onClick={() => minusAmount(product.id)}
              >
                -
              </button>
              <p className="text-lg  border px-5 py-2 rounded-lg font-semibold">
                {product.amount}
              </p>
              <button
                className="ml-3 text-gray-400 text-md"
                onClick={() => addAmount(product.id)}
              >
                +
              </button>
            </div>
            <p className=" font-sans font-semibold text-lg  text-gray-700 dark:text-gray-400">
              ${product.price}
            </p>
            <button
              className="ml-5 text-xl"
              onClick={() => removefromCart(product.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Search;
