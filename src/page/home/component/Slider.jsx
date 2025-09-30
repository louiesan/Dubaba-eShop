import { useEffect, useRef, useState } from "react";
import {
  clothesBundle,
  furniture,
  grocerybag,
  groceryProd,
  lappptop,
  makeup,
  makeupproduct,
  tshirt,
  tablet,
  techproduct,
  FurnitureBundle,
} from "../../../assets/image";

const dummyJson = [
  {
    title: "Grocery",
    para: "Checkout our Grocery",
    img: groceryProd,
    search: "Grocery",
  },
  {
    title: "Technology",
    para: "See our latest Tech Product!",
    img: techproduct,
    search: "Technology",
  },
  {
    title: "Clothes",
    para: "Don't Miss Our Promo Clothes",
    img: clothesBundle,
    search: "Clothes",
  },
  {
    title: "Furniture",
    para: "Search for decors, Welcome Sir",
    img: FurnitureBundle,
    search: "Furniture",
  },
];

export default function Slider() {
  const [slide, setSlide] = useState(0);
  const slider = useRef(null);

  useEffect(() => {
    startSlider();

    return () => clearInterval(slider.current);
  }, []);

  const startSlider = () => {
    clearInterval(slider.current);

    slider.current = setInterval(
      () => setSlide((prev) => (prev !== dummyJson.length - 1 ? prev + 1 : 0)),
      2000
    );
  };
  const pauseSlider = () => {
    clearInterval(slider.current);
  };

  return (
    <div
      onMouseLeave={() => startSlider()}
      onMouseEnter={() => pauseSlider()}
      className="w-[90%] h-[calc(100vh-90px)] overflow-hidden bg-gradient-to-br from-gray-300 to-gray-700 rounded-lg"
    >
      {dummyJson.map((e, i) => (
        <div
          key={i}
          className={`${
            slide !== i ? "hidden opacity-0" : "flex animate-fadeIn"
          } h-full flex-row justify-between items-center transition-all ease-in-out duration-300`}
        >
          <div className="w-fit h-full flex flex-col items-start justify-center gap-2.5">
            <span className="text-black font-bold text-sm lowercase font-['fredoka']">
              Looking for:
            </span>
            <h1 className="text-4xl font-bold uppercase">{e.title}</h1>
            <h1>{e.para}</h1>
          </div>
          <div className="w-fit h-full">
            <img className="w-80" src={e.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}
