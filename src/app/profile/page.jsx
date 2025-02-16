"use client";

import { useUser, UserButton, UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  const { user, isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-700">Please sign in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4 flex items-center justify-between sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
        <UserButton
          appearance={{
            elements: {
              userButtonTrigger: "rounded-full bg-gray-200 hover:bg-gray-300 p-1",
              userButtonDropdown: "bg-white shadow-lg rounded-lg p-4",
              userButtonDropdownItem: "hover:bg-gray-100 text-gray-800",
            },
          }}
        />
      </header>

      {/* Profile Content */}
      <main className="container mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* User Information */}
          <div className="flex items-center space-x-6">
            <img
              src={user.profileImageUrl}
              alt="User Avatar"
              className="w-24 h-24 rounded-full object-cover border"
            />
            <div>
              <h2 className="text-3xl font-semibold text-gray-800">{user.fullName}</h2>
              <p className="text-gray-600">{user.primaryEmailAddress.emailAddress}</p>
            </div>
          </div>

          {/* Optional: Additional Profile Information */}
          <div className="mt-8">
            {/* You can either build a custom profile form here or embed Clerk's UserProfile component */}
            <UserProfile appearance={{ elements: { rootBox: "p-0" } }} />
          </div>
        </div>
      </main>
    </div>
  );
}
