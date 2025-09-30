import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";
import { cart } from "../../assets/image";

import {
  addToCart,
  decrement,
  removeCart,
} from "../../appStore/cart/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import { X } from "lucide-react";

const Removed = () =>
  toast(
    (t) => (
      <span className="flex gap-2.5 items-center">
        Item Has been removed
        <button
          className="w-5 cursor-pointer"
          onClick={() => toast.dismiss(t.id)}
        >
          <X />
        </button>
      </span>
    ),
    {
      className: "flex flex-row items-center justify-around gap-2.5",
      duration: 4000,
      position: "top-center",
      icon: "🗑️",
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },

      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },

      removeDelay: 4000,

      toasterId: "default",
    }
  );
export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const total = useSelector((state) => state.cartReducer.totalAmount);
  const totalQuantity = useSelector((state) =>
    state.cartReducer.cart.reduce((acc, next) => acc + next.quantity, 0)
  );
  const [value, setValue] = useState(1);
  console.log(cart, total, totalQuantity);

  return (
    <>
      <Toaster />
      {cart && cart.length > 0 ? (
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 justify-start items-center gap-2.5 p-2.5">
          <div className="w-full h-full flex flex-row flex-wrap gap-2.5 justify-center md:justify-start items-center">
            {cart.map((e) => (
              <div
                key={e.id}
                className="w-fit h-96 max-h-96 max-w-[180px] p-2.5 bg-white/20 border border-black/20 drop-shadow-md drop-shadow-gray-800 flex flex-col items-center justify-between"
              >
                <img
                  className="w-40 h-fit hover:scale-110 transition-all ease-in-out duration-300"
                  src={e.img}
                  alt={e.title}
                />
                <h1 className="w-full h-fit font-['Sansation'] font-bold text-lg text-center">
                  {e.title}
                </h1>
                <h2 className="w-full h-fit font-['Poppins'] font-bold text-lg">
                  <strong>Price:</strong> {e.price}$
                </h2>
                <h5 className="w-full h-fit font-['Poppins'] font-normal text-lg">
                  <strong>Quantity:</strong> {e.quantity}
                </h5>
                <div className="w-full h-fit flex flex-row gap-2.5 justify-center items-center font-['Sansation']">
                  <button
                    onClick={() => {
                      dispatch(decrement({ newItem: e, amount: value }));
                    }}
                    className="text-white font-medium text-lg font-['fredoka'] w-10 h-10 rounded-md content-center text-center bg-white/40 drop-shadow-xs drop-shadow-black border border-white/40"
                  >
                    -
                  </button>
                  <input
                    onChange={(e) =>
                      e.target.value >= 1
                        ? setValue(e.target.value)
                        : setValue(1)
                    }
                    value={value}
                    min="1"
                    step={1}
                    className="w-10 h-10 rounded-md text-center outline-0 bg-white/40 drop-shadow-xs drop-shadow-black text-white"
                    type="number"
                  />
                  <button
                    onClick={() => {
                      dispatch(addToCart({ newItem: e, amount: value }));
                    }}
                    className="text-white font-medium text-lg font-['fredoka'] w-10 h-10 rounded-md content-center text-center bg-white/40 drop-shadow-xs drop-shadow-black border border-white/40"
                  >
                    +
                  </button>
                </div>
                <button
                  className="w-full h-fit py-0.5 cursor-pointer font-bold font-['Poppins'] rounded-md bg-red-400 text-black hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out"
                  onClick={() => {
                    dispatch(removeCart(e.id));
                    Removed();
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="w-full h-fit -order-1 md:order-none p-2.5 self-start flex flex-col items-center rounded-md gap-2.5 bg-white/20 border border-black/20 drop-shadow-md drop-shadow-black">
            <h1 className="text-black/70 text-left font-bold font-['Noto Sans'] border-b-2 border-white">
              Checkout Card:
            </h1>
            <div className="w-full h-fit flex flex-nowrap items-center justify-between border-b-2 border-white text-black/70">
              <h1 className="font-bold font-['Sansation'] text-2xl">
                Total Quantity
              </h1>
              <h1 className="text-xl font-['Poppins']">{totalQuantity}</h1>
            </div>
            <div className="w-full h-fit flex flex-nowrap items-center justify-between border-b-2 border-white text-black/70">
              <h1 className="font-bold font-['Sansation'] text-2xl">
                Total Amount
              </h1>
              <h1 className="text-xl font-['Poppins']">{total.toFixed(2)}$</h1>
            </div>
            <button
              onClick={() => setHeroImg(e.showImg)}
              className="relative cursor-pointer w-[90%] py-1.5 px-2.5 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-md transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-green-300 active:text-white active:bg-green-400 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
            >
              Complete Paying
            </button>
          </div>
        </div>
      ) : (
        <Link to={"/Discover"} className="w-full h-fit">
          <div className="w-full h-fit flex flex-col items-center justify-start text-center ">
            <h1 className="text-xl capitalize sm:text-3xl font-bold font-['Inter'] text-black/50">
              Still Empty Go Add Some Items Click below
            </h1>
            <img className="w-3xs sm:w-xs" src={cart} alt="HeartWebp" />
          </div>
        </Link>
      )}
      <footer className="w-full h-fit my-2.5 text-center">
        &copy;Copyright{" "}
        <Link
          className="font-['Sansation'] font-bold text-xl text-center hover:text-blue-400 transition-all duration-300 ease-in-out"
          to={"/"}
        >
          DUBABA
        </Link>{" "}
        2030 All reserved
      </footer>
    </>
  );
}
