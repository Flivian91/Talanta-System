// app/auth/AuthContent.js
"use client";

import { SignIn, SignUp } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function AuthContent() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "signin";

  return (
    <div className="max-w-md mx-auto my-8 p-4 border rounded shadow">
      {mode === "signup" ? <SignUp /> : <SignIn />}
    </div>
  );
}
