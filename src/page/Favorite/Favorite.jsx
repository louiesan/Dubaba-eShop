import { useSelector, useDispatch } from "react-redux";
import { Ban, Heart, Plus, Star, X } from "lucide-react";
import { addToCart } from "../../appStore/cart/cartSlice";
import { addToFav } from "../../appStore/favorite/favoriteSlice";
import { heart } from "../../assets/image";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router";

const Carted = () =>
  toast(
    (t) => (
      <span className="flex gap-2.5 items-center">
        Item Added to cart
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
      icon: "✅",
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

const RemovedFav = () =>
  toast(
    (t) => (
      <span className="flex gap-2.5 items-center">
        Removed from Favorite
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
      duration: 3000,
      position: "top-center",
      icon: "ℹ️",
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },

      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },

      removeDelay: 3000,

      toasterId: "default",
    }
  );
const Faved = () =>
  toast(
    (t) => (
      <span className="flex gap-2.5 items-center">
        Item Added to Favorite
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
      duration: 3000,
      position: "top-center",
      icon: "❤️",
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },

      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },

      removeDelay: 3000,

      toasterId: "default",
    }
  );
export default function Favorites() {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favoriteReducer.favorite);
  function addTheItem(param) {
    const newItem = {
      id: param.id,
      img: param.thumbnail,
      title: param.title,
      price: param.price,
      quantity: 1,
    };
    dispatch(addToCart({ newItem, amount: 1 }));
  }
  return (
    <>
      <Toaster />
      {favorite && favorite.length > 0 ? (
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5 p-2.5 ">
          {favorite.map((e) => {
            const index = favorite.findIndex((ed) => ed.id === e.id);
            return (
              <div
                key={e.id}
                className="w-full h-full sm:w-full flex flex-row p-2.5 rounded-md bg-white/20 items-center border border-white drop-shadow-md drop-shadow-black"
              >
                <div className="flex justify-center items-center">
                  <img className="w-40" src={e.thumbnail} alt={e.title} />
                </div>
                <div className="w-full h-full flex flex-col gap-0.5 items-start justify-between">
                  <h1 className="font-bold font-[Sansation] text-2xl">
                    {e.title}
                  </h1>
                  <h5
                    className={`py-1.5 px-2.5 rounded-md ${
                      e.availabilityStatus === "In Stock"
                        ? "bg-green-400"
                        : "bg-red-400"
                    }`}
                  >
                    {e.availabilityStatus === "In Stock"
                      ? "Available"
                      : "Sold out"}
                  </h5>
                  {e.discountPercentage ? (
                    <p className="py-0.5 px-1.5 bg-rose-400 text-white rounded-full">
                      <strong>Promo:</strong>
                      {e.discountPercentage}%
                    </p>
                  ) : null}
                  <p className="w-full flex items-center justify-start">
                    {e.rating}
                    <Star size={18} color="yellow" fill="yellow" />
                  </p>
                  <strong>{e.price}$</strong>
                  <div className="w-full h-fit flex flex-row justify-between items-center">
                    <button
                      onClick={() => {
                        Carted();
                        addTheItem(e);
                      }}
                      className={`overflow-hidden rounded-lg relative w-36 h-10 cursor-pointer flex items-center border ${
                        e.availabilityStatus === "In Stock"
                          ? "border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
                          : "pointer-events-none border-red-500 bg-red-500 group hover:bg-red-500 active:bg-red-500 active:border-red-500"
                      }`}
                    >
                      {e.availabilityStatus === "In Stock" ? (
                        <span className="text-gray-200 font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">
                          Add item
                        </span>
                      ) : (
                        <span className="text-black font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">
                          Sold Out
                        </span>
                      )}
                      {e.availabilityStatus === "In Stock" ? (
                        <span className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                          <Plus color="white" />
                        </span>
                      ) : (
                        <span className="absolute right-0 h-full w-10 rounded-lg bg-red-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                          <Ban />
                        </span>
                      )}
                    </button>
                    <button
                      onClick={() => {
                        index === -1 ? Faved() : RemovedFav();
                        dispatch(addToFav(e));
                      }}
                      className="cursor-pointer"
                    >
                      {index === -1 ? (
                        <Heart />
                      ) : (
                        <Heart color="red" fill="red" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Link to={"/Discover"} className="w-full h-fit">
          <div className="w-full h-fit flex flex-col items-center justify-start text-center ">
            <h1 className="text-xl capitalize sm:text-3xl font-bold font-['Inter'] text-black/50">
              Still Empty Go Save Some Items Click below
            </h1>
            <img className="w-3xs sm:w-xs" src={heart} alt="HeartWebp" />
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
