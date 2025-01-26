"use client";
import Link from "next/link";
import React from "react";

export default function NavigationPages() {
  return (
    <nav aria-label="Main navigation" className="p-4">
      <ul className="flex flex-row gap-[20px] items-center">
        <li>
          <Link href="/erko" className="text-blue-500 hover:underline" />
          Erko
        </li>
        <li>
          <Link href="/jobs" className="text-blue-500 hover:underline" />
          Jobs
        </li>
        <li>
          <Link href="/game" className="text-blue-500 hover:underline" />
          Game
        </li>
      </ul>
    </nav>
  );
}
