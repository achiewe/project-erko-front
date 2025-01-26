"use client";
import React from "react";
import Header from "../components/Header/Header";
import NavigationPages from "../components/Navigation/NavigationPages";

export default function page() {
  return (
    <div className="w-full h-full">
      <Header />
      <NavigationPages />
    </div>
  );
}
