import CheckOutList from "@app/client/components/userComponents/cartList";
import CheckOutForm from "@app/client/components/userComponents/checkOutForm";
import { makeOrder } from "@app/client/data/order";
import { getUser } from "@app/client/data/user.data";
import Image from "next/image";

async function CheckOut() {
  const user = await getUser();
  

  return (
    <div className="grid gap-5 sm:px-10 lg:grid-cols-2 lg:px-20 h-full xl:px-22">
      <div className="px-4 pt-8">
        <CheckOutList />
      </div>
      <CheckOutForm user={user}/>
    </div>
  );
}
export default CheckOut;
