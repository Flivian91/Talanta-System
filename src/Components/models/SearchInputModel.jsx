import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

function SearchInputModel({ onClose }) {
  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2  w-full border overflow-hidden  md:w-1/2 z-50 rounded-lg shadow-md">
      {/* Search Area */}
      <div className="bg-white w-full py-2 px-6 flex items-center gap-2 md:gap-4">
        <button>
          <AiOutlineSearch size={20} />
        </button>
        <input
          type="text"
          placeholder="Search Talents"
          className="flex-1 w-full text-lg px-2 py-0 border-none outline-none focus:outline-none"
        />
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <FaTimes />
        </button>
      </div>
      {/* Suggestion results Area */}
    </div>
  );
}

export default SearchInputModel;
