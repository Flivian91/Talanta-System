import { AiOutlineSearch } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

import SearchResultsCard from "../cards/SearchResultsCard";

function SearchInputModel({ onClose }) {
  return (
    <div className="fixed top-20 left-1/2 transform px-3 -translate-x-1/2 bg-white  w-full border overflow-hidden  md:w-1/2 z-50 rounded-lg shadow-md">
      {/* Search Area */}
      <div className="bg-white w-full py-4 px-6 flex items-center border-b gap-2 md:gap-4">
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
      <div className="flex flex-col transition-all duration-300 gap-2 ">
        <SearchResultsCard />
        <SearchResultsCard />
        <SearchResultsCard />
        <SearchResultsCard />
        <SearchResultsCard />
      </div>
    </div>
  );
}

export default SearchInputModel;
