// src/Components/VideoCard.jsx
"use client"
import Link from "next/link";
import { useState } from "react";

export default function VideoCard({ video }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/watch/${video.id}`} className="block">
      <div
        className="bg-white rounded shadow overflow-hidden transform transition duration-300 hover:scale-105"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Video Thumbnail */}
        <div className="relative">
          <img
            src={hovered ? video.hoverThumbnail : video.thumbnail}
            alt={video.title}
            className="w-full h-48 object-cover"
          />
          {/* Hover effect (Play Icon) */}
          {hovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 9v6l5-3-5-3z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Video Details */}
        <div className="p-3">
          <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
          <p className="text-sm text-gray-600">{video.channel}</p>
          <p className="text-xs text-gray-500">{video.views} • {video.published}</p>
        </div>
      </div>
    </Link>
  );
}
