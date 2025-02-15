"use client"
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="hidden md:flex items-center border border-gray-300 rounded-full overflow-hidden w-[40%]">
      <input
        type="text"
        className="flex-1 px-4 py-1 focus:outline-none focus:border-none placeholder:font-mono font-mono caret-secondary border-none outline-none"
        placeholder="Search for Talents.."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="bg-gray-100 px-4 py-2 font-bold text-surface ">
        <AiOutlineSearch size={20} />
      </button>
    </div>
  );
}

export default SearchInput;
