// src/app/page.js
import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import HomeLayoutGrid from "@/Components/layouts/HomeLayoutGrid";
import VideoGrid from "@/Components/layouts/VideoGrid";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 w-full z-30">
        <Header />
      </div>
      <HomeLayoutGrid />
    </div>
  );
}
