"use client";
import React from "react";
import { NavItem } from "./NavItem";

export default function NavigationPages() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-row items-center">
        <NavItem href="/erko" label="ERKO" />
        <NavItem href="/jobs" label="Jobs" />
        <NavItem href="/game" label="Game" />
      </ul>
    </nav>
  );
}
