import Link from "next/link";
import React from "react";

function Categories({ text = "" }) {

  return (
    <div
      className={` transition-all duration-300 flex justify-center items-center gap-3 px-2 py-1 bg-secondary  rounded hover:transform hover:-translate-y-1.5 hover:shadow-sm `}
    >
      <Link
        href={`/tag/${text}`}
        className=" text-center text-xs  font-semibold tracking-wider text-gray-100"
      >
        {text}
      </Link>
    </div>
  );
}

export default Categories;
