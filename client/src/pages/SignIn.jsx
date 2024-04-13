import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[80%] max-w-[400px] mx-auto">
        <h1 className="text-4xl font-semibold text-center font-gelasio mb-14">
          Sign in to continue
        </h1>

        <form>
          <input
            name="email"
            type="text"
            id="email"
            placeholder="Email"
            className="w-[100%] rounded-md px-5 bg-[#f3f3f6] border border-[#f3f3f6] focus:bg-transparent font-medium font-inter mb-3"
          />

          <input
            name="password"
            type="password"
            id="password"
            placeholder="Password"
            className="w-[100%] rounded-md px-5 bg-[#f3f3f6] border border-[#f3f3f6] focus:bg-transparent font-medium font-inter mb-4"
          />

          <button type="submit" className="bg-[#03aaff] w-[100%] rounded-md py-2 border border-[#03aaff] focus:bg-transparent font-medium font-inter text-white text-xl">
            Sign in
          </button>
        </form>

        <div className="flex items-center gap-3 mt-8 mb-5">
          <div className="w-full bg-gray-400 h-[1px]"></div>
          <p className="text-center text-base font-inter">or</p>
          <div className="w-full bg-gray-400 h-[1px]"></div>
        </div>

        <button className="border-2 w-full font-inter font-medium rounded-lg py-2 flex items-center gap-x-3 justify-center">
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>

        <p className="text-center mt-5">
          Have no acount?{" "}
          <Link to="/sign-up" className="underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
