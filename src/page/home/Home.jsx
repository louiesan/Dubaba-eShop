import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategory,
  fetchStore,
} from "../../appStore/products/productSlice";
import { Link, useNavigate } from "react-router";
// import Slider from "./component/Slider";
import Searcher from "./component/Search";
import { useEffect, useState } from "react";
import {
  clothesBundle,
  furniture,
  lappptop,
  makeup,
  makeupproduct,
  tshirt,
  tablet,
  techproduct,
  FurnitureBundle,
  mooonset,
  grocerybag,
} from "../../assets/image";
import Slider from "react-slick";
import { Info, MoveRight } from "lucide-react";

const dummyJson = [
  {
    id: 1,
    name: "Makeup",
    img: makeupproduct,
    price: "60$",
    bg: "bg-green-500/20",
    showImg: makeup,
  },
  {
    id: 2,
    name: "Tech",
    img: techproduct,
    price: "350$",
    bg: "bg-indigo-500/20",
    showImg: tablet,
  },
  {
    id: 3,
    name: "Clothes",
    img: clothesBundle,
    price: "50$",
    bg: "bg-yellow-500/20",
    showImg: tshirt,
  },
  {
    id: 4,
    name: "Furniture",
    img: FurnitureBundle,
    price: "100$",
    bg: "bg-cyan-500/20",
    showImg: furniture,
  },
];

