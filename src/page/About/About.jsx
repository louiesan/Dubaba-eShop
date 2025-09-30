import { ClipboardClock, ShirtIcon, Truck, Undo2 } from "lucide-react";
import React from "react";
import { Link } from "react-router";
export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="w-fit h-fit p-2.5">
        <h1 className="w-fit py-1.5 mx-1 text-xl sm:text-3xl md:text-5xl font-bold text-black font-['Sansation'] border-b-2 border-b-black">
          Why DUBABA?
        </h1>
        <p className="text-sm sm:text-lg p-2.5">
          At{" "}
          <span className="font-['Sansation',_sans-serif] font-bold">
            Dubaba
          </span>
          , we believe that finding quality products for your home and life
          should be{" "}
          <span className="italic text-gray-800 font-medium">
            effortless, inspiring, and accessible to all .
          </span>{" "}
          We started with a simple observation: the joy of creating a space you
          love is often overshadowed by the hassle of crowded stores,
          overwhelming choices, and inconsistent quality.
        </p>{" "}
      </div>
      <div className="w-fit h-fit p-2.5">
        <h2 className="text-2xl font-bold">Our Mission</h2>
        <p class="text-sm sm:text-lg p-2.5">
          We want to make shopping simple and delightful. From honest product
          descriptions to caring after-sales support — Dubaba was built around
          trust and convenience. We handpick items to ensure you spend less time
          searching and more time enjoying.
        </p>{" "}
        <div className="flex flex-row flex-wrap items-center justify-around gap-2.5">
          <div className="w-[250px] h-fit  p-2.5 flex flex-col items-center justify-center gap-2.5 cursor-pointer hover:scale-105 hover:-translate-y-1.5 bg-white rounded-md border  border-black shadow-black shadow-[0px_1px_10px_0px_black] transition-all duration-500 ease-in-out">
            <Truck color="black" size={30} />
            <h4 className="text-xl font-bold font-['Sansation'] text-black">
              Fast/Free Delivery
            </h4>
            <p className="font-semibold text-gray-800 text-center text-sm">
              Local partners for speed and trust.
            </p>
          </div>
          <div className="w-[250px] h-fit  p-2.5 flex flex-col items-center justify-center gap-2.5 cursor-pointer hover:scale-105 hover:-translate-y-1.5 bg-white rounded-md border  border-black shadow-black shadow-[0px_1px_10px_0px_black] transition-all duration-500 ease-in-out">
            <ShirtIcon color="black" size={30} />
            <h4 className="text-xl font-bold font-['Sansation'] text-black">
              Quality/Quantity
            </h4>
            <p className="font-semibold text-gray-800 text-center text-sm">
              Only trusted suppliers.
            </p>
          </div>
          <div className="w-[250px] h-fit  p-2.5 flex flex-col items-center justify-center gap-2.5 cursor-pointer hover:scale-105 hover:-translate-y-1.5 bg-white rounded-md border  border-black shadow-black shadow-[0px_1px_10px_0px_black] transition-all duration-500 ease-in-out">
            <ClipboardClock color="black" size={30} />
            <h4 className="text-xl font-bold font-['Sansation'] text-black">
              Full Working Time
            </h4>
            <p className="font-semibold text-gray-800 text-center text-sm">
              Serive 24/h For you.
            </p>
          </div>
          <div className="w-[250px] h-fit  p-2.5 flex flex-col items-center justify-center gap-2.5 cursor-pointer hover:scale-105 hover:-translate-y-1.5 bg-white rounded-md border  border-black shadow-black shadow-[0px_1px_10px_0px_black] transition-all duration-500 ease-in-out">
            <Undo2 color="black" size={30} />
            <h4 className="text-xl font-bold font-['Sansation'] text-black">
              Easy Returns
            </h4>
            <p className="font-semibold text-gray-800 text-center text-sm">
              Hassle-free and clear.
            </p>
          </div>
        </div>
      </div>
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h3 className="text-xl font-bold">
            Have a question or a partnership?
          </h3>
          <p className="mt-3 text-gray-600">
            We’d love to hear from you. Click below to reach our contact page.
          </p>

          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-5 py-3 rounded-full font-semibold shadow-md transition-all"
            >
              Go to Contact
            </Link>
          </div>
        </div>
      </section>
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
    </main>
  );
}
