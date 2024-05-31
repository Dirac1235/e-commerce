"use client";
import { Button } from "../ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useCart } from "../../data/state";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";

export default function SideCart() {
  // const loadCart = useCart((state) => state.loadCart);
  // useEffect(() => {
  //   const fetchCartListData = async () => {
  //     try {
  //       const data = await getcartList();
  //       console.log(data)
  //       loadCart(data)
  //     } catch (error) {
  //       console.error("Error fetching Cart list data:", error);
  //     }
  //   };

  //   fetchCartListData();
  // }, []);

  const cartData = useCart((state) => state.cartProducts);
  console.log("cartData", cartData);
  const removeFromCart = useCart((state) => state.removeFromCart);
  function delCart(id) {
    removeFromCart(id);
  }

  return (
    <Sheet className="bg-[#fdfbf9] p-96">
      <SheetTrigger asChild>
        <div>
          <FaCartShopping size={22} />
        </div>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto bg-[#fff2df] w-96 ">
        <SheetHeader>
          <SheetTitle className="text-4xl border-b-2 border-b-slate-950 py-5">
            Cart
          </SheetTitle>
          <SheetDescription className=" mb-10 text-base border-b-2 border-b-black p-3">
            You have {cartData.length} item{cartData.length > 0 ? "s" : ""} in
            your cart
          </SheetDescription>
        </SheetHeader>
        {cartData.map((product) => {
          return (
            <div key={product.id}>
              <Card className="flex mt-10 border-b-2 pb-4 border-b-pink-950 shadow-xl bg-[#fff2de] flex-row overflow-y-auto w-full">
                <CardHeader className="flex flex-row">
                  <img
                    className="w-20 h-20 rounded-sm"
                    src={product.image}
                    alt=""
                  />
                  <div className="flex flex-col px-4">
                    <div className="flex flex-row items-center justify-between w-full">
                      <CardTitle className="text-base">
                        {product.name}
                      </CardTitle>
                      <button
                        onClick={() => delCart(product.id)}
                        className=" ml-36  mt-1"
                      >
                        X
                      </button>
                    </div>
                    <CardDescription className="text-sm">
                      {product.description}
                    </CardDescription>
                    <p className="text-xs">{product.price}</p>
                  </div>
                </CardHeader>
              </Card>
            </div>
          );
        })}

        <SheetFooter>
          <div className="flex flex-col items-center w-full m-5">
            <SheetClose asChild>
              <Link
                href="/cart"
                className=" flex m-3 border p-3 text-sm w-64 justify-center  text-slate-100 font-bold rounded-md bg-pink-950"
              >
                View Cart
              </Link>
            </SheetClose>
            <Button className="flex w-64 bg-pink-950">Checkout</Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
