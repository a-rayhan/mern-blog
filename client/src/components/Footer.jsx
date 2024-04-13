import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#001b28]">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center p-12">
        <div className="max-w-2xl mb-6">
          <Link to="/" className="flex items-center gap-x-3">
            <h1 className="text-white font-inter text-3xl font-bold hidden md:inline relative">
              digitalblogs <span className="text-sm font-normal absolute">©</span>
            </h1>
          </Link>
        </div>

        <div className="flex gap-4">
          <Link className="text-lg font-medium text-white">About us</Link>
          <Link className="text-lg font-medium text-white">Contact us</Link>
          <Link className="text-lg font-medium text-white">Projects</Link>
        </div>
      </div>
    </div>
  );
}
