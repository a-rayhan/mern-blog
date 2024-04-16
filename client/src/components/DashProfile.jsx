import React from "react";
import { useSelector } from "react-redux";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-8 text-center text-3xl font-bold font-inter">
        Profile
      </h1>

      <form className="flex flex-col">
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full mb-8">
          <img
            src={currentUser.profilePicture}
            alt="profile photo"
            className="w-full h-full rounded-full border-8 border-gray-200 object-cover"
          />
        </div>

        <input
          name="username"
          type="text"
          id="username"
          placeholder="Username"
          defaultValue={currentUser.username}
          className="w-[100%] rounded-md px-5 bg-[#f3f3f6] border border-[#f3f3f6] focus:bg-transparent font-inter mb-3"
        />

        <input
          name="email"
          type="text"
          id="email"
          placeholder="Email"
          defaultValue={currentUser.email}
          className="w-[100%] rounded-md px-5 bg-[#f3f3f6] border border-[#f3f3f6] focus:bg-transparent font-inter mb-3"
        />

        <input
          name="password"
          type="password"
          id="password"
          placeholder="Password"
          className="w-[100%] rounded-md px-5 bg-[#f3f3f6] border border-[#f3f3f6] focus:bg-transparent font-inter mb-4"
        />

        <button
          type="submit"
          className="bg-[#03aaff] w-[100%] rounded-md py-2 border border-[#03aaff] font-medium font-inter text-white text-xl"
        >
          Update
        </button>
      </form>

      <div className="flex justify-between text-base font-inter font-medium my-5 px-1 text-red-500">
        <button className="cursor-pointer">Delete Account</button>
        <button className="cursor-pointer">Sign Out</button>
      </div>
    </div>
  );
}
