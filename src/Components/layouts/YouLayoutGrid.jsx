"use client";
import { useState } from "react";
import Sidebar from "../Sidebar";

function YouLayoutGrid({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <div className="">
        <Sidebar
          toogleSidebar={() => setSidebarOpen(!sidebarOpen)}
          sidebarOpen={sidebarOpen}
        />
      </div>
      <main
        className={`min-h-min mt-16 ${sidebarOpen ? " ml-64 " : " ml-20 "}`}
      >
        {children}
      </main>
    </>
  );
}

export default YouLayoutGrid;
