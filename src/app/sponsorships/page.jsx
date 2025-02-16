"use client";

import { motion } from "framer-motion";

export default function SponsorshipRequestsPage() {
  // Dummy sponsorship requests data (replace with API data later)
  const requests = [
    {
      id: 1,
      sponsorName: "Acme Corp",
      title: "Looking for Emerging Music Talent",
      description:
        "Acme Corp is interested in sponsoring upcoming electronic music artists. They offer a comprehensive package including equipment, studio time, and promotional support.",
      category: "Music",
      date: "2023-01-15",
    },
    {
      id: 2,
      sponsorName: "Global Dance Co.",
      title: "Dance Talent Sponsorship Opportunity",
      description:
        "Global Dance Co. seeks dynamic dancers for collaboration. The sponsorship includes training programs, performance opportunities, and financial support.",
      category: "Dance",
      date: "2023-02-01",
    },
    {
      id: 3,
      sponsorName: "Artistry Inc.",
      title: "Support for Visual Artists",
      description:
        "Artistry Inc. is looking to partner with innovative visual artists. The sponsorship covers art supplies, studio space, and exhibition opportunities.",
      category: "Art",
      date: "2023-02-10",
    },
    {
      id: 4,
      sponsorName: "Sports United",
      title: "Sponsorship for Aspiring Athletes",
      description:
        "Sports United is offering sponsorship to promising athletes across various sports. The package includes coaching, equipment, and exposure in competitions.",
      category: "Sports",
      date: "2023-03-05",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Sponsorship Requests
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.map((request) => (
          <motion.div
            key={request.id}
            className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition-shadow cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: request.id * 0.1 }}
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {request.title}
            </h2>
            <p className="text-gray-600 mt-2 line-clamp-3">
              {request.description}
            </p>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span>{request.sponsorName}</span>
              <span>{new Date(request.date).toLocaleDateString()}</span>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              View Details
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
