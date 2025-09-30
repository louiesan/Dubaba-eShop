import { Search } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../../../appStore/products/productSlice";

export default function Searcher() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(fetchSearch(search));
      }}
      className="w-fit relative"
    >
      <Search className="absolute right-1.5 top-1.5" />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-2.5 py-1.5 rounded-md bg-white/20 items-center border border-white drop-shadow-md drop-shadow-black outline-0 placeholder:text-gray-800 transition-all ease-in-out duration-500"
        placeholder="Search..."
        type="text"
      />
    </form>
  );
}
