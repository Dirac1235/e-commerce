import ProductsPage from "../../../components/userComponents/productList";
import { getManyProducts } from "../../../data/product.data";
import Carousel from "../../../components/userComponents/DemoSlider";
import Image from "next/image";

const products = await getManyProducts();
console.log(products)
export default function Page() {
  return (
    <main className="">
      <Carousel data={products} />
      <div className="my-10">
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
          <div className="border border-slate-900 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <Image width="1000" height="1000"
              src="/icons/delivery-van.svg"
              alt="Delivery"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">Free Shipping</h4>
              <p className="text-gray-500 text-sm">Order over $200</p>
            </div>
          </div>
          <div className="border border-slate-900 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <Image width="1000" height="1000"
              src="/icons/money-back.svg"
              alt="Delivery"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">Money Returns</h4>
              <p className="text-gray-500 text-sm">30 days money returs</p>
            </div>
          </div>
          <div className="border border-slate-900 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <Image width="1000" height="1000"
              src="/icons/service-hours.svg"
              alt="Delivery"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
              <p className="text-gray-500 text-sm">Customer support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <h2 className="text-2xl font-medium text-pink-950 uppercase mb-6">
          shop by category
        </h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="relative rounded-sm overflow-hidden group">
            <Image width="1000" height="1000" src="/furniture.jpg" alt="category 1" className="w-fit h-fit" />
            <a
              href="/shop"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              Furnitures
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image width="1000" height="1000" src="/vintage.webp" alt="category 1" className="w-fit" />
            <a
              href="/shop"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              Shoes
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image width="1000" height="1000" src="/men.jpg" alt="category 1" className="w-full" />
            <a
              href="/shop"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              Clothes
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image width="1000" height="1000" src="/phone.jpg" alt="category 1" className="w-full" />
            <a
              href="/shop"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              Phones
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image width="1000" height="1000" src="/acessories.jpg" alt="category 1" className="w-full" />
            <a
              href="/shop"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              Accesesories
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image width="1000" height="1000" src="/equipment.jpg" alt="category 1" className="w-full" />
            <a
              href="/shop"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              Equipment
            </a>
          </div>
        </div>
      </div>
      <ProductsPage products={products} />
      {/* <Cart /> */}
    </main>
  );
}