export default function Home() {
  const Navigate = useNavigate();
  const [heroImg, setHeroImg] = useState(lappptop);
  var settings = {
    dots: window.innerWidth >= 640 ? false : true,
    arrows: false,
    infinite: true,
    speed: 800,
    focusOnSelect: true,
    slidesToScroll: 1,
    slidesToShow: window.innerWidth >= 640 ? 3 : 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    // autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const dispatch = useDispatch();
  const preProduct = useSelector((state) => state.productReduce);
  console.log(preProduct);

  useEffect(() => {
    dispatch(fetchStore());
  }, []);

  return (
    <div className="w-full flex flex-col min-h-screen justify-start items-center h-fit">
      <div className="w-full h-fit flex items-center md:items-start justify-center flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col items-start gap-2.5">
          <h1 className="font-bold text-black px-2.5 text-xl sm:text-3xl md:text-5xl lg:text-6xl text-left font-['Poppins',_sans-serif]">
            GET WHAT YOU'RE LOOKING FOR
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-['Inter',_sans-serif] font-normal px-2.5">
            Our{" "}
            <span className="font-['Sansation',_sans-serif] font-bold">
              Dubaba
            </span>{" "}
            shop contains all item you need wether its{" "}
            <span className="italic text-gray-600">
              phones tablets pc even Grocery or Furnitures
            </span>
            , If you got anything on mind search it or Discover it below
          </p>
          <div className="w-full px-1.5 h-fit flex flex-row justify-center sm:justify-start gap-2.5 items-center">
            <Link to={"/Discover"}>
              {" "}
              <button className=" flex flex-row items-center text-white bg-amber-600 font-normal px-2.5 py-1.5 sm:font-medium gap-2.5 cursor-pointer h-fit sm:px-5 sm:py-2.5 rounded-4xl">
                See All <MoveRight />
              </button>
            </Link>
            <Link to={"/About"}>
              <button className="relative z-0 before:content-[''] before:z-[-1] before:w-0 hover:before:w-full before:h-full before:bg-black before:absolute before:left-0 before:rounded-4xl hover:text-white before:transition-all before:duration-300 before:ease-in-out hover:border-white transition-all duration-300 ease-in-out flex flex-row items-center bg-transparent text-black cursor-pointer gap-2.5 px-2.5 py-1.5 border border-black h-fit sm:px-5 sm:py-2.5 rounded-4xl">
                Learn More <Info />
              </button>
            </Link>
          </div>
        </div>
        <div
          className={`w-full md:w-1/2 h-96 flex items-center relative justify-center overflow-hidden`}
        >
          <img
            className="absolute opacity-50 -z-10 min-w-96 sm:w-[500px]"
            src={mooonset}
          />
          <img
            key={heroImg}
            className="animate-fadeIn w-[300px] md:w-80 lg:w-96 relative top-0 left-0 "
            src={heroImg}
            alt="laptop"
          />
        </div>
      </div>
      <div className="w-full h-fit flex-1">
        <Slider {...settings}>
          {dummyJson.map((e) => (
            <div className="thisSlide sm:max-w-96 bg-white rounded-xl p-4 shadow-md">
              <img
                src={e.img}
                alt={e.name}
                className="max-w-40 self-center hover:scale-110 transition-all ease-in-out duration-300 rounded-md mb-3 flex items-center justify-center"
              />
              <h5 className="font-semibold font-['Sansation'] text-xl">
                {e.name} Bundle
              </h5>
              <p className="text-gray-500 font-bold text-lg font-['Poppins']">
                {e.price}
              </p>
              <button
                onClick={() => setHeroImg(e.showImg)}
                className="relative cursor-pointer w-full py-1.5 px-2.5 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-md transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
              >
                Show
              </button>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full h-fit">
        <h1 className="font-bold font-['Sansation'] my-5 text-4xl text-center">
          Filter by categories:
        </h1>
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-2.5">
          <div className="w-full h-full flex flex-col gap-2.5">
            <div className="w-full h-full flex flex-col justify-between relative p-2.5 bg-gradient-to-br from-blue-300 via-red-400 to-indigo-400 rounded-md">
              <h1 className="text-2xl text-black font-bold font-['Poppins']">
                Tablets
              </h1>
              <img
                className="w-40 relative z-10 place-self-end "
                src={tablet}
                alt="Tablet"
              />
              <h4 className="absolute z-0 top-[20%] left-10 text-4xl text-white/80 uppercase font-bold ">
                Don't miss
              </h4>
              <h4 className="absolute z-0 top-[40%] left-10 text-4xl text-white/80 uppercase font-bold ">
                Your chance
              </h4>
              <button
                onClick={() => {
                  Navigate("/Discover");
                  dispatch(fetchCategory("tablets"));
                }}
                className="cursor-pointer px-2.5 py-1.5 bg-white/20 border border-white/10 drop-shadow-lg drop-shadow-black text-white rounded-md  hover:text-black hover:font-bold relative before:absolute before:w-0 hover:before:w-full before:h-full before:top-0 before:rounded-md before:transition-all before:duration-500 before:opacity-60 before:ease-in-out before:left-0 before:bg-size-[200%,_auto] before:bg-[linear-gradient(270deg,_#ff8a00,_#e52e71,_#ff8a00)] before:animate-glow before:z-[-1] before:contet-['']"
              >
                Shop By Category
              </button>
            </div>
            <div className="w-full h-full flex flex-col justify-between relative p-2.5 bg-gradient-to-br from-pink-200 via-sky-500 to-rose-400 rounded-md">
              <h1 className="text-2xl text-black font-bold font-['Poppins']">
                Laptops
              </h1>
              <img
                className="w-40 z-10 place-self-start "
                src={lappptop}
                alt="Laptop"
              />
              <h4 className="absolute z-0 top-[20%] right-10 text-4xl text-white/80 uppercase font-bold ">
                New Tech
              </h4>
              <h4 className="absolute z-0 top-[40%] right-10 text-4xl text-white/80 uppercase font-bold ">
                waiting !
              </h4>
              <button
                onClick={() => {
                  Navigate("/Discover");
                  dispatch(fetchCategory("laptops"));
                }}
                className="cursor-pointer px-2.5 py-1.5 bg-white/20 border border-white/10 drop-shadow-lg drop-shadow-black text-white rounded-md  hover:text-black hover:font-bold relative before:absolute before:w-0 hover:before:w-full before:h-full before:top-0 before:rounded-md before:transition-all before:duration-500 before:opacity-60 before:ease-in-out before:left-0 before:bg-size-[200%,_auto] before:bg-[linear-gradient(270deg,_#ff8a00,_#e52e71,_#ff8a00)] before:animate-glow before:z-[-1] before:contet-['']"
              >
                Shop By Category
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2.5 justify-center">
            <div className="w-full flex-1 h-fit flex flex-row flex-nowrap gap-2.5">
              <div className="w-full h-full relative p-2.5 bg-gradient-to-br from-pink-200 via-sky-500 to-rose-400 rounded-md">
                <h1 className="text-2xl text-black font-bold font-['Poppins']">
                  Make Up
                </h1>
                <img
                  className="w-40 z-10 place-self-start "
                  src={makeup}
                  alt="Laptop"
                />
                <button
                  onClick={() => {
                    Navigate("/Discover");
                    dispatch(fetchCategory("beauty"));
                  }}
                  className="cursor-pointer px-2.5 py-1.5 bg-white/20 border border-white/10 drop-shadow-lg drop-shadow-black text-white rounded-md  hover:text-black hover:font-bold relative before:absolute before:w-0 hover:before:w-full before:h-full before:top-0 before:rounded-md before:transition-all before:duration-500 before:opacity-60 before:ease-in-out before:left-0 before:bg-size-[200%,_auto] before:bg-[linear-gradient(270deg,_#ff8a00,_#e52e71,_#ff8a00)] before:animate-glow before:z-[-1] before:contet-['']"
                >
                  Shop By Category
                </button>
              </div>
              <div className="w-full h-full relative p-2.5 bg-gradient-to-br from-pink-200 via-sky-500 to-rose-400 rounded-md">
                <h1 className="text-2xl text-black font-bold font-['Poppins']">
                  Grocery
                </h1>
                <img
                  className="w-40 z-10 place-self-start "
                  src={grocerybag}
                  alt="Laptop"
                />
                <button
                  onClick={() => {
                    Navigate("/Discover");
                    dispatch(fetchCategory("groceries"));
                  }}
                  className="cursor-pointer px-2.5 py-1.5 bg-white/20 border border-white/10 drop-shadow-lg drop-shadow-black text-white rounded-md  hover:text-black hover:font-bold relative before:absolute before:w-0 hover:before:w-full before:h-full before:top-0 before:rounded-md before:transition-all before:duration-500 before:opacity-60 before:ease-in-out before:left-0 before:bg-size-[200%,_auto] before:bg-[linear-gradient(270deg,_#ff8a00,_#e52e71,_#ff8a00)] before:animate-glow before:z-[-1] before:contet-['']"
                >
                  Shop By Category
                </button>
              </div>
            </div>
            <div className="w-full h-fit flex-1 flex flex-row flex-nowrap gap-2.5">
              <div className="w-full h-full relative p-2.5 bg-gradient-to-br from-pink-200 via-sky-500 to-rose-400 rounded-md">
                <h1 className="text-2xl text-black font-bold font-['Poppins']">
                  Furniture
                </h1>
                <img
                  className="w-40 z-10 place-self-start "
                  src={furniture}
                  alt="Laptop"
                />
                <button
                  onClick={() => {
                    Navigate("/Discover");
                    dispatch(fetchCategory("furniture"));
                  }}
                  className="cursor-pointer px-2.5 py-1.5 bg-white/20 border border-white/10 drop-shadow-lg drop-shadow-black text-white rounded-md  hover:text-black hover:font-bold relative before:absolute before:w-0 hover:before:w-full before:h-full before:top-0 before:rounded-md before:transition-all before:duration-500 before:opacity-60 before:ease-in-out before:left-0 before:bg-size-[200%,_auto] before:bg-[linear-gradient(270deg,_#ff8a00,_#e52e71,_#ff8a00)] before:animate-glow before:z-[-1] before:contet-['']"
                >
                  Shop By Category
                </button>
              </div>
              <div className="w-full h-full relative p-2.5 bg-gradient-to-br from-pink-200 via-sky-500 to-rose-400 rounded-md">
                <h1 className="text-2xl text-black font-bold font-['Poppins']">
                  Clothes
                </h1>
                <img
                  className="w-40 z-10 place-self-start "
                  src={clothesBundle}
                  alt="Laptop"
                />
                <button
                  onClick={() => {
                    Navigate("/Discover");
                    dispatch(fetchCategory("mens-shirts"));
                  }}
                  className="cursor-pointer px-2.5 py-1.5 bg-white/20 border border-white/10 drop-shadow-lg drop-shadow-black text-white rounded-md  hover:text-black hover:font-bold relative before:absolute before:w-0 hover:before:w-full before:h-full before:top-0 before:rounded-md before:transition-all before:duration-500 before:opacity-60 before:ease-in-out before:left-0 before:bg-size-[200%,_auto] before:bg-[linear-gradient(270deg,_#ff8a00,_#e52e71,_#ff8a00)] before:animate-glow before:z-[-1] before:contet-['']"
                >
                  Shop By Category
                </button>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
}
