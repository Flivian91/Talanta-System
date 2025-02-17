// src/Components/Header.jsx
"use client";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCloudUpload } from "react-icons/md";
import SearchInput from "./SearchInput";
import Logo from "./Logo";
import { useState } from "react";
import Overlay from "./Overlay";
import MobileSidebar from "./MobileSidebar";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <header className="flex items-center justify-between bg-white shadow px-4 py-3 sticky top-0 z-20">
        {/* Left Section: Sidebar Toggle + Logo */}
        <div className="flex items-center space-x-4">
          {/* Sidebar Toggle Button (Only for Mobile) */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-700 hover:bg-gray-100 p-2 rounded md:hidden inline-block"
          >
            <AiOutlineMenu size={24} />
          </button>

          <Logo />
        </div>
        {/* Middle Section: Search Bar */}
        <SearchInput />

        {/* Right Section: Navigation Links & Profile */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links (Hidden on Mobile) */}
          <nav className="hidden md:flex space-x-4">
            <Link
              href="/upload"
              className="flex items-center space-x-1 bg-secondary text-gray-200 hover:text-primary px-4 py-2  border rounded-full shadow"
            >
              <MdCloudUpload size={20} />
              <span>Upload</span>
            </Link>
          </nav>
          {/* User Profile (Clerk User Button) */}
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link
                href="/auth/signin"
                className="block-inline px-4 py-2 rounded-full border  text-base font-bold tracking-wider border-surface "
              >
                Sign In
              </Link>
            </SignedOut>
          </div>
        </div>
      </header>
      {/* Ovelay and Mobile menu */}
      {sidebarOpen && <MobileSidebar onClose={() => setSidebarOpen(false)} />}
      {sidebarOpen && <Overlay onClose={() => setSidebarOpen(false)} />}
    </div>
  );
}
