// src/app/page.js
import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import VideoGrid from "@/Components/layouts/VideoGrid";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Overlay */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <VideoGrid />
        </main>
      </div>
    </div>
  );
}
