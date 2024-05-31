"use client";
import { makeOrder } from "@app/client/data/order";
import { useCart } from "@app/client/data/state";
import useMutation from "@app/client/hooks/use-mutation";
import Image from "next/image";
import { useRouter } from "next/navigation";

function CheckOutForm({ user }) {
  const clearCart = useCart((state) => state.clearCart)
  const { isMutating, startMutation } = useMutation();
  const cartData = useCart((state) => state.cartProducts);
  const route = useRouter()
  // console.log(cartData)
  const total = cartData
    .map((data) => data.price)
    .reduce((total, val) => total + val, 0);
  function handleClick() {
    const newData = cartData.map(({ id, quantity }) => ({
      productId: id,
      quantity,
    }));
    startMutation(async () => {
      console.log("The data", newData)
      const res = await makeOrder(newData);
      console.log({ res });
      if (res.error) {
        alert(JSON.stringify(res.error));
        return;
      }
      route.push(res.data.checkout_url);
      
    });
    clearCart()
  }
  return (
    <div className="mt-10 px-4 pt-8 lg:mt-0">
      <p className="text-3xl font-medium">Payment Details</p>
      <p className="text-black py-3">
        Complete your order by providing your payment details.
      </p>
      <div className=" ">
        <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
          Email
        </label>
        <div className="flex flex-row border-b-2 border-b-gray-200 items-center">
          <Image width="20" height="20" src="/icons/mail.png" />
          <input
            type="text"
            id="email"
            name="email"
            className="w-full pl-3 py-3 bg-inherit text-sm outline-none focus:z-1 focus:z-10 focus:border-b-2 focus:border-b-blue-500 hover:border-b-blue-500"
            placeholder="example@gmail.com"
            value={user.email}
            disabled
          />
        </div>
        <label htmlFor="fullName" className="mt-4 mb-2 block text-sm font-medium">
          Full Name
        </label>
        <div className="flex flex-row items-center border-b-2 border-gray-200 ">
          <Image
            className="h-7 focus:border-b-blue-200"
            width="24"
            height="5"
            src="/icons/person.png"
          />
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={user.firstName + " " + user.lastName}
            className="w-full px-4 py-3 pl-3 text-sm bg-inherit  outline-none focus:z-10 focus:border-b-2 focus:border-b-blue-500 hover:border-b-blue-500"
            placeholder="Full name here"
            disabled={true}
          />
        </div>

        <label
          htmlFor="billing-address"
          className="mt-4 mb-2 block text-sm font-medium"
        >
          Billing Address
        </label>
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-row items-center sm:w-7/12  border-b border-b-gray-200">
            <Image
              className="h-6 focus:border-b-blue-200 "
              width="24"
              height="51"
              src="/icons/address.png"
            />
            <input
              type="text"
              id="billing-address"
              name="billing-address"
              className="w-full  border-b border-b-gray-200 bg-inherit px-4 py-3 pl-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500"
              placeholder="Street Address"
            />
          </div>
          <select
            type="text"
            name="billing-state"
            className="w-full  border-b border-b-gray-200 bg-inherit px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-b-blue-500 focus:ring-blue-500"
          >
            <option value="State">State</option>
          </select>
          <input
            type="text"
            name="billing-zip"
            className="flex-shrink-0 border-b border-b-gray-200 bg-inherit px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-b-blue-500 focus:ring-blue-500"
            placeholder="ZIP"
          />
        </div>

        <div className="mt-6 border-t border-b py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Subtotal</p>
            <p className="font-semibold text-gray-900">
              ${total.toPrecision(4)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Shipping</p>
            <p className="font-semibold text-gray-900">$0.00</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Total</p>
          <p className="text-2xl font-semibold text-gray-900">
            ${total.toPrecision(4)}
          </p>
        </div>
      </div>
      <button
        className="mt-4 mb-8 w-full rounded-md bg-pink-950 px-6 py-3 font-medium text-white"
        onClick={() => handleClick()}
        disabled={isMutating}
      >
        Place Order
      </button>
    </div>
  );
}
export default CheckOutForm;
