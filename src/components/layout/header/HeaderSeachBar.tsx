import { FaSearch } from "react-icons/fa";

export default function HeaderSearchBar() {
  return (
    <div className="flex items-center bg-white rounded-full overflow-hidden h-12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto border border-[#FAB700]">
      {/* Dropdown on the left with custom down arrow */}
      <div className="relative">
        <select
          className="px-3 py-1 h-full border-r border-[#6d6d6d] text-gray-800 bg-white rounded-l-full focus:outline-none transition-all duration-200 appearance-none pr-6 sm:pr-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <option>Chocolate</option>
          <option>Strawberry</option>
          <option>Vanilla</option>
        </select>

        {/* Custom down arrow */}
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </span>
      </div>

      {/* Search input */}
      <input
        type="text"
        placeholder="Enter your search keyword..."
        className="flex-1 px-3 py-1 h-full text-gray-800 bg-white focus:outline-none placeholder-gray-400"
        style={{ fontFamily: "'Inter', sans-serif" }}
      />

      {/* Search button */}
      <button className="bg-[#FAB700] px-6 py-1 h-full text-blue-900 hover:bg-yellow-500 flex items-center justify-center rounded-r-full transition-colors duration-200">
        <FaSearch className="text-blue-900 hover:text-blue-700" />
      </button>
    </div>
  );
}