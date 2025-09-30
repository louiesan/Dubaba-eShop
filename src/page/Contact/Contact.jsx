import { Link } from "react-router";

export default function Contact() {
  return (
    <>
      <div className="w-full h-full bg-[url(/src/assets/bggse.webp)] bg-center bg-cover grid grid-cols-1 sm:grid-cols-2 items-start justify-center gap-6 p-6 bg-white/80 border border-gray-200 rounded-lg shadow-md">
        <div className="w-full h-full flex flex-col items-start justify-start">
          <h1 className="font-bold text-black text-3xl md:text-5xl lg:text-6xl font-['Sansation']">
            Looking for work?
          </h1>
          <h2 className="mt-2 font-semibold text-gray-800 text-xl md:text-3xl lg:text-4xl font-['Sansation']">
            We might help you
          </h2>
          <p className="mt-2 text-base md:text-lg text-gray-700 font-['Poppins']">
            Let’s get in touch
          </p>
        </div>

        <div className="w-full h-full bg-white/90 border border-gray-300 rounded-lg shadow-md p-5">
          <form
            className="w-full flex flex-col gap-4"
            onSubmit={() => console.log("submitted")}
          >
            <div className="flex flex-col-reverse">
              <input
                required
                className="w-full h-10 peer rounded-md bg-white border border-gray-400 outline-none px-2.5 placeholder:text-gray-500 placeholder:text-sm focus:border-black transition focus:placeholder:-translate-y-7 placeholder:transition-all placeholder:duration-500 placeholder:ease-in-out"
                placeholder="Full Name"
                type="text"
                id="fullName"
              />
              <label
                className="text-sm font-medium text-gray-600 pl-2.5 py-0.5 opacity-0 peer-focus:opacity-100 peer-focus:translate-y-0 transition-all duration-500 ease-in-out translate-y-7"
                htmlFor="fullName"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="flex flex-col-reverse">
              <input
                required
                className="w-full h-10 peer rounded-md bg-white border border-gray-400 outline-none px-2.5 placeholder:text-gray-500 placeholder:text-sm focus:border-black transition focus:placeholder:-translate-y-7 placeholder:transition-all placeholder:duration-500 placeholder:ease-in-out"
                placeholder="Email"
                type="email"
                id="email"
              />
              <label
                className="text-sm font-medium text-gray-600 pl-2.5 py-0.5 opacity-0 peer-focus:opacity-100 peer-focus:translate-y-0 transition-all duration-500 ease-in-out translate-y-7"
                htmlFor="email"
              >
                Email <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="flex flex-col-reverse">
              <input
                required
                className="w-full h-10 peer rounded-md bg-white border border-gray-400 outline-none px-2.5 placeholder:text-gray-500 placeholder:text-sm focus:border-black transition focus:placeholder:-translate-y-7 placeholder:transition-all placeholder:duration-500 placeholder:ease-in-out"
                placeholder="Phone Number"
                type="text"
                id="phone"
              />
              <label
                className="text-sm font-medium text-gray-600 pl-2.5 py-0.5 opacity-0 peer-focus:opacity-100 peer-focus:translate-y-0 transition-all duration-500 ease-in-out translate-y-7"
                htmlFor="phone"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="flex flex-col-reverse">
              <textarea
                className="w-full h-40 peer rounded-md bg-white border border-gray-400 outline-none py-2 px-2.5 placeholder:text-gray-500 placeholder:text-sm focus:border-black transition focus:placeholder:-translate-y-7 placeholder:transition-all placeholder:duration-500 placeholder:ease-in-out"
                placeholder="Message"
                id="message"
              ></textarea>
              <label
                className="text-sm font-medium text-gray-600 pl-2.5 py-0.5 opacity-0 peer-focus:opacity-100 peer-focus:translate-y-0 transition-all duration-500 ease-in-out translate-y-7"
                htmlFor="message"
              >
                Message <span className="text-red-500">*</span>
              </label>
            </div>

            <button
              type="submit"
              className="mt-3 cursor-pointer bg-black text-white font-bold px-5 py-2 rounded-md hover:bg-white hover:text-black border border-black transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="w-full text-center mt-6 text-gray-600">
        &copy; Copyright{" "}
        <Link
          className="font-['Sansation'] font-bold text-xl hover:text-black transition-all duration-500 ease-in-out"
          to={"/"}
        >
          DUBABA
        </Link>{" "}
        2030 All rights reserved
      </footer>
    </>
  );
}
