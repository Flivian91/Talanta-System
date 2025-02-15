import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import { links } from "./Sidebar";
import Image from "next/image";

function MobileSidebar({ onClose }) {
  return (
    <div className="fixed top-0  z-50 w-64 min-h-screen bg-primary md:hidden">
      <div className="flex flex-col gap-0 ">
        <div className="flex justify-between items-center shadow px-4 py-1">
          {/* logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-red-600 font-bold text-lg"
          >
            <Image
              src="/talanta.svg"
              alt="Talanta logo"
              className="md:-mt-2 -ml-4"
              width={100}
              height={50}
            />
          </Link>
          {/* close button from react-icons */}
          <button
            onClick={onClose}
            className="text-gray-700 hover:bg-gray-200 p-2 rounded md:hidden"
          >
            <AiOutlineClose size={22} />
          </button>
        </div>
        <nav className="px-4 py-2">
          <ul className="flex flex-col gap-2">
            {links.map((link) => {
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"
                  >
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Tooltip
          id="sidebar-tooltip"
          place="right"
          effect="solid"
          className="bg-gray-800 text-white px-2 py-1 rounded z-40"
        />
      </div>
    </div>
  );
}

export default MobileSidebar;
