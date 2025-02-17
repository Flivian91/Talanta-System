"use client";
import { useState } from "react";
import Link from "next/link";
import {
  AiFillHome,
  AiOutlineFire,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineCloudUpload,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  MdSubscriptions,
  MdPlaylistAddCheck,
  MdNotifications,
  MdAttachMoney,
  MdExplore,
} from "react-icons/md";
import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";
import { Tooltip } from "react-tooltip";
import { useUser } from "@clerk/nextjs";
export const links = [
  { name: "Home", href: "/", icon: <AiFillHome size={24} /> },
  { name: "Trending", href: "/trending", icon: <AiOutlineFire size={24} /> },
  { name: "Discover", href: "/discover", icon: <MdExplore size={24} /> },
  // {
  //   name: "Subscriptions",
  //   href: "/subscriptions",
  //   icon: <MdSubscriptions size={24} />,
  // },
  // { name: "Me", href: "/profile", icon: <AiOutlineUser size={24} /> },
  // {
  //   name: "Saved Videos",
  //   href: "/saved",
  //   icon: <MdPlaylistAddCheck size={24} />,
  // },
  // {
  //   name: "Messages",
  //   href: "/messages",
  //   icon: <AiOutlineMessage size={24} />,
  // },
  // {
  //   name: "Upload Talent",
  //   href: "/upload",
  //   icon: <AiOutlineCloudUpload size={24} />,
  // },
  // {
  //   name: "Sponsorship Requests",
  //   href: "/sponsorships",
  //   icon: <MdAttachMoney size={24} />,
  // },
  // {
  //   name: "Notifications",
  //   href: "/notifications",
  //   icon: <MdNotifications size={24} />,
  // },
  // {
  //   name: "Settings",
  //   href: "/settings",
  //   icon: <AiOutlineSetting size={24} />,
  // },
];
export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { isSignedIn } = useUser();

  return (
    <aside
      className={`bg-gray-50 border-r transition-all duration-300 hidden md:block  ${
        sidebarOpen ? "w-64 lex items-center justify-center" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        {sidebarOpen && <h2 className="text-lg font-bold">Talanta</h2>}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-900 text-center text-xl hover:text-gray-600 p-2 hover:bg-gray-200 rounded"
          data-tooltip-id="sidebar-button"
          data-tooltip-content={sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        >
          {sidebarOpen ? <GoSidebarExpand /> : <GoSidebarCollapse />}
          <Tooltip
            id="sidebar-button"
            place="bottom"
            effect="solid"
            className="bg-gray-800 text-white px-2 py-1 rounded z-40"
          />
        </button>
      </div>
      <nav className="p-2">
        <ul className="space-y-2">
          {links.map((link) => (
            <li
              key={link.name}
              className={sidebarOpen ? "" : "flex justify-center"}
            >
              <Link
                href={link.href}
                data-tooltip-id="sidebar-tooltip"
                data-tooltip-content={sidebarOpen ? "" : link.name}
                className={
                  "flex items-center p-2 w-full text-gray-700 hover:bg-gray-200 rounded" +
                  (sidebarOpen
                    ? " flex-row "
                    : " flex-col gap-1 text-xs justify-center")
                }
              >
                {link.icon}
                <span className={sidebarOpen ? "ml-2" : ""}>{link.name}</span>
              </Link>
            </li>
          ))}
          {isSignedIn && (
            <li className={sidebarOpen ? "" : "flex justify-center"}>
              <Link
                href="/subscriptions"
                data-tooltip-id="sidebar-tooltip"
                data-tooltip-content={sidebarOpen ? "" : "Subscriptions"}
                className={
                  "flex items-center p-2 w-full text-gray-700 hover:bg-gray-200 rounded" +
                  (sidebarOpen
                    ? " flex-row "
                    : " flex-col gap-1 text-xs justify-center")
                }
              >
                <MdSubscriptions size={24} />
                <span className={sidebarOpen ? "ml-2" : ""}>Subscriptions</span>
              </Link>
            </li>
          )}
          {isSignedIn && (
            <li className={sidebarOpen ? "" : "flex justify-center"}>
              <Link
                href="/profile"
                data-tooltip-id="sidebar-tooltip"
                data-tooltip-content={sidebarOpen ? "" : "Profile"}
                className={
                  "flex items-center p-2 w-full text-gray-700 hover:bg-gray-200 rounded" +
                  (sidebarOpen
                    ? " flex-row "
                    : " flex-col gap-1 text-xs justify-center")
                }
              >
                <AiOutlineUser size={24} />
                <span className={sidebarOpen ? "ml-2" : ""}>Me</span>
              </Link>
            </li>
          )}
          {/* Saved Vedios */}
          {isSignedIn && (
            <li className={sidebarOpen ? "" : "flex justify-center"}>
              <Link
                href="/saved"
                data-tooltip-id="sidebar-tooltip"
                data-tooltip-content={sidebarOpen ? "" : "Saved Videos"}
                className={
                  "flex items-center p-2 w-full text-gray-700 hover:bg-gray-200 rounded" +
                  (sidebarOpen
                    ? " flex-row "
                    : " flex-col gap-1 text-xs justify-center")
                }
              >
                <MdPlaylistAddCheck size={24} />
                <span className={sidebarOpen ? "ml-2" : ""}>Saved Videos</span>
              </Link>
            </li>
          )}
          {isSignedIn && (
            <li className={sidebarOpen ? "" : "flex justify-center"}>
              <Link
                href="/messages"
                data-tooltip-id="sidebar-tooltip"
                data-tooltip-content={sidebarOpen ? "" : "Messages"}
                className={
                  "flex items-center p-2 w-full text-gray-700 hover:bg-gray-200 rounded" +
                  (sidebarOpen
                    ? " flex-row "
                    : " flex-col gap-1 text-xs justify-center")
                }
              >
                <AiOutlineMessage size={24} />
                <span className={sidebarOpen ? "ml-2" : ""}>Messages</span>
              </Link>
            </li>
          )}
          {isSignedIn && (
            <li className={sidebarOpen ? "" : "flex justify-center"}>
              <Link
                href="/upload"
                data-tooltip-id="sidebar-tooltip"
                data-tooltip-content={sidebarOpen ? "" : "Upload Talent"}
                className={
                  "flex items-center p-2 w-full text-gray-700 hover:bg-gray-200 rounded" +
                  (sidebarOpen
                    ? " flex-row "
                    : " flex-col gap-1 text-xs justify-center")
                }
              >
                <AiOutlineCloudUpload size={24} />
                <span className={sidebarOpen ? "ml-2" : ""}>Upload Talent</span>
              </Link>
            </li>
          )}
          {isSignedIn && (
            <li className={sidebarOpen ? "" : "flex justify-center"}>
              <Link
                href="/sponsorships"
                data-tooltip-id="sidebar-tooltip"
                data-tooltip-content={sidebarOpen ? "" : "Sponsorship Requests"}
                className={
                  "flex items-center p-2 w-full text-gray-700 hover:bg-gray-200 rounded" +
                  (sidebarOpen
                    ? " flex-row "
                    : " flex-col gap-1 text-xs justify-center")
                }
              >
                <MdAttachMoney size={24} />
                <span className={sidebarOpen ? "ml-2" : ""}>
                  Sponsorship Requests
                </span>
              </Link>
            </li>
          )}
          {isSignedIn && (
            <li className={sidebarOpen ? "" : "flex justify-center"}>
              <Link
                href="/notifications"
                data-tooltip-id="sidebar-tooltip"
                data-tooltip-content={sidebarOpen ? "" : "Notifications"}
                className={
                  "flex items-center p-2 w-full text-gray-700 hover:bg-gray-200 rounded" +
                  (sidebarOpen
                    ? " flex-row "
                    : " flex-col gap-1 text-xs justify-center")
                }
              >
                <MdNotifications size={24} />
                <span className={sidebarOpen ? "ml-2" : ""}>Notifications</span>
              </Link>
            </li>
          )}
          {isSignedIn && (
            <li className={sidebarOpen ? "" : "flex justify-center"}>
              <Link
                href="/settings"
                data-tooltip-id="sidebar-tooltip"
                data-tooltip-content={sidebarOpen ? "" : "Settings"}
                className={
                  "flex items-center p-2 w-full text-gray-700 hover:bg-gray-200 rounded" +
                  (sidebarOpen
                    ? " flex-row "
                    : " flex-col gap-1 text-xs justify-center")
                }
              >
                <AiOutlineSetting size={24} />
                <span className={sidebarOpen ? "ml-2" : ""}>Settings</span>
              </Link>
            </li>
          )}
          {/* Add a sign in Button when the user is not sign in */}
          {!isSignedIn && (
            <li className={sidebarOpen ? "" : "flex justify-center"}>
              <Link
                href="/auth?mode=signin"
                data-tooltip-id="sidebar-tooltip"
                data-tooltip-content={sidebarOpen ? "" : "Sign In"}
                className={
                  "flex items-center p-2 w-full text-gray-700 hover:bg-gray-200 rounded" +
                  (sidebarOpen
                    ? " flex-row "
                    : " flex-col gap-1 text-xs justify-center")
                }
              >
                <AiOutlineSetting size={24} />
                <span className={sidebarOpen ? "ml-2" : ""}>Sign In</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <Tooltip
        id="sidebar-tooltip"
        place="right"
        effect="solid"
        className="bg-gray-800 text-white px-2 py-1 rounded z-40"
      />
    </aside>
  );
}
