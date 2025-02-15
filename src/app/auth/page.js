// app/auth/page.js
"use client"
import { SignIn, SignUp, RedirectToUserProfile } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function AuthPage() {
  const searchParams = useSearchParams();
  // Use a query parameter to toggle between sign in and sign up if desired
  const mode = searchParams.get("mode") || "signin";

  return (
    <div className="max-w-md mx-auto my-8 p-4 border rounded shadow">
      {mode === "signup" ? <SignUp /> : <SignIn />}
    </div>
  );
}
