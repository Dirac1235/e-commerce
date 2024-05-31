"use client";
import { useCart } from "@app/client/data/state";
import { Button } from "@app/client/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@app/client/components/ui/table";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { reloadCart } from "@app/client/data/cartHandler";
function Cart() {
  const cartData = useCart((state) => state.cartProducts);
  const addAmount = useCart((state) => state.addProductAmount);
  const minusAmount = useCart((state) => state.minusProductAmount);
  const removefromCart = useCart((state) => state.removeFromCart);
  const [clicked, setClicked] = useState(false);
  const total = cartData
    .map((data) => data.price * data.quantity)
    .reduce((total, val) => total + val, 0);

  // function handleOperation (e, product) {

  //   if (e.target.name === '-'){
  //      minusAmount(product.id)
  //   }
  //   else {
  //     addAmount(product)
  //   }
  //   setClicked((prev) => !prev)

  // }
  return (
    <div className="container h-full ">
      <h1 className="text-5xl m-5 p-4 border-b border-b-slate-500">Cart</h1>
      <div className="grid gap-5  xl:grid-cols-2 lg:grid-cols-2md:px-20  ">
        <div>
          {cartData.length > 0 ? (
            <div> you have {cartData.length} items in your wish list</div>
          ) : (
            <div className="text-lg p-4 m-5">
              You have no items in your Cart
            </div>
          )}
          {cartData.map((product) => (
            <div
              key={product.id}
              className="flex  flex-col justify-between items-center m-5 bg-inherit shadow-md p-2 border-b border-gray-200   md:flex-row md:max-w-xl  sm:flex-row sm:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="flex flex-row ">
                <Image
                  width="1000"
                  height="1000"
                  className="object-cover w-full  max-w-32 rounded-t-lg max-h-32 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg sm:h-auto sm:w-48 sm:rounded-none sm:rounded-s-lg "
                  src={`/${product.image}`}
                  alt={product.image}
                />
                <div className="flex flex-col justify-center p-4 leading-normal">
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
                  name="-"
                  className="mr-3 text-gray-400 text-md"
                  // onClick={(e) => handleOperation(e, product)}
                  onClick={() => minusAmount(product.id)}
                >
                  -
                </button>
                <p className="text-lg  border px-5 py-2 rounded-lg font-semibold">
                  {product.quantity}
                </p>
                <button
                  name="+"
                  className="ml-3 text-gray-400 text-md"
                  // onClick={(e) => handleOperation(e, product)}
                  onClick={() => addAmount(product.id)}
                >
                  +
                </button>
              </div>
              <p className=" font-sans font-semibold text-lg  text-gray-700 dark:text-gray-400">
                ${product.price}
              </p>
              <button
                className="mx-5 text-xl"
                onClick={(e) => removefromCart(product.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>

        <div className="container h-screen">
          <p className="text-3xl ml-3 border-b-2 border-b-gray-400 rounded-t-md p-3 xl:mt-3 bg-blue-100">
            Order Summary
          </p>
          <Table>
            <TableCaption>
              <Link href="./checkout">
                <Button className="w-full bg-pink-950  h-full py-5">
                  Proceed To Checkout
                </Button>
              </Link>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-slate-800">data</TableHead>
                <TableHead className="text-center text-slate-800">
                  Amount
                </TableHead>
                <TableHead className="text-center text-slate-800">
                  Price
                </TableHead>
                <TableHead className="text-right text-slate-800">
                  Sub Total
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="p-40">
              {cartData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell className="font-medium text-md">
                    {data.name}
                  </TableCell>
                  <TableCell className="text-center font-semibold  text-slate-500">
                    {data.amount}
                  </TableCell>
                  <TableCell className="text-center font-semibold  text-slate-500">
                    {data.price.toPrecision(4)}
                  </TableCell>
                  <TableCell className="text-right font-semibold text-slate-500">
                    {data.quantity * data.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">
                  ${total.toPrecision(4)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
}
export default Cart;
