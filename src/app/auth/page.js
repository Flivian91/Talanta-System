// app/auth/page.js
import { Suspense } from "react";
import AuthContent from "./AuthContent";
import Spinner from "@/Components/Spinner";

export default function AuthPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <AuthContent />
    </Suspense>
  );
}
