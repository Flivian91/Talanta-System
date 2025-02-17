import { SignUp } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div className="max-w-md mx-auto my-8 p-4 border rounded shadow">
      <SignUp />
    </div>
  );
}

export default page;
