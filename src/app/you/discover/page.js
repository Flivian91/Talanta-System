"use client";

import { useState } from "react";
import VideoCard from "@/Components/cards/VideoCard"; // or TalentCard if you prefer
import CartegorySection from "@/Components/sections/CartegorySection";

export default function DiscoverPage() {
  // Dummy categories
  const categories = [
    "Music",
    "Dance",
    "Comedy",
    "Art",
    "Sports",
    "Cooking",
    "Fashion",
    "Technology",
  ];

  // Sample talents or videos
  const allTalents = [
    {
      id: 1,
      title: "Vocal Showcase",
      channel: "Music Maestro",
      thumbnail: "https://via.placeholder.com/320x180?text=Music",
      hoverThumbnail:
        "https://via.placeholder.com/320x180/000000/ffffff?text=Playing...",
      views: "120K views",
      published: "1 week ago",
      category: "Music",
    },
    {
      id: 2,
      title: "Hip Hop Moves",
      channel: "Dance Academy",
      thumbnail: "https://via.placeholder.com/320x180?text=Dance",
      hoverThumbnail:
        "https://via.placeholder.com/320x180/000000/ffffff?text=Playing...",
      views: "200K views",
      published: "3 days ago",
      category: "Dance",
    },
    {
      id: 3,
      title: "Stand-Up Comedy",
      channel: "Comedy Club",
      thumbnail: "https://via.placeholder.com/320x180?text=Comedy",
      hoverThumbnail:
        "https://via.placeholder.com/320x180/000000/ffffff?text=Playing...",
      views: "500K views",
      published: "5 days ago",
      category: "Comedy",
    },
    {
      id: 4,
      title: "Street Art Showdown",
      channel: "Art Central",
      thumbnail: "https://via.placeholder.com/320x180?text=Art",
      hoverThumbnail:
        "https://via.placeholder.com/320x180/000000/ffffff?text=Playing...",
      views: "75K views",
      published: "1 week ago",
      category: "Art",
    },
    {
      id: 5,
      title: "Freestyle Football",
      channel: "Sports TV",
      thumbnail: "https://via.placeholder.com/320x180?text=Sports",
      hoverThumbnail:
        "https://via.placeholder.com/320x180/000000/ffffff?text=Playing...",
      views: "1.2M views",
      published: "2 days ago",
      category: "Sports",
    },
  ];

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter talents by selected category
  const filteredTalents =
    selectedCategory === "All"
      ? allTalents
      : allTalents.filter((talent) => talent.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Discover Talents</h1>

      {/* Category Selection */}
      <CartegorySection
        selectedCategory={selectedCategory}
        categories={categories}
        onSelectCategory={setSelectedCategory}
      />

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
  );
}
