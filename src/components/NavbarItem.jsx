"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  const SearchParams = useSearchParams();
  const genre = SearchParams.get("genre");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </Suspense>
  );
};

export default NavbarItem;
