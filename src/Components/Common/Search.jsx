import React from "react";
import { FiSearch } from "react-icons/fi";

function Search() {

    const iconStyle = {
        stroke: 'black', // Replace 'red' with your desired outline color
      };
  return (
    <div className="relative flex items-center rounded-full bg-green-400">
      <input
        type="text"
        placeholder="Search"
        className="pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
      />

      <button
        type="submit"
        className="absolute left-0 px-3 py-2 rounded-l-md text-white focus:outline-none"
      >
        <FiSearch size={20} style={iconStyle}/>
      </button>
    </div>
  );
}

export default Search;
