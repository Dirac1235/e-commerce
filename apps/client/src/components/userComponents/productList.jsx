"use client";
import ProductCard from "./productCard";
import { useEffect } from "react";
import { useGlobalState } from "@app/client/data/globalState";
// import { useCart } from "@app/client/data/state";
// import { getcartList } from "@app/client/data/cartHandler";

const ProductsPage = ({ products }) => {
  const setProducts = useGlobalState((state) => state.setProducts);

  // const load = useCart((state) => state.loadCart)

  useEffect(() => {
    setProducts(products);
    // const handleLoad = async () => {
    //   const cart = await getcartList()
    //   load(cart)
    // }
    // handleLoad()

  });
  return (
    <div className="   ">
      <h1 className="text-3xl text-pink-950 font-semibold p-10 ml-16 ">
        Latest Products
      </h1>

      <ul className="grid grid-cols-4 ml-24 align-middle gap-7 w-5/6  mb-3">
        {products.map((product) => (
          <li
            key={product.id}
            className=" flex flex-col w-fit ml-2 shadow-sm justify-center rounded-md "
          >
            <ProductCard product={product} width={"w-[19rem]"} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductsPage;
