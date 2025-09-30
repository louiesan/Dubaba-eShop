import { NavLink } from "react-router";
import {
  Search,
  Store,
  ShoppingBag,
  BadgeInfo,
  Contact,
  BookHeart,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { useState, useRef } from "react";
import useOutside from "./useOutside/useOutside";
import { useSelector } from "react-redux";

export default function NavBar() {
  const cart = useSelector((state) => state.cartReducer.cart);
  const [isOpen, setIsOpen] = useState(false);
  const menu = useRef(null);
  useOutside(menu, () => setIsOpen(false));
  return (
    <>
      <header className="hidden md:flex w-full h-20 p-2.5 gap-5 flex-row flex-nowrap items-center justify-between">
        <NavLink
          className={
            "font-bold font-[Sansation,_sans-serif] text-4xl text-gray-900"
          }
          to={"/"}
        >
          <h1>Dubaba</h1>
        </NavLink>

        <ul className="w-fit h-fit flex flex-row items-center justify-center gap-2.5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "text-gray-600 hover:translate-1 transition-all duration-500 ease-in-out"
            }
            to={"/"}
          >
            <li className="flex items-center gap-1.5 font-['Poppins',_sans-serif] font-[600] text-lg hover:text-black transition-all duration-500 ease-in-out">
              <Store size={19} /> Home
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "text-gray-600 hover:translate-1 transition-all duration-500 ease-in-out"
            }
            to={"/discover"}
          >
            <li className="flex items-center gap-1.5 font-['Poppins',_sans-serif] font-[600] text-lg hover:text-black transition-all duration-500 ease-in-out">
              <ShoppingBag size={19} /> Discover
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "text-gray-600 hover:translate-1 transition-all duration-500 ease-in-out"
            }
            to={"/about"}
          >
            <li className="flex gap-1.5 items-center font-['Poppins',_sans-serif] font-[600] text-lg hover:text-black transition-all duration-500 ease-in-out">
              <BadgeInfo size={19} /> About
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "text-gray-600 hover:translate-1 transition-all duration-500 ease-in-out"
            }
            to={"/contact"}
          >
            <li className="flex gap-1.5 items-center font-['Poppins',_sans-serif] font-[600] text-lg hover:text-black transition-all duration-500 ease-in-out">
              <Contact size={19} /> Contact
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "text-gray-600 hover:translate-1 transition-all duration-500 ease-in-out"
            }
            to={"/favorite"}
          >
            <li className="flex gap-1.5 items-center font-['Poppins',_sans-serif] font-[600] text-lg hover:text-black transition-all duration-500 ease-in-out">
              <BookHeart size={19} /> Favorites
            </li>
          </NavLink>
          <div>
            <NavLink className={`relative block `} to={"/cart"}>
              <div className="absolute content-['${cart.length}'] w-5 content-center h-5 rounded-full text-xs text-white -top-3 -right-2.5 bg-amber-300 z-[-1] text-center font-bold">
                {cart.length}
              </div>
              <ShoppingCart size={19} />
            </NavLink>
          </div>
        </ul>
      </header>
      <header className="md:hidden flex flex-col w-full h-fit  items-center gap-2.5">
        <div className="flex w-full h-fit p-2.5 justify-between items-center gap-2.5">
          <NavLink
            className={
              "font-bold font-[Sansation,_sans-serif] text-2xl text-gray-900"
            }
            to={"/"}
          >
            <h1>Dubaba</h1>
          </NavLink>
          <div className="w-fit flex justify-center items-center gap-2.5">
            {!isOpen ? (
              <Menu
                className="cursor-pointer"
                onClick={() => setIsOpen((pre) => !pre)}
                size={20}
              />
            ) : (
              <X
                className="cursor-pointer"
                onClick={() => setIsOpen((pre) => !pre)}
                size={20}
              />
            )}
            <NavLink className={`relative block `} to={"/cart"}>
              <div className="absolute content-['${cart.length}'] w-5 content-center h-5 rounded-full text-xs text-white -top-3 -right-2.5 bg-amber-300 z-[-1] text-center font-bold">
                {cart.length}
              </div>
              <ShoppingCart size={20} />
            </NavLink>
          </div>
        </div>
        {isOpen ? (
          <ul
            ref={menu}
            className="z-[99999999999999] transition-opacity py-1.5 bg-[#00000038] w-[90%] min-w-2xs rounded-lg flex flex-col items-start gap-2.5 px-2.5 fixed top-14 left-1/2 -translate-x-1/2 backdrop-blur-sm drop-shadow-sm drop-shadow-black"
          >
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-black"
                  : "text-white/60 hover:translate-x-1 transition-all duration-500 ease-in-out"
              }
              to={"/"}
            >
              <li className="flex items-center gap-1.5 font-['Poppins',_sans-serif] font-[600] text-lg hover:text-black transition-all duration-500 ease-in-out">
                <Store size={19} /> Home
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-black"
                  : "text-white/60 hover:translate-x-1 transition-all duration-500 ease-in-out"
              }
              to={"/discover"}
            >
              <li className="flex items-center gap-1.5 font-['Poppins',_sans-serif] font-[600] text-lg hover:text-black transition-all duration-500 ease-in-out">
                <ShoppingBag size={19} /> Discover
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-black"
                  : "text-white/60 hover:translate-x-1 transition-all duration-500 ease-in-out"
              }
              to={"/about"}
            >
              <li className="flex gap-1.5 items-center font-['Poppins',_sans-serif] font-[600] text-lg hover:text-black transition-all duration-500 ease-in-out">
                <BadgeInfo size={19} /> About
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-black"
                  : "text-white/60 hover:translate-x-1 transition-all duration-500 ease-in-out"
              }
              to={"/contact"}
            >
              <li className="flex gap-1.5 items-center font-['Poppins',_sans-serif] font-[600] text-lg hover:text-black transition-all duration-500 ease-in-out">
                <Contact size={19} /> Contact
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-black"
                  : "text-white/60 hover:translate-x-1 transition-all duration-500 ease-in-out"
              }
              to={"/favorite"}
            >
              <li className="flex gap-1.5 items-center font-['Poppins',_sans-serif] font-[600] text-lg hover:text-black transition-all duration-500 ease-in-out">
                <BookHeart size={19} /> Favorites
              </li>
            </NavLink>
          </ul>
        ) : null}{" "}
      </header>
    </>
  );
}
