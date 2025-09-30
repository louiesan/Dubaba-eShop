import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import {
  fetchCategory,
  fetchMore,
  fetchStore,
  getCategories,
  showLess,
} from "../../appStore/products/productSlice";
import Searcher from "../home/component/Search";
import { Ban, Filter, Heart, ListRestart, Plus, Star, X } from "lucide-react";
import { addToCart } from "../../appStore/cart/cartSlice";
import { addToFav } from "../../appStore/favorite/favoriteSlice";

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

export default function Discover() {
  const items = useSelector((state) => state.productReduce.products);
  const categories = useSelector((state) => state.productReduce.categories);
  const status = useSelector((state) => state.productReduce.status);
  const error = useSelector((state) => state.productReduce.err);
  const favorite = useSelector((state) => state.favoriteReducer.favorite);
  console.log(favorite);
  const skip = useRef(0);
  const dispatch = useDispatch();
  const [slug, setSlug] = useState(null);
  const [showCat, setShowCat] = useState(false);
  console.log(items);
  useEffect(() => {
    if (items && items.length > 0) return;
    dispatch(fetchStore());
    dispatch(getCategories());
  }, []);

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

  if (error) return <div>Error Occured 404 X|</div>;
  return (
    <>
      <Toaster />
      <div className="w-full min-h-screen flex flex-col items-center justify-start">
        {status === "loading" ? (
          <div className="w-full h-fit">
            <div className="w-full h-fit flex flex-col items-center justify-start text-center ">
              <h1 className="text-xl capitalize sm:text-3xl font-bold font-['Inter'] text-black/50">
                Loading...
              </h1>
              <DotLottieReact
                src="https://lottie.host/838cab6e-80a4-4dc1-9f58-bcd8fb92183f/z5vGmPYLjc.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        ) : (
          <>
            <div className="w-full h-fit relative flex flex-row items-center justify-between px-2.5">
              <Filter
                size={24}
                className="w-[50px] h-[50px] p-2.5 cursor-pointer rounded-md bg-white/20 items-center border border-white drop-shadow-md drop-shadow-black"
                onClick={() => setShowCat(true)}
              />
              {showCat ? (
                <ul className="animate-fadeIn z-[99999999999999] transition-opacity py-5 bg-[#00000038] w-[90%] min-w-2xs rounded-lg flex flex-col items-center justify-center gap-2.5 px-2.5  absolute top-14 left-1/2 -translate-x-1/2 backdrop-blur-sm drop-shadow-sm drop-shadow-black">
                  <div className="w-full h-fit flex flex-row justify-between items-center px-2.5">
                    <X
                      onClick={() => setShowCat(false)}
                      className="w-fit cursor-pointer bg-white/20 rounded-sm"
                    />
                    {slug && (
                      <ListRestart
                        onClick={() => {
                          setSlug("");
                          dispatch(fetchStore());
                        }}
                        className="w-fit cursor-pointer bg-white/20 rounded-sm"
                      />
                    )}
                  </div>
                  <div className="w-full h-fit flex flex-row flex-wrap gap-2.5 items-center justify-center">
                    {categories.map((e) => (
                      <li
                        key={e.slug}
                        onClick={() => {
                          setSlug(e.slug);
                          dispatch(fetchCategory(e.slug));
                          setShowCat(false);
                        }}
                        className={`cursor-pointer w-[200px] py-1.5 px-2.5 border transition-all duration-500 ease-in-out ${
                          e.slug === slug
                            ? "bg-amber-400/40 text-amber-100 border-amber-100"
                            : "bg-white/40 border-white text-white"
                        } rounded-md text-center font-semibold`}
                      >
                        {e.name}
                      </li>
                    ))}
                  </div>
                </ul>
              ) : null}
              <Searcher />
            </div>
            <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2.5 gap-2.5">
              {items && items.length > 0 ? (
                items.map((e) => {
                  const index = favorite.findIndex((ed) => ed.id === e.id);
                  return (
                    <div
                      key={e.id}
                      className="w-full h-full flex flex-col p-2.5 rounded-md bg-white/20 items-center border border-white drop-shadow-md drop-shadow-black"
                    >
                      <div className="flex justify-center items-center">
                        <img className="w-40" src={e.thumbnail} alt={e.title} />
                      </div>
                      <div className="w-full h-full flex flex-col gap-0.5 items-start justify-between">
                        <h1 className="font-bold font-[Sansation] text-2xl">
                          {e.title}
                        </h1>
                        {e.brand && (
                          <h3>
                            <strong>Brand:</strong>
                            {e.brand}
                          </h3>
                        )}
                        <h4>
                          <strong>Tags:</strong>
                          {e.tags.join(",")}
                        </h4>
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
                })
              ) : (
                <div className="w-full col-span-4 h-fit flex flex-col items-center justify-start text-center ">
                  <h1 className="text-xl capitalize sm:text-3xl font-bold font-['Inter'] text-black/50">
                    Could not Found The Item
                  </h1>
                  <DotLottieReact
                    src="https://lottie.host/2d36a7f6-80aa-4993-a803-dffaf94be115/RcdQkIa7IU.lottie"
                    loop
                    autoplay
                  />
                </div>
              )}
            </div>
            <div className="w-full h-fit flex justify-between items-center">
              {skip.current < 9 && items.length != 0 && (
                <button
                  onClick={() => {
                    skip.current++;
                    dispatch(fetchMore(skip.current));
                  }}
                  className="w-fit px-5 py-2.5 text-center font-bold bg-black/40 border border-white/40 cursor-pointer rounded-md"
                >
                  Show More
                </button>
              )}
              {skip.current >= 1 && (
                <button
                  onClick={() => {
                    dispatch(showLess(skip.current));
                    skip.current--;
                  }}
                  className="w-fit px-5 py-2.5 text-center font-bold bg-black/40 border border-white/40 cursor-pointer rounded-md"
                >
                  Show Less
                </button>
              )}
            </div>
          </>
        )}
      </div>
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
