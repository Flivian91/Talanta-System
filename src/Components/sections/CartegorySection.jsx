"use client"

function CartegorySection({onSelectCategory, selectedCategory, categories}) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {/* "All" Category */}
      <button
        onClick={() => onSelectCategory("All")}
        className={`px-4 py-2 rounded-full border transition
        ${
          selectedCategory === "All"
            ? "bg-red-600 text-white"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
        }`}
      >
        All
      </button>
 
      {/* Individual Categories */}
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-4 py-2 rounded-full border transition
          ${
            selectedCategory === cat
              ? "bg-secondary text-white"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CartegorySection;
