import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-black">
      <Navbar className="max-w-6xl mx-auto bg-black">
        <Link to="/" className="flex items-center gap-x-3">
          <div className="w-12 h-12 rounded-full bg-[#03aaff] flex items-center justify-center">
            <HiOutlineLightBulb className="text-4xl text-white" />
          </div>
          <h1 className="text-white font-inter text-2xl font-bold hidden md:inline">
            digitalblogs
          </h1>
        </Link>

        <Navbar.Collapse className="hidden lg:inline">
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/" className="font-inter text-base text-white">
              Home
            </Link>
          </Navbar.Link>

          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about" className="font-inter text-base text-white">
              About
            </Link>
          </Navbar.Link>

          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to="/projects" className="font-inter text-base text-white">
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>

        <div className="flex items-center gap-x-2 md:gap-x-5">
          <form className="relative">
            <input
              type="text"
              placeholder="Search by articles"
              className="pl-9 rounded-full placeholder:text-dark-grey font-inter font-medium hidden lg:inline border-2"
            />

            <div className="absolute top-[10px] left-2 hidden lg:inline">
              <AiOutlineSearch className="text-2xl cursor-pointer" />
            </div>
          </form>

          <div className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center hover:duration-100 cursor-pointer lg:hidden">
            <AiOutlineSearch className="text-xl" />
          </div>

          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="user" img={currentUser.profilePicture} rounded />
              }
            >
              <Link to={"/dashboard?tab=profile"}>
                <Dropdown.Item className="text-base font-medium font-inter">Profile</Dropdown.Item>
              </Link>

              <Dropdown.Divider />

              <Dropdown.Item className="text-base font-medium font-inter">Sign out</Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Header>
                <span className="block font-inter">
                  {currentUser.username}
                </span>
                <span className="block font-inter truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <button className="font-inter border-2 px-5 py-1 rounded-full border-[#03aaff] font-medium text-lg bg-[#03aaff] text-white duration-100">
                Sign In
              </button>
            </Link>
          )}

          <Navbar.Toggle className="bg-gray-100" />
        </div>

        <Navbar.Collapse className="md:hidden">
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/" className="font-inter text-base">
              Home
            </Link>
          </Navbar.Link>

          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about" className="font-inter text-base">
              About
            </Link>
          </Navbar.Link>

          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to="/projects" className="font-inter text-base">
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
