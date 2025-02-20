// src/Components/VideoGrid.jsx
"use client";
import { useState } from "react";
import VideoCard from "../cards/VideoCard";
import CartegorySection from "../sections/CartegorySection";
import { categories } from "../data/categories";
import useFilteredTalents from "@/hooks/useFilteredTalents";
import { allTalents } from "../data/talents";

export default function VideoGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredTalents = useFilteredTalents(allTalents, selectedCategory);
  return (
    <div className="px-4  flex flex-col gap-4">
      <h1 className="text-xl md:text-3xl font-bold mb-4">Recommended Talents</h1>
      {/* Category Selection */}
      <CartegorySection
        selectedCategory={selectedCategory}
        categories={categories}
        onSelectCategory={setSelectedCategory}
      />
      <div>
        {/* Grid of Talents */}
        {filteredTalents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredTalents.map((talent) => (
              <VideoCard key={talent.id} video={talent} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No talents found in this category.</p>
        )}
      </div>
    </div>
  );
}
