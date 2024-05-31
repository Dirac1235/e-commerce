"use client";
import Link from "next/link";
import SideCart from "./sidecart";
import { useEffect, useState } from "react";
import Profile from "./profile";
import useMutation from "../../hooks/use-mutation";
import { deleteAuthentication } from "../../data/auth/authentications";
import { useCart } from "@app/client/data/state";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@app/client/data/globalState";
import { getWishList } from "@app/client/data/wishHandler";
export default function NavBar({ session, categories }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const searchQuery = useGlobalState((state) => state.searchQuery);
  const setSearchQuery = useGlobalState((state) => state.setSearchQuery);

  const change = useCart((state) => state.wishListLength);
  const [length, setLength] = useState(0);

  // const [searchQuery, setSearchQuery] = useState("")

  const route = useRouter();
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  const { isMutating, startMutation } = useMutation();
  const cartData = useCart((state) => state.cartProducts);

  //const wishListData = useCart((state) => state.wishListProducts);

  function setSearch(e) {
    setSearchQuery(e.target.value);
  }
  function handleClick() {
    route.push("/search");
  }
  useEffect(() => {
    const handleFavorite = async () => {
      const data = await getWishList();
      setLength(data.length);
    };
    handleFavorite();
  }, [change]);
  return (
    <nav className="  z-50 min-w-full flex flex-col  justify-between ">
      <div className="flex flex-row justify-between p-3 m-0 bg-orange-50 items-center w-full ">
        <div className="font-extrabold text-pink-950 font-openSans text-xl ">
          <Link href="/dashboard">SSECOMMERCE</Link>
        </div>
        <div className=" flex items-center justify-center   ">
          <input
            type="text"
            className=" bg-gray-200  text-base   border-slate-200  px-5 py-2 focus:outline-none"
            placeholder="Search..."
            value={searchQuery}
            name="searchQuery"
            onChange={(e) => setSearch(e)}
          />
          <select className=" bg-gray-200 text-gray-500 border-slate-200  text-base py-2 px-5   focus:outline-none">
            <option value="">All Category</option>
            {categories.map((data) => (
              <option key={data.id} value={data.id}>
                {" "}
                {data.name}
              </option>
            ))}
          </select>
          <button
            className="bg-pink-950 hover:bg-slate-900  text-white text-base font-bold px-5 py-2   focus:outline-none"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        <ul className="flex  font-thin text-xs px-5 space-x-5">
          <li
            onMouseEnter={toggleProfile}
            onMouseLeave={toggleProfile}
            className=" flex flex-col items-center justify-center cursor-pointer"
          >
            <Link href="/profile">
              <Profile user={session} />
            </Link>
          </li>

          <li className=" flex flex-col items-center justify-center cursor-pointer">
            <SideCart />
            {cartData && (
              <div className="absolute top-4 right-16 w-3 h-3 p-[0.4rem] rounded-full flex items-center justify-center bg-pink-800 text-white text-xs">
                {cartData.length}
              </div>
            )}
          </li>
          <li className=" flex flex-col items-center justify-center cursor-pointer">
            <Link href="/wishlist">
              <img src="/like.png" alt="user" className="h-[1.4rem]" />
            </Link>
            <div className="absolute top-4 right-6 w-3 h-3 p-[0.4rem] rounded-full flex items-center justify-center bg-pink-800 text-white text-xs">
              {length}
            </div>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between bg-pink-950 w-full flex-grow m-0  ">
        <div className="flex items-center capitalize ">
          <a
            href="/dashboard"
            className="text-white p-4 text-base font-semibold  hover:text-white hover:bg-slate-900 transition"
          >
            Home
          </a>
          <a
            href="/shop"
            className="text-white font-semibold text-base p-4 hover:text-white hover:bg-slate-800 transition"
          >
            Shop
          </a>
          <a
            href="/about"
            className="text-white font-semibold text-base p-4 hover:text-white hover:bg-slate-800 transition"
          >
            About us
          </a>
          <a
            href="/contact"
            className="text-white font-semibold text-base p-4   hover:text-white hover:bg-slate-800 transition"
          >
            Contact us
          </a>
        </div>
        {session.error ? (
          <div>
            <a
              href="/login"
              className="text-white font-semibold =text-base p-4 hover:text-white hover:bg-slate-900 transition"
            >
              Sign In
            </a>
            <a
              href="/register"
              className="text-white font-semibold =text-base p-4 hover:text-white hover:bg-slate-900 transition"
            >
              Sign Up
            </a>
          </div>
        ) : (
          <button
            className="text-white font-semibold =text-base px-6 hover:text-white hover:bg-slate-900 transition"
            onClick={() =>
              startMutation(async () => {
                await deleteAuthentication();
              })
            }
            disabled={isMutating}
          >
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
}
