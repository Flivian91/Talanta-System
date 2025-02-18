"use client";
import { useState } from "react";
import Sidebar from "../Sidebar";
import VideoGrid from "./VideoGrid";

function HomeLayoutGrid() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <div className="flex flex-1">
        <Sidebar
          toogleSidebar={() => setSidebarOpen(!sidebarOpen)}
          sidebarOpen={sidebarOpen}
        />
        <main className={`min-h-min mt-18 ${sidebarOpen ? " ml-64 " : " ml-20 "}`}>
          <VideoGrid />
        </main>
      </div>
    </>
  );
}

export default HomeLayoutGrid;
